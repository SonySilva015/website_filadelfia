'use client'

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { BookOpen, Users, Anchor, Globe, Heart, MapPin, Quote as QuoteIcon, Award, Scroll, Mail, PenTool, Stamp } from 'lucide-react';
import capa from '@/public/img/altar_gemi.png'

/**
 * CARTA HISTÓRICA DA IGREJA EVANGÉLICA DOS IRMÃOS EM ANGOLA
 * Documento oficial dirigido às congregações e futuras gerações
 * 
 * "Aos santos e fiéis irmãos em Angola, graça e paz"
 */

const marcos = [
    {
        ano: "1884",
        titulo: "Das Raízes e de Frederick Stanley Arnott",
        desc: "O início de um legado. Inspirada no movimento europeu de 1820, a IEIA foi plantada em solo angolano por Frederick Stanley Arnott, estabelecendo uma trajetória que já soma mais de 140 anos.",
        icon: <Anchor size={20} />,
        referencia: "Lembrai-vos dos vossos guias"
    },
    {
        ano: "1992",
        titulo: "Do Reconhecimento Oficial",
        desc: "Um marco institucional em 10 de abril de 1992, quando a IEIA foi formalmente reconhecida em Angola, consolidando sua presença jurídica e liberdade de expansão ministerial.",
        icon: <Award size={20} />,
        referencia: "Porque para a liberdade Cristo nos libertou"
    },
    {
        ano: "Identidade",
        titulo: "Do Movimento Global dos Irmãos",
        desc: "Não caminhamos sós. Fazemos parte de uma fraternidade global presente em mais de 120 países, mantendo a essência da autonomia local e o governo bíblico.",
        icon: <Globe size={20} />,
        referencia: "Saudai a todos os irmãos"
    },
    {
        ano: "Impacto",
        titulo: "Da Formação Ética e Social",
        desc: "Muito além das quatro paredes, a IEIA é reconhecida como parceira na reconciliação nacional e no apoio social, educação e assistência às comunidades carentes.",
        icon: <Heart size={20} />,
        referencia: "Não vos esqueçais da beneficência"
    }
];

