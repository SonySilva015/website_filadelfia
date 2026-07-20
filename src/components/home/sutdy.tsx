'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Swiper, SwiperSlide } from 'swiper/react'
import {
    Autoplay,
    Pagination,
    Navigation,
    EffectCoverflow,
} from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

import {
    ChevronLeft,
    ChevronRight,
    CheckCircle2,
} from 'lucide-react'

import ebd1 from '@/public/img/ebd1.jpeg'
import ebd2 from '@/public/img/ebd2.jpeg'
import ebd3 from '@/public/img/ebd3.jpeg'
import ebd4 from '@/public/img/ebd4.jpeg'
import ebd5 from '@/public/img/ebd5.jpeg'
import ebd6 from '@/public/img/ebd6.jpeg'

const imagensInfantil = [ebd1, ebd2, ebd3, ebd4, ebd5, ebd6]

export default function EstudosBiblicos() {
    return (
        <section
            className="py-24"
            style={{
                background:
                    'linear-gradient(to right, var(--color-secondary), var(--color-secondary-hover))',
            }}
        >
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-16">

                    <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white">
                        Estudo Bíblico
                        <span className="text-primary-light"> Infantil</span>
                    </h2>

                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* CAROUSEL */}

                    <div className="relative">

                        <Swiper
                            modules={[
                                Autoplay,
                                Pagination,
                                Navigation,
                                EffectCoverflow,
                            ]}
                            effect="coverflow"
                            grabCursor
                            centeredSlides
                            loop
                            slidesPerView={1}
                            speed={900}
                            autoplay={{
                                delay: 3500,
                                disableOnInteraction: false,
                            }}
                            coverflowEffect={{
                                rotate: 0,
                                stretch: 0,
                                depth: 180,
                                modifier: 1,
                                scale: 0.95,
                                slideShadows: false,
                            }}
                            pagination={{
                                clickable: true,
                                dynamicBullets: true,
                            }}
                            navigation={{
                                nextEl: '.next-slide',
                                prevEl: '.prev-slide',
                            }}
                            className="rounded-3xl overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,.45)]"
                        >
                            {imagensInfantil.map((img, index) => (
                                <SwiperSlide key={index}>
                                    <div className="relative h-75 md:h-520px">

                                        <Image
                                            src={img}
                                            alt={`Estudo Bíblico Infantil ${index + 1}`}
                                            fill
                                            priority={index === 0}
                                            className="object-cover"
                                        />

                                        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />

                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* BOTÕES */}

                        <button className="prev-slide absolute left-5 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-white/20 backdrop-blur-lg border border-white/30 hover:bg-white/30 transition">
                            <ChevronLeft className="mx-auto text-white" />
                        </button>

                        <button className="next-slide absolute right-5 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-white/20 backdrop-blur-lg border border-white/30 hover:bg-white/30 transition">
                            <ChevronRight className="mx-auto text-white" />
                        </button>

                    </div>



                    <div>

                        <h3 className="text-3xl font-bold text-white mb-6">
                            Aprendendo a Palavra de Deus desde cedo
                        </h3>

                        <p className="text-lg text-gray-200 leading-8 mb-8">
                            Nosso Estudo Bíblico Infantil proporciona uma experiência
                            enriquecedora para crianças de todas as idades, ensinando os
                            princípios cristãos através de histórias bíblicas, músicas,
                            dinâmicas, atividades educativas e momentos de oração.
                        </p>

                        <div className="space-y-5 mb-10">

                            {[
                                'Histórias bíblicas ilustradas',
                                'Brincadeiras educativas',
                                'Louvor infantil',
                                'Atividades criativas',
                                'Prêmios e desafios',
                                'Professores preparados',
                                'Ambiente seguro',
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="flex items-center gap-3"
                                >
                                    <CheckCircle2
                                        size={22}
                                        className="text-primary-light shrink-0"
                                    />

                                    <span className="text-gray-100">
                                        {item}
                                    </span>
                                </div>
                            ))}

                        </div>

                        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-7 mb-10">

                            <blockquote className="italic text-orange-400 text-lg">
                                "Deixai vir a mim os pequeninos, não os impeçais;
                                porque dos tais é o Reino de Deus."
                            </blockquote>

                            <p className="text-gray-300 mt-2 mb-6">
                                Marcos 10:14
                            </p>

                            <blockquote className="italic text-orange-400 text-lg">
                                "Ensina a criança no caminho em que deve andar, e
                                ainda quando for velho não se desviará dele."
                            </blockquote>

                            <p className="text-gray-300 mt-2">
                                Provérbios 22:6
                            </p>

                        </div>

                        <Link
                            href="/ebd-infantil"
                            className="inline-flex items-center rounded-xl button-secondary px-8 py-4 font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                        >
                            Conheça a EBD Infantil
                        </Link>

                    </div>

                </div>

            </div>
        </section>
    )
}