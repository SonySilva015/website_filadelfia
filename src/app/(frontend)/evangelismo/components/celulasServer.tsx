import { GetCelulas } from '@/collections/celulas/fetcher'
import EvangelismoCarousel from './EvangelismoCarousel'

export default async function EvangelismoPage() {
    const { celulas: celulas } = await GetCelulas()

    return <EvangelismoCarousel celulas={celulas} />
}