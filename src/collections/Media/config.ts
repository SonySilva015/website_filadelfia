import type { CollectionConfig } from 'payload'
import { generateBlurDataURL, isEligibleForBlurDataURL } from './lib/generate-blur-data-url'
import { isAdminOuEditor } from '../access/isAdminEditor'

const MAX_UPLOAD_BYTES = 2 * 1024 * 1024 // 2 MB

export const Media: CollectionConfig = {
    slug: 'media',
    access: {
        read: () => true,
        create: isAdminOuEditor,
        update: isAdminOuEditor,
        delete: isAdminOuEditor,
    },
    fields: [
        {
            name: 'alt',
            type: 'text',
            required: true,
        },
        {
            name: 'blurDataUrl',
            type: 'text',
            required: true,
            admin: { hidden: true },
        },
    ],
    upload: {
        mimeTypes: ['image/*'],
        resizeOptions: {
            width: 1600,
            height: 1600,
            fit: 'inside',
            withoutEnlargement: true,
        },
        formatOptions: {
            format: 'webp',
            options: { quality: 75 },
        },
        imageSizes: [
            { name: 'thumbnail', width: 400 },
            { name: 'card', width: 768 },
        ],
    },
    hooks: {
        beforeValidate: [
            ({ req, data }) => {
                const tamanho = req.file?.size
                if (tamanho && tamanho > MAX_UPLOAD_BYTES) {
                    throw new Error('A imagem não pode ter mais de 2 MB.')
                }
                return data
            },
        ],
        beforeChange: [
            async ({ operation, data, req }) => {
                if (operation !== 'create') return data
                // 1. check for eligibility
                if (!isEligibleForBlurDataURL(req.file?.mimetype)) return data
                // 2. if it is, generate blur hash
                const base64 = await generateBlurDataURL(req.file?.data)
                if (!base64) return data
                // 3. set it to data.blurDataUrl
                data.blurDataUrl = base64
                console.log(`Generated blur data URL for ${data.filename}`)
                // 4. return data
                return data
            },
        ],
    },
}