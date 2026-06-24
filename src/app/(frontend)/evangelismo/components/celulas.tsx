'use client'

import { useRef, useState } from 'react';

import type { Swiper as SwiperType } from 'swiper';

import {
    Users,
    MapPin,
    User,
    Clock,
    ArrowRight,
    ChevronLeft,
    ChevronRight,
} from 'lucide-react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { celulas } from '../../celulas/data';

export default function Evangelismo() {
    const [selectedCell, setSelectedCell] = useState('');
    const swiperRef = useRef<SwiperType | null>(null);

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">

            <div className="mb-10">
                <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-3 flex items-center gap-3">
                    <Users className="w-6 h-6 text-gray-400" />
                    Nossas Células
                </h2>

                <div className="w-12 h-0.5 bg-gray-300 mb-6"></div>

                <p className="text-gray-500 font-light max-w-3xl leading-7">
                    As células são o coração da nossa igreja. É nelas que a comunhão,
                    o discipulado e o cuidado acontecem de forma mais próxima.
                    Encontre uma célula perto de você, conheça novos irmãos e faça
                    parte desta grande família em Cristo.
                </p>
            </div>
            <div className="flex justify-end items-center gap-3 mb-5">

                <button
                    onClick={() => swiperRef.current?.slidePrev()}
                    className="group w-12 h-12 rounded-full bg-white border border-gray-200 shadow hover:bg-blue-600 transition-all duration-300 flex items-center justify-center"
                >
                    <ChevronLeft className="w-5 h-5 text-gray-700 group-hover:text-white transition-colors" />
                </button>

                <button
                    onClick={() => swiperRef.current?.slideNext()}
                    className="group w-12 h-12 rounded-full bg-white border border-gray-200 shadow hover:bg-blue-600 transition-all duration-300 flex items-center justify-center"
                >
                    <ChevronRight className="w-5 h-5 text-gray-700 group-hover:text-white transition-colors" />
                </button>

            </div>
            <Swiper
                modules={[Pagination, Autoplay]}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                spaceBetween={24}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                loop
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
                className="pb-14"
            >
                {celulas.map((celula) => (
                    <SwiperSlide key={celula.id}>
                        <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 h-full mb-8">

                            <div className="relative h-52 overflow-hidden">

                                <img
                                    src={celula.imagemCapa}
                                    alt={celula.nome}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />

                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                                    {celula.tag}
                                </div>

                                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

                                <div className="absolute bottom-4 left-4 right-4">
                                    <h3 className="text-white text-xl font-semibold">
                                        {celula.nome}
                                    </h3>
                                </div>

                            </div>

                            <div className="p-5">

                                <p className="text-gray-500 text-sm leading-6 mb-5">
                                    {celula.desc}
                                </p>

                                <div className="space-y-3 text-sm">

                                    <div className="flex items-center gap-3">
                                        <User className="w-4 h-4 text-blue-600" />
                                        <span className="font-medium">
                                            Líder:
                                        </span>
                                        <span className="text-gray-600">
                                            {celula.lider}
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <Clock className="w-4 h-4 text-green-600" />
                                        <span className="font-medium">
                                            Horário:
                                        </span>
                                        <span className="text-gray-600">
                                            {celula.horario}
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <MapPin className="w-4 h-4 text-red-600" />
                                        <span className="font-medium">
                                            Local:
                                        </span>
                                        <span className="text-gray-600">
                                            {celula.local}
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <Users className="w-4 h-4 text-purple-600" />
                                        <span className="font-medium">
                                            Membros:
                                        </span>
                                        <span className="text-gray-600">
                                            {celula.numeroMembros}
                                        </span>
                                    </div>

                                </div>

                                <div className="flex flex-wrap gap-2 mt-6">

                                    <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs">
                                        {celula.idade}
                                    </span>

                                    <span className="px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs">
                                        {celula.genero}
                                    </span>

                                    <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs">
                                        Desde {celula.fundacao}
                                    </span>

                                </div>

                                <button
                                    onClick={() => setSelectedCell(celula.nome)}
                                    className="mt-6 w-full bg-gray-900 hover:bg-blue-700 transition-all duration-300 text-white rounded-lg py-3 flex items-center justify-center gap-2 font-medium"
                                >
                                    Visitar esta célula
                                    <ArrowRight size={18} />
                                </button>

                            </div>

                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <style jsx global>{`
    .swiper-pagination {
        bottom: 0 !important;
    }

    .swiper-pagination-bullet {
        width: 10px;
        height: 10px;
        background: #d1d5db;
        opacity: 1;
        transition: all .3s;
    }

    .swiper-pagination-bullet-active {
        width: 28px;
        border-radius: 999px;
        background: #2563eb;
    }
`}</style>
        </div>
    );
}