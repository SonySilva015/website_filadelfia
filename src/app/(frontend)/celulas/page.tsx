'use client'

import React from 'react';
import Link from 'next/link';

import {
    Clock,
    MapPin,
    ArrowRight,
    Users,
    Heart,
    Calendar,
    User
} from 'lucide-react';
import { celulas } from './data';

export default function CelulasPage() {
    return (
        <div className="min-h-screen bg-tertiary font-sans">
            {/* --- HERO SECTION --- */}
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-secondary">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=1600"
                        alt="Background"
                        className="w-full h-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/60 to-secondary" />
                </div>

                <div className="relative z-10 text-center px-6 max-w-5xl">
                    <div>
                        <h1 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tighter leading-none">
                            Nossas Células
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                            Pequenos grupos que se reúnem durante a semana para fortalecer a comunhão,
                            estudar a Palavra e crescer juntos.
                        </p>
                        <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm">
                            <Users size={16} />
                            <span>{celulas.length} células ativas</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- INTRODUÇÃO --- */}
            <section className="relative -mt-12 z-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-secondary/10 text-center">
                        <div className="inline-flex p-3 bg-secondary-light rounded-xl text-secondary mb-4">
                            <Heart size={28} />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-title mb-3">
                            Por que Participar de uma Célula?
                        </h2>
                        <p className="text-base md:text-lg text-body leading-relaxed max-w-2xl mx-auto">
                            Células são pequenos grupos que se reúnem durante a semana com o propósito de
                            fortalecer a comunhão entre os irmãos. Ninguém deve caminhar sozinho - o
                            crescimento real acontece através do relacionamento.
                        </p>
                    </div>
                </div>
            </section>

            {/* --- GRID DE CÉLULAS --- */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {celulas.map((celula, index) => (
                        <div
                            key={celula.id}
                            className="group bg-white rounded-2xl overflow-hidden border border-secondary/20 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                        >
                            {/* Imagem de capa */}
                            <Link href={`/celulas/${celula.slug}`} className="block relative h-56 overflow-hidden">
                                <img
                                    src={celula.imagemCapa}
                                    alt={celula.nome}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent opacity-60" />

                                {/* Badge da tag */}
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider text-secondary">
                                    {celula.tag}
                                </div>

                                {/* Imagem de perfil miniatura */}
                                <div className="absolute -bottom-6 left-4 w-16 h-16 rounded-xl border-4 border-white shadow-lg overflow-hidden">
                                    <img
                                        src={celula.imagemPerfil}
                                        alt={celula.nome}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </Link>

                            {/* Conteúdo */}
                            <div className="pt-10 p-6 flex flex-col flex-1">
                                <h3 className="text-xl font-bold text-title mb-2 group-hover:text-secondary transition-colors">
                                    {celula.nome}
                                </h3>

                                <p className="text-sm text-body mb-4 leading-relaxed line-clamp-2">
                                    {celula.descLonga}
                                </p>

                                {/* Informações rápidas */}
                                <div className="grid grid-cols-2 gap-2 mb-6">
                                    <div className="flex items-center gap-1.5 text-xs text-body bg-tertiary p-2 rounded-lg">
                                        <Calendar size={12} className="text-secondary" />
                                        <span className="truncate">{celula.horario}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-xs text-body bg-tertiary p-2 rounded-lg">
                                        <MapPin size={12} className="text-secondary" />
                                        <span className="truncate">{celula.local.split('-')[0]}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-xs text-body bg-tertiary p-2 rounded-lg">
                                        <Users size={12} className="text-secondary" />
                                        <span>{celula.numeroMembros} membros</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-xs text-body bg-tertiary p-2 rounded-lg">
                                        <User size={12} className="text-secondary" />
                                        <span>{celula.idade}</span>
                                    </div>
                                </div>

                                {/* Botão */}
                                <Link
                                    href={`/celulas/${celula.slug}`}
                                    className="mt-auto w-full bg-blue-700 hover:bg-secondary-hover text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                                >
                                    Ver detalhes
                                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}