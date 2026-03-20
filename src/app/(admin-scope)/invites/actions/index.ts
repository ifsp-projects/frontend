'use server'

import { revalidatePath } from 'next/cache'
import { z } from 'zod'

import { instanceMotor } from '@/instances/motor'
import { Admin } from '@/services/admin'
import { getUserSession } from '@/utils/auth/get-user-session'
import { generateRandomNumber } from '@/utils/helpers/generate-random-number'

const admin = new Admin()

type ActionResult =
  | { success: true }
  | { success: false; errors: Record<string, string[]> | { _root: string } }

function rootError(message?: string): ActionResult {
  return {
    success: false,
    errors: { _root: message ?? 'Something went wrong. Try again.' }
  }
}

const sendInviteSchema = z.object({
  email: z.string().email('Invalid email address')
})

export async function sendInviteAction(
  _prevState: ActionResult,
  formData: FormData
): Promise<ActionResult> {
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
          is_user_new: true,
          password: String(generateRandomNumber(1000, 9999))
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

export async function resendInviteAction(
  inviteId: string
): Promise<ActionResult> {
  try {
    const user = await getUserSession()

    const response = await admin.regenerateAndResendInviteToken({
      token: user.accessToken,
      id: inviteId
    })

    if (
      'error' in response ||
      ('status' in response && response.status === 500)
    ) {
      return rootError(response.message)
    }

    revalidatePath('/invites')
    return { success: true }
  } catch {
    return rootError()
  }
}

export async function cancelInviteAction(
  inviteId: string
): Promise<ActionResult> {
  try {
    const user = await getUserSession()

    await admin.cancelPendingInvite({
      token: user.accessToken,
      id: inviteId
    })

    revalidatePath('/invites')
    return { success: true }
  } catch {
    return rootError()
  }
}
