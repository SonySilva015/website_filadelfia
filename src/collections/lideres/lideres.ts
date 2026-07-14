import type { CollectionConfig } from 'payload'
import { isAdminOuEditor } from '../access/isAdminEditor'

export const Lideres: CollectionConfig = {
    slug: 'lideres',

    admin: {
        useAsTitle: 'nome',
    },

    access: {
        read: () => true,
        create: isAdminOuEditor,
        update: isAdminOuEditor,
        delete: isAdminOuEditor,
    },

    fields: [
        {
            name: 'nome',
            type: 'text',
            required: true,
        },
        {
            name: 'cargo',
            type: 'select',
            required: true,
            options: [
                {
                    label: 'Presbítero',
                    value: 'presbitero',
                },
                {
                    label: 'Diácono',
                    value: 'diacono',
                },
                {
                    label: 'Departamento',
                    value: 'departamento',
                },
            ],
        },
        {
            name: 'departamento',
            type: 'text',
            admin: {
                condition: (_, data) => data.cargo === 'departamento',
            },
        },
        {
            name: 'descricao',
            type: 'textarea',
        },
        {
            name: 'foto',
            type: 'upload',
            relationTo: 'media',
        },
        {
            name: 'ordem',
            type: 'number',
            defaultValue: 1,
        },
    ],
}