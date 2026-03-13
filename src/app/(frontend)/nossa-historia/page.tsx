'use client'

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { BookOpen, Users, Anchor, Globe, Heart, MapPin, Quote as QuoteIcon, Award } from 'lucide-react';

const marcos = [
    {
        ano: "1884",
        titulo: "As Raízes e Frederick Stanley Arnott",
        desc: "O início de um legado. Inspirada no movimento europeu de 1820, a IEIA foi plantada em solo angolano por Frederick Stanley Arnott, estabelecendo uma trajetória que já soma mais de 140 anos.",
        image: "/midia/IMG-20250831-WA0043.jpg",
        icon: <Anchor size={20} />
    },
    {
        ano: "1992",
        titulo: "Reconhecimento Oficial",
        desc: "Um marco institucional em 10 de abril de 1992, quando a IEIA foi formalmente reconhecida em Angola, consolidando sua presença jurídica e liberdade de expansão ministerial.",
        image: "/midia/IMG-20250831-WA0043.jpg",
        icon: <Award size={20} />
    },
    {
        ano: "Identidade",
        titulo: "Movimento Global dos Irmãos",
        desc: "Não caminhamos sós. Fazemos parte de uma fraternidade global presente em mais de 120 países, mantendo a essência da autonomia local e o governo bíblico.",
        image: "/midia/IMG-20250831-WA0043.jpg",
        icon: <Globe size={20} />
    },
    {
        ano: "Impacto",
        titulo: "Formação Ética e Social",
        desc: "Muito além das quatro paredes, a IEIA é reconhecida como parceira na reconciliação nacional e no apoio social, educação e assistência às comunidades carentes.",
        image: "/midia/IMG-20250831-WA0043.jpg",
        icon: <Heart size={20} />
    }
];

export default function HistoriaPage() {
    return (
        <div className="min-h-screen bg-[#fafaf9] text-slate-900 selection:bg-amber-100">

            {/* --- HERO: 140 ANOS DE HISTÓRIA --- */}
            <header className="relative h-[80vh] flex items-center overflow-hidden bg-slate-950">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/midia/IMG-20250831-WA0043.jpg"
                        alt="História IEIA"
                        fill
                        className="object-cover opacity-30 grayscale"
                        priority
                    />
                    <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/60 to-transparent" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="max-w-3xl"
                    >
                        <div className="flex items-center gap-3 text-red-500 font-bold uppercase tracking-[0.4em] text-[10px] mb-6">
                            <div className="w-10 h-[1px] bg-amber-500" />
                            Desde 1884 em Angola
                        </div>
                        <h1 className="text-5xl md:text-8xl font-serif text-white mb-8 leading-tight">
                            Nossa História <br />
                            <span className="italic text-amber-500 font-light">IEIA</span>
                        </h1>
                        <p className="text-slate-300 text-lg md:text-xl font-light leading-relaxed mb-10 border-l-2 border-amber-500/30 pl-6">
                            Com raízes no movimento europeu e um legado construído por pioneiros,
                            a Igreja Evangélica dos Irmãos celebra mais de 140 anos de evangelização.
                        </p>
                    </motion.div>
                </div>
            </header>

            {/* --- PILARES DOUTRINÁRIOS (Cards Rápidos) --- */}
            <section className="py-20 bg-white border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                        <div className="space-y-4">
                            <div className="mx-auto w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center text-amber-600">
                                <BookOpen size={24} />
                            </div>
                            <h4 className="font-serif text-xl font-bold">Estudo Bíblico</h4>
                            <p className="text-slate-500 text-sm leading-relaxed px-4">Dedicação total ao ensino das Escrituras como base para a vida cristã.</p>
                        </div>
                        <div className="space-y-4">
                            <div className="mx-auto w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center text-amber-600">
                                <Users size={24} />
                            </div>
                            <h4 className="font-serif text-xl font-bold">Partir do Pão</h4>
                            <p className="text-slate-500 text-sm leading-relaxed px-4">Comunhão genuína e celebração da Ceia do Senhor com simplicidade.</p>
                        </div>
                        <div className="space-y-4">
                            <div className="mx-auto w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center text-amber-600">
                                <MapPin size={24} />
                            </div>
                            <h4 className="font-serif text-xl font-bold">Autonomia Local</h4>
                            <p className="text-slate-500 text-sm leading-relaxed px-4">Cada congregação local possui autonomia de governo e direção espiritual.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- TIMELINE NARRATIVA --- */}
            <main className="max-w-7xl mx-auto px-6 py-32">
                <div className="space-y-32">
                    {marcos.map((marco, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-16`}
                        >
                            <div className="w-full md:w-1/2 relative aspect-[16/10] rounded-xl overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
                                <Image
                                    src={marco.image}
                                    alt={marco.titulo}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="w-full md:w-1/2 space-y-6">
                                <span className="text-6xl font-serif italic text-red-5000/50ck">{marco.ano}</span>
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-red-500 text-white rounded-lg">{marco.icon}</div>
                                    <h3 className="text-3xl font-serif font-bold text-slate-900">{marco.titulo}</h3>
                                </div>
                                <p className="text-slate-600 text-lg leading-relaxed font-light">
                                    {marco.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </main>

            {/* --- SEDE E LOCALIZAÇÃO --- */}
            <section className="bg-slate-900 py-24 text-white overflow-hidden relative">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl font-serif mb-6 italic">Nossa Sede Central</h2>
                        <div className="space-y-4 text-slate-400 mb-8">
                            <p className="flex items-center gap-3">
                                <MapPin className="text-amber-500" />
                                Bairro Cassenda, Luanda - Angola
                            </p>
                            <p className="text-sm italic">"Um ponto de referência para a expansão do Reino de Deus em todo o território nacional."</p>
                        </div>
                    </div>
                    <div className="relative h-64 bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 flex items-center justify-center">
                        {/* Aqui você pode inserir um mapa ou uma foto da fachada da sede */}
                        <Map className="text-slate-600 w-12 h-12" />
                        <span className="absolute bottom-4 text-[10px] uppercase tracking-widest text-slate-500">Localização Estratégica</span>
                    </div>
                </div>
            </section>

            {/* --- CITAÇÃO FINAL --- */}
            <section className="py-32 text-center px-6">
                <QuoteIcon className="mx-auto mb-10 text-amber-500/20" size={64} />
                <h2 className="text-3xl md:text-5xl font-serif italic text-slate-800 max-w-4xl mx-auto leading-tight mb-12">
                    "A IEIA continua sendo uma parceira na formação ética, social e espiritual de Angola, pregando o evangelho da reconciliação."
                </h2>
                <div className="w-24 h-[1px] bg-amber-500 mx-auto" />
            </section>

            {/* --- FOOTER --- */}
            <footer className="py-20 border-t border-slate-100 text-center">
                <p className="text-[10px] font-bold uppercase tracking-[0.6em] text-slate-400">
                    Igreja Evangélica dos Irmãos em Angola • Legado Vivo
                </p>
            </footer>
        </div>
    );
}

function Map({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z" /><path d="M15 5.764v15" /><path d="M9 3.236v15" /></svg>
    )
}