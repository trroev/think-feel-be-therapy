import type { SelectField } from 'payload'
import { deepMerge } from 'payload'
import { BACKGROUND_COLOR_PALETTE } from '@/utils/mapBackgroundColor'

type BackgroundColorField = (overrides?: Partial<SelectField>) => [SelectField]

export const backgroundColorField: BackgroundColorField = (overrides = {}) => {
  const field = deepMerge<SelectField>(
    {
      name: 'backgroundColor',
      type: 'select',
      options: Object.entries(BACKGROUND_COLOR_PALETTE).map(
        ([value, { label }]) => ({ label, value })
      ),
    },
    overrides
  )

  return [field]
}
