import { type NextRequest, NextResponse } from 'next/server'

import { instanceMotor } from '@/instances/motor'
import { generateSlug } from '@/utils/helpers/generate-slug'

export const POST = async (req: NextRequest) => {
  try {
    const {
      ong_id,
      ong_name,
      ong_type,
      phone,
      street,
      number,
      city,
      state,
      postal_code,
      complement,
      design_template,
      token,
      logo
    } = await req.json()

    if (!phone || !ong_type || !ong_name || !design_template) {
      return NextResponse.json(
        {
          message:
            'Não foi possível concluir o seu cadastro pois faltam informações!'
        },
        { status: 500 }
      )
    }

    const response =
      await instanceMotor.organizationProfiles.createOrganizationProfile({
        payload: {
          logo,
          ong_id,
          ong_type,
          phone,
          name: ong_name,
          design_template,
          slug: generateSlug({ text: ong_name })
        },
        token
      })

    if (response.status === 500) {
      return NextResponse.json(
        { message: 'Erro! Não foi possível criar seu perfil.' },
        { status: 500 }
      )
    }

    if (response.status === 409) {
      return NextResponse.json(
        { message: 'Erro! Sua organização não pode ter 2 perfis!' },
        { status: 409 }
      )
    }

    if (street || city || number || postal_code || complement || state) {
      const createdAddress = await instanceMotor.addresses.createAddress({
        payload: {
          city,
          number: number ? number.toString() : '',
          complement,
          postal_code,
          state,
          street,
          organization_profile_id: response?.data?.organizationProfile?.id
        },
        token
      })

      if (createdAddress.status === 500) {
        return NextResponse.json(
          { message: 'Erro! Não foi possível adicionar um novo endereço.' },
          { status: 500 }
        )
      }
    }

    return NextResponse.json(
      {
        message: 'Finalizado! Seu perfil está totalmente pronto.',
        organizationProfile: response?.data?.organizationProfile
      },
      { status: 201 }
    )
  } catch (error) {
    console.error({
      'POST/api/organization-profiles/create-organization-profile':
        error.message
    })

    return NextResponse.json(
      { message: error.message },
      { status: error.statusCode }
    )
  }
}
