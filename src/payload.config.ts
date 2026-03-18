// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import { FixedToolbarFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media/config'
import { env } from './lib/env'
import { Celulas } from './collections/celulas/celulas'
import { Professores } from './collections/professores'
import { Noticias } from './collections/notice/noticias'
import { cloudinaryStorage } from 'payload-cloudinary'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
    admin: {
        user: Users.slug,

        importMap: {
            baseDir: path.resolve(dirname),
        },
        meta: {
            titleSuffix: '- Filadelfia',

        },

    },
    collections: [Users, Media, Noticias, Celulas, Professores],
    editor: lexicalEditor({
        features: ({ defaultFeatures }) => [...defaultFeatures, FixedToolbarFeature()],
    }),
    secret: process.env.PAYLOAD_SECRET || '',
    typescript: {
        outputFile: path.resolve(dirname, 'payload-types.ts'),
    },
    db: postgresAdapter({
        pool: {
            connectionString: process.env.DATABASE_URI || '',
        },
    }),
    sharp,
    plugins: [
        cloudinaryStorage({
            config: {
                cloud_name: process.env.CLOUDINARY_CLOUD_NAME || 'your-cloud-name',
                api_key: process.env.CLOUDINARY_API_KEY || 'your-api-key',
                api_secret: process.env.CLOUDINARY_API_SECRET || 'your-api-secret'
            },
            collections: {
                'media': true, // Enable for media collection
                // Add more collections as needed
            },
            folder: 'meu-blog', // Optional, defaults to 'payload-media'
            disableLocalStorage: true, // Optional, defaults to true
            enabled: true // Optional, defaults to true
        })
    ],
})
