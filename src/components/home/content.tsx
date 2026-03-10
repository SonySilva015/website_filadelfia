'use client'

import Image from "next/image";
import Cultos from './cultos'
import Study from './sutdy'
import Teans from './teanSec'
import NoticyHome from "./noticias";
import mi from '@/public/img/hands.jpg'

export default function Content() {

    return (
        <div className="bg-white">
            <section className="px-4 md:px-12 py-12 bg-white">
                <div className="relative max-w-7xl mx-auto rounded-2xl overflow-hidden shadow-2xl">

                    <div className="flex flex-col md:flex-row min-h-[450px]">

                        {/* TEXTO */}
                        <div className="flex flex-col justify-center px-8 md:px-16 py-16 w-full md:w-1/2 bg-gradient-to-br from-[#00AEEF] to-[#0077B6]  text-white text-center md:text-left">

                            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                                Você é <span className="text-yellow-400">bem-vindo</span>, Amado
                            </h1>

                            <p className="mt-6 text-lg md:text-xl text-white/90 leading-relaxed max-w-xl mx-auto md:mx-0">
                                Não importa a raça, idade, nacionalidade, origem ou estatuto social.
                                Aqui você encontra amor, comunhão e propósito.
                            </p>

                            <button className="mt-8 bg-white text-cyan-800 font-semibold px-8 py-3 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 mx-auto md:mx-0">
                                Venha nos visitar
                            </button>

                        </div>

                        {/* IMAGEM */}
                        <div className="relative w-full md:w-1/2 h-72 md:h-auto">
                            <Image
                                src={mi}
                                alt="Culto na igreja"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover object-center"
                                priority
                            />

                            {/* OVERLAY SUAVE */}
                            <div className="absolute inset-0 bg-black/30"></div>
                        </div>

                    </div>

                </div>
            </section>

            <section className="relative w-full min-h-[500px] flex items-center justify-center text-white">

                {/* Imagem fixa */}
                <div
                    className="absolute inset-0 bg-fixed bg-center bg-cover"
                    style={{
                        backgroundImage: "url('/img/altar_gemi.png')"
                    }}
                />


                <div className="absolute inset-0 bg-white"></div>

                <div className="relative z-10 text-center max-w-4xl px-6 py-24 bg-black/30 rounded-lg">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Nossa Missão
                    </h1>

                    <p className="text-lg md:text-xl leading-relaxed">
                        Atender ao chamado de Cristo: ir e anunciar o Evangelho a toda criatura.
                        Levar esperança onde há dor, luz onde há escuridão e salvação a todos,
                        formando uma geração transformada pelo poder da Palavra.
                    </p>

                    <p className="mt-6 text-gray-200 italic">
                        “Ide por todo o mundo, pregai o evangelho a toda criatura.”
                        — Marcos 16:15
                    </p>
                </div>

            </section>

            {/*actividades recentes ou eventos */}
            <section className="p-4" >
                <div className="flex gap-5 flex-col lg:flex-row md:p-10">
                    <NoticyHome />
                    <div className="space-y-6 lg:w-[45%] mt-6">

                        <div className="bg-white rounded-lg shadow p-2">
                            <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Links Rápido</h1>

                            <div className="flex flex-1 flex-col gap-2">

                                <div className="p-4 rounded shadow ">
                                    <h3 className="text-lg font-semibold text-red-700 mb-2">Nossos cultos</h3>
                                    <p className="text-gray-700 text-sm">
                                        <span className="font-bold">Todos os domingos</span>
                                    </p>
                                </div>


                                <div className="p-4 rounded shadow">
                                    <h3 className="text-lg font-semibold text-red-700 mb-2">Estudos biblicos dominical</h3>
                                    <p className="text-gray-700 text-sm">
                                        <span className="font-bold">Adultos Jovens e crianças</span>
                                    </p>
                                </div>


                                <div className="p-4 rounded shadow">
                                    <h3 className="text-lg font-semibold text-red-700 mb-2">Obras Sociais</h3>
                                    <p className="text-gray-700 text-sm">
                                        <span className="font-bold">+50 ações</span>
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div className="bg-white shadow rounded-md p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                            <div className="flex-1">
                                <h4 className="text-sm text-gray-700 font-bold">Jesus é caminho e a vida</h4>
                                <p className="text-xs text-gray-600 mt-1 leading-snug">joão 1-12, mas todoas aqueles que nelam creram deu-lhes o poder de se tornarem filho de Deus</p>
                            </div>
                            <Image width={50} height={50} src="/img/logo.png" alt="Jesus" className="object-cover rounded-md" />
                        </div>
                    </div>
                </div>
            </section>
            <Cultos />
            <Study />
            <Teans />

        </div>


    );

}