'use server'

import { account } from '@/services/account'

import { validateTokenAction } from '../validate-token'
import type { ActionResult } from './types'

export const resetPasswordAction = async (
  token: string,
  formData: {
    email: string
    password: string
    confirmPassword: string
  }
): Promise<ActionResult> => {
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
