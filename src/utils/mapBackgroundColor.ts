import { match } from 'ts-pattern'

type BackgroundColor =
  | (
      | 'brand-primary'
      | 'brand-secondary'
      | 'brand-tertiary'
      | 'brand-quaternary'
      | 'transparent'
    )
  | null
  | undefined

export function mapBackgroundColor(color: BackgroundColor) {
  return match(color)
    .with('brand-primary', () => 'bg-brand-primary')
    .with('brand-secondary', () => 'bg-brand-secondary')
    .with('brand-tertiary', () => 'bg-brand-tertiary')
    .with('brand-quaternary', () => 'bg-brand-quaternary')
    .with('transparent', () => 'bg-transparent')
    .otherwise(() => 'bg-transparent')
}
