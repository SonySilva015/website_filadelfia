'use client'
import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import hero from '@/public/img/hero.jpg'
import { BookOpen, Smile, Heart, Clock, UserCircle2 } from 'lucide-react'
import Tema from './components/them'
import ebd1 from '@/public/img/ebd1.jpeg'
import ebd2 from '@/public/img/ebd2.jpeg'
import ebd3 from '@/public/img/ebd3.jpeg'
import ebd4 from '@/public/img/ebd5.jpeg'


const turmasComProfessores = [
    {
        id: 1,
        faixa: "0 - 3 anos",
        nome: "Berçário",
        descricao: "Primeiros passos na fé com muito amor e cuidado em um ambiente seguro.",
        horario: "Domingo 09:00h",
        professor: {
            nome: "Natalia Marichi",
            cargo: "Coordenadora",
            img: ""
        }
    },
    {
        id: 2,
        faixa: "4 - 6 anos",
        nome: "Jardim da Fé",
        descricao: "Aprendendo sobre Jesus com histórias interativas e muitas brincadeiras.",
        horario: "Domingo 09:00h",
        professor: {
            nome: "Anita Alfredo",
            cargo: "Professora",
            img: "/img/anita_pro.jpeg"
        }
    },
    {
        id: 3,
        faixa: "7 - 9 anos",
        nome: "Primários",
        descricao: "Desvendando as Escrituras de forma divertida e criativa.",
        horario: "Domingo 09:00h",
        professor: {
            nome: "Januario Justo",
            cargo: "Professor",
            img: "/img/papy.jpg"
        }
    },
    {
        id: 4,
        faixa: "10 - 12 anos",
        nome: "Pré-adolescentes",
        descricao: "Construindo uma base sólida de valores para a adolescência.",
        horario: "Domingo 09:00h",
        professor: {
            nome: "Joaquim Paulo",
            cargo: "Professor",
            img: ""
        }
    }
];



// Array de fotos para o álbum
const albumFotos = [
    ebd1,
    ebd2,
    ebd3,
    ebd4,

];

export default function EbdInfantil() {
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



            <Tema />


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

            {/* --- TURMAS COM SEUS PROFESSORES --- */}
            <section className="py-20 px-6 bg-slate-50 border-y border-slate-200">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                            Nossas <span className="text-primary">Turmas</span>
                        </h2>
                        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                            Cada turma tem um professor dedicado para acompanhar o crescimento espiritual das crianças.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {turmasComProfessores.map((turma) => (
                            <div key={turma.id} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl border-t-4 border-primary transition-all group flex flex-col h-full">
                                <span className="inline-block px-3 py-1 bg-slate-100 text-slate-700 font-bold text-xs rounded-full mb-4 self-start">
                                    {turma.faixa}
                                </span>
                                <h3 className="text-2xl font-black text-slate-900 mb-3">{turma.nome}</h3>
                                <p className="text-slate-600 mb-4 grow">
                                    {turma.descricao}
                                </p>

                                <div className="flex items-center gap-4 p-3 bg-slate-50 rounded-xl mb-4 border border-slate-200">
                                    <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-300 flex items-center justify-center shrink-0 border-2 border-primary">
                                        {turma.professor.img ? (
                                            <Image
                                                src={turma.professor.img}
                                                alt={turma.professor.nome}
                                                width={48}
                                                height={48}
                                                className="object-cover w-full h-full"
                                            />
                                        ) : (
                                            <UserCircle2 size={28} className="text-slate-500" />
                                        )}
                                    </div>
                                    <div className="text-left">
                                        <p className="text-slate-900 font-bold text-sm">{turma.professor.nome}</p>
                                        <p className="text-primary text-xs font-semibold uppercase tracking-wide">{turma.professor.cargo}</p>
                                    </div>
                                </div>

                                <div className="pt-4 border-t border-slate-200 mt-auto">
                                    <div className="flex items-center gap-2 text-slate-700 font-bold text-sm">
                                        <Clock size={16} className="text-primary" /> {turma.horario}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


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

            {/* --- EQUIPE / PROFESSORES (Visão Geral) --- */}
            <section className="py-24 px-6 bg-slate-50 border-y border-slate-200">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                        Nossa <span className="text-primary">Equipe</span>
                    </h2>
                    <p className="text-slate-600 text-lg mb-16 max-w-2xl mx-auto">
                        Conheça os professores que dedicam seu tempo e amor para ensinar os princípios do Reino.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                        {turmasComProfessores.map((turma, i) => (
                            <div key={i} className="flex flex-col items-center group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200">
                                <div className="w-40 h-40 rounded-full overflow-hidden mb-6 shadow-md border-4 border-slate-200 bg-slate-300 flex items-center justify-center group-hover:scale-105 group-hover:border-primary transition-all duration-300">
                                    {turma.professor.img ? (
                                        <Image
                                            src={turma.professor.img}
                                            alt={turma.professor.nome}
                                            width={160}
                                            height={160}
                                            className="object-cover w-full h-full"
                                        />
                                    ) : (
                                        <UserCircle2 size={80} className="text-slate-400" />
                                    )}
                                </div>
                                <h4 className="text-xl font-bold text-slate-900">{turma.professor.nome}</h4>
                                <p className="text-primary font-bold text-xs uppercase tracking-widest mt-2">{turma.professor.cargo}</p>
                                <div className="mt-3 inline-block px-4 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full border border-slate-200">
                                    {turma.nome}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- CTA FINAL (Call to Action) --- */}
            <section className="bg-slate-800 text-white py-24 px-6 text-center">
                <div className="max-w-3xl mx-auto space-y-8">
                    <h2 className="text-4xl md:text-5xl font-black leading-tight">
                        Faça parte dessa história!
                    </h2>
                    <p className="text-lg text-slate-300 leading-relaxed">
                        Traga seu filho para conhecer Jesus de maneira divertida e transformadora. As matrículas para a Escola Bíblica Dominical estão abertas.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
                        <Link href="/matricula" className="w-full sm:w-auto px-10 py-4 bg-white hover:bg-slate-100 text-slate-900 font-bold rounded-full shadow-lg transition-all hover:-translate-y-1">
                            Fazer Matrícula
                        </Link>
                        <Link href="/contato" className="w-full sm:w-auto px-10 py-4 bg-transparent border-2 border-white/30 hover:bg-white/10 text-white font-bold rounded-full transition-all">
                            Falar com a Coordenação
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
}