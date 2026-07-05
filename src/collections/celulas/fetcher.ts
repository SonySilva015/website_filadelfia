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
            notices: result.docs ?? [],

        }
    } catch (error) {
        console.error('Failed to fetch articles', error)

        return {
            notices: [],


        }
    }
}