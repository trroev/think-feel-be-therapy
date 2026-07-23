export const BACKGROUND_COLOR_PALETTE = {
  'brand-primary': { className: 'bg-brand-primary', label: 'Teal' },
  'brand-secondary': { className: 'bg-brand-secondary', label: 'Green' },
  'brand-tertiary': { className: 'bg-brand-tertiary', label: 'Yellow' },
  'brand-quaternary': { className: 'bg-brand-quaternary', label: 'Orange' },
  transparent: { className: 'bg-transparent', label: 'None' },
} as const satisfies Record<string, { className: string; label: string }>

export type BackgroundColor = keyof typeof BACKGROUND_COLOR_PALETTE

export function mapBackgroundColor(
  color: BackgroundColor | null | undefined
): string {
  if (color && color in BACKGROUND_COLOR_PALETTE) {
    return BACKGROUND_COLOR_PALETTE[color].className
  }
  return BACKGROUND_COLOR_PALETTE.transparent.className
}
