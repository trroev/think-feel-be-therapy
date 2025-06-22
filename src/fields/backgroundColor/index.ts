import type { Field } from 'payload'

export const backgroundColorField: Field = {
  name: 'backgroundColor',
  type: 'select',
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
  defaultValue: 'brand-primary',
}
