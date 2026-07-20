import 'server-only'

import { getPayloadClient } from '@/lib/payload/client'


export async function GetCelulas() {
    const payload = await getPayloadClient()

    try {
        const result = await payload.find({
            collection: 'celulas',
            sort: '-createdAt',
        })

        return {
            celulas: result.docs ?? [],
        }

    } catch (error) {
        console.error('Failed to fetch articles', error)

        return {
            celulas: [],


        }
    }
}

export async function GetCelulasLimit() {
    const payload = await getPayloadClient()

    try {
        const result = await payload.find({
            collection: 'celulas',
            sort: '-createdAt',
            limit: 3
        })

        return {
            celulas: result.docs ?? [],
        }

    } catch (error) {
        console.error('Failed to fetch articles', error)

        return {
            celulas: [],


        }
    }
}


export async function GetCelulaBySlug(slug: string) {
    const payload = await getPayloadClient()

    try {
        const result = await payload.find({
            collection: 'celulas',
            limit: 1,
            where: {
                slug: {
                    equals: slug,
                },
            },
        })

        return result.docs[0] ?? null

    } catch (error) {
        console.error('Failed to fetch article by slug', error)

        return null
    }
}