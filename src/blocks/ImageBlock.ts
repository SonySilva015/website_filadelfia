import { Block } from 'payload'

export const ImageBlock: Block = {
  slug: 'imageBlock',
  labels: {
    singular: 'Imagem',
    plural: 'Imagens',
  },
  fields: [
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'caption',
      type: 'text',
    },
  ],
}