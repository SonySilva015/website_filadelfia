import { notFound } from "next/navigation"

async function getNoticia(slug: string) {
  const res = await fetch(
    `http://localhost:3000/api/noticias?where[slug][equals]=${slug}`,
    { cache: "no-store" }
  )

  const data = await res.json()

  return data.docs[0]
}

export default async function NoticiaPage({ params }: any) {
  const noticia = await getNoticia(params.slug)

  if (!noticia) return notFound()

  return (
    <div className="container py-10 max-w-3xl">

      <h1 className="text-4xl font-bold mb-4">
        {noticia.titulo}
      </h1>

      <p className="text-gray-500 mb-8">
        {noticia.descricao}
      </p>

    </div>
  )
}