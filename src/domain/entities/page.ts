import type {
  PrimaryTemplate,
  QuarternaryTemplate,
  SecondaryTemplate,
  TertiaryTemplate
} from 'capivara-solidaria-ts-sdk'

export interface ColorPallete {
  deep: string
  original: string
  shade: string
  tint: string
  ultra_light: string
}

export type PageSections = PrimaryTemplate &
  SecondaryTemplate &
  TertiaryTemplate &
  QuarternaryTemplate

export type PageProps = {
  id: string
  color_pallete: ColorPallete
  main_color?: string
  order: string[]
  organization_id: string
  sections: PageSections
  updated_at?: string
}

export class Page {
  public readonly id: string
  public readonly color_pallete: ColorPallete
  public readonly main_color?: string
  public readonly order: string[]
  public readonly organization_id: string
  public readonly sections: PageSections
  public readonly updated_at?: string

  constructor(props: PageProps) {
    this.id = props.id
    this.color_pallete = props.color_pallete
    this.main_color = props.main_color
    this.order = props.order
    this.organization_id = props.organization_id
    this.sections = props.sections
    this.updated_at = props.updated_at
  }

  public hasCustomMainColor(): boolean {
    return Boolean(this.main_color)
  }

  public getSectionOrder(): string[] {
    return this.order
  }

  static fromPostgres(data: PageProps): Page {
    return new Page({ ...data })
  }
}
