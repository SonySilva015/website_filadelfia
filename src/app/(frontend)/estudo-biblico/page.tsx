'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Book, Target, Users, BookOpen, Quote, ArrowRight } from 'lucide-react';
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
        desc: "Ir além da superfície e entender o contexto histórico, cultural e original das escrituras."
    },
    {
        icon: <Users size={20} strokeWidth={1.5} />,
        titulo: "Aplicação Prática",
        desc: "Traduzir verdades milenares em respostas para os dilemas e desafios do século XXI."
    },
    {
        icon: <BookOpen size={20} strokeWidth={1.5} />,
        titulo: "Crescimento Pessoal",
        desc: "Equipar cada indivíduo para que tenha autonomia na leitura e interpretação da Bíblia."
    }
];
const livros = [
    {
        titulo: "Vida Abundante",
        categoria: "Vida Cristã",
        img: vida
    },
    {
        titulo: "Crescimento Espiritual",
        categoria: "Discipulado",
        img: ce
    },
    {
        titulo: "Panorama do Antigo Testamento",
        categoria: "Teologia Bíblica",
        img: ''
    },
    {
        titulo: "Panorama do Novo Testamento",
        categoria: "Teologia Bíblica",
        img: ''
    },
    {
        titulo: "Salvação",
        categoria: "Doutrina",
        img: ''
    },
    {
        titulo: "Espírito Santo",
        categoria: "Doutrina",
        img: ''
    },

    /* SERIE DE FORMAÇÃO DE OBREIROS */

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
]
export default function EstudoBiblicoPage() {
    return (
        <div className="min-h-screen bg-gray-100 text-slate-900 selection:bg-slate-100">

            {/* --- HERO: O CONCEITO --- */}
            <header className="pt-40 pb-24 px-6 border-b border-slate-50 bg-slate-600 relative">
                <div className="absolute inset-0 z-0">
                    {/* Imagem de fundo */}
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
                            Nossos estudos bíblicos não são apenas palestras; são mergulhos guiados na mente de Deus,
                            buscando clareza em um mundo de ruídos.
                        </p>
                    </motion.div>
                </div>
            </header>

            {/* --- O QUE É E COMO É DIRIGIDO --- */}
            <section className="py-24 px-6 max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                    <div>

                        <h3 className="text-2xl mb-6 ">Como é dirigido?</h3>
                        <div className="space-y-6 text-slate-500 font-light leading-relaxed">
                            <p>
                                O estudo é conduzido de forma **expositiva**. Isso significa que pegamos um livro ou tema específico e o analisamos versículo por versículo.
                            </p>
                            <p>
                                A dinâmica permite a interação: abrimos espaço para perguntas honestas e diálogos que conectam a fé com a razão. É um ambiente de aprendizado coletivo, liderado por pastores e mestres com formação teológica.
                            </p>
                        </div>
                    </div>

                    <div className="bg-slate-50 p-10 rounded-[2.5rem] flex flex-col justify-center border border-slate-100">
                        <Quote size={40} className="text-slate-200 mb-6" />
                        <p className="text-lg font-serif italic text-slate-700 leading-relaxed">
                            "Lâmpada para os meus pés é tua palavra, e luz para o meu caminho."
                        </p>
                        <span className="mt-4 text-xs font-bold uppercase tracking-tighter text-slate-400">— Salmos 119:105</span>
                    </div>
                </div>
            </section>

            {/* --- OBJETIVOS (CARDS MINIMALISTAS) --- */}
            <section className="py-24 bg-slate-50/50">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-16 text-center">
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

            {/* --- ASSUNTO ATUAL --- */}
            <section className="py-32 px-6 max-w-4xl mx-auto border-t border-slate-100">
                <div className="flex flex-col md:flex-row gap-16 items-start">
                    <div className="flex-1">
                        <span className="inline-block px-3 py-1 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest mb-6">
                            Em Estudo
                        </span>
                        <h2 className="text-3xl font-normal tracking-tight mb-6">As Parábolas de Jesus: Mistérios do Reino</h2>
                        <p className="text-slate-500 font-light leading-relaxed mb-8">
                            Neste trimestre, estamos explorando as histórias curtas que Jesus usou para explicar realidades espirituais complexas. O que elas significavam para os ouvintes originais e o que dizem para nós hoje?
                        </p>
                        <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:gap-4 transition-all">
                            Baixar material de apoio <ArrowRight size={16} />
                        </button>
                    </div>
                    <div className="w-full md:w-64 h-80 bg-slate-200 rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                        <img
                            src="https://images.unsplash.com/photo-1507434965515-61970f2bd7c6?auto=format&fit=crop&q=80&w=600"
                            className="w-full h-full object-cover"
                            alt="Bíblia e café"
                        />
                    </div>
                </div>
            </section>

            {/* --- LIVROS DE ESTUDO --- */}

            {/* LIVROS DE ESTUDO */}

            <section className="py-32 border-t bg-gray-800 border-slate-100">

                <div className="max-w-6xl mx-auto px-6">

                    <div className="text-center mb-20">

                        <h2 className="text-4xl md:text-5xl text-white mb-6">
                            Livros de Formação Bíblica
                        </h2>

                        <p className="text-slate-500 font-light max-w-xl mx-auto">
                            Estes livros fazem parte do programa de discipulado e formação
                            espiritual da igreja.
                        </p>

                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 ">

                        {livros.map((livro, i) => (

                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="group cursor-pointer"
                            >

                                <div className="aspect-3/4 relative overflow-hidden rounded-md shadow-sm">
                                    {livro.img ?
                                        <Image
                                            src={livro.img}
                                            alt={livro.titulo}
                                            fill
                                            className="object-cover group-hover:scale-105 transition duration-500"
                                        /> : (<div className="aspect-3/4 rounded-md bg-gray-950 flex items-center justify-center border border-slate-200 group-hover:shadow-lg transition-all duration-500">

                                            <Book size={40} className="text-slate-400 group-hover:text-slate-700 transition-colors" />

                                        </div>)}

                                </div>

                                <h4 className="mt-4 text-md font-semibold text-white text-center">
                                    {livro.titulo}
                                </h4>

                            </motion.div>

                        ))}

                    </div>

                </div>

            </section >

            {/* --- AGENDA SIMPLES --- */}
            < footer className="py-20 px-6 bg-white text-center" >
                <div className="max-w-xl mx-auto border border-slate-100 p-12 rounded-[3rem] shadow-sm">
                    <h3 className="text-xl font-medium mb-2">Junte-se a nós</h3>
                    <p className="text-slate-400 text-sm mb-8 font-light italic tracking-tight">Toda Quinta-feira às 19:30h</p>
                    <button className="bg-slate-950 text-white px-10 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-slate-800 transition-colors">
                        Enviar uma dúvida teológica
                    </button>
                </div>
            </footer >
        </div >
    );
}