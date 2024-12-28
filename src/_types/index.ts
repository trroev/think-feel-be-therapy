export interface Navigation {
  logo?: {
    alt: string
    url: string
  }
  navItems: {
    label: string
    link: string
  }[]
}

export type BackgroundColor = 'brandPrimary' | 'brandSecondary' | 'brandTertiary' | 'brandQuaternary' | 'transparent'