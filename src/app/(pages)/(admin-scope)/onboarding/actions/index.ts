'use server'

import { account } from '@/instances/account'
import { admin } from '@/instances/admin'
import { instanceMotor } from '@/instances/motor'
import { generateSlug } from '@/utils/helpers/generate-slug'

import {
  onboardingProfileSchema,
  resetPasswordSchema
} from '../components/form/schema'

type ActionResult<T = void> =
  | { success: true; data?: T }
  | { success: false; errors: Record<string, string[]> | { _root: string } }

export async function validateTokenAction(
  token: string
): Promise<
  | { valid: true; email: string; organizationId: string; reason?: string }
  | { valid: false; reason: 'not_found' | 'used' | 'cancelled' | 'expired' }
> {
  const { data: invite } = await admin.validateInviteToken({
    inviteToken: token
  })

  if (!invite) return { valid: false, reason: 'not_found' }

  return {
    valid: true,
    email: invite.email,
    organizationId: invite.organizationId
  }
}

export async function resetPasswordAction(
  token: string,
  _prevState: ActionResult,
  formData: FormData
): Promise<ActionResult> {
  const raw = {
    password: formData.get('password'),
    confirmPassword: formData.get('confirmPassword')
  }

  const parsed = resetPasswordSchema.safeParse(raw)
  if (!parsed.success) {
    return { success: false, errors: parsed.error.flatten().fieldErrors }
  }

  const tokenValidation = await validateTokenAction(token)
  if (!tokenValidation.valid) {
    return {
      success: false,
      errors: { _root: 'This invite link is no longer valid.' }
    }
  }

  if (parsed.data.confirmPassword === parsed.data.password) {
    await account.auth.changePasswordAndLogin({
      invite_token: token,
      new_password: parsed.data.password
    })
  }

  return { success: true }
}

export async function completeOnboardingAction(
  token: string,
  _prevState: ActionResult,
  formData: FormData
): Promise<ActionResult> {
  const raw = {
    name: formData.get('name'),
    phone: formData.get('phone'),
    description: formData.get('description'),
    street: formData.get('street'),
    number: formData.get('number'),
    city: formData.get('city'),
    state: formData.get('state'),
    postal_code: formData.get('postal_code'),
    ong_type: formData.get('ong_type'),
    design_template: formData.get('design_template'),
    slug: formData.get('slug')
  }

  const parsed = onboardingProfileSchema.safeParse(raw)
  if (!parsed.success) {
    return { success: false, errors: parsed.error.flatten().fieldErrors }
  }

  const { data } = await admin.getInviteByToken({ inviteToken: token })

  const {
    street,
    number,
    city,
    state,
    postal_code,
    phone,
    description,
    ong_type,
    name,
    design_template
  } = parsed.data

  await instanceMotor.addresses.createAddress({
    payload: {
      is_primary: true,
      city,
      number,
      organization_profile_id:
        data.inviteToken.organization?.organization_profile?.id,
      postal_code,
      state,
      street
    }
  })

  await instanceMotor.organizationProfiles.createOrganizationProfile({
    payload: {
      slug: generateSlug({ text: name }),
      name,
      ong_id: data.inviteToken.organization_id,
      ong_type,
      phone,
      design_template,
      inviteToken: token,
      ong_description: description
    }
  })

  await admin.useInviteToken({
    inviteToken: data.inviteToken.id
  })

  return { success: true }
}
