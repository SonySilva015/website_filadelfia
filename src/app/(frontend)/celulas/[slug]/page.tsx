'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Clock,
    MapPin,
    ArrowLeft,
    Users,
    Heart,
    Calendar,
    User,
    BookOpen,
    MessageCircle,
    Phone,
    Mail,
    Share2,
    ChevronRight,
    X,
    ChevronLeft,
    VenetianMask as Mask,
    Gem,
    Droplets,
    Crown
} from 'lucide-react';
import { celulas } from '../data';

export default function CelulaDetalhePage() {
    const params = useParams();
    const slug = params.slug as string;
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    const celula = celulas.find(c => c.slug === slug);

    if (!celula) {
        notFound();
    }

    const openLightbox = (index: number) => setSelectedImage(index);
    const closeLightbox = () => setSelectedImage(null);
    const nextImage = () => {
        if (selectedImage !== null && selectedImage < celula.galeria.length - 1) {
            setSelectedImage(selectedImage + 1);
        }
    };
    const prevImage = () => {
        if (selectedImage !== null && selectedImage > 0) {
            setSelectedImage(selectedImage - 1);
        }
    };

    // Ícone baseado no nome da célula
    const getIcon = () => {
        switch (celula.slug) {
            case 'mensagem-divina': return <BookOpen size={24} />;
            case 'geracao-eleita': return <Crown size={24} />;
            case 'discipulo-de-esperanca': return <Heart size={24} />;
            case 'manancial-de-amor': return <Droplets size={24} />;
            case 'berianos': return <BookOpen size={24} />;
            case 'joias-de-cristo': return <Gem size={24} />;
            case 'nova-alianca': return <Heart size={24} />;
            default: return <Users size={24} />;
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            {/* --- HERO COM IMAGEM DE CAPA --- */}
            <section className="relative h-[60vh] md:h-[70vh] flex items-end pb-16 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={celula.imagemCapa}
                        alt={celula.nome}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/60 to-transparent" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
                    <Link
                        href="/celulas"
                        className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors text-sm bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full"
                    >
                        <ArrowLeft size={16} />
                        Voltar para células
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl"
                    >
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                            <span className="px-4 py-1.5 bg-purple-600 rounded-full text-white text-xs font-bold uppercase tracking-wider">
                                {celula.tag}
                            </span>
                            <span className="text-white/60 text-sm">•</span>
                            <span className="text-white/80 text-sm flex items-center gap-1 bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full">
                                <Users size={14} />
                                {celula.numeroMembros} membros
                            </span>
                            <span className="text-white/80 text-sm flex items-center gap-1 bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full">
                                <Calendar size={14} />
                                {celula.idade}
                            </span>
                            <span className="text-white/80 text-sm flex items-center gap-1 bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full">
                                <User size={14} />
                                {celula.genero}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
                            {celula.nome}
                        </h1>

                        <p className="text-lg md:text-xl text-white/80 max-w-2xl">
                            {celula.desc}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* --- CONTEÚDO PRINCIPAL --- */}
            <section className="py-16 px-6 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Coluna principal - 2/3 */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Sobre a célula */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-purple-100 rounded-xl text-purple-600">
                                    {getIcon()}
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900">Sobre esta célula</h2>
                            </div>

                            <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                                {celula.descCompleta}
                            </p>

                            <div className="grid sm:grid-cols-2 gap-5">
                                <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
                                    <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                                        <Calendar size={18} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 mb-1">Horário</p>
                                        <p className="text-sm font-semibold text-slate-900">{celula.horario}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
                                    <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                                        <MapPin size={18} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 mb-1">Local</p>
                                        <p className="text-sm font-semibold text-slate-900">{celula.local}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
                                    <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                                        <User size={18} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 mb-1">Líder(es)</p>
                                        <p className="text-sm font-semibold text-slate-900">{celula.lider}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
                                    <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                                        <Calendar size={18} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 mb-1">Fundação</p>
                                        <p className="text-sm font-semibold text-slate-900">{celula.fundacao}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Objetivos */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm"
                        >
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Objetivos</h2>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {celula.objetivos.map((objetivo, idx) => (
                                    <div key={idx} className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
                                        <div className="p-1.5 bg-purple-100 rounded-full text-purple-600 shrink-0 mt-0.5">
                                            <ChevronRight size={14} />
                                        </div>
                                        <span className="text-sm text-slate-700">{objetivo}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>



                        {/* Galeria */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm"
                        >
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Galeria</h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {celula.galeria.map((img, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => openLightbox(idx)}
                                        className="relative aspect-square rounded-xl overflow-hidden group hover:shadow-xl transition-all"
                                    >
                                        <img
                                            src={img.url}
                                            alt={img.titulo}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <p className="absolute bottom-2 left-2 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                                            {img.titulo}
                                        </p>
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Sidebar - 1/3 */}
                    <div className="space-y-6">
                        {/* Perfil e contato */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm sticky top-24"
                        >
                            {/* Imagem de perfil */}
                            <div className="relative w-32 h-32 mx-auto -mt-16 mb-4">
                                <img
                                    src={celula.imagemPerfil}
                                    alt={celula.nome}
                                    className="w-full h-full object-cover rounded-2xl border-4 border-white shadow-xl"
                                />
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 text-center mb-1">
                                {celula.nome}
                            </h3>
                            <p className="text-sm text-slate-500 text-center mb-6">
                                {celula.tag}
                            </p>

                            {/* Informações de contato */}
                            <div className="space-y-4 mb-6">
                                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                                    <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                                        <Phone size={16} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500">Contato</p>
                                        <p className="text-sm font-medium text-slate-900">{celula.contato}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                                    <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                                        <Mail size={16} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500">Email</p>
                                        <p className="text-sm font-medium text-slate-900 break-all">
                                            {celula.slug}@ieia.ao
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 mb-3 shadow-lg shadow-purple-600/25">
                                <MessageCircle size={18} />
                                Quero participar
                            </button>

                            <button className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2">
                                <Share2 size={16} />
                                Compartilhar
                            </button>

                            <div className="mt-6 pt-4 border-t border-slate-200">
                                <p className="text-xs text-slate-400 text-center">
                                    Todas as células são abertas a visitantes.
                                    Venha conhecer!
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Lightbox para galeria */}
            <AnimatePresence>
                {selectedImage !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
                        onClick={closeLightbox}
                    >
                        <button
                            onClick={closeLightbox}
                            className="absolute top-4 right-4 text-white/60 hover:text-white z-10"
                        >
                            <X size={32} />
                        </button>

                        {selectedImage > 0 && (
                            <button
                                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                                className="absolute left-4 text-white/60 hover:text-white"
                            >
                                <ChevronLeft size={48} />
                            </button>
                        )}

                        {selectedImage < celula.galeria.length - 1 && (
                            <button
                                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                                className="absolute right-4 text-white/60 hover:text-white"
                            >
                                <ChevronRight size={48} />
                            </button>
                        )}

                        <motion.div
                            key={selectedImage}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="max-w-5xl max-h-[80vh]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={celula.galeria[selectedImage].url}
                                alt={celula.galeria[selectedImage].titulo}
                                className="w-full h-full object-contain rounded-2xl"
                            />
                            <p className="text-white text-center mt-4">
                                {celula.galeria[selectedImage].titulo}
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}