'use client'

import React from 'react';
import { motion } from 'framer-motion';
import {
    Clock,
    MapPin,
    ArrowRight,
    Users,
    Heart
} from 'lucide-react';

const grupos = [
    {
        nome: "Jovens de Valor",
        desc: "Liderança e princípios bíblicos para a vida adulta.",
        descLonga: "Um grupo focado em desenvolver líderes com caráter cristão, preparando jovens para os desafios da vida adulta.",
        hora: "Sábados, 19h",
        imagem: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800",
        local: "Sala 203 - Prédio Principal",
        tag: "Liderança"
    },
    {
        nome: "Conexão Radical",
        desc: "Louvor e comunhão para adolescentes (13-17 anos).",
        descLonga: "Um ambiente vibrante onde os adolescentes podem expressar sua fé de forma autêntica com louvor e mensagens relevantes.",
        hora: "Sextas, 20h",
        imagem: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800",
        local: "Auditório Jovem",
        tag: "Adolescentes"
    },
    {
        nome: "Universitários",
        desc: "Debates sobre fé, ciência e carreira no meio acadêmico.",
        descLonga: "Espaço de diálogo entre fé e academia. Discutimos temas atuais e desafios da carreira sob uma perspectiva bíblica.",
        hora: "Quintas, 19h",
        imagem: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
        local: "Sala de Estudos",
        tag: "Acadêmico"
    },
    {
        nome: "Geração Eleita",
        desc: "Estudo bíblico profundo e discipulado individual.",
        descLonga: "Comprometidos com o estudo sistemático da Palavra e o crescimento espiritual consistente através de pequenos grupos.",
        hora: "Terças, 19:30h",
        imagem: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&q=80&w=800",
        local: "Sala 105",
        tag: "Discipulado"
    },
    {
        nome: "Ide & Fazendo",
        desc: "Ações sociais e evangelismo criativo na cidade.",
        descLonga: "Fé em ação! Organizamos projetos sociais e visitas a comunidades carentes transformando palavras em ações.",
        hora: "Sábados, 14h",
        imagem: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=800",
        local: "Hall de Entrada",
        tag: "Social"
    },
    {
        nome: "Artes & Adoração",
        desc: "Teatro, dança e música para o serviço no reino.",
        descLonga: "Desenvolvemos apresentações artísticas que tocam corações. Um lugar para expressar sua criatividade para Deus.",
        hora: "Domingos, 16h",
        imagem: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=800",
        local: "Sala de Artes",
        tag: "Criativo"
    }
];

export default function SecaoJovens() {
    return (
        <div className="min-h-screen bg-slate-50 font-sans selection:bg-purple-100 selection:text-purple-900">
            {/* --- HERO SECTION --- */}
            <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-slate-950">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=1600"
                        alt="Background"
                        className="w-full h-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/60 to-slate-950" />
                </div>

                <div className="relative z-10 text-center px-6 max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block py-1 px-4 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-bold mb-6 tracking-widest uppercase">
                            Vida em Comunidade
                        </span>
                        <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none">
                            Nossa <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Juventude</span>
                        </h1>
                        <p className="text-lg md:text-2xl text-slate-300 font-medium max-w-2xl mx-auto leading-relaxed">
                            Descubra o seu propósito e conecte-se com pessoas que compartilham a mesma jornada.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* --- INTRODUÇÃO --- */}
            <section className="relative -mt-16 z-20 pb-16 px-6">
                <div className="max-w-4xl mx-auto bg-white rounded-[2.5rem] p-10 md:p-14 shadow-2xl shadow-slate-200 border border-slate-100 text-center">
                    <div className="flex justify-center mb-6">
                        <div className="p-3 bg-purple-100 rounded-2xl text-purple-600">
                            <Users size={32} />
                        </div>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">Por que caminhar conosco?</h2>
                    <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Nossos grupos são o coração da nossa igreja. Acreditamos que ninguém deve caminhar sozinho e que o crescimento real acontece através do <span className="text-purple-600 font-bold">relacionamento</span>.
                    </p>
                </div>
            </section>

            {/* --- GRID DE GRUPOS --- */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <div className="mb-16">
                    <h3 className="text-sm font-bold text-purple-600 uppercase tracking-[0.2em] mb-2">Explore as opções</h3>
                    <h2 className="text-4xl font-black text-slate-900 tracking-tight">Nossos Grupos</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {grupos.map((grupo, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-purple-900/10 transition-all duration-500 flex flex-col h-full"
                        >
                            {/* Header do Card com Imagem */}
                            <div className="relative h-60 overflow-hidden">
                                <img
                                    src={grupo.imagem}
                                    alt={grupo.nome}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-xl text-[10px] font-black uppercase tracking-wider text-slate-800">
                                    {grupo.tag}
                                </div>
                            </div>

                            {/* Conteúdo do Card */}
                            <div className="p-8 flex flex-col flex-1">
                                <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-purple-600 transition-colors">
                                    {grupo.nome}
                                </h3>

                                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1 italic">
                                    {grupo.descLonga}
                                </p>

                                {/* Meta Infos Estáticas */}
                                <div className="space-y-3 mb-8">
                                    <div className="flex items-center gap-3 text-slate-500">
                                        <div className="p-1.5 bg-slate-100 rounded-lg text-purple-600">
                                            <Clock size={16} />
                                        </div>
                                        <span className="text-xs font-bold tracking-tight uppercase">{grupo.hora}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-slate-500">
                                        <div className="p-1.5 bg-slate-100 rounded-lg text-purple-600">
                                            <MapPin size={16} />
                                        </div>
                                        <span className="text-xs font-bold tracking-tight uppercase">{grupo.local}</span>
                                    </div>
                                </div>

                                <button className="w-full bg-slate-950 hover:bg-purple-600 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-lg shadow-slate-200">
                                    Quero participar
                                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* --- CTA FINAL --- */}
            <section className="py-24 px-6">
                <div className="max-w-5xl mx-auto relative overflow-hidden bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center shadow-3xl shadow-purple-900/10">
                    {/* Background decorativo */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600 rounded-full blur-[120px] opacity-20 -mr-32 -mt-32" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600 rounded-full blur-[120px] opacity-20 -ml-32 -mb-32" />

                    <div className="relative z-10">
                        <Heart className="mx-auto text-purple-500 mb-6" size={48} />
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
                            Há um lugar reservado <br />
                            <span className="text-purple-400">especialmente para você.</span>
                        </h2>
                        <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
                            Não se preocupe com formalidades. Venha como você está e descubra o que Deus preparou para esta geração.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="px-10 py-5 bg-white text-slate-900 font-black rounded-2xl hover:bg-purple-50 transition-all shadow-xl">
                                Agendar Minha Visita
                            </button>
                            <button className="px-10 py-5 bg-slate-800 text-white font-black rounded-2xl border border-slate-700 hover:bg-slate-700 transition-all">
                                Falar com um Líder
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}