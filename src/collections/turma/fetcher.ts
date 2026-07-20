import 'server-only'

import { getPayloadClient } from '@/lib/payload/client'

export default async function GetTurmas() {
    const payload = await getPayloadClient()

    try {
        const result = await payload.find({
            collection: 'turmas',
            sort: '-createdAt',
        })

        return {
            turmas: result.docs ?? [],
        }

    } catch (error) {
        console.error('Failed to fetch articles', error)

        return {
            turmas: [],


        }
    }
}