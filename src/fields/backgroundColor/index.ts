import type { SelectField } from 'payload'
import { deepMerge } from 'payload'

type BackgroundColorField = (overrides?: Partial<SelectField>) => [SelectField]

export const backgroundColorField: BackgroundColorField = (overrides = {}) => {
  const field = deepMerge<SelectField>(
    {
      name: 'backgroundColor',
      type: 'select',
      defaultValue: 'brand-primary',
      options: [
        {
          label: 'Teal',
          value: 'brand-primary',
        },
        {
          label: 'Green',
          value: 'brand-secondary',
        },
        {
          label: 'Yellow',
          value: 'brand-tertiary',
        },
        {
          label: 'Orange',
          value: 'brand-quaternary',
        },
        {
          label: 'None',
          value: 'transparent',
        },
      ],
    },
    overrides
  )

  return [field]
}
