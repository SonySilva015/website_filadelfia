'use client'

import React from 'react';
import { motion } from 'framer-motion';
import {
    Globe,
    ShieldCheck,
    Heart,
    MapPin,
    Navigation,
    Compass,
    Anchor,
    Award
} from 'lucide-react';
import Image from 'next/image';
import fundo from '@/public/img/IMG-20250831-WA0043.jpg'

const valores = [
    {
        icon: <ShieldCheck size={20} strokeWidth={1.5} />,
        titulo: "Doutrina Bíblica",
        desc: "Compromisso inegociável com a exposição fiel das Escrituras Sagradas."
    },
    {
        icon: <Heart size={20} strokeWidth={1.5} />,
        titulo: "Amor Fraterno",
        desc: "A essência do nosso nome: viver como irmãos que cuidam uns dos outros."
    },
    {
        icon: <Globe size={20} strokeWidth={1.5} />,
        titulo: "Relevância Social",
        desc: "Ser sal e luz em Angola, impactando a educação e a saúde das comunidades."
    }
];

export default function SobreIgrejaPage() {
    return (
        <div className="min-h-screen bg-white text-slate-900 selection:bg-slate-100">

            {/* --- HERO: IDENTIDADE --- */}
            <header className="relative min-h-[85vh] flex items-center pt-20 overflow-hidden bg-slate-950">
                {/* --- FUNDO COM IMAGEM --- */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src={fundo} // Caminho da sua imagem
                        alt="Fundo Institucional IEIA"
                        fill
                        priority
                        className="object-cover opacity-40 grayscale hover:grayscale-0 transition-all duration-1000 scale-105"
                    />
                    {/* Gradientes para suavizar a imagem e focar no texto */}
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/30 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/10 via-slate-900/30 to-transparent" />
                </div>



                {/* --- CONTEÚDO PRINCIPAL --- */}
                <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="max-w-4xl"
                    >


                        <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif text-white leading-[1.1] mb-10 tracking-tight">
                            Filadélfia <br />
                            <span className="text-slate-400 font-light italic font-sans">IEIA</span>
                        </h1>


                    </motion.div>
                </div>

                {/* --- INDICADOR DE SCROLL --- */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="absolute bottom-10 left-6 z-10 hidden md:flex items-center gap-4 rotate-90 origin-left"
                >
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">Scroll para explorar</span>
                    <div className="w-12 h-px bg-slate-800" />
                </motion.div>
            </header>

            {/* --- MISSÃO E OBJECTIVOS --- */}
            <section className="py-32 px-6 max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-start">
                    <div>
                        <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-8">Nossa Missão</h2>
                        <h3 className="text-3xl font-light leading-snug mb-6">
                            Glorificar a Deus através da <span className="font-medium">proclamação do Evangelho</span> e do discipulado transformador.
                        </h3>
                        <p className="text-slate-500 font-light leading-relaxed">
                            Nosso objetivo na terra é ser um reflexo do Reino de Deus em Angola. Funcionamos através de uma estrutura congregacional onde cada membro é incentivado a usar seus dons para o bem comum, focando na maturidade espiritual e na justiça social.
                        </p>
                    </div>

                    <div className="space-y-12">
                        <div>
                            <h4 className="text-sm font-bold mb-2 flex items-center gap-2">
                                <Compass size={18} className="text-slate-400" />
                                Visão de Futuro
                            </h4>
                            <p className="text-sm text-slate-500 leading-relaxed font-light">
                                Expandir nossa presença em todas as províncias, plantando igrejas saudáveis que sejam centros de esperança e desenvolvimento comunitário.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-sm font-bold mb-2 flex items-center gap-2">
                                <Award size={18} className="text-slate-400" />
                                O que fazemos?
                            </h4>
                            <p className="text-sm text-slate-500 leading-relaxed font-light">
                                Além dos cultos, promovemos alfabetização, assistência médica em áreas remotas e formação de liderança ética para a nação.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- VALORES (GRID MÍNIMO) --- */}
            <section className="py-24 bg-slate-900 text-white rounded-[4rem] mx-4 md:mx-10 relative overflow-hidden">
                <div className="max-w-5xl mx-auto px-6 relative z-10">
                    <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-500 mb-20 text-center">
                        Nossos Pilares
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                        {valores.map((v, i) => (
                            <div key={i} className="text-center md:text-left">
                                <div className="text-blue-400 mb-6 flex justify-center md:justify-start">{v.icon}</div>
                                <h4 className="text-lg font-medium mb-4">{v.titulo}</h4>
                                <p className="text-slate-400 text-sm font-light leading-relaxed">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- LOCALIZAÇÃO E EXPANSÃO --- */}
            <section className="py-32 px-6 max-w-5xl mx-auto">
                <div className="flex flex-col md:flex-row gap-20 items-center">
                    <div className="flex-1">
                        <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-8">Presença Nacional</h2>
                        <h3 className="text-4xl font-light mb-8 tracking-tight">Estamos em todo o <span className="font-medium underline decoration-blue-500 underline-offset-8">território angolano.</span></h3>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <MapPin size={20} className="text-blue-600 mt-1" />
                                <div>
                                    <p className="font-bold text-sm">Sede Administrativa</p>
                                    <p className="text-slate-500 text-sm font-light">Luanda, Angola. Rua das Missões, Bairro Central.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Navigation size={20} className="text-blue-600 mt-1" />
                                <div>
                                    <p className="font-bold text-sm">Campos Missionários</p>
                                    <p className="text-slate-500 text-sm font-light">Forte presença no Huambo, Bié, Benguela e Uíge.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-96 aspect-square bg-slate-100 rounded-full flex items-center justify-center border border-slate-200 relative">
                        <div className="text-center">
                            <span className="text-6xl font-thin text-slate-300 italic">IEIA</span>
                        </div>
                        {/* Pontos pulsantes representando províncias */}
                        <div className="absolute top-1/4 right-1/3 w-3 h-3 bg-blue-500 rounded-full animate-ping" />
                        <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping delay-300" />
                        <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-blue-600 rounded-full animate-pulse" />
                    </div>
                </div>
            </section>

            {/* --- FOOTER SIMPLES --- */}
            <footer className="py-20 border-t border-slate-100 text-center">
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    Igreja Evangélica dos Irmãos em Angola © 2026
                </p>
            </footer>
        </div>
    );
}