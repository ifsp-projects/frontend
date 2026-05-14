'use server'

import { account } from '@/instances/account'
import { admin } from '@/instances/admin'
import { instanceMotor } from '@/instances/motor'
import type { PostgresDesignTemplates } from '@/types/postgres/enums/postgres-design-template'
import type { PostgresOngType } from '@/types/postgres/enums/postgres-ong-types'
import { generateSlug } from '@/utils/helpers/generate-slug'

import type { OnboardingProfileData } from '../components/form/schema'

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
  formData: {
    email: string
    password: string
    confirmPassword: string
  }
): Promise<ActionResult> {
  const tokenValidation = await validateTokenAction(token)
  if (!tokenValidation.valid) {
    return {
      success: false,
      errors: { _root: 'This invite link is no longer valid.' }
    }
  }

  if (formData.confirmPassword === formData.password) {
    await account.auth.changePasswordAndLogin({
      invite_token: token,
      new_password: formData.password
    })
  }

  return { success: true }
}

export async function completeOnboardingAction(
  token: string,
  formData: OnboardingProfileData
): Promise<ActionResult> {
  const tokenValidation = await validateTokenAction(token)

  if (!tokenValidation.valid) {
    return {
      success: false,
      errors: { _root: 'Convite inválido ou expirado.' }
    }
  }

  const { organizationId } = tokenValidation

  const { data: created_organization_profile } =
    await instanceMotor.organizationProfiles.createOrganizationProfile({
      payload: {
        slug: generateSlug({ text: formData.name }),
        name: formData.name,
        ong_id: organizationId,
        ong_type: formData.ong_type as PostgresOngType,
        phone: formData.phone,
        design_template: formData.design_template as PostgresDesignTemplates,
        inviteToken: token,
        ong_description: formData.description,
        logo: 'https://static.vecteezy.com/ti/vetor-gratis/p1/19869277-ong-carta-logotipo-projeto-em-branco-fundo-ong-criativo-circulo-carta-logotipo-conceito-ong-carta-projeto-vetor.jpg'
      }
    })

  if (!created_organization_profile?.organizationProfile?.id) {
    return {
      success: false,
      errors: { _root: 'Erro ao criar perfil da ONG.' }
    }
  }

  await instanceMotor.addresses.createAddress({
    payload: {
      is_primary: true,
      city: formData.city,
      number: formData.number,
      organization_profile_id:
        created_organization_profile.organizationProfile.id,
      postal_code: formData.postal_code,
      state: formData.state,
      street: formData.street
    }
  })

  await admin.useInviteToken({ inviteToken: token })

  return { success: true }
}
