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
import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Tipo baseado no schema do Payload (Celulas collection)
type Media = {
    url?: string | null;
    alt?: string | null;
} | string | null;

type Celula = {
    id: string;
    nome: string;
    capa: Media;
    descricao: string;
    horarios: string;
    membros: number;
    lider?: {
        nome?: string;
        foto?: Media;
    };
};

interface EvangelismoCarouselProps {
    celulas: Celula[];
}

function getMediaUrl(media: Celula['capa']): string {
    if (!media) return '/placeholder.jpg';
    if (typeof media === 'string') return media;
    return media.url ?? '/placeholder.jpg';
}

export default function EvangelismoCarousel({ celulas }: any) {
    const [selectedCell, setSelectedCell] = useState('');
    const swiperRef = useRef<SwiperType | null>(null);

    if (!celulas || celulas.length === 0) {
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
                <div className="max-w-6xl bg-gray-300 h-95 flex justify-center items-center mx-auto px-4 py-8 text-center text-gray-500">
                    <h1 className="text-2xl font-semibold"> Nenhuma célula cadastrada no momento.</h1>
                </div>
            </div>
        );
    }

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
                {celulas.map((celula: any) => (
                    <SwiperSlide key={celula.id}>
                        <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 h-full mb-8">

                            <div className="relative h-52 overflow-hidden">

                                <img
                                    src={celula.capa?.url || '/placeholder.jpg'}
                                    alt={celula.nome}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />

                                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

                                <div className="absolute bottom-4 left-4 right-4">
                                    <h3 className="text-white text-xl font-semibold">
                                        {celula.nome}
                                    </h3>
                                </div>

                            </div>

                            <div className="p-5">

                                <p className="text-gray-500 text-sm leading-6 mb-5">
                                    {celula.descricao}
                                </p>

                                <div className="space-y-3 text-sm">

                                    <div className="flex items-center gap-3">
                                        <User className="w-4 h-4 text-blue-600" />
                                        <span className="font-medium">
                                            Líder:
                                        </span>
                                        <span className="text-gray-600">
                                            {celula.lider?.nome ?? '—'}
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <Clock className="w-4 h-4 text-green-600" />
                                        <span className="font-medium">
                                            Horário:
                                        </span>
                                        <span className="text-gray-600">
                                            {celula.horarios}
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <Users className="w-4 h-4 text-purple-600" />
                                        <span className="font-medium">
                                            Membros:
                                        </span>
                                        <span className="text-gray-600">
                                            {celula.membros}
                                        </span>
                                    </div>

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
            <div className='mt-10 text-center'>
                <Link href="/células" className="inline-block bg-red-600 hover:bg-red-0 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300">
                    Ver todas as células
                </Link>
            </div>
        </div>
    );
}