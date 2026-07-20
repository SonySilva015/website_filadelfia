'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import Link from 'next/link'
import { GetNoticeLimit } from "@/collections/notice/fetcher";

import Image from 'next/image'

export default function HeroSwiper({ slides }: any) {

    return (
        <>
            <style>{`
                /* Conteúdo sobe com fade */
                .slide-content {
                    opacity: 0;
                    transform: translateY(60px);
                    transition: all 1s ease;
                }

                .swiper-slide-active .slide-content {
                    opacity: 1;
                    transform: translateY(0);
                }

                .swiper-slide-prev .slide-content,
                .swiper-slide-next .slide-content {
                    opacity: 0;
                    transform: translateY(60px);
                }

                /* Zoom suave na imagem de fundo */
                .slide-bg {
                    transform: scale(1);
                    transition: transform 6s ease;
                }

                .swiper-slide-active .slide-bg {
                    transform: scale(1.1);
                }
            `}</style>

            <section className="relative w-full h-112.5 overflow-hidden flex items-center justify-center text-white">

                <Swiper
                    modules={[Autoplay, EffectFade]}
                    effect="fade"
                    fadeEffect={{ crossFade: true }}
                    loop
                    speed={1200}
                    autoplay={{
                        delay: 8000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: false,
                    }}
                    allowTouchMove={false}
                    className="w-full h-full"
                >
                    {slides.map((item: any, index: any) => (
                        <SwiperSlide key={index} className="relative w-full h-full flex items-center justify-center">

                            {/* IMAGEM DE FUNDO */}
                            <div className="absolute inset-0 w-full h-full">
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    fill
                                    priority
                                    className="object-cover slide-bg"
                                />

                                <div className="absolute inset-0 bg-linear-to-t from-gray-950 via-gray-900/50 to-gray-900/80" />
                            </div>

                            {/* CONTEÚDO CENTRAL */}
                            <div className='p-2 '>
                                <div
                                    className="absolute z-20 max-w-6xl  bottom-10 rounded-r-lg   md:left-40 slide-content md:bg-black/30 p-5 md:p-10 "
                                >
                                    <h1 className="text-xl md:text-3xl font-bold mb-6" >
                                        {item.title}
                                    </h1>

                                    <p className=" md:text-md  italic leading-relaxed mb-4">
                                        {item.text}
                                    </p>

                                    <p className="text-gray-300 text-lg md:text-xl">
                                        — {item.ref}
                                    </p>
                                    <div className='mt-8 border-t border-white/30 pt-8'>
                                        <Link className='bg-red-500 p-2 rounded-md text-amber-50' rel="stylesheet" href={item.link}>{item.what}</Link>

                                    </div>
                                </div>
                            </div>

                        </SwiperSlide>
                    ))}
                </Swiper>

            </section>

        </>
    )
}
