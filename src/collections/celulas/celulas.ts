import { CollectionConfig } from 'payload'
import { TextBlock } from '../../blocks/textblocks'
import { ImageBlock } from '../../blocks/ImageBlock'
import { isAdminOuEditor } from '../access/isAdminEditor'
import slugify from 'slugify'

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

    hooks: {
        beforeValidate: [
            ({ data, req }) => {
                if (!data) return data

                // CORRIGIDO: usar 'nome' em vez de 'titulo'
                if (data?.nome) {
                    data.slug = slugify(data.nome, {
                        lower: true,
                        strict: true,
                        remove: /[*+~.()'"!:@]/g // Remove caracteres especiais
                    })
                }

                // definir autor automaticamente (se houver campo autor)
                if (req.user && data) {
                    data.autor = req.user.id
                }

                return data
            },
        ],
    },

    fields: [
        {
            name: 'nome',
            type: 'text',
            label: 'Nome',
            required: true,
        },
        {
            name: 'slug',
            type: 'text',
            label: 'Slug',
            required: true,
            unique: true, // Importante: garantir que seja único
            admin: {
                position: 'sidebar',
                description: 'URL amigável gerada automaticamente a partir do nome',
                readOnly: true, // Impede edição manual para manter consistência
            },
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
            name: 'local',
            type: 'text',
            label: 'Local de reunião',
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
                {
                    name: 'numero',
                    type: 'text',
                    label: 'Número',
                    required: true,
                },
            ],
        },
    ],
}