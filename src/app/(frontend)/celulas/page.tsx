// app/celulas/page.tsx (Server Component)
import Link from 'next/link';
import Image from 'next/image';
import {
    Clock,
    MapPin,
    ArrowRight,
    Users,
    Heart,
    Calendar,
    User
} from 'lucide-react';
import { GetCelulas } from '@/collections/celulas/fetcher';
import capaCel from '@/public/img/capacelp.jpg';

// Componente de Célula Vazia
function CelulasEmpty() {
    return (
        <div className="text-center py-16">
            <div className="w-20 h-20 bg-secondary-light rounded-full flex items-center justify-center mx-auto mb-6">
                <Users size={32} className="text-secondary" />
            </div>
            <h3 className="text-xl font-bold text-title mb-2">Nenhuma célula cadastrada</h3>
            <p className="text-body">Em breve teremos novas células disponíveis.</p>
        </div>
    );
}

export default async function CelulasPage() {
    const data = await GetCelulas();
    const celulas = data?.celulas || [];

    return (
        <div className="min-h-screen font-sans">
            {/* --- HERO SECTION --- */}
            <section className="relative h-[70vh]  justify-center overflow-hidden ">
                <div className="absolute  bg-black inset-0 z-0">
                    <Image
                        src={capaCel}
                        alt="Background"
                        fill
                        className="w-full h-full object-cover opacity-65 "
                    />

                </div>


            </section>

            {/* --- INTRODUÇÃO --- */}
            <section className="relative -mt-12 z-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-secondary/10 text-center">

                        <h2 className="text-2xl md:text-3xl font-bold text-title mb-3">
                            Por que Participar de uma Célula?
                        </h2>
                        <p className="text-base md:text-lg text-body leading-relaxed max-w-2xl mx-auto">
                            Células são pequenos grupos que se reúnem durante a semana com o propósito de
                            fortalecer a comunhão entre os irmãos. Ninguém deve caminhar sozinho - o
                            crescimento real acontece através do relacionamento.
                        </p>
                        <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-center backdrop-blur-sm rounded-full text-black text-2xl font-semibold ">
                            <Users size={16} />
                            <span>{celulas.length} células ativas</span>
                        </div>

                    </div>
                </div>
            </section>

            {/* --- GRID DE CÉLULAS --- */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                {celulas.length === 0 ? (
                    <CelulasEmpty />
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {celulas.map((celula: any) => (
                            <div
                                key={celula.id}
                                className="group bg-white rounded-2xl overflow-hidden border border-secondary/20 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                            >
                                {/* Imagem de capa */}
                                <Link href={`/celulas/${celula.slug}`} className="block relative h-56 overflow-hidden">
                                    {celula.capa ? (
                                        <Image
                                            src={celula.capa.url || '/placeholder-image.jpg'}
                                            alt={celula.nome}
                                            fill
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-linear-to-br from-secondary/20 to-secondary/5 flex items-center justify-center">
                                            <Users size={48} className="text-secondary/30" />
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-linear-to-t from-secondary/80 via-transparent to-transparent opacity-60" />

                                    {/* Badge com horário */}
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider text-secondary flex items-center gap-1.5">
                                        <Clock size={12} />
                                        {celula.horarios || 'Horário a definir'}
                                    </div>

                                    {/* Imagem de perfil do líder */}
                                    {celula.lider?.foto && (
                                        <div className="absolute -bottom-6 left-4 w-16 h-16 rounded-xl border-4 border-white shadow-lg overflow-hidden">
                                            <Image
                                                src={celula.lider.foto.url || '/placeholder-avatar.jpg'}
                                                alt={celula.lider.nome}
                                                fill
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    )}
                                </Link>

                                {/* Conteúdo */}
                                <div className="pt-10 p-6 flex flex-col flex-1">
                                    <h3 className="text-xl font-bold text-title mb-2 group-hover:text-secondary transition-colors">
                                        {celula.nome}
                                    </h3>

                                    <p className="text-sm text-body mb-4 leading-relaxed line-clamp-2">
                                        {celula.descricao || 'Uma célula que busca crescer em comunhão e conhecimento da Palavra.'}
                                    </p>

                                    {/* Informações rápidas */}
                                    <div className="grid grid-cols-2 gap-2 mb-6">
                                        <div className="flex items-center gap-1.5 text-xs text-body bg-tertiary p-2 rounded-lg">
                                            <Calendar size={12} className="text-secondary" />
                                            <span className="truncate">{celula.horarios || 'A definir'}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5 text-xs text-body bg-tertiary p-2 rounded-lg">
                                            <MapPin size={12} className="text-secondary" />
                                            <span className="truncate">{celula.local || 'Local a definir'}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5 text-xs text-body bg-tertiary p-2 rounded-lg">
                                            <Users size={12} className="text-secondary" />
                                            <span>{celula.membros || 0} membros</span>
                                        </div>
                                        <div className="flex items-center gap-1.5 text-xs text-body bg-tertiary p-2 rounded-lg">
                                            <User size={12} className="text-secondary" />
                                            <span>{celula.lider?.nome || 'Sem líder'}</span>
                                        </div>
                                    </div>

                                    {/* Botão */}
                                    <Link
                                        href={`/celulas/${celula.slug}`}
                                        className="mt-auto w-full bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                                    >
                                        Ver detalhes
                                        <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
}