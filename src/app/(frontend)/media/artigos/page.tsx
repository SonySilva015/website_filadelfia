import Link from "next/link";

import { GetNotices } from "@/collections/notice/fetcher";

import { Calendar, ArrowRight, Newspaper } from 'lucide-react';
import Image from "next/image";


export default async function NoticiasPage({ searchParams }: any) {
  const page = Number(searchParams?.page || 1)

  const data = await GetNotices(page)
  const noticias = data.notices || []

  if (!noticias || noticias.length === 0) {
    return (
      <main className="flex flex-col items-center justify-center p-4 bg-slate-700 md:py-15">
        <div className="text-center space-y-6 max-w-md md:mt-10">
          <div className="inline-block">
            <Newspaper size={50} className="text-white opacity-80" />
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-white">
              Nenhum documento publicando ainda
            </h1>
            <p className="text-body">
              Volte mais tarde...
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
    <div className="min-h-screen bg-slate-700">
      {/* Header da Página */}
      <header className="bg-slate-950 py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-64 h-64 bg-purple-600 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
        </div>

        <div className="relative z-10 container mx-auto px-6">

          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4">
            Artigos para o seu crescimento
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            artigos para o seu crescimento espiritual e mais...
          </p>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="container mx-auto px-6 py-16">

        {noticias.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-slate-500 text-lg">Nenhuma notícia encontrada no momento.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {noticias.map((noticia: any) => {
              const imageUrl = noticia.fotoCapa?.cloudinary?.secure_url;

              return (
                <Link
                  key={noticia.id}
                  href={`/noticias/${noticia.slug || noticia.id}`}
                  className="group  relative flex flex-col bg-white h-100 overflow-hidden rounded-md shadow-sm hover:shadow-2xl hover:shadow-purple-900/5 transition-all duration-500"
                >
                  {/* Container da Imagem */}
                  <div className="relative h-full w-full overflow-hidden bg-slate-200">
                    {imageUrl ? (
                      <Image
                        src={imageUrl}
                        alt={noticia.titulo}
                        fill
                        className="absolute inset-0 w-full h-full object-cover z-5"

                      />
                    ) : (
                      <div className="flex items-center justify-center h-full text-slate-400">
                        Sem imagem
                      </div>
                    )}
                    {/* Overlay com Tag */}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-800">
                      {noticia.tipo || "Geral"}
                    </div>
                  </div>
                  <div className="absolute inset-0 z-10 bg-linear-to-t from-slate-950 to-transparent"></div>
                  {/* Conteúdo */}
                  <div className="absolute bottom-0 top-40 p-8 inset-0 flex flex-col flex-1 z-12">
                    <div className="flex items-center gap-2 text-slate-400 mb-4">
                      <Calendar size={14} className="text-white" />
                      <span className="text-xs font-bold uppercase tracking-tighter">
                        {noticia.createdAt && new Date(noticia.createdAt).toLocaleDateString('pt-BR', {
                          day: '2-digit',
                          month: 'long',
                          year: 'numeric'
                        })}
                      </span>
                    </div>

                    <h2 className="text-2xl font-black text-white mb-4 leading-tight group-hover:text-purple-600 transition-colors">
                      {noticia.titulo}
                    </h2>



                    <div className="pt-6 flex items-center justify-between group/btn">
                      <span className="text-white font-black text-sm uppercase tracking-tighter">Ler matéria</span>
                      <div className="w-10 h-10 bg-slate-950 rounded-full flex items-center justify-center text-white group-hover/btn:bg-purple-600 group-hover/btn:translate-x-1 transition-all">
                        <ArrowRight size={18} />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </main>


    </div>
  );
}