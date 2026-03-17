'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Imagens para a seção
import capa from '@/public/img/capa_cre.jpg'
import trindadeImage from '@/public/img/trindade.jpg';
import criacaoImage from '@/public/img/natu.png';
import jesusImage from '@/public/img/cross.jpg';
import naturezaHomemImage from '@/public/img/homem.jpg';
import segundaVindaImage from '@/public/img/vinda.jpg';
import batismoImage from '@/public/img/batismo.jpeg';
import santidadeImage from '@/public/img/santidade.jpg';
import familiaCasamentoImage from '@/public/img/ICONESTUDIO-180.jpg'

// Animações com todas as propriedades motion
const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3, margin: "-50px" },
    transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
        type: "tween"
    }
};

export default function NossaCrencaPage() {
    return (
        <div className="min-h-screen bg-white text-gray-900 selection:bg-purple-200 selection:text-gray-900">
            {/* HERO SECTION */}
            <header className="relative  h-130 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={capa}
                        alt="Fundo religioso - luz celestial"
                        fill
                        className="object-cover"
                        priority
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-800/90 to-purple-900/70" />
                </div>

                <motion.div
                    className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.9,
                        ease: [0.25, 0.1, 0.25, 1],
                        delay: 0.1,
                        type: "tween"
                    }}
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                            delay: 0.3,
                            duration: 0.6,
                            type: "spring",
                            stiffness: 120,
                            damping: 12
                        }}
                    >
                        <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 text-xs sm:text-sm font-semibold text-purple-200 bg-purple-900/40 backdrop-blur-sm rounded-full border border-purple-500/30">
                            Fundamentos da Fé
                        </span>
                    </motion.div>

                    <motion.h1
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 sm:mb-6 md:mb-8 tracking-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.7 }}
                    >
                        Nossa{' '}
                        <span className="relative inline-block">
                            Crença
                            <motion.span
                                className="absolute -bottom-2 left-0 w-full h-1 sm:h-2 bg-purple-400 rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{
                                    delay: 1.2,
                                    duration: 0.8,
                                    ease: "easeInOut"
                                }}
                            />
                        </span>
                    </motion.h1>

                    <motion.p
                        className="text-base sm:text-lg md:text-xl lg:text-2xl text-purple-100 font-light leading-relaxed max-w-3xl mx-auto px-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                    >
                        Nossa fé é fundamentada na Palavra de Deus, revelando Seu plano eterno desde a criação
                        até a gloriosa volta de Cristo.
                    </motion.p>

                    {/* Scroll Indicator */}
                    <motion.div
                        className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2"
                        animate={{ y: [0, 10, 0] }}
                        transition={{
                            repeat: Infinity,
                            duration: 2,
                            ease: "easeInOut",
                            type: "tween"
                        }}
                    >

                    </motion.div>
                </motion.div>
            </header>

            {/* SEÇÃO INTRODUTÓRIA */}
            <motion.section
                className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 bg-white"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3, margin: "-50px" }}
                transition={{
                    duration: 0.7,
                    ease: [0.25, 0.1, 0.25, 1],
                    type: "tween",
                    delay: 0
                }}
            >
                <div className="max-w-4xl mx-auto text-center">
                    <motion.span
                        className="text-purple-600 font-semibold tracking-wider uppercase text-xs sm:text-sm mb-3 sm:mb-4 block"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3, margin: "-30px" }}
                        transition={{
                            duration: 0.5,
                            ease: "easeOut",
                            type: "tween",
                            delay: 0.1
                        }}
                    >
                        Nossa Fundação
                    </motion.span>

                    <motion.h2
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 sm:mb-6 md:mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3, margin: "-30px" }}
                        transition={{
                            duration: 0.6,
                            ease: [0.25, 0.1, 0.25, 1],
                            type: "spring",
                            stiffness: 100,
                            damping: 15,
                            mass: 1,
                            delay: 0.2
                        }}
                    >
                        A Base da Nossa Crença
                    </motion.h2>

                    <motion.div
                        className="w-16 sm:w-20 md:w-24 h-1 bg-purple-600 mx-auto mb-6 sm:mb-8"
                        initial={{ width: 0, opacity: 0 }}
                        whileInView={{ width: 96, opacity: 1 }}
                        viewport={{ once: true, amount: 0.5, margin: "-20px" }}
                        transition={{
                            duration: 0.9,
                            ease: [0.43, 0.13, 0.23, 0.96],
                            type: "tween",
                            delay: 0.3
                        }}
                    />

                    <motion.p
                        className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3, margin: "-30px" }}
                        transition={{
                            duration: 0.7,
                            ease: "easeInOut",
                            type: "tween",
                            delay: 0.4
                        }}
                    >
                        Nossa crença é fundamentada nas Escrituras Sagradas, que revelam o plano de salvação de Deus
                        e os princípios de uma vida cristã plena. Acreditamos que a verdade de Deus é eterna e imutável,
                        desde a criação do mundo até a consumação dos séculos.
                    </motion.p>
                </div>
            </motion.section>

            {/* SEÇÃO 1: A TRINDADE */}
            <motion.section
                className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
                        {/* Imagem Trindade */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.7,
                                ease: "easeOut",
                                type: "spring",
                                stiffness: 100,
                                damping: 15
                            }}
                            className="relative h-[300px] sm:h-[350px] md:h-[400px] rounded-xl overflow-hidden shadow-lg"
                        >
                            <Image
                                src={trindadeImage}
                                alt="A Trindade"
                                fill
                                className="object-cover"
                                sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, 50vw"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90  to-slate-900/50" />
                        </motion.div>

                        {/* Conteúdo Trindade */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.7,
                                ease: "easeOut",
                                type: "spring",
                                stiffness: 100,
                                damping: 15
                            }}
                            className="space-y-4 sm:space-y-5 md:space-y-6"
                        >
                            <motion.span
                                className="text-purple-600 font-semibold tracking-wider uppercase text-xs sm:text-sm block"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1, duration: 0.4 }}
                            >
                                Um Deus em Três Pessoas
                            </motion.span>

                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 relative">
                                <span className="relative inline-block">
                                    A Trindade
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
                                <p className="text-base sm:text-lg text-gray-600 mb-4">
                                    Cremos em um Deus único, mas triúno: <strong className="text-gray-800">Deus Pai, Deus Filho (Jesus Cristo) e Deus Espírito Santo</strong>.
                                    Cada um desempenha um papel distinto, mas todos são iguais em essência, divindade e poder.
                                    A Trindade é um mistério maravilhoso, mas é essencial para compreender a plenitude de Deus
                                    e a Sua ação no mundo desde a criação.
                                </p>

                                <motion.blockquote
                                    className="border-l-4 border-purple-500 pl-4 italic text-gray-500 text-sm sm:text-base"
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5, duration: 0.5 }}
                                >
                                    "Portanto, vão e façam discípulos de todas as nações, batizando-os em nome do Pai e do Filho e do Espírito Santo."
                                    <footer className="text-xs sm:text-sm mt-1 sm:mt-2 text-gray-400">— Mateus 28:19</footer>
                                </motion.blockquote>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Div separadora */}
                    <motion.div
                        className="w-full h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent mt-16 sm:mt-20 md:mt-24"
                        initial={{ scaleX: 0, opacity: 0 }}
                        whileInView={{ scaleX: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    />
                </div>
            </motion.section>

            {/* SEÇÃO 2: A CRIAÇÃO */}
            <motion.section
                className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-purple-50/50"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
                        {/* Conteúdo Criação (primeiro no mobile, segundo no desktop) */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.7,
                                ease: "easeOut",
                                type: "spring",
                                stiffness: 100,
                                damping: 15
                            }}
                            className="space-y-4 sm:space-y-5 md:space-y-6 order-2 md:order-1"
                        >
                            <motion.span
                                className="text-purple-600 font-semibold tracking-wider uppercase text-xs sm:text-sm block"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1, duration: 0.4 }}
                            >
                                O Propósito Original de Deus
                            </motion.span>

                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 relative">
                                <span className="relative inline-block">
                                    A Criação
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
                                <p className="text-base sm:text-lg text-gray-600 mb-4">
                                    Cremos que <strong className="text-gray-800">Deus é o Criador de todas as coisas</strong>, visíveis e invisíveis.
                                    Em seis dias, Ele criou os céus, a terra, os mares e tudo o que neles há, e viu que tudo era bom.
                                </p>
                                <p className="text-base sm:text-lg text-gray-600 mb-4">
                                    A criação revela a glória, o poder e a sabedoria de Deus. Toda a natureza proclama a grandeza do Criador.
                                </p>

                                <motion.blockquote
                                    className="border-l-4 border-purple-500 pl-4 italic text-gray-500 text-sm sm:text-base"
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5, duration: 0.5 }}
                                >
                                    "No princípio, Deus criou os céus e a terra. E Deus viu tudo o que havia feito, e tudo havia ficado muito bom."
                                    <footer className="text-xs sm:text-sm mt-1 sm:mt-2 text-gray-400">— Gênesis 1:1,31</footer>
                                </motion.blockquote>
                            </motion.div>
                        </motion.div>

                        {/* Imagem Criação */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.7,
                                ease: "easeOut",
                                type: "spring",
                                stiffness: 100,
                                damping: 15
                            }}
                            className="relative h-[300px] sm:h-[350px] md:h-[400px] rounded-xl overflow-hidden shadow-lg order-1 md:order-2"
                        >
                            <Image
                                src={criacaoImage}
                                alt="A criação"
                                fill
                                className="object-cover"
                                sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 via-transparent to-transparent" />
                        </motion.div>
                    </div>

                    {/* Div separadora */}
                    <motion.div
                        className="w-full h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent mt-16 sm:mt-20 md:mt-24"
                        initial={{ scaleX: 0, opacity: 0 }}
                        whileInView={{ scaleX: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    />
                </div>
            </motion.section>

            {/* SEÇÃO 3: JESUS CRISTO */}
            <motion.section
                className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
                        {/* Imagem Jesus */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.7,
                                ease: "easeOut",
                                type: "spring",
                                stiffness: 100,
                                damping: 15
                            }}
                            className="relative h-[300px] sm:h-[350px] md:h-[400px] rounded-xl overflow-hidden shadow-lg"
                        >
                            <Image
                                src={jesusImage}
                                alt="Jesus Cristo"
                                fill
                                className="object-cover"
                                sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 via-transparent to-transparent" />
                        </motion.div>

                        {/* Conteúdo Jesus */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.7,
                                ease: "easeOut",
                                type: "spring",
                                stiffness: 100,
                                damping: 15
                            }}
                            className="space-y-4 sm:space-y-5 md:space-y-6"
                        >
                            <motion.span
                                className="text-purple-600 font-semibold tracking-wider uppercase text-xs sm:text-sm block"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1, duration: 0.4 }}
                            >
                                Nosso Salvador e Senhor
                            </motion.span>

                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 relative">
                                <span className="relative inline-block">
                                    Jesus Cristo
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
                                <p className="text-base sm:text-lg text-gray-600 mb-4">
                                    Acreditamos que <strong className="text-gray-800">Jesus Cristo é o Filho de Deus</strong>, que veio ao mundo para salvar a humanidade
                                    da condenação eterna.
                                </p>
                                <p className="text-base sm:text-lg text-gray-600 mb-4">
                                    Por meio de Sua morte na cruz, Jesus expiou nossos pecados, e por Sua ressurreição,
                                    Ele garantiu a vitória sobre a morte e o pecado.
                                </p>

                                <motion.blockquote
                                    className="border-l-4 border-purple-500 pl-4 italic text-gray-500 text-sm sm:text-base"
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5, duration: 0.5 }}
                                >
                                    "Porque Deus tanto amou o mundo que deu o seu Filho Unigênito, para que todo o que nele crer não pereça, mas tenha a vida eterna."
                                    <footer className="text-xs sm:text-sm mt-1 sm:mt-2 text-gray-400">— João 3:16</footer>
                                </motion.blockquote>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Div separadora */}
                    <motion.div
                        className="w-full h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent mt-16 sm:mt-20 md:mt-24"
                        initial={{ scaleX: 0, opacity: 0 }}
                        whileInView={{ scaleX: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    />
                </div>
            </motion.section>

            {/* SEÇÃO 4: NATUREZA DO HOMEM */}
            <motion.section
                className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-purple-50/50"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
                        {/* Conteúdo Natureza do Homem */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.7,
                                ease: "easeOut",
                                type: "spring",
                                stiffness: 100,
                                damping: 15
                            }}
                            className="space-y-4 sm:space-y-5 md:space-y-6 order-2 md:order-1"
                        >
                            <motion.span
                                className="text-purple-600 font-semibold tracking-wider uppercase text-xs sm:text-sm block"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1, duration: 0.4 }}
                            >
                                Criado à Imagem de Deus
                            </motion.span>

                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 relative">
                                <span className="relative inline-block">
                                    A Natureza do Homem
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
                                <p className="text-base sm:text-lg text-gray-600 mb-4">
                                    Cremos que o <strong className="text-gray-800">ser humano foi criado à imagem e semelhança de Deus</strong>, dotado de dignidade,
                                    liberdade e responsabilidade moral.
                                </p>
                                <p className="text-base sm:text-lg text-gray-600 mb-4">
                                    Porém, com a queda no Éden, o pecado entrou no mundo, corrompendo a natureza humana.
                                    Todo ser humano necessita da graça redentora de Cristo.
                                </p>

                                <motion.blockquote
                                    className="border-l-4 border-purple-500 pl-4 italic text-gray-500 text-sm sm:text-base"
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5, duration: 0.5 }}
                                >
                                    "Criou Deus o homem à sua imagem... Portanto, assim como por meio de um só homem o pecado entrou no mundo..."
                                    <footer className="text-xs sm:text-sm mt-1 sm:mt-2 text-gray-400">— Gênesis 1:27; Romanos 5:12</footer>
                                </motion.blockquote>
                            </motion.div>
                        </motion.div>

                        {/* Imagem Natureza do Homem */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.7,
                                ease: "easeOut",
                                type: "spring",
                                stiffness: 100,
                                damping: 15
                            }}
                            className="relative h-[300px] sm:h-[350px] md:h-[400px] rounded-xl overflow-hidden shadow-lg order-1 md:order-2"
                        >
                            <Image
                                src={naturezaHomemImage}
                                alt="Natureza humana"
                                fill
                                className="object-cover"
                                sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 via-transparent to-transparent" />
                        </motion.div>
                    </div>

                    {/* Div separadora */}
                    <motion.div
                        className="w-full h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent mt-16 sm:mt-20 md:mt-24"
                        initial={{ scaleX: 0, opacity: 0 }}
                        whileInView={{ scaleX: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    />
                </div>
            </motion.section>

            {/* SEÇÃO 5: SEGUNDA VINDA DE CRISTO */}
            <motion.section
                className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
                        {/* Imagem Segunda Vinda */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.7,
                                ease: "easeOut",
                                type: "spring",
                                stiffness: 100,
                                damping: 15
                            }}
                            className="relative h-[300px] sm:h-[350px] md:h-[400px] rounded-xl overflow-hidden shadow-lg"
                        >
                            <Image
                                src={segundaVindaImage}
                                alt="Segunda Vinda de Cristo"
                                fill
                                className="object-cover"
                                sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 via-transparent to-transparent" />
                        </motion.div>

                        {/* Conteúdo Segunda Vinda */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.7,
                                ease: "easeOut",
                                type: "spring",
                                stiffness: 100,
                                damping: 15
                            }}
                            className="space-y-4 sm:space-y-5 md:space-y-6"
                        >
                            <motion.span
                                className="text-purple-600 font-semibold tracking-wider uppercase text-xs sm:text-sm block"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1, duration: 0.4 }}
                            >
                                Nossa Esperança Bem-Aventurada
                            </motion.span>

                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 relative">
                                <span className="relative inline-block">
                                    A Segunda Vinda de Cristo
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
                                <p className="text-base sm:text-lg text-gray-600 mb-4">
                                    Cremos na <strong className="text-gray-800">volta pessoal, visível e gloriosa de Jesus Cristo</strong>. Assim como Ele subiu aos céus,
                                    assim voltará para buscar Sua igreja.
                                </p>
                                <p className="text-base sm:text-lg text-gray-600 mb-4">
                                    Na Sua segunda vinda, os mortos em Cristo ressuscitarão, e os que estiverem vivos serão transformados.
                                </p>

                                <motion.blockquote
                                    className="border-l-4 border-purple-500 pl-4 italic text-gray-500 text-sm sm:text-base"
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5, duration: 0.5 }}
                                >
                                    "O próprio Senhor descerá do céu... e os mortos em Cristo ressuscitarão primeiro..."
                                    <footer className="text-xs sm:text-sm mt-1 sm:mt-2 text-gray-400">— 1 Tessalonicenses 4:16-17</footer>
                                </motion.blockquote>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Div separadora */}
                    <motion.div
                        className="w-full h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent mt-16 sm:mt-20 md:mt-24"
                        initial={{ scaleX: 0, opacity: 0 }}
                        whileInView={{ scaleX: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    />
                </div>
            </motion.section>

            {/* SEÇÃO 6: O BATISMO */}
            <motion.section
                className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-purple-50/50"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
                        {/* Conteúdo Batismo */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.7,
                                ease: "easeOut",
                                type: "spring",
                                stiffness: 100,
                                damping: 15
                            }}
                            className="space-y-4 sm:space-y-5 md:space-y-6 order-2 md:order-1"
                        >
                            <motion.span
                                className="text-purple-600 font-semibold tracking-wider uppercase text-xs sm:text-sm block"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1, duration: 0.4 }}
                            >
                                Nosso Testemunho Público
                            </motion.span>

                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 relative">
                                <span className="relative inline-block">
                                    O Batismo
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
                                <p className="text-base sm:text-lg text-gray-600 mb-4">
                                    O batismo é um ato de obediência e simboliza a morte e ressurreição com Cristo.
                                    Acreditamos que o batismo deve ser realizado por imersão.
                                </p>
                                <p className="text-base sm:text-lg text-gray-600 mb-4">
                                    O batismo é uma declaração pública da fé em Cristo e do desejo de viver segundo Seus ensinamentos.
                                </p>

                                <motion.blockquote
                                    className="border-l-4 border-purple-500 pl-4 italic text-gray-500 text-sm sm:text-base"
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5, duration: 0.5 }}
                                >
                                    "Fomos, pois, sepultados com ele na morte por meio do batismo, a fim de que... também nós vivamos uma vida nova."
                                    <footer className="text-xs sm:text-sm mt-1 sm:mt-2 text-gray-400">— Romanos 6:4</footer>
                                </motion.blockquote>
                            </motion.div>
                        </motion.div>

                        {/* Imagem Batismo */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.7,
                                ease: "easeOut",
                                type: "spring",
                                stiffness: 100,
                                damping: 15
                            }}
                            className="relative h-[300px] sm:h-[350px] md:h-[400px] rounded-xl overflow-hidden shadow-lg order-1 md:order-2"
                        >
                            <Image
                                src={batismoImage}
                                alt="Batismo"
                                fill
                                className="object-cover"
                                sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 via-transparent to-transparent" />
                        </motion.div>
                    </div>

                    {/* Div separadora */}
                    <motion.div
                        className="w-full h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent mt-16 sm:mt-20 md:mt-24"
                        initial={{ scaleX: 0, opacity: 0 }}
                        whileInView={{ scaleX: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    />
                </div>
            </motion.section>

            {/* SEÇÃO 7: SANTIDADE */}
            <motion.section
                className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
                        {/* Imagem Santidade */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.7,
                                ease: "easeOut",
                                type: "spring",
                                stiffness: 100,
                                damping: 15
                            }}
                            className="relative h-[300px] sm:h-[350px] md:h-[400px] rounded-xl overflow-hidden shadow-lg"
                        >
                            <Image
                                src={santidadeImage}
                                alt="Santidade"
                                fill
                                className="object-cover"
                                sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 via-transparent to-transparent" />
                        </motion.div>

                        {/* Conteúdo Santidade */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.7,
                                ease: "easeOut",
                                type: "spring",
                                stiffness: 100,
                                damping: 15
                            }}
                            className="space-y-4 sm:space-y-5 md:space-y-6"
                        >
                            <motion.span
                                className="text-purple-600 font-semibold tracking-wider uppercase text-xs sm:text-sm block"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1, duration: 0.4 }}
                            >
                                Chamados para Ser como Ele
                            </motion.span>

                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 relative">
                                <span className="relative inline-block">
                                    Santidade
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
                                <p className="text-base sm:text-lg text-gray-600 mb-4">
                                    A santidade é o chamado de todos os cristãos. Como seguidores de Cristo, somos chamados a viver
                                    uma vida separada do pecado e consagrada a Deus.
                                </p>

                                <motion.blockquote
                                    className="border-l-4 border-purple-500 pl-4 italic text-gray-500 text-sm sm:text-base"
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5, duration: 0.5 }}
                                >
                                    "Sejam santos, porque eu sou santo."
                                    <footer className="text-xs sm:text-sm mt-1 sm:mt-2 text-gray-400">— 1 Pedro 1:15-16</footer>
                                </motion.blockquote>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Div separadora */}
                    <motion.div
                        className="w-full h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent mt-16 sm:mt-20 md:mt-24"
                        initial={{ scaleX: 0, opacity: 0 }}
                        whileInView={{ scaleX: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    />
                </div>
            </motion.section>

            {/* SEÇÃO 8: FAMÍLIA E CASAMENTO */}
            <motion.section
                className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-purple-50/50"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
                        {/* Conteúdo Família */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.7,
                                ease: "easeOut",
                                type: "spring",
                                stiffness: 100,
                                damping: 15
                            }}
                            className="space-y-4 sm:space-y-5 md:space-y-6 order-2 md:order-1"
                        >
                            <motion.span
                                className="text-purple-600 font-semibold tracking-wider uppercase text-xs sm:text-sm block"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1, duration: 0.4 }}
                            >
                                Instituições Divinas
                            </motion.span>

                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 relative">
                                <span className="relative inline-block">
                                    Família e Casamento
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
                                <p className="text-base sm:text-lg text-gray-600 mb-4">
                                    A família é uma instituição divina, estabelecida por Deus desde a criação.
                                    O casamento é uma aliança sagrada e reflexão do relacionamento de Cristo com a Igreja.
                                </p>
                                <p className="text-base sm:text-lg text-gray-600 mb-4">
                                    O casamento é a base para uma família saudável e ambiente ideal para criar filhos
                                    no temor e amor a Deus.
                                </p>

                                <motion.blockquote
                                    className="border-l-4 border-purple-500 pl-4 italic text-gray-500 text-sm sm:text-base"
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5, duration: 0.5 }}
                                >
                                    "Por isso, o homem deixará pai e mãe e se unirá à sua mulher, e os dois se tornarão uma só carne."
                                    <footer className="text-xs sm:text-sm mt-1 sm:mt-2 text-gray-400">— Efésios 5:31</footer>
                                </motion.blockquote>
                            </motion.div>
                        </motion.div>

                        {/* Imagem Família */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.7,
                                ease: "easeOut",
                                type: "spring",
                                stiffness: 100,
                                damping: 15
                            }}
                            className="relative h-[300px] sm:h-[350px] md:h-[400px] rounded-xl overflow-hidden shadow-lg order-1 md:order-2"
                        >
                            <Image
                                src={familiaCasamentoImage}
                                alt="Família e casamento"
                                fill
                                className="object-cover"
                                sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 via-transparent to-transparent" />
                        </motion.div>
                    </div>

                    {/* Div separadora - última, sem necessidade de linha após */}
                </div>
            </motion.section>

            {/* CALL TO ACTION */}
            <motion.section
                className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 bg-gradient-to-br from-purple-900 to-purple-800 text-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
            >
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h2
                        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 md:mb-8"
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                    >
                        Viva Essa Fé Conosco
                    </motion.h2>

                    <motion.p
                        className="text-base sm:text-lg md:text-xl text-purple-100 mb-8 sm:mb-10 md:mb-12 leading-relaxed"
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Das origens da criação à esperança da volta de Cristo, nossa fé é viva e transformadora.
                        Convidamos você a conhecer mais e caminhar conosco nessa jornada de fé.
                    </motion.p>

                    <motion.div
                        className="flex flex-wrap gap-3 sm:gap-4 justify-center"
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >

                    </motion.div>
                </div>
            </motion.section>

        </div>
    );
}