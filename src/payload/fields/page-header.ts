import { Field } from 'payload/types'
import { backgroundColor } from './background-color'

export const pageHeader: Field = {
  name: 'pageHeader',
  label: 'Page Header',
  interfaceName: 'PageHeaderFieldType',
  admin: {
    description:
      'The Page Header is NOT required. If you do not provide a heading or subheading, the Page Header will not be displayed.',
  },
  type: 'group',
  fields: [
    {
      name: 'heading',
      type: 'text',
    },
    {
      name: 'subheading',
      type: 'text',
    },
    backgroundColor,
  ],
}
