import { Calendar, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Newspaper } from 'lucide-react'
import { GetNotices } from "@/collections/notice/fetcher"

export default async function NoticiasPage({ searchParams }: any) {
  const page = Number(searchParams?.page || 1)

  const data = await GetNotices(page)
  const noticias = data.notices || []

  // 🔴 SEM NOTÍCIAS
  if (!noticias || noticias.length === 0) {
    return (
      <main className="flex flex-col items-center justify-center p-4 bg-tertiary md:py-15">
        <div className="text-center space-y-6 max-w-md md:mt-10">
          <div className="inline-block">
            <Newspaper size={50} className="text-secondary opacity-80" />
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-secondary">
              Nenhuma notícia por aqui... ainda!
            </h1>
            <p className="text-body">
              Parece que nossos redatores estão preparando novidades.
              Volte em instantes para conferir as últimas atualizações.
            </p>
          </div>

          <Link
            href="/"
            className="inline-block px-6 py-3 bg-secondary text-white rounded-lg font-medium hover:bg-secondary-hover transition-colors"
          >
            Voltar para a Home
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="h-auto bg-linear-to-b from-tertiary to-secondary-light/20">

      {/* HEADER */}
      <div className="border-b border-secondary/20 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-2xl md:text-3xl font-bold bg-linear-to-r from-secondary to-secondary-hover bg-clip-text text-transparent">
            Notícias
          </h1>
        </div>
      </div>

      {/* CONTEÚDO */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {noticias.map((n: any) => (
            <article
              key={n.id}
              className="group bg-white rounded-xl border border-secondary/10 hover:border-secondary/30 hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* IMAGEM */}
              <div className="relative h-48 overflow-hidden bg-tertiary">
                <Image
                  src={n.fotoCapa?.cloudinary?.secure_url || "/fallback.jpg"}
                  fill
                  alt={n.fotoCapa?.alt || "Capa da notícia"}
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-secondary/70 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-medium text-white shadow-sm">
                    {n.tipo}
                  </span>
                </div>
              </div>

              {/* CONTEÚDO */}
              <div className="p-5 flex-1 flex flex-col">
                {/* DATA */}
                <div className="flex items-center gap-3 text-xs text-body mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-secondary" />
                    {new Date(n.createdAt).toLocaleDateString("pt-BR", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                </div>

                {/* TÍTULO */}
                <h2 className="font-bold text-lg text-title group-hover:text-secondary transition line-clamp-2 mb-2">
                  {n.titulo}
                </h2>

                {/* DESCRIÇÃO */}
                <p className="text-sm text-body line-clamp-2 mb-4">
                  {n.descricao}
                </p>

                {/* LINK */}
                <div className="flex items-center justify-between mt-auto border-t border-secondary/10 pt-3">
                  <Link
                    href={`/noticias/${n.slug}`}
                    className="text-secondary hover:text-secondary-hover font-medium text-sm inline-flex items-center gap-1 group/btn"
                  >
                    Ler mais
                    <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* PAGINAÇÃO */}
        <div className="flex justify-center mt-10 gap-4">
          {page > 1 && (
            <Link
              href={`/noticias?page=${page - 1}`}
              className="px-4 py-2 bg-tertiary text-body rounded-md hover:bg-secondary/20 transition"
            >
              Anterior
            </Link>
          )}

          {data.hasNextPage && (
            <Link
              href={`/noticias?page=${page + 1}`}
              className="px-4 py-2 bg-secondary text-white rounded-md hover:bg-secondary-hover transition"
            >
              Próxima
            </Link>
          )}
        </div>
      </div>
    </main>
  )
}