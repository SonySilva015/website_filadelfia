'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Book, Target, Users, BookOpen, Quote, ArrowRight, Church, Calendar, UsersRound } from 'lucide-react';
import Image from 'next/image'
import word from '@/public/img/read_bible.jpg'
import vida from "@/public/livros/va.jpg"
import ce from "@/public/livros/es.jpg"
import ob1 from "@/public/livros/ob1.jpg"
import ob2 from "@/public/livros/ob2.jpg"
import ob3 from "@/public/livros/ob3.jpg"
import ob4 from "@/public/livros/ob4.jpg"
import ob5 from "@/public/livros/ob5.jpg"
import ob6 from "@/public/livros/ob6.jpg"
import estudo from '@/public/img/esrudo.jpg'

const objetivos = [
    {
        icon: <Target size={20} strokeWidth={1.5} />,
        titulo: "Profundidade Teológica",
        desc: "Desenvolver uma compreensão sólida das Escrituras, respeitando o contexto histórico, cultural e teológico de cada livro da Bíblia."
    },
    {
        icon: <Users size={20} strokeWidth={1.5} />,
        titulo: "Aplicação Prática",
        desc: "Fortalecer a fé, estimular uma vida de oração, santidade e comunhão com Deus através da prática dos princípios bíblicos."
    },
    {
        icon: <BookOpen size={20} strokeWidth={1.5} />,
        titulo: "Crescimento Pessoal",
        desc: "Preparar cristãos maduros, capazes de servir à igreja, compartilhar o Evangelho e influenciar positivamente a sociedade."
    }
];

// ===== LIVROS SEPARADOS =====

// NOVICIADOS (livros para novos convertidos / curso pré-batismal)
const livrosNoviciados = [
    {
        titulo: "Vida Abundante",
        categoria: "Curso Pré-Batismal",
        img: vida
    },
    {
        titulo: "Crescimento Espiritual",
        categoria: "Discipulado Inicial",
        img: ce
    },
    {
        titulo: "Panorama do Antigo Testamento",
        categoria: "Introdução Bíblica",
        img: ''
    },
    {
        titulo: "Panorama do Novo Testamento",
        categoria: "Introdução Bíblica",
        img: ''
    },
    {
        titulo: "Salvação",
        categoria: "Doutrina Básica",
        img: ''
    },
    {
        titulo: "Espírito Santo",
        categoria: "Doutrina Básica",
        img: ''
    },
];

// OBREIROS (formação avançada)
const livrosObreiros = [
    {
        titulo: "Seja um Obreiro Aprovado 1",
        categoria: "formação de lideres",
        img: ob1
    },
    {
        titulo: "Seja um Obreiro Aprovado 2",
        categoria: "formação de lideres",
        img: ob2
    },
    {
        titulo: "Seja um Obreiro Aprovado 3",
        categoria: "formação de lideres",
        img: ob3
    },
    {
        titulo: "Seja um Obreiro Aprovado 4",
        categoria: "formação de lideres",
        img: ob4
    },
    {
        titulo: "Seja um Obreiro Aprovado 5",
        categoria: "formação de lideres",
        img: ob5
    },
    {
        titulo: "Seja um Obreiro Aprovado 6",
        categoria: "formação de lideres",
        img: ob6
    }
];



