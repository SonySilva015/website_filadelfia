'use client'

import Image from 'next/image'


export default function LiderancaPage() {
    return (
        <div className="min-h-screen bg-white text-slate-900 selection:bg-amber-200 selection:text-slate-900">

            {/* HERO */}
            <header className="relative h-screen min-h-150 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                        alt="Equipe de liderança cristã"
                        fill
                        className="object-cover"
                        priority
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-slate-900/80 via-slate-900/60 to-slate-900/80" />
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                    <span className="inline-block px-4 py-2 mb-6 text-sm font-semibold text-amber-300 bg-amber-900/30 backdrop-blur-sm rounded-full border border-amber-500/30">
                        Nossa Equipe
                    </span>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight">
                        Liderança
                        <span className="relative block text-amber-500 text-3xl md:text-4xl mt-4 font-light">
                            Servindo com Amor e Dedicação
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-200 font-light leading-relaxed max-w-3xl mx-auto">
                        Conheça os líderes que Deus colocou para guiar, ensinar e cuidar da nossa comunidade, seguindo o exemplo de Cristo.
                    </p>
                </div>
            </header>

            {/* LIDERANÇA PRINCIPAL */}
            <section className="py-24 px-6 bg-slate-50">
                <div className="max-w-6xl mx-auto text-center mb-16">
                    <span className="text-amber-600 font-semibold tracking-wider uppercase">Pastores</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mt-4 mb-6">Liderança Principal</h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        Pastores dedicados ao ensino da Palavra e ao cuidado espiritual da igreja.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {/* Pastor Líder */}
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                        <div className="relative h-80 overflow-hidden">
                            <Image
                                src="/img/casalmarcelo.jpg"
                                alt="Pastor Marcelo Silva"
                                fill
                                className="object-cover transition-transform duration-500 hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
                        </div>
                        <div className="p-6">
                            <h3 className="text-2xl font-bold text-slate-800 mb-1">Marcelo Silva</h3>
                            <p className="text-amber-600 font-semibold mb-3">Pastor Presidente</p>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Há 20 anos dedicado ao ministério pastoral. Casado com Ana Paula, pai de três filhos.
                            </p>
                        </div>
                    </div>

                    {/* Pastor Associado */}
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                        <div className="relative h-80 overflow-hidden">
                            <Image
                                src="/img/casalmarcelo.jpg"
                                alt="Pastor André Santos"
                                fill
                                className="object-cover transition-transform duration-500 hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
                        </div>
                        <div className="p-6">
                            <h3 className="text-2xl font-bold text-slate-800 mb-1">André Santos</h3>
                            <p className="text-amber-600 font-semibold mb-3">Pastor Associado</p>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Especialista em ensino bíblico e discipulado. Casado com Camila.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* MINISTÉRIOS */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-6xl mx-auto text-center mb-16">
                    <span className="text-amber-600 font-semibold tracking-wider uppercase">Ministérios</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mt-4 mb-6">Líderes de Ministérios</h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        Pessoas chamadas por Deus para liderar áreas específicas da igreja.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Cada líder de ministério */}
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                        <div className="relative h-80 overflow-hidden">
                            <Image
                                src="/img/casalmarcelo.jpg"
                                alt="Rafael Oliveira"
                                fill
                                className="object-cover transition-transform duration-500 hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
                        </div>
                        <div className="p-6">
                            <h3 className="text-2xl font-bold text-slate-800 mb-1">Rafael Oliveira</h3>
                            <p className="text-amber-600 font-semibold mb-3">Líder de Jovens</p>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Organiza eventos, cultos jovens e retiros. Formado em Administração.
                            </p>
                        </div>
                    </div>

                    {/* Repita para os demais líderes, diaconos etc */}
                </div>
            </section>
        </div>
    )
}