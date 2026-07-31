'use server'

import { revalidatePath } from 'next/cache'

import { getUserSession } from '@/features/auth/utils/get-user-session'
import { admin } from '@/services/admin'
import { instanceMotor } from '@/services/motor'

import { sendInviteSchema } from './schemas'
import type { ActionResult } from './types'

function rootError(message?: string): ActionResult {
  return {
    success: false,
    errors: { _root: message ?? 'Something went wrong. Try again.' }
  }
}

export const sendInviteAction = async (
  _prevState: ActionResult,
  formData: FormData
): Promise<ActionResult> => {
  const user = await getUserSession()

  const raw = {
    email: formData.get('email')
  }

  const parsed = sendInviteSchema.safeParse(raw)
  if (!parsed.success) {
    return { success: false, errors: parsed.error.flatten().fieldErrors }
  }

  const orgResponse = await instanceMotor.organizations.getOrganizationByEmail({
    email: parsed.data.email
  })

  if (!orgResponse) {
    const { data: created_organization } =
      await instanceMotor.organizations.createOrganization({
        payload: {
          account_status: 'inactive',
          email: parsed.data.email,
          role: 'member'
        },
        token: user.accessToken
      })

    try {
      await admin.createAndSendInviteToken({
        token: user.accessToken,
        email: parsed.data.email,
        organization_id: created_organization.organization.id
      })

      revalidatePath('/invites')
      return { success: true }
    } catch {
      return rootError()
    }
  }

  try {
    const { data } = orgResponse

    await admin.createAndSendInviteToken({
      token: user.accessToken,
      email: parsed.data.email,
      organization_id: data?.organization?.id
    })

    revalidatePath('/invites')
    return { success: true }
  } catch {
    return rootError()
  }
}
