import Link from "next/link";

import { GetNoticeLimit } from "@/collections/notice/fetcher"; // Importando o fetcher que configuramos
import { Calendar, ArrowRight, Newspaper } from 'lucide-react';
import { motion } from 'framer-motion';

export default async function NoticiasPage() {
  // Usamos o fetcher direto do servidor para ser mais rápido e seguro
  const noticias = await GetNoticeLimit();

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header da Página */}
      <header className="bg-slate-950 py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-64 h-64 bg-purple-600 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
        </div>

        <div className="relative z-10 container mx-auto px-6">
          <span className="inline-block p-3 bg-white/5 rounded-2xl text-purple-400 mb-6">
            <Newspaper size={32} />
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4">
            Fique por dentro
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Acompanhe os últimos acontecimentos, novidades e testemunhos da nossa comunidade.
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
                  className="group flex flex-col bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-purple-900/5 transition-all duration-500 h-full"
                >
                  {/* Container da Imagem */}
                  <div className="relative h-64 w-full overflow-hidden bg-slate-200">
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt={noticia.titulo}

                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 33vw"
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

                  {/* Conteúdo */}
                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex items-center gap-2 text-slate-400 mb-4">
                      <Calendar size={14} className="text-purple-500" />
                      <span className="text-xs font-bold uppercase tracking-tighter">
                        {noticia.createdAt && new Date(noticia.createdAt).toLocaleDateString('pt-BR', {
                          day: '2-digit',
                          month: 'long',
                          year: 'numeric'
                        })}
                      </span>
                    </div>

                    <h2 className="text-2xl font-black text-slate-900 mb-4 leading-tight group-hover:text-purple-600 transition-colors">
                      {noticia.titulo}
                    </h2>

                    <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 mb-8 flex-1">
                      {noticia.descricao}
                    </p>

                    <div className="pt-6 border-t border-slate-50 flex items-center justify-between group/btn">
                      <span className="text-slate-900 font-black text-sm uppercase tracking-tighter">Ler matéria</span>
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

      {/* Newsletter ou CTA Simples */}
      <section className="bg-slate-100 py-20 px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-[3rem] p-8 md:p-12 text-center border border-white shadow-xl shadow-slate-200/50">
          <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">
            Quer receber as notícias no seu e-mail?
          </h3>
          <p className="text-slate-500 mb-8">
            Fique por dentro de todos os eventos e avisos importantes da IEIA Filadélfia.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="flex-1 px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all text-slate-900"
            />
            <button className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-2xl transition-all">
              Inscrever
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}