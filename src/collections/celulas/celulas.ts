import { CollectionConfig } from 'payload'
import { TextBlock } from '../../blocks/textblocks'
import { ImageBlock } from '../../blocks/ImageBlock'
import { isAdminOuEditor } from '../access/isAdminEditor'

export const Celulas: CollectionConfig = {
    slug: 'celulas',

    access: {
        read: () => true,
        create: isAdminOuEditor,
        update: isAdminOuEditor,
        delete: isAdminOuEditor,
    },

    admin: {
        useAsTitle: 'nome',
    },

    fields: [
        {
            name: 'nome',
            type: 'text',
            label: 'Nome',
            required: true,
        },
        {
            name: 'capa',
            type: 'upload',
            relationTo: 'media',
            label: 'Capa',
            required: true,
        },
        {
            name: 'descricao',
            type: 'textarea',
            label: 'Descrição',
            required: true,
        },
        {
            name: 'horarios',
            type: 'text',
            label: 'Horários',
            required: true,
        },
        {
            name: 'membros',
            type: 'number',
            label: 'Número de Membros',
            required: true,
        },
        {
            name: 'conteudo',
            type: 'blocks',
            label: 'Conteúdo',
            blocks: [
                TextBlock,
                ImageBlock,
            ],
        },

        // Líder
        {
            name: 'lider',
            type: 'group',
            label: 'Líder',
            fields: [
                {
                    name: 'foto',
                    type: 'upload',
                    relationTo: 'media',
                    label: 'Foto',
                    required: true,
                },
                {
                    name: 'nome',
                    type: 'text',
                    label: 'Nome',
                    required: true,
                },
            ],
        },
    ],
}