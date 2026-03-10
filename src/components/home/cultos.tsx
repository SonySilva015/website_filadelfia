'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const programacoes = [
    {
        id: 1,
        title: 'Santa Ceia',
        time: '1º Domingo do mês',
        description:
            'Celebração da nova aliança e memorial do sacrifício de Cristo.',
        image:
            '/img/congregando.jpg',
        verse: 'Fazei isto em memória de mim',
        verseRef: 'Lucas 22:19',
        link: '#santaceia',
        gradient: 'from-rose-500 to-red-600',
    },
    {
        id: 2,
        title: 'Estudo Bíblico',
        time: 'Domingos às 09:00h',
        description:
            'Aprofunde seu conhecimento da Palavra com ensino contextualizado e crescimento espiritual.',
        image:
            '/img/culto.jpg',
        verse: 'Examinais as Escrituras',
        verseRef: 'João 5:39',
        link: '#estudo',
        gradient: 'from-rose-500 to-red-600',
    },
    {
        id: 3,
        title: 'Culto Geral',
        time: 'Domingos às 10:30h',
        description:
            'Momento de adoração, comunhão e ministração da Palavra que transforma vidas.',
        image:
            '/img/culto.jpg',
        verse: 'Alegrei-me quando me disseram',
        verseRef: 'Salmos 122:1',
        link: '#culto',
        gradient: 'from-rose-500 to-red-600',
    },

]

const Culto = () => {
    return (
        <section
            id="cultos"
            className="bg-linear-to-b from-wihte to-white/60 y-10"
        >
            <div className="max-w-7xl mx-auto px-6">

                {/* Cabeçalho */}
                <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                        Nossas Programações
                    </h2>
                    <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                        Momentos especiais preparados para fortalecer sua fé e comunhão.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 pb-10">
                    {programacoes.map((item) => (
                        <div
                            key={item.id}
                            className="group relative h-120 rounded-md overflow-hidden shadow-xl"
                        >
                            {/* Imagem */}
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/10"></div>

                            {/* Conteúdo */}
                            <div className="absolute bg-linear-to-t from-black via-black/70 to-transparent inset-0 flex flex-col justify-end p-8 text-white">

                                <h3 className="text-2xl font-bold mb-2">
                                    {item.title}
                                </h3>

                                <p className="text-sm font-semibold text-blue-300 mb-3">
                                    {item.time}
                                </p>

                                <p className="text-sm text-white/90 mb-4">
                                    {item.description}
                                </p>

                                {/* Versículo */}
                                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 mb-6">
                                    <p className="text-sm italic">{item.verse}</p>
                                    <p className="text-xs mt-1 font-semibold">
                                        {item.verseRef}
                                    </p>
                                </div>

                                {/* Botão */}
                                <Link
                                    href={item.link}
                                    className={`inline-flex items-center justify-center gap-2 bg-linear-to-r ${item.gradient} hover:opacity-90 px-6 py-3 rounded-xl text-sm font-semibold transition duration-300 shadow-lg`}
                                >
                                    Saber mais
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Culto
