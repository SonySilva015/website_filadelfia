import { CollectionConfig } from 'payload'
import { isAdminOuEditor } from '../access/isAdminEditor'

export const Turmas: CollectionConfig = {
    slug: 'turmas',

    admin: {
        useAsTitle: 'nome',
        defaultColumns: ['nome', 'anos', 'horario', 'professor'],
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
            label: 'Nome da Turma',
            type: 'text',
            required: true,
        },
        {
            name: 'descricao',
            label: 'Descrição',
            type: 'textarea',
            required: true,
        },
        {
            name: 'anos',
            label: 'Faixa Etária / Anos',
            type: 'text',
            required: true,
            admin: {
                description: 'Ex.: 6-8 anos, 9-12 anos, Adultos',
            },
        },
        {
            name: 'horario',
            label: 'Horário',
            type: 'text',
            required: true,
            admin: {
                description: 'Ex.: Domingo às 08:00',
            },
        },

        {
            type: 'collapsible',
            label: 'Professor',
            fields: [
                {
                    name: 'professor',
                    label: 'Nome do Professor',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'fotoProfessor',
                    label: 'Foto do Professor',
                    type: 'upload',
                    relationTo: 'media',
                    required: true,
                },
                {
                    name: 'contacto',
                    label: 'Contacto',
                    type: 'text',
                    required: true,
                },
            ],
        },
    ],
}