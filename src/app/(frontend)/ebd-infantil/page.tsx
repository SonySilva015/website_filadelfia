
import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import hero from '@/public/img/hero.jpg'
import { BookOpen, Smile, Heart } from 'lucide-react'
import ebd1 from '@/public/img/ebd1.jpeg'
import ebd2 from '@/public/img/ebd2.jpeg'
import ebd3 from '@/public/img/ebd3.jpeg'
import ebd4 from '@/public/img/ebd5.jpeg'
import GetTurmas from '@/collections/turma/fetcher'
import Turmas from './turma'



// Array de fotos para o álbum
const albumFotos = [
    ebd1,
    ebd2,
    ebd3,
    ebd4

];

export default async function EbdInfantil() {
    const { turmas: turmas } = await GetTurmas()
    return (
        <div className="bg-primary font-sans min-h-screen">

            {/* --- HERO SECTION --- */}
            <section className="relative h-[60vh] min-h-125 flex  items-center   overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src={hero}
                        alt="Crianças felizes na Igreja"
                        fill
                        className="w-full h-full object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>

                <div className="relative z-10 mx-auto w-3/4  text-white space-y-6">

                    <h1 className="text-5xl md:text-7xl font-bold leading-tight drop-shadow-md">
                        Escola Bíblica <br /> <span className="text-red-600">Dominical</span>
                    </h1>
                    <p className="text-lg md:text-xl font-medium  bg-blue-950/20 p-4 rounded-xl  border border-white/10 leading-relaxed">
                        "Instrui o menino no caminho em que deve andar, e até quando envelhecer não se desviará dele." <br />
                        <span className="font-bold text-primary-light">— Provérbios 22:6</span>
                    </p>
                </div>
            </section>




            <section className="py-20 px-6 max-w-7xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                    Onde a Palavra vira <span className="text-primary">diversão!</span>
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto mb-16">
                    Nossa Escola Bíblica Dominical Infantil vai além do ensino tradicional.
                    Desenvolvemos um método exclusivo que combina fundamentos bíblicos sólidos com metodologias lúdicas.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { titulo: "Ensino Contextualizado", desc: "Cada lição é adaptada à faixa etária.", icon: BookOpen },
                        { titulo: "Metodologia Ativa", desc: "Artes, música e dinâmicas que engajam.", icon: Smile },
                        { titulo: "Valores Eternos", desc: "Formação de caráter baseada na Bíblia.", icon: Heart }
                    ].map((item, index) => (
                        <div key={index} className="p-8 bg-white rounded-2xl shadow-md border border-slate-200 hover:-translate-y-2 transition-transform duration-300">
                            <div className="bg-slate-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6">
                                <item.icon className="text-slate-700 w-8 h-8" />
                            </div>
                            <h3 className="font-bold text-xl mb-3 text-slate-900">{item.titulo}</h3>
                            <p className="text-slate-600">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>


            <Turmas turmas={turmas} />

            <section className="py-24 px-6 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 flex flex-col items-center">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                            Nossos <span className="text-primary">Momentos</span>
                        </h2>
                        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                            Um pouco da alegria, comunhão e aprendizado das nossas crianças durante as atividades da EBD.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
                        {albumFotos.map((foto, i) => {
                            let spanClass = "";
                            if (i === 0) spanClass = "col-span-2 row-span-2";
                            else if (i === 4) spanClass = "col-span-2 row-span-1 md:row-span-2";
                            else spanClass = "col-span-1 row-span-1";

                            return (
                                <div
                                    key={i}
                                    className={`relative rounded-2xl overflow-hidden group shadow-md hover:shadow-xl transition-all duration-300 bg-slate-100 ${spanClass}`}
                                >
                                    <Image
                                        src={foto}
                                        alt={`Momento EBD ${i + 1}`}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                        fill
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>


            <section className="bg-slate-800 text-white py-24 px-6 text-center">
                <div className="max-w-3xl mx-auto space-y-8">
                    <h2 className="text-4xl md:text-5xl font-black leading-tight">
                        Faça parte dessa história!
                    </h2>
                    <p className="text-lg text-slate-300 leading-relaxed">
                        Traga seu filho para conhecer Jesus de maneira divertida e transformadora. As matrículas para a Escola Bíblica Dominical estão abertas.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
                        <Link href={`https://wa.me/${924566389}`} className="w-full sm:w-auto px-10 py-4 bg-white hover:bg-slate-100 text-slate-900 font-bold rounded-full shadow-lg transition-all hover:-translate-y-1">
                            Contactar
                        </Link>

                    </div>
                </div>
            </section>

        </div>
    );
}