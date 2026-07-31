'use server'

import type { OngCategory, TemplateType } from 'capivara-solidaria-ts-sdk'

import { admin } from '@/services/admin'
import { instanceMotor } from '@/services/motor'
import { generateSlug } from '@/shared/utils/helpers/generate-slug'

import type { OnboardingProfileData } from '../../components/onboarding/form/schema'
import { validateTokenAction } from '../validate-token'
import type { ActionResult } from './types'

export const completeOnboardingAction = async (
  token: string,
  formData: OnboardingProfileData
): Promise<ActionResult> => {
  const tokenValidation = await validateTokenAction(token)

  if (!tokenValidation.valid) {
    return {
      success: false,
      errors: { _root: 'Convite inválido ou expirado.' }
    }
  }

  const { organizationId } = tokenValidation

  console.log(JSON.stringify(formData))

  console.log('[debug]', {
    organizationId,
    slug: generateSlug({ text: formData.name })
  })

  const { data: created_organization_profile } =
    await instanceMotor.organizationProfiles.createOrganizationProfile({
      payload: {
        slug: generateSlug({ text: formData.name }),
        name: formData.name,
        ong_id: organizationId,
        ong_type: formData.ong_type as OngCategory,
        phone: formData.phone,
        design_template: formData.design_template as TemplateType,
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
