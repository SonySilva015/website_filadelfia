import 'server-only'
import { getPayloadClient } from '@/lib/payload/client'


export async function GetNotices(page: number = 1) {
    const payload = await getPayloadClient()

    try {
        const result = await payload.find({
            collection: 'noticias',
            limit: 20,
            page: page,
            sort: '-createdAt',
        })

        return {
            notices: result.docs ?? [],
            totalPages: result.totalPages,
            hasNextPage: result.hasNextPage,
            nextPage: result.nextPage,
        }
    } catch (error) {
        console.error('Failed to fetch articles', error)

        return {
            notices: [],
            totalPages: 0,
            hasNextPage: false,
            nextPage: null,
        }
    }
}

export async function getNoticebySlug(slug: string) {
    const payload = await getPayloadClient()
    try {
        const { docs: articles } = await payload.find({
            collection: 'noticias',
            limit: 1,
            where: { slug: { equals: slug } },
        })
        const [firstArticle] = articles ?? []
        return firstArticle ?? null
    } catch (error) {
        console.error('Failed to fetch articles', error)
        return null
    }
}

export async function getNoticesDestaques() {
    const payload = await getPayloadClient()

    try {
        const { docs } = await payload.find({
            collection: 'noticias',
            where: {
                destaque: {
                    in: [1, 2, 3],
                },
            },
            sort: 'destaque',
            depth: 2,
        })

        return docs
    } catch (error) {
        console.error('Failed to fetch destaques', error)
        return []
    }
}


export async function GetNoticeLimit() {
    const payload = await getPayloadClient()
    try {
        const { docs: notice } = await payload.find({
            collection: 'noticias',
            limit: 3,
        })
        return notice ?? []
    } catch (error) {
        console.error('Failed to fetch articles', error)
        return []
    }
}