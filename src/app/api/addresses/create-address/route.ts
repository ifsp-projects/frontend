import { type NextRequest, NextResponse } from 'next/server'

import { instanceMotor } from '@/instances/motor'

export const POST = async (req: NextRequest) => {
  try {
    const {
      organization_profile_id,
      postal_code,
      state,
      city,
      street,
      number,
      complement
    } = await req.json()

    if (!organization_profile_id) {
      return NextResponse.json(
        {
          message:
            'Não foi possível adicionar um novo endereço pois faltam informações!'
        },
        { status: 400 }
      )
    }

    const { error } = await instanceMotor.addresses.createAddress({
      payload: {
        city,
        number: number ? String(number) : '',
        complement,
        postal_code,
        state,
        street,
        is_primary: false,
        organization_profile_id: organization_profile_id
      }
    })

    if (error) {
      return NextResponse.json(
        { message: 'Erro! Não foi possível adicionar um novo endereço.' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      {
        message: 'Finalizado! Seu perfil está totalmente pronto.'
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
