import { CollectionConfig } from 'payload'
import { TextBlock } from '../../blocks/textblocks'
import { ImageBlock } from '../../blocks/ImageBlock'
import slugify from 'slugify'
import { isAdminOuEditor } from '../access/isAdminEditor'


export const Noticias: CollectionConfig = {
  slug: 'noticias',
  admin: {
    useAsTitle: 'titulo',
  },

  hooks: {
    beforeValidate: [
      ({ data, req }) => {
        if (!data) return data
        // gerar slug automático
        if (data?.titulo) {
          data.slug = slugify(data.titulo, { lower: true, strict: true })
        }

        // definir autor automaticamente
        if (req.user) {
          data.autor = req.user.id
        }

        return data
      },
    ],
  },

  fields: [
    {
      name: 'titulo',
      type: 'text',
      label: 'Título',
      required: true,
    },

    {
      name: 'descricao',
      type: 'textarea',
      label: 'Descrição',
      required: true,
    }, {
      name: 'slug',
      type: 'text',
      label: 'Dá título à notícia',
      required: true,
    },
    {
      name: 'fotoCapa',
      type: 'upload',
      relationTo: 'media',
      label: 'Foto de capa',
      required: true,
    }, {
      name: 'caption',
      type: 'text',
      label: 'Legenda da foto de capa',
      required: false,
    },
    {
      name: 'data',
      type: 'date',
      label: 'Data do Evento ou Notícia',
    },
    {
      name: 'tipo',
      type: 'select',
      label: 'Tipo de notícia',
      required: true,
      options: [
        {
          label: 'Notícia',
          value: 'noticia',
        },
        {
          label: 'Evento',
          value: 'evento',
        },
        {
          label: 'Institucional',
          value: 'institucional',
        },
      ],
    }, {
      name: 'destaque',
      type: 'select',
      label: 'Destaque',
      defaultValue: 'nenhum',
      options: [
        {
          label: 'Nenhum',
          value: 'nenhum',
        },
        {
          label: 'Principal',
          value: '1',
        },
        {
          label: 'secundária',
          value: '2',
        },
        {
          label: 'Terciária',
          value: '3',
        },
      ]
    },

    {
      name: 'autor',
      type: 'relationship',
      relationTo: 'users',
      label: 'Autor',
      admin: {
        readOnly: true,
        position: 'sidebar',
      },
    },

    {
      name: 'conteudo',
      type: 'blocks',
      label: 'Conteúdo',
      blocks: [
        TextBlock,
        ImageBlock
      ],
    },
  ],
  access: {
    read: () => true,
    // Apenas admin pode criar novos usuários
    create: isAdminOuEditor,

    // Admin pode atualizar qualquer um, usuário comum só a si mesmo
    update: isAdminOuEditor,

    // Apenas admin pode deletar
    delete: isAdminOuEditor,

  },
}