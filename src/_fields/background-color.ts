import { BackgroundColor } from '@/_types'
import { SelectField } from 'payload'

const backgroundColorOptions: Record<
  BackgroundColor,
  string
  > = {
  brandPrimary: 'Teal',
  brandSecondary: 'Green',
  brandTertiary: 'Yellow',
  brandQuaternary: 'Orange',
  transparent: 'None',
}

const getBackgroundColorOptions = (): { label: string, value: string }[] => {
  return Object.entries(backgroundColorOptions).map(([value, label]) => ({
    label,
    value,
  }))
}

export const backgroundColor: SelectField = {
  name: 'backgroundColor',
  type: 'select',
  options: getBackgroundColorOptions(),
}
