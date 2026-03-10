import type { CollectionConfig } from 'payload'
import { isAdmin } from './access/isAdmin'


export const Users: CollectionConfig = {
    slug: 'users',
    admin: {
        useAsTitle: 'nome',
    },
    auth: true,
    fields: [
        {
            name: 'nome',
            type: 'text'
        },
        {
            name: 'role',
            type: 'select',
            options: [
                { label: 'Administrador', value: 'admin' },
                { label: 'Editor', value: 'editor' },
                { label: 'Autor', value: 'autor' },
            ],
            defaultValue: 'autor',
        },
    ],
    access: {
        create: isAdmin,
        update: isAdmin,
        delete: isAdmin,
    },
}
