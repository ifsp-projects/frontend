import { type NextRequest, NextResponse } from 'next/server'

import { instanceMotor } from '@/instances/motor'

export const PATCH = async (req: NextRequest) => {
  try {
    const {
      ong_id,
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
      logo,
      description,
      addressId,
      slug
    } = await req.json()

    if (!ong_id || !slug) {
      return NextResponse.json(
        {
          message:
            'Não foi possível atualizar seu perfil pois faltam informações!'
        },
        { status: 400 }
      )
    }

    console.log(logo)

    const response =
      await instanceMotor.organizationProfiles.updateOrganizationProfile({
        payload: {
          logo,
          slug,
          ong_id,
          ong_type,
          phone,
          design_template,
          ong_description: description
        },
        token
      })

    if (response.status === 500) {
      return NextResponse.json(
        { message: 'Erro! Não foi possível atualizar seu perfil.' },
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
      if (!ong_id) {
        return NextResponse.json(
          {
            message:
              'ong_id é obrigatório quando informações de endereço são fornecidas!'
          },
          { status: 400 }
        )
      }

      const createdAddress = await instanceMotor.addresses.updateAddress({
        payload: {
          id: addressId,
          city,
          number: number ? number.toString() : '',
          complement,
          postal_code,
          state,
          street,
          is_primary: false,
          organization_profile_id: response?.data?.organization?.id
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
        message: 'Finalizado! Seu perfil está atualizado.',
        organizationProfile: response?.data?.organization
      },
      { status: 201 }
    )
  } catch (error) {
    console.error({
      'POST/api/organization-profiles/update-organization-profile':
        error.message
    })

    return NextResponse.json(
      { message: error.message },
      { status: error.statusCode }
    )
  }
}
