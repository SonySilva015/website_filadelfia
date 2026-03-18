// app/noticias/[slug]/page.tsx

import Image from "next/image"
import { notFound } from "next/navigation"
import Link from "next/link"

import { relationIsObject } from "@/lib/payload/helpers/relation-is-object"
import { getNoticebySlug } from "@/collections/notice/fetcher"
import RichTextRenderer from "@/components/RichTextRenderer"

export default async function NoticiaPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const noticia = await getNoticebySlug(slug)

  if (!noticia) notFound()

  if (!relationIsObject(noticia.fotoCapa)) return null
  if (!relationIsObject(noticia.autor)) return null

  const formattedDate = noticia.createdAt
    ? new Date(noticia.createdAt).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
    : null
  const capa = noticia.fotoCapa.cloudinary?.secure_url
  return (
    <main className="min-h-screen bg-linear-to-b from-gray-50 to-white mb-10 ">
      <div className="relative w-full h-[10vh] md:h-[20vh] bg-gray-900 p-10">

        <div className="absolute bottom-0 left-0 right-0 hidden md:block">
          <nav className="flex items-center text-sm md:text-lg text-gray-500 mb-4 md:mb-10 md:ml-10 ml-2">
            <Link href="/" className="hover:text-gray-900 transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/noticias" className="hover:text-gray-900 transition-colors">
              Notícias
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-100 font-medium truncate">
              {noticia.titulo}
            </span>
          </nav>

        </div>
      </div>
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}

        <header className="mb-8 md:mb-10">
          <div className="space-y-4">
            {/* BREADCRUMB */}

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              {noticia.titulo}
            </h1>

            {noticia.descricao && (
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                {noticia.descricao}
              </p>
            )}

            {/* METADADOS */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 pt-4 pb-6 border-b border-gray-200">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <time dateTime={noticia.createdAt} className="capitalize">
                  {formattedDate}
                </time>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600">
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>
                  Por:  <span className="font-semibold text-black"> {noticia?.autor?.nome}</span>
                </span>
              </div>
            </div>
          </div>
        </header>


        <div className="relative w-full aspect-video max-h-150 mb-6 rounded-xl overflow-hidden shadow-lg">
          <Image
            src={capa ? capa : ''}
            alt={noticia.fotoCapa.alt || ""}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          />
        </div>

        {/* CAPTION */}
        {noticia.caption && (
          <div className="mb-8 text-sm text-gray-500 italic border-l-4 border-gray-300 pl-4 py-2 bg-gray-50 rounded-r-lg">
            {noticia.caption}
          </div>
        )}

        {/* CONTEÚDO DINÂMICO */}
        <section className="space-y-8 md:space-y-10 prose prose-lg max-w-none">
          {noticia.conteudo?.map((block: any, index: number) => {
            if (block.blockType === "textBlock") {
              return (
                <div key={block.id || index} className="text-gray-800 leading-relaxed">
                  <RichTextRenderer data={block.text} />
                </div>
              )
            }

            if (block.blockType === "imageBlock") {
              const img = block.image

              return (
                <figure key={block.id || index} className="my-8 md:my-10">
                  <div className="relative w-full h-auto  overflow-hidden  transition-shadow duration-300">
                    <Image
                      src={img.url}
                      alt={img.alt || ""}
                      width={img.width || 1200}
                      height={img.height || 800}
                      className="w-full h-auto object-contain"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                    />
                  </div>
                  {img.alt && (
                    <figcaption className="text-sm text-gray-500  text-center italic">
                      {img.caption}
                    </figcaption>
                  )}
                </figure>
              )
            }

            return null
          })}
        </section>

        {/* COMPARTILHAMENTO E VOLTAR */}
        <div className="mt-12 md:mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">

            {/* COMPARTILHAR */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">Compartilhe:</span>
              <div className="flex gap-2">
                <button
                  className="p-2 rounded-full bg-gray-100 hover:bg-blue-500 hover:text-white transition-all duration-200"
                  aria-label="Compartilhar no Twitter"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </button>
                <button
                  className="p-2 rounded-full bg-gray-100 hover:bg-blue-700 hover:text-white transition-all duration-200"
                  aria-label="Compartilhar no Facebook"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.99h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.99C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </button>
                <button
                  className="p-2 rounded-full bg-gray-100 hover:bg-green-600 hover:text-white transition-all duration-200"
                  aria-label="Compartilhar no WhatsApp"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.077 4.928C17.191 3.041 14.683 2 12.006 2c-5.35 0-9.703 4.34-9.708 9.68-.002 1.713.448 3.389 1.3 4.865L2 22l5.567-1.479c1.421.783 3.022 1.196 4.668 1.198h.004c5.352 0 9.706-4.342 9.71-9.682.002-2.588-1.004-5.022-2.89-6.909zM12.02 20.167h-.003c-1.454 0-2.88-.392-4.117-1.13l-.295-.176-3.303.877.882-3.22-.192-.307c-.808-1.295-1.235-2.793-1.233-4.338.004-4.467 3.64-8.102 8.113-8.102 2.167 0 4.204.846 5.736 2.381 1.533 1.536 2.376 3.574 2.372 5.741-.004 4.468-3.639 8.104-8.106 8.104zm4.975-6.07c-.244-.122-1.443-.71-1.666-.791-.223-.082-.385-.122-.547.122-.162.244-.636.79-.78.953-.144.163-.288.183-.532.061-.982-.488-1.754-1.065-2.436-1.78-.184-.193-.488-.504-.716-.946-.162-.312-.07-.558.016-.712.078-.138.178-.294.267-.44.09-.146.12-.244.18-.407.06-.162.03-.305-.015-.427s-.546-1.318-.749-1.8c-.197-.472-.397-.407-.547-.414-.142-.007-.305-.009-.467-.009-.162 0-.426.061-.65.305-.223.244-.854.834-.854 2.034 0 1.2.873 2.358.995 2.521.122.163 1.718 2.624 4.163 3.68.581.25 1.035.399 1.389.511.586.186 1.119.16 1.541.097.47-.07 1.448-.592 1.652-1.164.204-.572.204-1.062.143-1.164-.061-.102-.223-.163-.467-.285z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* VOLTAR */}
            <Link
              href="/noticias"
              className="inline-flex items-center px-5 py-2.5 sm:px-6 sm:py-3 border border-gray-300 rounded-lg hover:bg-gray-100 hover:border-gray-400 transition-all duration-200 group text-sm sm:text-base"
            >
              <svg className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Voltar para Notícias
            </Link>
          </div>
        </div>
      </article>
    </main>
  )
}