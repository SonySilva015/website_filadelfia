'use client'
import React from 'react';
import { useState } from 'react';

const grupos = [
    {
        nome: "Jovens de Valor",
        desc: "Liderança e princípios bíblicos para a vida adulta.",
        descLonga: "Um grupo focado em desenvolver líderes com caráter cristão, preparando jovens para os desafios da vida adulta com base nos princípios bíblicos. Através de mentorias e estudos aprofundados, os participantes aprendem a tomar decisões sábias e a influenciar positivamente seu ambiente.",
        hora: "Sábados, 19h",
        cor: "bg-blue-500",
        imagem: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=600",
        local: "Sala 203 - Prédio Principal"
    },
    {
        nome: "Conexão Radical",
        desc: "Louvor e comunhão para adolescentes (13-17 anos).",
        descLonga: "Um ambiente vibrante onde os adolescentes podem expressar sua fé de forma autêntica. Com louvor contemporâneo, dinâmicas interativas e mensagens relevantes, criamos um espaço seguro para que os jovens possam fazer perguntas e descobrir quem são em Cristo.",
        hora: "Sextas, 20h",
        cor: "bg-purple-500",
        imagem: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=600",
        local: "Auditório Jovem"
    },
    {
        nome: "Universitários",
        desc: "Debates sobre fé, ciência e carreira no meio acadêmico.",
        descLonga: "Para aqueles que estão na universidade ou se preparam para entrar, este grupo oferece um espaço de diálogo entre fé e academia. Discutimos temas atuais, desafios da carreira e como ser sal e luz no ambiente universitário, sempre com embasamento bíblico e científico.",
        hora: "Quintas, 19h",
        cor: "bg-emerald-500",
        imagem: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=600",
        local: "Sala de Estudos - Biblioteca"
    },
    {
        nome: "Geração Eleita",
        desc: "Estudo bíblico profundo e discipulado individual.",
        descLonga: "Um grupo comprometido com o estudo sistemático da Palavra e o crescimento espiritual consistente. Através de discipulado individual e estudos em pequenos grupos, os participantes são desafiados a aprofundar seu relacionamento com Deus e descobrir seus dons.",
        hora: "Terças, 19:30h",
        cor: "bg-orange-500",
        imagem: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&q=80&w=600",
        local: "Sala 105"
    },
    {
        nome: "Ide & Fazendo",
        desc: "Ações sociais e evangelismo criativo na cidade.",
        descLonga: "Colocando a fé em ação! Este grupo organiza projetos sociais, visitas a comunidades carentes e ações evangelísticas criativas. Se você tem coração servo e deseja fazer a diferença na sua cidade, este é seu lugar. Transformamos palavras em ações concretas.",
        hora: "Sábados, 14h",
        cor: "bg-red-500",
        imagem: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=600",
        local: "Ponto de Encontro - Hall de Entrada"
    },
    {
        nome: "Artes & Adoração",
        desc: "Teatro, dança e música para o serviço no reino.",
        descLonga: "Para os artisticamente inclinados que desejam usar seus talentos para adorar a Deus. Desenvolvemos apresentações de teatro, coreografias e ministrações musicais que tocam corações. Não importa seu nível de experiência, há um lugar para você expressar sua criatividade.",
        hora: "Domingos, 16h",
        cor: "bg-pink-500",
        imagem: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=600",
        local: "Sala de Artes - 2º Andar"
    }
];

export default function SecaoJovens() {
    const [expandedCard, setExpandedCard] = useState(null);

    const toggleExpand = (index) => {
        setExpandedCard(expandedCard === index ? null : index);
    };

    return (
        <div className="min-h-screen bg-white">
            {/* --- HERO SECTION --- */}
            <section className="relative h-[60vh] flex items-center justify-center bg-gray-900 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-40">
                    <img
                        src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=1200"
                        alt="Jovens reunidos"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight">
                        Nossa Juventude
                    </h1>
                    <p className="text-lg md:text-2xl font-light max-w-2xl mx-auto">
                        Um lugar para pertencer, crescer e transformar o mundo.
                    </p>
                </div>
            </section>

            {/* --- INTRODUÇÃO --- */}
            <section className="py-16 px-6 max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Por que participar?</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                    Nossos grupos de jovens não são apenas reuniões, são <span className="font-semibold text-gray-900">famílias</span>. Acreditamos que ninguém
                    deve caminhar sozinho. Nesses espaços, você encontrará apoio emocional, crescimento espiritual
                    e amizades verdadeiras que levam você para mais perto de Deus. Existe um lugar para você aqui!
                </p>
            </section>

            {/* --- GRID DE GRUPOS --- */}
            <section className="py-12 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {grupos.map((grupo, index) => (
                            <div
                                key={index}
                                className="group bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
                            >
                                {/* Imagem do Card */}
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={grupo.imagem}
                                        alt={grupo.nome}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className={`absolute inset-0 ${grupo.cor} opacity-20`}></div>
                                    <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-700">
                                        {grupo.hora}
                                    </div>
                                </div>

                                {/* Conteúdo do Card */}
                                <div className="p-6 flex-1 flex flex-col">
                                    <div className={`w-12 h-1 mb-4 ${grupo.cor} rounded-full`}></div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-3">{grupo.nome}</h3>

                                    <p className="text-gray-600 mb-4 leading-relaxed flex-1">
                                        {expandedCard === index ? grupo.descLonga : grupo.desc}
                                    </p>

                                    {/* Informações adicionais quando expandido */}
                                    {expandedCard === index && (
                                        <div className="mb-4 p-3 bg-gray-50 rounded-lg animate-fadeIn">
                                            <div className="flex items-start gap-2 text-sm text-gray-600">
                                                <svg className="w-4 h-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                <span>{grupo.local}</span>
                                            </div>
                                        </div>
                                    )}

                                    {/* Botões */}
                                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                                        <button
                                            onClick={() => toggleExpand(index)}
                                            className="text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-1"
                                        >
                                            {expandedCard === index ? 'Mostrar menos' : 'Ler mais'}
                                            <svg
                                                className={`w-4 h-4 transition-transform duration-300 ${expandedCard === index ? 'rotate-180' : ''}`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>

                                        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors shadow-sm hover:shadow">
                                            Quero participar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- CHAMADA PARA AÇÃO FINAL --- */}
            <section className="py-16 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">Ainda não decidiu?</h2>
                    <p className="text-lg mb-8 opacity-90">
                        Visite um dos nossos grupos neste final de semana. Você será recebido de braços abertos!
                    </p>
                    <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-full hover:bg-gray-100 transition-colors shadow-lg">
                        Agendar minha visita
                    </button>
                </div>
            </section>
        </div>
    );
}