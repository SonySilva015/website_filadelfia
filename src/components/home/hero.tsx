'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import Link from 'next/link'
import m1 from '@/public/img/batismo.jpeg'
import m2 from '@/public/img/lamb_lost.png'
import m3 from '@/public/img/retirada.png'
import m4 from '@/public/adora/jovens.png'

import Image from 'next/image'

export default function HeroSwiper() {

    const slides = [
        {
            title: "Receber Jesus",
            text: "Entregue sua vida a Cristo e experimente o verdadeiro perdão, a paz e a esperança que somente Ele pode oferecer. Hoje pode ser o começo de uma nova caminhada com Deus.",
            ref: "Mateus 11:28",
            img: m1,
            what: "Ver mais",
            link: "/evangelismo"
        },
        {
            title: "Jesus é o Caminho",
            text: "Jesus é o único caminho para a salvação. Nele encontramos a verdade que transforma vidas e a vida eterna preparada por Deus para todos os que creem.",
            ref: "João 14:6",
            img: m2,
            what: "",
            link: ""
        },
        {
            title: "Avivamento para os Jovens",
            text: "Uma geração apaixonada por Cristo pode transformar o mundo. Participe dos cultos de jovens, retiros, momentos de comunhão e descubra o propósito de Deus para a sua vida.",
            ref: "1 Timóteo 4:12",
            img: m3,
            what: "Saber mais",
            link: "/juventude"
        },
        {
            title: "Cultos de Adoração",
            text: "Venha adorar ao Senhor conosco em um ambiente de fé, comunhão e transformação. Venha adorar o Senhor porque é dgno de toda honra, glória e louvor",
            ref: "Salmos 95:6",
            img: m4,
            what: "",
            link: ""
        }
    ]

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
                        delay: 10000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: false,
                    }}
                    allowTouchMove={false}
                    className="w-full h-full"
                >
                    {slides.map((item, index) => (
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


                            <div className='p-2 '>
                                <div
                                    className="absolute z-20 max-w-6xl  bottom-10 rounded-r-lg   md:left-40 slide-content  p-5 md:p-10 "
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
                                        <Link className='bg-red-500 p-2 rounded-md text-amber-50' href={item.link}> {item.what} </Link>

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