export default function HistoriaPage() {
    return (
        <div className="bg-slate-50 text-slate-900 font-serif min-h-screen">
            {/* HERO - Responsivo com tema red */}
            <header className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0 grayscale">
                    <Image
                        src={capa}
                        alt="História IEIA"
                        fill
                        className="object-cover opacity-30"
                        priority
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 to-slate-950/40" />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center text-white"
                    >



                        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-4 sm:mb-6 leading-tight px-2">
                            Nossa História
                        </h1>

                        <div className="max-w-2xl mx-auto px-2 sm:px-4">
                            <p className="text-white/90 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed border-t border-b border-red-400/30 py-3 sm:py-4 px-3 sm:px-6">
                                "Com raízes no movimento europeu e um legado construído por pioneiros,
                                a Igreja Evangélica dos Irmãos celebra mais de 140 anos de evangelização."
                            </p>
                        </div>

                        {/* Local e data - Responsivos */}
                        <div className="flex flex-wrap justify-center gap-2 sm:gap-6 mt-4 sm:mt-8 text-red-200/70 text-xs sm:text-sm px-2">
                            <span>Luanda, Angola</span>
                            <span className="hidden xs:inline">•</span>
                            <span>Desde 1884</span>
                            <span className="hidden xs:inline">•</span>
                            <span>{new Date().getFullYear()}</span>
                        </div>
                    </motion.div>
                </div>
            </header>

            {/* CORPO DA CARTA - Responsivo com tema red */}
            <main className="relative -mt-10 sm:-mt-15 md:-mt-15 z-20">
                <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6">
                    {/* Papel da carta - Padding responsivo */}
                    <div className="bg-white shadow-2xl p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 border border-slate-200">

                        {/* Saudação inicial - Responsiva */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="mb-8 sm:mb-10 md:mb-12 pb-4 sm:pb-6 md:pb-8 border-b border-slate-200"
                        >
                            <p className="text-base sm:text-lg text-slate-700 mb-2">À Igreja Evangélica dos Irmãos em Angola,</p>
                            <p className="text-sm sm:text-base text-slate-600 italic leading-relaxed">
                                Aos presbíteros, diáconos e a todos os santos que em cada congregação
                                se reúnem para o partir do pão e para o ensino da Palavra. Graça e paz.
                            </p>
                        </motion.div>

                        {/* PILARES DOUTRINÁRIOS - Grid responsivo com tema red */}
                        <section className="mb-12 sm:mb-14 md:mb-16">
                            <h2 className="text-xl sm:text-2xl font-serif text-red-900 mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
                                <span className="w-6 sm:w-8 h-px bg-red-700"></span>
                                Dos Fundamentos da Nossa Fé
                            </h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
                                <div className="border border-slate-200 p-4 sm:p-5 md:p-6 bg-slate-50 hover:shadow-md transition-shadow">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-50 rounded-full flex items-center justify-center text-red-600 mb-3 sm:mb-4 mx-auto">
                                        <BookOpen size={20} />
                                    </div>
                                    <h3 className="text-base sm:text-lg font-semibold text-center text-slate-800 mb-2 sm:mb-3">Do Estudo Bíblico</h3>
                                    <p className="text-xs sm:text-sm text-slate-600 text-center leading-relaxed">
                                        Dedicação total ao ensino das Escrituras como base para a vida cristã.
                                    </p>
                                    <p className="text-red-600 text-xs text-center mt-2 sm:mt-3 italic">
                                        — II Timóteo 3:16-17
                                    </p>
                                </div>
                                <div className="border border-slate-200 p-4 sm:p-5 md:p-6 bg-slate-50 hover:shadow-md transition-shadow">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-50 rounded-full flex items-center justify-center text-red-600 mb-3 sm:mb-4 mx-auto">
                                        <Users size={20} />
                                    </div>
                                    <h3 className="text-base sm:text-lg font-semibold text-center text-slate-800 mb-2 sm:mb-3">Do Partir do Pão</h3>
                                    <p className="text-xs sm:text-sm text-slate-600 text-center leading-relaxed">
                                        Comunhão genuína e celebração da Ceia do Senhor com simplicidade.
                                    </p>
                                    <p className="text-red-600 text-xs text-center mt-2 sm:mt-3 italic">
                                        — Atos 2:42
                                    </p>
                                </div>
                                <div className="border border-slate-200 p-4 sm:p-5 md:p-6 bg-slate-50 hover:shadow-md transition-shadow sm:col-span-2 lg:col-span-1">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-50 rounded-full flex items-center justify-center text-red-600 mb-3 sm:mb-4 mx-auto">
                                        <MapPin size={20} />
                                    </div>
                                    <h3 className="text-base sm:text-lg font-semibold text-center text-slate-800 mb-2 sm:mb-3">Da Autonomia Local</h3>
                                    <p className="text-xs sm:text-sm text-slate-600 text-center leading-relaxed">
                                        Cada congregação local possui autonomia de governo e direção espiritual.
                                    </p>
                                    <p className="text-red-600 text-xs text-center mt-2 sm:mt-3 italic">
                                        — Mateus 18:20
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* TIMELINE - Narrativa responsiva com tema red */}
                        <section className="mb-12 sm:mb-14 md:mb-16">
                            <h2 className="text-xl sm:text-2xl font-serif text-red-900 mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
                                <span className="w-6 sm:w-8 h-px bg-red-700"></span>
                                Da Narrativa dos Nossos Dias
                            </h2>

                            <div className="space-y-8 sm:space-y-10 md:space-y-12">
                                {marcos.map((marco, idx) => (
                                    <motion.article
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        className="relative pl-4 sm:pl-6 md:pl-8 border-l-2 border-red-200"
                                    >
                                        {/* Número de referência - Responsivo */}
                                        <span className="absolute -left-3 sm:-left-3 top-0 w-5 h-5 sm:w-6 sm:h-6 bg-red-700 rounded-full flex items-center justify-center text-white text-[10px] sm:text-xs">
                                            {idx + 1}
                                        </span>

                                        <div className="flex flex-col xs:flex-row xs:items-center gap-1 xs:gap-3 mb-2">
                                            <span className="text-xl sm:text-2xl md:text-3xl font-serif text-red-800">
                                                {marco.ano}
                                            </span>
                                            <span className="hidden xs:inline text-slate-300">|</span>
                                            <h3 className="text-sm sm:text-base md:text-lg font-semibold text-slate-800">
                                                {marco.titulo}
                                            </h3>
                                        </div>

                                        <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed mb-2 sm:mb-3 pr-2">
                                            {marco.desc}
                                        </p>

                                        <p className="text-red-600 text-xs sm:text-sm italic">
                                            — {marco.referencia}
                                        </p>
                                    </motion.article>
                                ))}
                            </div>
                        </section>

                        {/* SEDE - Endereço responsivo com tema red */}
                        <section className="mb-12 sm:mb-14 md:mb-16">
                            <h2 className="text-xl sm:text-2xl font-serif text-red-900 mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
                                <span className="w-6 sm:w-8 h-px bg-red-700"></span>
                                Da Nossa Sede em Luanda
                            </h2>

                            <div className="bg-red-50 p-4 sm:p-6 md:p-8 border border-red-200">
                                <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                                    <MapPin className="text-red-700 shrink-0" size={24} />
                                    <div className="flex-1">
                                        <p className="text-base sm:text-lg md:text-xl text-slate-800 mb-2">
                                            Bairro Cassenda, Luanda - Angola
                                        </p>
                                        <p className="text-sm sm:text-base text-slate-600 italic">
                                            "Um ponto de referência para a expansão do Reino de Deus em todo o território nacional."
                                        </p>
                                        <div className="flex flex-wrap gap-3 sm:gap-4 mt-3 sm:mt-4 text-xs sm:text-sm">
                                            <span className="text-slate-500">Fundação: 1992</span>
                                            <span className="text-slate-300 hidden xs:inline">|</span>
                                            <span className="text-slate-500">Jurisdição: Nacional</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* CITAÇÃO FINAL - Responsiva com tema red */}
                        <section className="text-center mb-8 sm:mb-10 md:mb-12">
                            <QuoteIcon className="mx-auto mb-4 sm:mb-6 text-red-200" size={48} />

                            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-700 italic leading-relaxed mb-4 sm:mb-6 max-w-2xl mx-auto px-2">
                                "A IEIA continua sendo uma parceira na formação ética,
                                social e espiritual de Angola, pregando o evangelho da reconciliação."
                            </p>

                            <div className="w-12 sm:w-16 md:w-20 h-2px bg-red-700 mx-auto" />
                        </section>

                        {/* Despedida e assinaturas - Responsivas */}
                        <div className="mt-8 sm:mt-12 md:mt-16 pt-4 sm:pt-6 md:pt-8 border-t border-slate-200">
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 sm:gap-8">
                                <div className="w-full sm:w-2/3">
                                    <p className="text-sm sm:text-base text-slate-600 italic mb-3 sm:mb-4">
                                        Que a graça do Senhor Jesus Cristo, e o amor de Deus,
                                        e a comunhão do Espírito Santo sejam com todos vós.
                                    </p>
                                    <p className="text-xs sm:text-sm text-slate-500">
                                        Escrita em Luanda, aos {new Date().getDate()} de {new Date().toLocaleString('pt-AO', { month: 'long' })} de {new Date().getFullYear()}
                                    </p>
                                </div>

                                <div className="w-full sm:w-1/3 text-left sm:text-right">
                                    <div className="flex items-center gap-2 sm:justify-end mb-2">
                                        <Stamp size={16} className="text-red-700" />
                                        <PenTool size={16} className="text-red-700" />
                                    </div>
                                    <div className="font-serif">
                                        <p className="text-base sm:text-lg text-slate-800">Pelos presbíteros da IEIA</p>
                                        <p className="text-xs text-slate-400 mt-1 sm:mt-2">(Selo oficial)</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Pós-escrito - Responsivo */}
                        <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-slate-50 text-xs sm:text-sm text-slate-600 italic border border-slate-200">
                            <p className="flex items-start gap-2">
                                <span className="font-bold text-red-700">P.S.</span>
                                <span>Esta carta deve ser lida em todas as congregações e arquivada como documento histórico da Igreja Evangélica dos Irmãos em Angola.</span>
                            </p>
                        </div>

                        {/* Número de registro - Responsivo */}
                        <div className="mt-4 sm:mt-6 text-center text-slate-400 text-[10px] sm:text-xs">
                            <Scroll size={12} className="inline mr-1" />
                            Registro Histórico IEIA • Nº 001/2024 • Para memória eterna
                        </div>
                    </div>
                </div>
            </main>

            {/* Espaçamento inferior */}
            <div className="h-8 sm:h-10 md:h-12"></div>
        </div>
    );
}