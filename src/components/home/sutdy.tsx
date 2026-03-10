// components/EstudosBiblicos.js
'use client'

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Link from 'next/link';

const grupos = [

    {
        id: 1,
        title: "Mensagem Divina",
        description: "Grupo de jovens maculinos, compreedida dos 16 a 26 anos",
        horas: "todas as sexta feiras as 16h",
        link: "",
        image: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=1200&q=80",
    },
    {
        id: 2,
        title: "Manancial de Amor",
        description: "Grupo de jovens femininos, compredida dos 16 a 26 anos",
        horas: "todas as sexta feiras as 16h",
        link: "",
        image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1200&q=80",
    },
    {
        id: 3,
        title: "Nova Aliança",
        description: "Grupo de jovens femininos (casadas), compreedida dos 27 a 34 anos",
        horas: "todas as sexta feiras as 16h",
        link: "",
        image: "/img/damas.jpg",
    },
    {
        id: 4,
        title: "Geração Eleita",
        description: "Grupo de jovens maculinos (Casados), compreedida dos 27 a 34 anos",
        horas: "todas as sexta feiras as 16h",
        link: "",
        image: "/img/celulaFundo.jpeg",
    }
];

const imagensInfantil = [
    "/img/ebd1.jpeg",
    "/img/ebd2.jpeg",
    "/img/ebd3.jpeg",
    "/img/ebd4.jpeg",
    "/img/ebd5.jpeg",
    "/img/ebd6.jpeg",
];

const EstudosBiblicos = () => {
    return (
        <>
            {/* ===================== */}
            {/* SEÇÃO GRUPOS */}
            {/* ===================== */}
            <section
                className="relative py-24 px-6"

            >
                <div className="absolute inset-0 bg-white/70"></div>

                <div className="relative z-10 max-w-7xl mx-auto text-black text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Conheça Nossos <span className="text-purple-900">Celulas</span>
                    </h2>

                    <p className="text-lg text-black mb-14 max-w-2xl mx-auto">
                        Grupos de jovens que reunem toda semana, para fortalecer a comunhão
                    </p>

                    {/* GRID GRUPOS */}
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {grupos.map((grupo) => (
                            <div
                                key={grupo.id}
                                className="group relative h-105 rounded-xl overflow-hidden shadow-2xl transition duration-500 hover:scale-105"
                            >
                                <img
                                    src={grupo.image}

                                    alt={grupo.title}
                                    className="absolute inset-0 w-full h-full  object-cover"
                                />
                                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition"></div>

                                <div className="relative z-10 h-full flex flex-col justify-end p-8 text-left">
                                    <h3 className="text-2xl font-bold text-purple-500 mb-3">
                                        {grupo.title}
                                    </h3>
                                    <p className="text-gray-200 text-sm">
                                        {grupo.description}
                                    </p>

                                    <Link
                                        href={grupo.link}
                                        className={`inline-flex items-center  backdrop-blur-md justify-center gap-2 bg-linear-to-r w-[70%] border hover:text-red-600 px-6 py-3 mt-5 rounded-md text-sm font-semibold transition duration-300 shadow-lg`}
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
                                <div className='bg-white/10 backdrop-blur-md z-10 absolute top-6 left-4 p-2 rounded-full'>
                                    <p className='text-cyan-200'>{grupo.horas}</p>
                                </div>

                            </div>
                        ))}
                    </div>

                    {/* BOTÃO */}
                    <div className="mt-16">
                        <Link href={''} className="bg-linear-to-r from-rose-500 w-40 to-red-600 hover:from-rose-800 hover:to-red-950 text-white font-semibold px-8 py-4 rounded-lg shadow-lg transition duration-300 hover:scale-105">
                            Ver mais Célula

                        </Link>
                    </div>
                </div>
            </section>




            {/* ===================== */}
            {/* SEÇÃO INFANTIL COM CAROUSEL */}
            {/* ===================== */}
            <section className="py-24 px-6 bg-linear-to-r from-purple-700 to-blue-900 text-white">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">
                    Estudo Bíblico Dominical
                    <span className="text-yellow-400"> Infantil</span>
                </h2>
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                    {/* CAROUSEL IMAGENS */}
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                        <Swiper
                            modules={[Autoplay, Pagination, Navigation]}
                            autoplay={{ delay: 3000 }}
                            pagination={{ clickable: true }}
                            navigation={true}
                            slidesPerView={1}
                        >
                            {imagensInfantil.map((img, index) => (
                                <SwiperSlide key={index}>
                                    <img
                                        src={img}
                                        alt="Estudo Bíblico Infantil"
                                        className="w-full h-100 object-cover"
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    {/* TEXTO */}
                    <div>


                        <p className="text-lg mb-6 text-gray-200">
                            Um espaço preparado com muito carinho para nossas crianças aprenderem a Palavra de Deus
                            de forma divertida, segura e interativa.
                        </p>

                        <ul className="space-y-4 text-gray-100 mb-8">
                            <li>Muitas brincadeiras e diversão</li>
                            <li>Histórias bíblicas criativas</li>
                            <li>Prêmios e atividades especiais</li>
                            <li>Desenvolvimento de valores cristãos</li>
                            <li>Ambiente seguro e acolhedor</li>
                        </ul>

                        {/* VERSÍCULOS */}
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl mb-8 border border-white/20">
                            <p className="italic text-yellow-300 mb-3">
                                “Deixai vir a mim os pequeninos, não os impeçais; porque dos tais é o Reino de Deus.”
                            </p>
                            <p className="text-sm text-gray-200 mb-4">— Marcos 10:14</p>

                            <p className="italic text-yellow-300 mb-3">
                                “Ensina a criança no caminho em que deve andar, e ainda quando for velho não se desviará dele.”
                            </p>
                            <p className="text-sm text-gray-200">— Provérbios 22:6</p>
                        </div>

                        {/* BOTÕES */}
                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="./ebd-infantil"
                                className="bg-linear-to-r border  hover:from-rose-600 hover:to-red-600 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-yellow-300 transition duraction-2000"
                            >
                                Ler mais
                            </Link>


                        </div>
                    </div>

                </div>
            </section>

        </>
    );
};

export default EstudosBiblicos;