export default function EstudoBiblicoPage() {
    return (
        <div className="min-h-screen bg-gray-100 text-slate-900 selection:bg-slate-100">

            {/* --- HERO: O CONCEITO --- */}
            <header className="pt-40 pb-24 px-6 border-b border-slate-50 bg-slate-600 relative">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={word}
                        fill
                        alt="Fundo Bíblico"
                        className="object-cover w-full h-full opacity-40"
                    />
                </div>
                <div className='absolute inset-0 z-8 bg-linear-to-t from-slate-950 to-slate-500/50'></div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-8xl text-white leading-[0.9] mb-12">
                            A Palavra como <br />
                            <span className="font-medium">fundamento vivo.</span>
                        </h1>
                        <p className="text-xl text-slate-100 leading-relaxed max-w-2xl">
                            O ensino da Palavra de Deus é um dos pilares da nossa igreja. Através dos estudos bíblicos buscamos formar discípulos maduros, fortalecer a fé, desenvolver líderes e conduzir cada cristão a um relacionamento mais profundo com Cristo.
                        </p>
                    </motion.div>
                </div>
            </header>

            {/* --- O QUE É E COMO É DIRIGIDO --- */}
            <section className="py-24 px-6 max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                    <div>
                        <h3 className="text-3xl mb-6">Como Estudamos?</h3>
                        <div className="space-y-6 text-slate-500 font-light text-xl">
                            <p>
                                Nossos estudos são organizados por níveis de aprendizagem e conduzidos por orientadores preparados, comprometidos com a fidelidade às Escrituras. Cada turma reúne alunos em um ambiente de ensino, participação e comunhão, onde o aprendizado acontece por meio de exposições bíblicas, momentos de perguntas, debates, avaliações e aplicação prática da Palavra de Deus.

                                Acreditamos que estudar a Bíblia vai além da aquisição de conhecimento. Nosso objetivo é formar discípulos que vivam aquilo que aprendem e sejam instrumentos de Deus na igreja, na família e na sociedade.                            </p>
                        </div>
                    </div>

                    <div className="bg-slate-50 p-10 rounded-[2.5rem] flex flex-col justify-center border border-slate-100">
                        <Quote size={40} className="text-slate-200 mb-6" />
                        <p className="text-lg text-slate-700 leading-relaxed">
                            "Lâmpada para os meus pés é tua palavra, e luz para o meu caminho."
                        </p>
                        <span className="mt-4 text-xs font-bold uppercase tracking-tighter text-slate-400">— Salmos 119:105</span>
                    </div>
                </div>
            </section>

            {/* --- OBJETIVOS (CARDS MINIMALISTAS) --- */}
            <section className="py-10 bg-slate-50/50">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl font-bold uppercase tracking-widest text-slate-950 mb-16 text-center">
                        Nossos Objetivos
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {objetivos.map((obj, i) => (
                            <div key={i} className="group">
                                <div className="text-slate-900 mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {obj.icon}
                                </div>
                                <h4 className="text-sm font-bold mb-3 uppercase tracking-tight">{obj.titulo}</h4>
                                <p className="text-sm text-slate-500 font-light leading-relaxed">
                                    {obj.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============================================================ */}
            {/* ===== LIVROS - NOVICIADOS ===== */}
            {/* ============================================================ */}
            <section className="py-20 bg-slate-100 border-t border-slate-200">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">

                        <h2 className="text-4xl md:text-5xl text-slate-900 mb-4">
                            Noviciados
                        </h2>
                        <p className="text-slate-500 font-light max-w-xl mx-auto">
                            Curso preparatório para novos convertidos e candidatos ao batismo.
                            Fundamentos essenciais da fé cristã.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                        {livrosNoviciados.map((livro, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="group cursor-pointer"
                            >
                                <div className="aspect-3/4 relative overflow-hidden rounded-md shadow-sm  transition-colors">
                                    {livro.img ? (
                                        <Image
                                            src={livro.img}
                                            alt={livro.titulo}
                                            fill
                                            className="object-cover group-hover:scale-105 transition duration-500"
                                        />
                                    ) : (
                                        <div className="aspect-3/4 rounded-md bg-gray-950 flex items-center justify-center border border-slate-200 group-hover:shadow-lg transition-all duration-500">
                                            <Book size={40} className="text-emerald-400 group-hover:text-emerald-600 transition-colors" />
                                        </div>
                                    )}
                                </div>
                                <h4 className="mt-4 text-md font-semibold text-slate-900 text-center">
                                    {livro.titulo}
                                </h4>
                                <p className="text-xs text-emerald-600 text-center font-medium uppercase tracking-wide">
                                    {livro.categoria}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============================================================ */}
            {/* ===== LIVROS - OBREIROS ===== */}
            {/* ============================================================ */}
            <section className="py-20 bg-gray-800 border-t border-gray-700">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">

                        <h2 className="text-4xl md:text-5xl text-white mb-4">
                            Obreiros Aprovados
                        </h2>
                        <p className="text-slate-300 font-light max-w-xl mx-auto">
                            Formação teológica e prática para líderes, obreiros e aqueles que desejam servir com excelência.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                        {livrosObreiros.map((livro, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="group cursor-pointer"
                            >
                                <div className="aspect-3/4 relative overflow-hidden rounded-md shadow-sm transition-colors">
                                    {livro.img ? (
                                        <Image
                                            src={livro.img}
                                            alt={livro.titulo}
                                            fill
                                            className="object-cover group-hover:scale-105 transition duration-500"
                                        />
                                    ) : (
                                        <div className="aspect-3/4 rounded-md bg-gray-950 flex items-center justify-center border border-slate-200 group-hover:shadow-lg transition-all duration-500">
                                            <Book size={40} className="text-amber-400 group-hover:text-amber-500 transition-colors" />
                                        </div>
                                    )}
                                </div>
                                <h4 className="mt-4 text-md font-semibold text-white text-center">
                                    {livro.titulo}
                                </h4>
                                <p className="text-xs text-amber-400 text-center font-medium uppercase tracking-wide">
                                    {livro.categoria}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============================================================ */}
            {/* ===== ESTUDO BÍBLICO DOMINICAL PARA ADULTOS ===== */}
            {/* ============================================================ */}
            <section
                className="relative py-24 border-t border-slate-200 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${estudo.src})`,
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/85"></div>

                <div className="relative max-w-5xl mx-auto px-6">
                    <div className="text-center">

                        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                            Estudo Bíblico Dominical <br />
                            <span className="text-blue-400">para Adultos</span>
                        </h2>

                        <p className="text-lg text-slate-200 leading-8 max-w-3xl mx-auto">
                            A Escola Bíblica Dominical (EBD) é um momento dedicado ao ensino
                            sistemático da Palavra de Deus, realizado todos os domingos.
                            Nosso objetivo é proporcionar um estudo aprofundado das Escrituras,
                            fortalecer a fé e incentivar a aplicação dos princípios bíblicos na
                            vida diária.
                        </p>

                        <div className="mt-10 max-w-2xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 p-8 text-left">
                            <h3 className="text-xl font-semibold text-white mb-5">
                                O que você encontrará nas aulas?
                            </h3>

                            <ul className="space-y-4 text-slate-200">
                                <li className="flex items-start gap-3">
                                    <span className="text-blue-400 text-xl">✓</span>
                                    <span>Estudos organizados por temas e passagens bíblicas.</span>
                                </li>

                                <li className="flex items-start gap-3">
                                    <span className="text-blue-400 text-xl">✓</span>
                                    <span>Classes direcionadas ao público adulto, jovens e adolescentes.</span>
                                </li>

                                <li className="flex items-start gap-3">
                                    <span className="text-blue-400 text-xl">✓</span>
                                    <span>Momentos para perguntas, participação e debates edificantes.</span>
                                </li>

                                <li className="flex items-start gap-3">
                                    <span className="text-blue-400 text-xl">✓</span>
                                    <span>Ensino fundamentado na Bíblia, com aplicações práticas para o dia a dia.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}