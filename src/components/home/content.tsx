import Link from 'next/link'
import Image from 'next/image'
import mi from '@/public/img/hands.jpg'


export default function Content() {

    return (
        <div className="bg-white">
            <section className=" md:py-12 bg-white">
                <div className="relative  mx-auto overflow-hidden shadow-2xl">

                    <div className="flex flex-col md:flex-row min-h-[450px]">

                        {/* TEXTO */}
                        <div className="flex flex-col justify-center px-8 md:px-16 py-16 w-full md:w-1/2 bg-linear-to-br from-[#5c046b] to-[#380147] text-white text-center md:text-left">

                            <h1 className="text-3xl md:text-5xl font-bold leading-tight text-center">
                                Você é <span className="text-red-400">bem-vindo</span>, Amado
                            </h1>

                            <p className="mt-6 text-lg md:text-xl text-white/90 leading-relaxed max-w-xl mx-auto md:mx-0">
                                Não importa a raça, idade, nacionalidade, origem ou estatuto social.
                                Aqui você encontra amor, comunhão e propósito.
                            </p>

                            <Link href={'/sobre'} className="mt-8 bg-white text-purple-900 font-semibold px-8 py-3 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 mx-auto md:mx-0">
                                Conheça-nos
                            </Link>

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
                        backgroundImage: "url('/src/public/img/altar_gemi.png')"
                    }}
                />


                <div className="absolute inset-0 bg-black/30"></div>

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


        </div>


    );

}