import { Block } from 'payload'

export const TextBlock: Block = {
  slug: 'textBlock',
  labels: {
    singular: 'Texto',
    plural: 'Textos',
  },
  fields: [
    {
      name: 'text',
      type: 'richText',
      required: true,
    },
  ],
}