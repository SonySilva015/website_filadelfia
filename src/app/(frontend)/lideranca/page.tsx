'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import fundoIgreja from '@/public/img/IMG-20250831-WA0043.jpg' // Ajuste o caminho conforme sua imagem da igreja

export default function LiderancaPage() {
    return (
        <div className="min-h-screen bg-white text-slate-900 selection:bg-purple-200 selection:text-slate-900">

            {/* HERO */}
            <header className="relative h-screen min-h-150 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={fundoIgreja}
                        alt="Igreja Filadélfia IEIA"
                        fill
                        className="object-cover"
                        priority
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950  to-slate-900/80" />
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">


                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.7 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight"
                    >
                        Liderança
                        <span className="relative block text-purple-400 text-3xl md:text-4xl mt-4 font-light">
                            Servindo com Amor e Dedicação
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="text-xl md:text-2xl text-purple-100 font-light leading-relaxed max-w-3xl mx-auto"
                    >
                        Conheça os líderes que Deus colocou para guiar, ensinar e cuidar da nossa comunidade, seguindo o exemplo de Cristo.
                    </motion.p>
                </div>
            </header>



            {/* PRESBÍTEROS */}
            <section className="py-24 px-6 bg-purple-50/50">
                <div className="max-w-6xl mx-auto text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-purple-600 font-semibold tracking-wider uppercase"
                    >
                        Presbitério
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-gray-800 mt-4 mb-6"
                    >
                        Presbíteros
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-600 max-w-3xl mx-auto"
                    >
                        Homens chamados para apoiar o pastoreio e cuidar das necessidades espirituais da igreja.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Jaimes Catumbela */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                    >
                        <div className="relative h-64 overflow-hidden bg-purple-50 flex items-center justify-center">
                            <div className="absolute inset-0 bg-purple-100 flex items-center justify-center">
                                <span className="text-8xl text-purple-300 opacity-50">👤</span>
                            </div>
                            <div className="absolute inset-0 bg-linear-to-t from-purple-900/60 via-transparent to-transparent" />
                        </div>
                        <div className="p-6">
                            <h3 className="text-2xl font-bold text-gray-800 mb-1">Jaimes Catumbela</h3>
                            <p className="text-purple-600 font-semibold mb-3">Presbítero</p>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Servindo com dedicação e sabedoria no conselho da igreja.
                            </p>
                        </div>
                    </motion.div>

                    {/* Domingos António Ngueve */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                    >
                        <div className="relative h-64 overflow-hidden bg-purple-50 flex items-center justify-center">
                            <div className="absolute inset-0 bg-purple-100 flex items-center justify-center">
                                <span className="text-8xl text-purple-300 opacity-50">👤</span>
                            </div>
                            <div className="absolute inset-0 bg-linear-to-t from-purple-900/60 via-transparent to-transparent" />
                        </div>
                        <div className="p-6">
                            <h3 className="text-2xl font-bold text-gray-800 mb-1">Domingos António Ngueve</h3>
                            <p className="text-purple-600 font-semibold mb-3">Presbítero</p>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Homem de oração e compromisso com a sã doutrina.
                            </p>
                        </div>
                    </motion.div>

                    {/* Nataniel Chicuacua */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                    >
                        <div className="relative h-64 overflow-hidden bg-purple-50 flex items-center justify-center">
                            <div className="absolute inset-0 bg-purple-100 flex items-center justify-center">
                                <span className="text-8xl text-purple-300 opacity-50">👤</span>
                            </div>
                            <div className="absolute inset-0 bg-linear-to-t from-purple-900/60 via-transparent to-transparent" />
                        </div>
                        <div className="p-6">
                            <h3 className="text-2xl font-bold text-gray-800 mb-1">Nataniel Chicuacua</h3>
                            <p className="text-purple-600 font-semibold mb-3">Presbítero</p>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Experiente no aconselhamento e cuidado das famílias.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* DIÁCONOS */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-6xl mx-auto text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-purple-600 font-semibold tracking-wider uppercase"
                    >
                        Diaconia
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-gray-800 mt-4 mb-6"
                    >
                        Diáconos
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-600 max-w-3xl mx-auto"
                    >
                        Servos dedicados ao auxílio prático e cuidado das necessidades da igreja.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Maros Muamichinda */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                    >
                        <div className="relative h-64 overflow-hidden bg-purple-50 flex items-center justify-center">
                            <div className="absolute inset-0 bg-purple-100 flex items-center justify-center">
                                <span className="text-8xl text-purple-300 opacity-50">👤</span>
                            </div>
                            <div className="absolute inset-0 bg-linear-to-t from-purple-900/60 via-transparent to-transparent" />
                        </div>
                        <div className="p-6">
                            <h3 className="text-2xl font-bold text-gray-800 mb-1">Maros Muamichinda</h3>
                            <p className="text-purple-600 font-semibold mb-3">Diácono</p>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Responsável pela assistência social e visitas aos necessitados.
                            </p>
                        </div>
                    </motion.div>

                    {/* Marcelo Daimone Caumba */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                    >
                        <div className="relative h-64 overflow-hidden bg-purple-50 flex items-center justify-center">
                            <div className="absolute inset-0 bg-purple-100 flex items-center justify-center">
                                <span className="text-8xl text-purple-300 opacity-50">👤</span>
                            </div>
                            <div className="absolute inset-0 bg-linear-to-t from-purple-900/60 via-transparent to-transparent" />
                        </div>
                        <div className="p-6">
                            <h3 className="text-2xl font-bold text-gray-800 mb-1">Marcelo Daimone Caumba</h3>
                            <p className="text-purple-600 font-semibold mb-3">Diácono</p>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Atua na organização dos cultos e recepção dos visitantes.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* LÍDERES DE DEPARTAMENTOS */}
            <section className="py-24 px-6 bg-purple-50/50">
                <div className="max-w-6xl mx-auto text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-purple-600 font-semibold tracking-wider uppercase"
                    >
                        Departamentos
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-gray-800 mt-4 mb-6"
                    >
                        Líderes de Departamentos
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-600 max-w-3xl mx-auto"
                    >
                        Pessoas dedicadas a liderar áreas específicas do trabalho da igreja.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Fernando Malichi - Líder da Juventude */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                    >
                        <div className="relative h-64 overflow-hidden bg-purple-50 flex items-center justify-center">
                            <div className="absolute inset-0 bg-purple-100 flex items-center justify-center">
                                <span className="text-8xl text-purple-300 opacity-50">👤</span>
                            </div>
                            <div className="absolute inset-0 bg-linear-to-t from-purple-900/60 via-transparent to-transparent" />
                        </div>
                        <div className="p-6">
                            <h3 className="text-2xl font-bold text-gray-800 mb-1">Fernando Malichi</h3>
                            <p className="text-purple-600 font-semibold mb-3">Líder do Departamento da Juventude</p>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Responsável por coordenar as atividades, eventos e cultos voltados para os jovens da igreja.
                            </p>
                        </div>
                    </motion.div>

                    {/* Natália Marichi - Líder do Ministério Infantil */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                    >
                        <div className="relative h-64 overflow-hidden bg-purple-50 flex items-center justify-center">
                            <div className="absolute inset-0 bg-purple-100 flex items-center justify-center">
                                <span className="text-8xl text-purple-300 opacity-50">👤</span>
                            </div>
                            <div className="absolute inset-0 bg-linear-to-t from-purple-900/60 via-transparent to-transparent" />
                        </div>
                        <div className="p-6">
                            <h3 className="text-2xl font-bold text-gray-800 mb-1">Natália Marichi</h3>
                            <p className="text-purple-600 font-semibold mb-3">Líder do Ministério Infantil</p>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Coordena as atividades para crianças, incluindo escola bíblica e eventos especiais.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>


        </div>
    )
}