import { CollectionConfig } from 'payload'
import { isAdminOuEditor } from './access/isAdminEditor'

export const Professores: CollectionConfig = {
    slug: 'professores',
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
            name: 'avatar',
            type: 'upload',
            relationTo: 'media',
            label: 'Avatar',
            required: true,
        },
        {
            name: 'Cargo',
            type: 'text',
            label: 'Cargo',

        },


    ],
}