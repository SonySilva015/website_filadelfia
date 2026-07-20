

import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Users, Calendar } from 'lucide-react';

interface CelulaHeroProps {
    nome: string;
    descricao: string;
    membros: number;
    horarios: string;
    capaUrl: string | any;
}

export default function CelulaHero({ nome, descricao, membros, horarios, capaUrl }: CelulaHeroProps) {
    return (
        <section className="relative h-[60vh] md:h-[70vh] flex items-end pb-16 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Image
                    src={capaUrl || '/placeholder.jpg'}
                    fill
                    alt={nome}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-secondary via-secondary/60 to-transparent" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
                <Link
                    href="/celulas"
                    className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors text-sm bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full"
                >
                    <ArrowLeft size={16} />
                    Voltar para células
                </Link>

                <div className="max-w-3xl animate-fade-in-up">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="text-white/60 text-sm">•</span>
                        <span className="text-white/80 text-sm flex items-center gap-1 bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full">
                            <Users size={14} />
                            {membros} membros
                        </span>
                        <span className="text-white/80 text-sm flex items-center gap-1 bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full">
                            <Calendar size={14} />
                            {horarios}
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
                        {nome}
                    </h1>

                    <p className="text-lg md:text-xl text-white/80 max-w-2xl">
                        {descricao}
                    </p>
                </div>
            </div>
        </section>
    );
}