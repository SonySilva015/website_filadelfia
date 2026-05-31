// src/lib/getUser.ts

import { getPayload } from 'payload'
import config from '@payload-config'
import { cookies } from 'next/headers'
import { headers } from 'next/headers'

export async function getUser() {
    const payload = await getPayload({ config })

    const cookieStore = await cookies()
    const headersList = await headers()

    const token = cookieStore.get('payload-token')

    if (!token) return null

    try {
        const result = await payload.auth({
            headers: headersList,
        })

        return result.user
    } catch (error) {
        return null
    }
}