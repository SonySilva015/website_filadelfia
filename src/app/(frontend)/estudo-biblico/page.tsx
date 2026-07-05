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
        categoria: "Formação de Obreiros",
        img: ob1
    },
    {
        titulo: "Seja um Obreiro Aprovado 2",
        categoria: "Formação de Obreiros",
        img: ob2
    },
    {
        titulo: "Seja um Obreiro Aprovado 3",
        categoria: "Formação de Obreiros",
        img: ob3
    },
    {
        titulo: "Seja um Obreiro Aprovado 4",
        categoria: "Formação de Obreiros",
        img: ob4
    },
    {
        titulo: "Seja um Obreiro Aprovado 5",
        categoria: "Formação de Obreiros",
        img: ob5
    },
    {
        titulo: "Seja um Obreiro Aprovado 6",
        categoria: "Formação de Obreiros",
        img: ob6
    }
];

// ===== ESTUDO DOMINICAL PARA ADULTOS =====
const estudosDominical = [
    {
        titulo: "A Jornada da Fé",
        desc: "Estudo sobre os patriarcas e a aliança de Deus com Abraão, Isaque e Jacó.",
        vagas: 25,
        horario: "Domingos - 09:00h"
    },
    {
        titulo: "As Cartas de Paulo",
        desc: "Uma análise profunda das epístolas paulinas e sua aplicação para a igreja atual.",
        vagas: 30,
        horario: "Domingos - 10:30h"
    },
    {
        titulo: "Apocalipse: Esperança Viva",
        desc: "Desvendando as profecias do Apocalipse com foco na esperança e vitória em Cristo.",
        vagas: 20,
        horario: "Domingos - 19:00h"
    },
    {
        titulo: "Vida em Comunidade",
        desc: "Estudo prático sobre os princípios de comunhão, serviço e amor fraternal na igreja.",
        vagas: 35,
        horario: "Domingos - 08:00h"
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
                        <p className="text-xl text-slate-100 font-light leading-relaxed max-w-2xl">
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
                                <div className="aspect-3/4 relative overflow-hidden rounded-md shadow-sm border-2 border-emerald-200 hover:border-emerald-400 transition-colors">
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
                                <div className="aspect-3/4 relative overflow-hidden rounded-md shadow-sm border-2 border-amber-700/40 hover:border-amber-500 transition-colors">
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
            <section className="py-24 bg-white border-t border-slate-200">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">

                        <h2 className="text-4xl md:text-5xl text-slate-900 mb-4">
                            Estudo Bíblico Dominical <br />
                            <span className="text-blue-600 font-light">para Adultos</span>
                        </h2>
                        <p className="text-slate-500 font-light max-w-xl mx-auto">
                            Aulas presenciais todos os domingos, com temas relevantes para a vida cristã adulta.
                            Participe e cresça em comunidade!
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {estudosDominical.map((estudo, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-shadow duration-300 hover:border-blue-200 group"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="bg-blue-100 p-2.5 rounded-xl text-blue-600 group-hover:bg-blue-200 transition-colors">
                                        <Church size={20} />
                                    </div>
                                    <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                                        {estudo.vagas} vagas
                                    </span>
                                </div>

                                <h4 className="text-xl font-bold text-slate-900 mb-2">
                                    {estudo.titulo}
                                </h4>
                                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                                    {estudo.desc}
                                </p>

                                <div className="flex items-center gap-2 text-sm text-slate-400 font-medium border-t border-slate-200 pt-4 mt-2">
                                    <Calendar size={16} />
                                    <span>{estudo.horario}</span>
                                </div>

                                <button className="mt-4 w-full py-2.5 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 group">
                                    Quero participar
                                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </motion.div>
                        ))}
                    </div>

                    {/* Chamada extra para inscrição */}
                    <div className="mt-16 text-center bg-linear-to-r from-blue-50 to-indigo-50 rounded-3xl p-10 border border-blue-100">
                        <UsersRound size={40} className="text-blue-600 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">
                            Faça parte da nossa comunidade
                        </h3>
                        <p className="text-slate-600 max-w-lg mx-auto">
                            Inscreva-se em um dos estudos e venha crescer na graça e no conhecimento do Senhor Jesus Cristo.
                        </p>
                        <button className="mt-6 px-8 py-3 bg-blue-700 text-white rounded-full font-semibold hover:bg-blue-800 transition-colors shadow-lg shadow-blue-200">
                            Ver todas as turmas
                        </button>
                    </div>
                </div>
            </section>

        </div>
    );
}