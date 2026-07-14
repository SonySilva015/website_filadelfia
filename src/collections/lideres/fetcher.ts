import 'server-only'

import { getPayloadClient } from '@/lib/payload/client'

export async function GetLideres() {
    const payload = await getPayloadClient()

    try {
        const result = await payload.find({
            collection: 'lideres',
            depth: 2,
            sort: 'ordem',
        })

        return result.docs
    } catch (error) {
        console.error(error)

        // SEMPRE retorna um array
        return []
    }
}