'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Imagens para a seção (substitua pelos caminhos corretos das suas imagens)
import pastorLiderImage from '@/public/img/casalmarcelo.jpg';
import pastorAssociadoImage from '@/public/img/casalmarcelo.jpg';
import liderJovensImage from '@/public/img/casalmarcelo.jpg';
import liderMulheresImage from '@/public/img/casalmarcelo.jpg';
import liderCasaisImage from '@/public/img/casalmarcelo.jpg';
import liderMusicaImage from '@/public/img/casalmarcelo.jpg';
import liderCriancasImage from '@/public/img/casalmarcelo.jpg';
import diacono1Image from '@/public/img/casalmarcelo.jpg';
import diacono2Image from '@/public/img/casalmarcelo.jpg';
import diacono3Image from '@/public/img/casalmarcelo.jpg';

// Componente de card para líder
const LiderCard = ({ nome, cargo, imagemSrc, imagemAlt, descricao, socialLinks = {} }) => (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
        <div className="relative h-80 overflow-hidden">
            <Image
                src={imagemSrc}
                alt={imagemAlt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Redes Sociais (aparecem no hover) */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {socialLinks.instagram && (
                    <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-amber-500 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z" />
                        </svg>
                    </a>
                )}
                {socialLinks.facebook && (
                    <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-amber-500 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                        </svg>
                    </a>
                )}
                {socialLinks.linkedin && (
                    <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-amber-500 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                        </svg>
                    </a>
                )}
                {socialLinks.email && (
                    <a href={`mailto:${socialLinks.email}`} className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-amber-500 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
                        </svg>
                    </a>
                )}
            </div>
        </div>

        <div className="p-6">
            <h3 className="text-2xl font-bold text-slate-800 mb-1">{nome}</h3>
            <p className="text-amber-600 font-semibold mb-3">{cargo}</p>
            <p className="text-slate-600 text-sm leading-relaxed">{descricao}</p>
        </div>
    </div>
);

// Componente para estatísticas
const StatCard = ({ numero, rotulo }) => (
    <div className="text-center">
        <div className="text-4xl md:text-5xl font-bold text-amber-500 mb-2">{numero}</div>
        <div className="text-slate-300 uppercase tracking-wider text-sm">{rotulo}</div>
    </div>
);

export default function LiderancaPage() {
    return (
        <div className="min-h-screen bg-white text-slate-900 selection:bg-amber-200 selection:text-slate-900">

            {/* --- HERO SECTION --- */}
            <header className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                        alt="Equipe de liderança cristã"
                        fill
                        className="object-cover"
                        priority
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900/80" />
                </div>

                {/* Conteúdo do Hero */}
                <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                    <div>
                        <span className="inline-block px-4 py-2 mb-6 text-sm font-semibold text-amber-300 bg-amber-900/30 backdrop-blur-sm rounded-full border border-amber-500/30">
                            Nossa Equipe
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight">
                        Liderança
                        <span className="relative block text-amber-500 text-3xl md:text-4xl mt-4 font-light">
                            Servindo com Amor e Dedicação
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-200 font-light leading-relaxed max-w-3xl mx-auto">
                        Conheça os líderes que Deus colocou para guiar, ensinar e cuidar da nossa comunidade,
                        seguindo o exemplo de Cristo, o maior de todos os líderes.
                    </p>
                </div>
            </header>

            {/* --- SEÇÃO DE VALORES DE LIDERANÇA --- */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-amber-600 font-semibold tracking-wider uppercase">Nossos Valores</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mt-4 mb-6">
                            Liderança com Propósito
                        </h2>
                        <div className="w-24 h-1 bg-amber-500 mx-auto" />
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center p-8 bg-slate-50 rounded-2xl">
                            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-3">Serviço</h3>
                            <p className="text-slate-600">Líderes que servem, inspirando outros através do exemplo de humildade e dedicação.</p>
                        </div>

                        <div className="text-center p-8 bg-slate-50 rounded-2xl">
                            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-3">Integridade</h3>
                            <p className="text-slate-600">Vivendo de forma íntegra, sendo exemplo no caráter, na fé e na conduta.</p>
                        </div>

                        <div className="text-center p-8 bg-slate-50 rounded-2xl">
                            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-3">Amor</h3>
                            <p className="text-slate-600">Liderando com amor, cuidando de cada pessoa como Cristo amou a igreja.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- SEÇÃO: PASTORES E LIDERANÇA PRINCIPAL --- */}
            <section className="py-24 px-6 bg-slate-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-amber-600 font-semibold tracking-wider uppercase">Pastores</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mt-4 mb-6">
                            Liderança Principal
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            Pastores dedicados ao ensino da Palavra e ao cuidado espiritual da igreja.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Pastor Líder */}
                        <LiderCard
                            nome="Marcelo Silva"
                            cargo="Pastor Presidente"
                            imagemSrc={pastorLiderImage}
                            imagemAlt="Pastor Marcelo Silva"
                            descricao="Há 20 anos dedicado ao ministério pastoral, formado em Teologia com mestrado em Aconselhamento Bíblico. Casado com Ana Paula, pai de três filhos."
                            socialLinks={{
                                instagram: "https://instagram.com/",
                                facebook: "https://facebook.com/",
                                email: "pastor.marcelo@igreja.com"
                            }}
                        />

                        {/* Pastor Associado */}
                        <LiderCard
                            nome="André Santos"
                            cargo="Pastor Associado"
                            imagemSrc={pastorAssociadoImage}
                            imagemAlt="Pastor André Santos"
                            descricao="Especialista em ensino bíblico e discipulado. Lidera os grupos pequenos e a escola bíblica dominical. Casado com Camila."
                            socialLinks={{
                                instagram: "https://instagram.com/",
                                facebook: "https://facebook.com/",
                                email: "pastor.andre@igreja.com"
                            }}
                        />
                    </div>
                </div>
            </section>

            {/* --- SEÇÃO: LIDERANÇA DE MINISTÉRIOS --- */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-amber-600 font-semibold tracking-wider uppercase">Ministérios</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mt-4 mb-6">
                            Líderes de Ministérios
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            Pessoas chamadas por Deus para liderar áreas específicas da igreja.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Líder de Jovens */}
                        <LiderCard
                            nome="Rafael Oliveira"
                            cargo="Líder de Jovens"
                            imagemSrc={liderJovensImage}
                            imagemAlt="Rafael Oliveira"
                            descricao="Jovem líder com paixão por alcançar sua geração. Organiza eventos, cultos jovens e retiros. Formado em Administração."
                            socialLinks={{
                                instagram: "https://instagram.com/",
                                email: "rafael.jovens@igreja.com"
                            }}
                        />

                        {/* Líder de Mulheres */}
                        <LiderCard
                            nome="Cristina Lima"
                            cargo="Líder do Ministério de Mulheres"
                            imagemSrc={liderMulheresImage}
                            imagemAlt="Cristina Lima"
                            descricao="Pastora e conselheira, coordena os encontros de mulheres e o ministério de intercessão. Casada com Paulo."
                            socialLinks={{
                                instagram: "https://instagram.com/",
                                facebook: "https://facebook.com/",
                                email: "cristina.mulheres@igreja.com"
                            }}
                        />

                        {/* Líder de Casais */}
                        <LiderCard
                            nome="Carlos e Patrícia Mendes"
                            cargo="Líderes de Casais"
                            imagemSrc={liderCasaisImage}
                            imagemAlt="Carlos e Patrícia Mendes"
                            descricao="Casal há 15 anos, lidera o ministério de casais com encontros, aconselhamento e retiros para fortalecer os laços matrimoniais."
                            socialLinks={{
                                instagram: "https://instagram.com/",
                                email: "casais@igreja.com"
                            }}
                        />

                        {/* Líder de Música */}
                        <LiderCard
                            nome="Daniel Souza"
                            cargo="Ministério de Louvor"
                            imagemSrc={liderMusicaImage}
                            imagemAlt="Daniel Souza"
                            descricao="Músico e worship leader, coordena a equipe de louvor e a escola de música da igreja. Compositor e arranjador."
                            socialLinks={{
                                instagram: "https://instagram.com/",
                                email: "daniel.louvor@igreja.com"
                            }}
                        />

                        {/* Líder de Crianças */}
                        <LiderCard
                            nome="Juliana Costa"
                            cargo="Ministério Infantil"
                            imagemSrc={liderCriancasImage}
                            imagemAlt="Juliana Costa"
                            descricao="Pedagoga com especialização em educação cristã. Coordena a equipe de professores e voluntários do ministério infantil."
                            socialLinks={{
                                instagram: "https://instagram.com/",
                                email: "juliana.criancas@igreja.com"
                            }}
                        />

                        {/* Líder de Adolescentes */}
                        <LiderCard
                            nome="Felipe Rodrigues"
                            cargo="Líder de Adolescentes"
                            imagemSrc={liderJovensImage}
                            imagemAlt="Felipe Rodrigues"
                            descricao="Professor e mentor de adolescentes, organiza acampamentos, estudos bíblicos e atividades sociais para pré-adolescentes."
                            socialLinks={{
                                instagram: "https://instagram.com/",
                                email: "felipe.adolescentes@igreja.com"
                            }}
                        />
                    </div>
                </div>
            </section>

            {/* --- SEÇÃO: DIÁCONOS --- */}
            <section className="py-24 px-6 bg-slate-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-amber-600 font-semibold tracking-wider uppercase">Serviço</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mt-4 mb-6">
                            Diáconos
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            Homens chamados para servir nas necessidades práticas da igreja.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <LiderCard
                            nome="João Batista"
                            cargo="Diácono"
                            imagemSrc={diacono1Image}
                            imagemAlt="João Batista"
                            descricao="Responsável pela recepção e acolhimento. Sempre com um sorriso e palavra amiga para todos que chegam."
                            socialLinks={{}}
                        />

                        <LiderCard
                            nome="Pedro Henrique"
                            cargo="Diácono"
                            imagemSrc={diacono2Image}
                            imagemAlt="Pedro Henrique"
                            descricao="Coordena a equipe de som e multimídia. Técnico de som profissional, dedicado à excelência no louvor."
                            socialLinks={{}}
                        />

                        <LiderCard
                            nome="Lucas Ferreira"
                            cargo="Diácono"
                            imagemSrc={diacono3Image}
                            imagemAlt="Lucas Ferreira"
                            descricao="Responsável pela manutenção e infraestrutura. Cuida com zelo de cada detalhe do templo e das instalações."
                            socialLinks={{}}
                        />
                    </div>
                </div>
            </section>

            {/* --- SEÇÃO: ESTATÍSTICAS E IMPACTO --- */}
            <section className="py-24 px-6 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Nosso Impacto
                        </h2>
                        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                            Números que representam vidas sendo transformadas através do trabalho dedicado da nossa liderança.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <StatCard numero="25+" rotulo="Líderes" />
                        <StatCard numero="15+" rotulo="Ministérios" />
                        <StatCard numero="200+" rotulo="Voluntários" />
                        <StatCard numero="50+" rotulo="Anos de História" />
                    </div>
                </div>
            </section>

            {/* --- SEÇÃO: CITAÇÃO BÍBLICA --- */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <svg className="w-12 h-12 text-amber-300 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <blockquote className="text-2xl md:text-3xl font-light text-slate-700 leading-relaxed mb-6">
                        "Lembrem-se dos seus líderes, que lhes falaram a palavra de Deus. Observem bem o resultado da vida que tiveram e imitem a sua fé."
                    </blockquote>
                    <footer className="text-lg text-amber-600 font-semibold">— Hebreus 13:7</footer>
                </div>
            </section>

            {/* --- SEÇÃO: CALL TO ACTION --- */}
            <section className="py-24 px-6 bg-slate-50">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-8">
                        Faça Parte Dessa Equipe
                    </h2>
                    <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-3xl mx-auto">
                        Deus tem um chamado para sua vida! Descubra como você pode servir e fazer a diferença
                        em nossa comunidade, desenvolvendo seus dons e talentos para a glória de Deus.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link href="/contato">
                            <button className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold rounded-lg transition-all duration-300 shadow-lg">
                                Quero Servir
                            </button>
                        </Link>
                        <Link href="/sobre">
                            <button className="px-8 py-4 border-2 border-slate-300 hover:border-amber-500 text-slate-700 font-semibold rounded-lg transition-all duration-300 hover:bg-amber-50">
                                Conheça Nossa História
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* --- FOOTER SIMPLES (opcional) --- */}
            <footer className="py-8 px-6 border-t border-slate-200">
                <div className="max-w-6xl mx-auto text-center text-slate-500 text-sm">
                    © 2026 Igreja. Todos os direitos reservados. Liderança dedicada ao serviço do Reino.
                </div>
            </footer>
        </div>
    );
}