import { type Field } from 'payload'

export const backgroundColor: Field = {
  name: 'backgroundColor',
  type: 'select',
  options: [
    {
      label: 'Teal',
      value: 'brandPrimary',
    },
    {
      label: 'Green',
      value: 'brandSecondary',
    },
    {
      label: 'Yellow',
      value: 'brandTertiary',
    },
    {
      label: 'Orange',
      value: 'brandQuaternary',
    },
    {
      label: 'None',
      value: 'transparent',
    },
  ],
}
