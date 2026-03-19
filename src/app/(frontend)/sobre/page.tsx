'use client'

import React from 'react';
import { motion } from 'framer-motion';
import {
    Globe,
    ShieldCheck,
    Heart,
    Compass,
    Award,
    Users,
    Church,
    Calendar,
    MapPin,
    Phone,
    Mail,
    Clock,
    Navigation
} from 'lucide-react';
import Image from 'next/image';
import fundo from '@/public/img/IMG-20250831-WA0043.jpg'

// Imagens para as seções (ajuste os caminhos conforme seus arquivos)
import missaoImage from '@/public/img/Filme De Jesus Cristo.jpeg';
import visaoImage from '@/public/img/ceiaJ.jpg';
import valoresImage from '@/public/img/ceiaJ.jpg';
import comunidadeImage from '@/public/img/ceiaJ.jpg';


export const metadata = {
    title: "Sobre a Igreja Filadélfia ",
    description: "Saiba mais sobre nossa missão, visão e valores.",
    keywords: ["Igreja", "IEIA", "Filadélfia", "Angola"],
    authors: [{ name: "IEIA Filadélfia" }],
    openGraph: {
        title: "Filadélfia IEIA",
        description: "Transformando vidas pelo Evangelho",
        images: fundo,
        url: "https://ieiafiladelfia.vercel.app/",
        type: "website",
    },
};

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
        <div className="min-h-screen bg-white text-slate-900 selection:bg-purple-200">

            <header className="relative min-h-[85vh] flex items-center pt-20 overflow-hidden bg-slate-950">
                {/* --- FUNDO COM IMAGEM --- */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src={fundo}
                        alt="Fundo Institucional IEIA"
                        fill
                        priority
                        className="object-cover opacity-40 grayscale hover:grayscale-0 transition-all duration-1000 scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/30 to-transparent" />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950/10 via-slate-900/30 to-transparent" />
                </div>

                {/* --- CONTEÚDO PRINCIPAL --- */}
                <div className="max-w-7xl mx-auto px-6 relative z-10 w-full ">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="max-w-4xl"
                    >
                        <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif text-white leading-[1.1] mb-10 tracking-tight">
                            {/* Aplicando o efeito de sublinhado no primeiro título */}
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.7 }}
                                className="relative inline-block"
                            >
                                Filadélfia
                                <motion.span
                                    className="absolute -bottom-4 left-0 w-full h-1 sm:h-2 bg-purple-400 rounded-full"
                                    initial={{ width: 0 }}
                                    animate={{ width: "100%" }}
                                    transition={{
                                        delay: 1.0,
                                        duration: 0.8,
                                        ease: "easeInOut"
                                    }}
                                />
                            </motion.span>
                            <br />
                            <span className="text-slate-100 ">IEIA</span>
                        </h1>
                        <motion.p
                            className="text-base sm:text-lg md:text-xl lg:text-2xl text-purple-100 font-light leading-relaxed max-w-3xl mx-auto px-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                        >
                            Uma família de fé comprometida com o Evangelho, a comunidade e o desenvolvimento integral de Angola.
                        </motion.p>
                    </motion.div>
                </div>
            </header>

            {/* --- SEÇÃO INTRODUTÓRIA: NOSSA HISTÓRIA --- */}
            <motion.section
                className="py-10 px-4 sm:px-6 bg-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7 }}
            >
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h2
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-5 relative"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <span className="relative inline-block">
                            Sobre Nós
                            <motion.div
                                className="w-16 sm:w-20 md:w-24 h-1 bg-purple-600 mx-auto mb-6 sm:mb-8"
                                initial={{ width: 0, opacity: 0 }}
                                whileInView={{ width: 180, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.9, delay: 0.3 }}
                            />
                        </span>
                    </motion.h2>

                    <motion.p
                        className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        A Igreja Filadélfia IEIA nasceu do desejo de ver vidas transformadas pelo poder do Evangelho.
                        Desde a nossa fundação, temos caminhado com o propósito de ser uma igreja relevante, que ama a Deus
                        e serve ao próximo com excelência e compromisso.
                    </motion.p>
                </div>
            </motion.section>

            {/* --- SEÇÃO 1: MISSÃO (com imagem) --- */}
            <motion.section
                className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
                        {/* Imagem Missão */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.7, type: "spring" }}
                            className="relative h-75 sm:h-87 md:h-100 rounded-xl overflow-hidden shadow-lg"
                        >
                            <Image
                                src={missaoImage}
                                alt="Nossa Missão"
                                fill
                                className="object-cover"
                                sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-purple-900/60 via-purple-900/30 to-transparent" />
                        </motion.div>

                        {/* Conteúdo Missão */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.7, type: "spring" }}
                            className="space-y-4 sm:space-y-5 md:space-y-6"
                        >
                            <motion.span
                                className="text-purple-600 font-semibold tracking-wider uppercase text-xs sm:text-sm block"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1, duration: 0.4 }}
                            >
                                Nosso Propósito
                            </motion.span>

                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 relative">
                                <span className="relative inline-block">
                                    Nossa Missão
                                    <motion.span
                                        className="absolute -bottom-2 left-0 h-1 bg-purple-600 rounded-full"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "33.33%" }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3, duration: 0.6 }}
                                    />
                                </span>
                            </h2>

                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                            >
                                <motion.p
                                    className="text-base sm:text-lg text-gray-600 mb-4"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2, duration: 0.6 }}
                                >
                                    <strong className="text-gray-800">Glorificar a Deus</strong> através da proclamação do Evangelho
                                    e do discipulado transformador, formando discípulos que fazem discípulos.
                                </motion.p>
                                <motion.p
                                    className="text-base sm:text-lg text-gray-600"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3, duration: 0.6 }}
                                >
                                    Nosso objetivo é ser um reflexo do Reino de Deus em Angola, funcionando através de uma
                                    estrutura congregacional onde cada membro é incentivado a usar seus dons para o bem comum.
                                </motion.p>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Div separadora */}
                    <motion.div
                        className="w-full h-px bg-linear-to-r from-transparent via-purple-300 to-transparent mt-16 sm:mt-20 md:mt-24"
                        initial={{ scaleX: 0, opacity: 0 }}
                        whileInView={{ scaleX: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    />
                </div>
            </motion.section>

            {/* --- SEÇÃO 2: VISÃO E OBJETIVOS (com imagem) --- */}
            <motion.section
                className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-purple-50/50"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
                        {/* Conteúdo Visão (primeiro no mobile, segundo no desktop) */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.7, type: "spring" }}
                            className="space-y-4 sm:space-y-5 md:space-y-6 order-2 md:order-1"
                        >
                            <motion.span
                                className="text-purple-600 font-semibold tracking-wider uppercase text-xs sm:text-sm block"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1, duration: 0.4 }}
                            >
                                Nossa Direção
                            </motion.span>

                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 relative">
                                <span className="relative inline-block">
                                    Visão e Objetivos
                                    <motion.span
                                        className="absolute -bottom-2 left-0 h-1 bg-purple-600 rounded-full"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "33.33%" }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3, duration: 0.6 }}
                                    />
                                </span>
                            </h2>

                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                                className="space-y-6"
                            >
                                <motion.div
                                    className="flex items-start gap-3"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2, duration: 0.5 }}
                                >
                                    <Compass className="text-purple-500 mt-1 shrink-0" size={20} />
                                    <div>
                                        <h4 className="font-semibold text-gray-800 mb-1">Visão de Futuro</h4>
                                        <p className="text-gray-600">
                                            Expandir nossa presença em todas as províncias, plantando igrejas saudáveis
                                            que sejam centros de esperança e desenvolvimento comunitário.
                                        </p>
                                    </div>
                                </motion.div>
                                <motion.div
                                    className="flex items-start gap-3"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3, duration: 0.5 }}
                                >
                                    <Award className="text-purple-500 mt-1 shrink-0" size={20} />
                                    <div>
                                        <h4 className="font-semibold text-gray-800 mb-1">O que fazemos?</h4>
                                        <p className="text-gray-600">
                                            Além dos cultos, promovemos alfabetização, assistência médica em áreas remotas
                                            e formação de liderança ética para a nação.
                                        </p>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </motion.div>

                        {/* Imagem Visão */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.7, type: "spring" }}
                            className="relative h-75 sm:h-87 md:h-100 rounded-xl overflow-hidden shadow-lg order-1 md:order-2"
                        >
                            <Image
                                src={visaoImage}
                                alt="Visão e Objetivos"
                                fill
                                className="object-cover"
                                sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-purple-900/60 via-purple-900/30 to-transparent" />
                        </motion.div>
                    </div>

                    {/* Div separadora */}
                    <motion.div
                        className="w-full h-px bg-linear-to-r from-transparent via-purple-300 to-transparent mt-16 sm:mt-20 md:mt-24"
                        initial={{ scaleX: 0, opacity: 0 }}
                        whileInView={{ scaleX: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    />
                </div>
            </motion.section>

            {/* --- SEÇÃO 3: NOSSOS VALORES (com imagem de fundo na seção) --- */}
            <motion.section
                className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white relative overflow-hidden"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.8 }}
            >
                {/* Imagem de fundo sutil */}
                <div className="absolute inset-0 z-0 opacity-5">
                    <Image
                        src={valoresImage}
                        alt="Background Valores"
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.span
                            className="text-purple-600 font-semibold tracking-wider uppercase text-xs sm:text-sm block mb-3"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1, duration: 0.4 }}
                        >
                            Nossos Pilares
                        </motion.span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 relative inline-block">
                            <span className="relative inline-block">
                                Valores que nos Definem
                                <motion.span
                                    className="absolute -bottom-2 left-0 h-1 bg-purple-600 rounded-full"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "33.33%" }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3, duration: 0.6 }}
                                />
                            </span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                        {valores.map((v, i) => (
                            <motion.div
                                key={i}
                                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 + 0.2, duration: 0.6 }}
                                whileHover={{ y: -5 }}
                            >
                                <motion.div
                                    className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-6"
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.15 + 0.3, duration: 0.4 }}
                                >
                                    {v.icon}
                                </motion.div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3 relative inline-block">
                                    <span className="relative">
                                        {v.titulo}
                                        <motion.span
                                            className="absolute -bottom-1 left-0 h-0.5 bg-purple-400 rounded-full"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "50%" }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.15 + 0.5, duration: 0.5 }}
                                        />
                                    </span>
                                </h3>
                                <motion.p
                                    className="text-gray-600 leading-relaxed"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.15 + 0.6, duration: 0.5 }}
                                >
                                    {v.desc}
                                </motion.p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Div separadora */}
                    <motion.div
                        className="w-full h-px bg-linear-to-r from-transparent via-purple-300 to-transparent mt-16 sm:mt-20 md:mt-24"
                        initial={{ scaleX: 0, opacity: 0 }}
                        whileInView={{ scaleX: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    />
                </div>
            </motion.section>

            {/* --- SEÇÃO 4: NOSSA COMUNIDADE --- */}
            <motion.section
                className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-purple-50/50"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
                        {/* Imagem Comunidade */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.7, type: "spring" }}
                            className="relative h-75 sm:h-87 md:h-100 rounded-xl overflow-hidden shadow-lg"
                        >
                            <Image
                                src={comunidadeImage}
                                alt="Nossa Comunidade"
                                fill
                                className="object-cover"
                                sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-purple-900/60 via-purple-900/30 to-transparent" />
                        </motion.div>

                        {/* Conteúdo Comunidade */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.7, type: "spring" }}
                            className="space-y-4 sm:space-y-5 md:space-y-6"
                        >
                            <motion.span
                                className="text-purple-600 font-semibold tracking-wider uppercase text-xs sm:text-sm block"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1, duration: 0.4 }}
                            >
                                Vida em Comunhão
                            </motion.span>

                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 relative">
                                <span className="relative inline-block">
                                    Nossa Comunidade
                                    <motion.span
                                        className="absolute -bottom-2 left-0 h-1 bg-purple-600 rounded-full"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "33.33%" }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3, duration: 0.6 }}
                                    />
                                </span>
                            </h2>

                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                                className="space-y-4"
                            >
                                <motion.p
                                    className="text-base sm:text-lg text-gray-600"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2, duration: 0.6 }}
                                >
                                    Somos uma família de fé acolhedora, onde cada pessoa é valorizada e incentivada
                                    a desenvolver seus dons e talentos para a glória de Deus.
                                </motion.p>
                                <motion.div
                                    className="flex items-center gap-3 text-gray-700"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3, duration: 0.5 }}
                                >
                                    <Users size={20} className="text-purple-500" />
                                    <span>80+ membros ativos</span>
                                </motion.div>
                                <motion.div
                                    className="flex items-center gap-3 text-gray-700"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4, duration: 0.5 }}
                                >
                                    <Calendar size={20} className="text-purple-500" />
                                    <span>7+ anos de história</span>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Div separadora */}
                    <motion.div
                        className="w-full h-px bg-linear-to-r from-transparent via-purple-300 to-transparent mt-16 sm:mt-20 md:mt-24"
                        initial={{ scaleX: 0, opacity: 0 }}
                        whileInView={{ scaleX: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    />
                </div>
            </motion.section>

            {/* --- SEÇÃO 5: LOCALIZAÇÃO E CONTATO --- */}
            <motion.section
                className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 relative inline-block">
                            <span className="relative inline-block">
                                Localização e Contato
                                <motion.span
                                    className="absolute -bottom-2 left-0 h-1 bg-purple-600 rounded-full"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "33.33%" }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3, duration: 0.6 }}
                                />
                            </span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        {/* Coluna da Localização */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.7, type: "spring" }}
                            className="space-y-6"
                        >
                            <div className="bg-purple-50/50 p-8 rounded-2xl">
                                <motion.div
                                    className="flex items-start gap-4 mb-6"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2, duration: 0.5 }}
                                >
                                    <div className="bg-purple-100 p-3 rounded-lg text-purple-600">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">Endereço Principal</h3>
                                        <p className="text-gray-600">
                                            Luena, Moxico<br />
                                            Bairro Social da Juventude<br />
                                            Entre a casa da cultura e centralidade
                                        </p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="flex items-start gap-4"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3, duration: 0.5 }}
                                >
                                    <div className="bg-purple-100 p-3 rounded-lg text-purple-600">
                                        <Navigation size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">Como Chegar</h3>
                                        <p className="text-gray-600">
                                            Localização central no Luena, fácil acesso por transporte público.
                                            Próximo à Casa da Cultura e à Centralidade.
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Coluna dos Contatos */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.7, type: "spring" }}
                            className="space-y-6"
                        >
                            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                                <motion.h3
                                    className="text-2xl font-bold text-gray-800 mb-6"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1, duration: 0.5 }}
                                >
                                    Informações de Contato
                                </motion.h3>

                                {/* Telefone */}
                                <motion.div
                                    className="flex items-start gap-4 mb-6"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2, duration: 0.5 }}
                                >
                                    <div className="bg-purple-100 p-3 rounded-lg text-purple-600">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800 mb-1">Telefone</h4>
                                        <p className="text-gray-600 mb-1">+244 xxx xxx xxx</p>
                                        <p className="text-gray-600">+244 xxx xxx xxx</p>
                                    </div>
                                </motion.div>

                                {/* Email */}
                                <motion.div
                                    className="flex items-start gap-4 mb-6"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3, duration: 0.5 }}
                                >
                                    <div className="bg-purple-100 p-3 rounded-lg text-purple-600">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                                        <p className="text-gray-600 mb-1">contato@filadelfiaieia.com</p>
                                    </div>
                                </motion.div>

                                {/* Horário */}
                                <motion.div
                                    className="flex items-start gap-4 mb-6"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4, duration: 0.5 }}
                                >
                                    <div className="bg-purple-100 p-3 rounded-lg text-purple-600">
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800 mb-1">Horário de Cultos</h4>
                                        <p className="text-gray-600 mb-1">Domingo: 09h:30min</p>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Div separadora */}
                    <motion.div
                        className="w-full h-px bg-linear-to-r from-transparent via-purple-300 to-transparent mt-16 sm:mt-20 md:mt-24"
                        initial={{ scaleX: 0, opacity: 0 }}
                        whileInView={{ scaleX: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    />
                </div>
            </motion.section>

            {/* --- CALL TO ACTION --- */}
            <motion.section
                className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 bg-linear-to-br from-purple-900 to-purple-800 text-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
            >
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h2
                        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 md:mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                    >
                        Faça Parte Desta Família
                    </motion.h2>

                    <motion.p
                        className="text-base sm:text-lg md:text-xl text-purple-100 mb-8 sm:mb-10 md:mb-12 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Venha nos conhecer, crescer na fé e servir ao próximo conosco.
                        Há um lugar especial para você na Igreja Filadélfia IEIA.
                    </motion.p>

                    <motion.div
                        className="flex flex-wrap gap-4 justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <motion.button
                            className="px-8 py-4 bg-white text-purple-900 rounded-full font-semibold hover:bg-purple-50 transition-colors shadow-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Conheça Nossos Cultos
                        </motion.button>
                    </motion.div>
                </div>
            </motion.section>
        </div>
    );
}