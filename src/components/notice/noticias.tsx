import { Calendar, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import {SearchX} from 'lucide-react'

async function getNoticias() {
  try {
    const res = await fetch("http://localhost:3000/api/noticias?limit=10")

    if (!res.ok) {
      console.error("Erro ao buscar notícias:", res.statusText)
      return []
    }

    const data = await res.json()

    return data?.docs || []
  } catch (err) {
    console.error("Erro na requisição:", err)
    return []
  }
}

export default async function NoticiasPage() {
  const noticias = await getNoticias()

 if (!noticias || noticias.length === 0) {
    return (
      <main className=" bg-slate-50 flex flex-col items-center justify-center p-4">
        <div className="text-center space-y-6 max-w-md">
          {/* Um ícone ou ilustração ajuda no visual */}
          <div className=" p-6 rounded-full  inline-block">
             <SearchX className="w-12 h-12 text-slate-300" />
          </div>
          
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-slate-800">
              Nenhuma notícia por aqui... ainda!
            </h1>
            <p className="text-slate-500">
              Parece que nossos redatores estão preparando novidades. 
              Volte em instantes para conferir as últimas atualizações.
            </p>
          </div>

          <Link
            href="/"
            className="inline-block px-6 py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
          >
            Voltar para a Home
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-linear-to-b from-slate-50 to-white">
      
      {/* HEADER */}
      <div className="border-b border-slate-200 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-2xl sm:text-3xl font-bold bg-linear-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            Notícias
          </h1>
        </div>
      </div>

      {/* CONTEÚDO */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">

          {noticias.map((n: any) => (

            <article
              key={n.id}
              className="group bg-white rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden"
            >

              {/* IMAGEM */}
              <div className="relative h-48 overflow-hidden bg-slate-100">

               
                  <Image
                    src={n.fotoCapa.cloudinary.secure_url}
                    fill
                    alt={n.fotoCapa.alt || "Capa da notícia"}
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                

                <div className="absolute top-3 left-3">
                  <span className="bg-purple-600/70 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-medium text-white shadow-sm">
                    {n.tipo}
                  </span>
                </div>

              </div>

              {/* CONTEÚDO */}
              <div className="p-5 flex-1 flex flex-col">

                {/* DATA */}
                <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />

                    {new Date(n.createdAt).toLocaleDateString("pt-BR", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                </div>

                {/* TÍTULO */}
                <h2 className="font-bold text-lg text-slate-800 group-hover:text-blue-600 transition line-clamp-2 mb-2">
                  {n.titulo}
                </h2>

                {/* DESCRIÇÃO */}
                <p className="text-sm text-slate-600 line-clamp-2 mb-4">
                  {n.descricao}
                </p>

                {/* LINK */}
                <div className="flex items-center justify-between mt-auto border-t border-slate-100">

                  <Link
                    href={`/noticias/${n.slug}`}
                    className="mt-3 text-blue-600 hover:text-blue-700 font-medium text-sm inline-flex items-center gap-1 group/btn"
                  >
                    Ler mais
                    <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition" />
                  </Link>

                </div>

              </div>

            </article>

          ))}

        </div>
      </div>
    </main>
  
  )
  

}