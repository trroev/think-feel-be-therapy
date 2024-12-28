import { BackgroundColor } from "@/_types"

const backgroundColorMap: Record<
  BackgroundColor,
  string
  > = {
  brandPrimary: 'bg-brandPrimary',
  brandSecondary: 'bg-brandSecondary',
  brandTertiary: 'bg-brandTertiary',
  brandQuaternary: 'bg-brandQuaternary',
  transparent: 'bg-transparent',
}

const renderBackgroundColor = (color: string | null | undefined): string => {
  return backgroundColorMap[color as keyof typeof backgroundColorMap] || ''
}

export { renderBackgroundColor }