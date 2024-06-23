import { Block } from 'payload/types'

export const MentayaWidget: Block = {
  slug: 'mentayaWidgetBlock',
  // imageURL: '/blocks/mentaya-widget-block.jpg',
  interfaceName: 'MentayaWidgetBlockType',
  labels: {
    singular: 'Mentaya Widget',
    plural: 'Mentaya Widgets',
  },
  fields: [
    {
      name: 'fullWidth',
      type: 'checkbox',
      admin: {
        description: 'Checking this will make the widget full width.',
      },
    },
  ],
}
