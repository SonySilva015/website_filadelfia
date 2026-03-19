'use client'
import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import hero from '@/public/img/hero.jpg'
import { BookOpen, Smile, Heart, Clock, ArrowRight, UserCircle2, Camera } from 'lucide-react'

// --- DADOS ---
const professores = [
    { nome: "Joaquim Paulo", cargo: "Professor", img: "" },
    { nome: "Anita Alfredo", cargo: "Professora", img: "/img/anita_pro.jpeg" },
    { nome: "Januario Justo", cargo: "Professor", img: "/img/papy.jpg" },
    { nome: "Natalia Marichi", cargo: "Coordenadora", img: "" },
];

const turmas = [
    {
        id: 1,
        faixa: "0 - 3 anos",
        nome: "Berçário",
        descricao: "Primeiros passos na fé com muito amor e cuidado em um ambiente seguro.",
        horario: "Domingo 09:00h",
    },
    {
        id: 2,
        faixa: "4 - 6 anos",
        nome: "Jardim da Fé",
        descricao: "Aprendendo sobre Jesus com histórias interativas e muitas brincadeiras.",
        horario: "Domingo 09:00h",
    },
    {
        id: 3,
        faixa: "7 - 9 anos",
        nome: "Primários",
        descricao: "Desvendando as Escrituras de forma divertida e criativa.",
        horario: "Domingo 09:00h",
    },
    {
        id: 4,
        faixa: "10 - 12 anos",
        nome: "Pré-adolescentes",
        descricao: "Construindo uma base sólida de valores para a adolescência.",
        horario: "Domingo 09:00h",
    }
];

// Array de fotos para o álbum (Substitua pelos caminhos reais das suas fotos)
const albumFotos = [
    "/img/ebd-album-1.jpg",
    "/img/ebd-album-2.jpg",
    "/img/ebd-album-3.jpg",
    "/img/ebd-album-4.jpg",
    "/img/ebd-album-5.jpg",
];

export default function EbdInfantil() {
    return (
        <div className="bg-primary font-sans min-h-screen">

            {/* --- HERO SECTION --- */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center text-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src={hero}
                        alt="Crianças felizes na Igreja"
                        fill
                        className="w-full h-full object-cover"
                        priority
                    />
                    {/* Overlay escuro para a foto de fundo */}
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-6 text-white space-y-6">
                    <span className="inline-block px-4 py-1.5 bg-primary-light text-primary font-black text-xs uppercase tracking-widest rounded-full shadow-lg">
                        Ministério Infantil
                    </span>
                    <h1 className="text-5xl md:text-7xl font-black leading-tight drop-shadow-md">
                        Escola Bíblica <br /> <span className="text-primary-light">Dominical</span>
                    </h1>
                    <p className="text-lg md:text-xl font-medium max-w-2xl mx-auto bg-black/30 p-4 rounded-xl backdrop-blur-sm border border-white/10 leading-relaxed">
                        "Instrui o menino no caminho em que deve andar, e até quando envelhecer não se desviará dele." <br />
                        <span className="font-bold text-primary-light">— Provérbios 22:6</span>
                    </p>
                </div>
            </section>

            {/* --- INTRODUÇÃO / PILARES --- */}
            <section className="py-20 px-6 max-w-7xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-title mb-6">
                    Onde a Palavra vira <span className="text-primary">diversão!</span>
                </h2>
                <p className="text-lg text-body opacity-80 leading-relaxed max-w-3xl mx-auto mb-16">
                    Nossa Escola Bíblica Dominical Infantil vai além do ensino tradicional.
                    Desenvolvemos um método exclusivo que combina fundamentos bíblicos sólidos com metodologias lúdicas.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { titulo: "Ensino Contextualizado", desc: "Cada lição é adaptada à faixa etária.", icon: BookOpen },
                        { titulo: "Metodologia Ativa", desc: "Artes, música e dinâmicas que engajam.", icon: Smile },
                        { titulo: "Valores Eternos", desc: "Formação de caráter baseada na Bíblia.", icon: Heart }
                    ].map((item, index) => (
                        <div key={index} className="p-8 bg-secondary rounded-2xl shadow-lg border border-tertiary hover:-translate-y-2 transition-transform duration-300">
                            <div className="bg-primary-light w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6">
                                <item.icon className="text-primary w-8 h-8" />
                            </div>
                            <h3 className="font-bold text-xl mb-3 text-title">{item.titulo}</h3>
                            <p className="text-body opacity-80">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- TURMAS --- */}
            <section className="py-20 px-6 bg-tertiary">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-title mb-4">
                            Nossas <span className="text-link">Turmas</span>
                        </h2>
                        <p className="text-body opacity-80 text-lg max-w-2xl mx-auto">
                            Classes organizadas por idade para um aprendizado acolhedor e eficaz.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {turmas.map((turma) => (
                            <div key={turma.id} className="bg-secondary rounded-2xl p-8 shadow-md hover:shadow-xl border-t-4 border-primary transition-all group flex flex-col h-full">
                                <span className="inline-block px-3 py-1 bg-tertiary text-title font-bold text-xs rounded-full mb-4 self-start">
                                    {turma.faixa}
                                </span>
                                <h3 className="text-2xl font-black text-title mb-3">{turma.nome}</h3>
                                <p className="text-body opacity-70 mb-6 grow">
                                    {turma.descricao}
                                </p>

                                <div className="pt-6 border-t border-tertiary mt-auto">
                                    <div className="flex items-center gap-2 text-title font-bold text-sm">
                                        <Clock size={16} className="text-primary" /> {turma.horario}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- GALERIA DE FOTOS (ÁLBUM) --- */}
            <section className="py-24 px-6 bg-primary overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 flex flex-col items-center">
                        <div className="bg-primary-light p-4 rounded-full mb-4">
                            <Camera className="text-primary w-8 h-8" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-title mb-4">
                            Nossos <span className="text-primary">Momentos</span>
                        </h2>
                        <p className="text-body opacity-80 text-lg max-w-2xl mx-auto">
                            Um pouco da alegria, comunhão e aprendizado das nossas crianças durante as atividades da EBD.
                        </p>
                    </div>

                    {/* Grid em formato de Mosaico (Collage) */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
                        {albumFotos.map((foto, i) => {
                            // Criando um padrão visual onde a primeira e a última foto ocupam mais espaço
                            let spanClass = "";
                            if (i === 0) spanClass = "col-span-2 row-span-2";
                            else if (i === 4) spanClass = "col-span-2 row-span-1 md:row-span-2";
                            else spanClass = "col-span-1 row-span-1";

                            return (
                                <div
                                    key={i}
                                    className={`relative rounded-2xl overflow-hidden group shadow-md hover:shadow-xl transition-all duration-300 bg-secondary ${spanClass}`}
                                >
                                    {/* Usei a tag img normal aqui para facilitar caso você use fotos externas. 
                                        Se for usar next/image com fotos locais, basta trocar para <Image src={...} fill className="object-cover" /> */}
                                    <img
                                        src={foto}
                                        alt={`Momento EBD ${i + 1}`}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                        onError={(e) => {
                                            // Fallback caso a imagem não exista ainda
                                            e.currentTarget.src = "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=800&auto=format&fit=crop";
                                        }}
                                    />
                                    {/* Película escura ao passar o mouse */}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* --- EQUIPE / PROFESSORES --- */}
            <section className="py-24 px-6 bg-tertiary">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-title mb-4">Conheça os <span className="text-primary">Professores</span></h2>
                    <p className="text-body opacity-80 text-lg mb-16 max-w-2xl mx-auto">
                        Uma equipe treinada, cheia de amor e apaixonada por ensinar os princípios do Reino.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                        {professores.map((prof, i) => (
                            <div key={i} className="flex flex-col items-center group bg-secondary p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300">
                                <div className="w-40 h-40 rounded-full overflow-hidden mb-6 shadow-md border-4 border-tertiary bg-primary flex items-center justify-center group-hover:scale-105 group-hover:border-primary-light transition-all duration-300">
                                    {prof.img ? (
                                        <Image src={prof.img} alt={prof.nome} width={160} height={160} className="object-cover w-full h-full" />
                                    ) : (
                                        <UserCircle2 size={80} className="text-title opacity-20" />
                                    )}
                                </div>
                                <h4 className="text-xl font-bold text-title">{prof.nome}</h4>
                                <p className="text-primary font-bold text-xs uppercase tracking-widest mt-2">{prof.cargo}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- CTA FINAL (Call to Action) --- */}
            <section className="bg-[#1e3a8a] text-white py-24 px-6 text-center">
                <div className="max-w-3xl mx-auto space-y-8">
                    <h2 className="text-4xl md:text-5xl font-black leading-tight">
                        Faça parte dessa história!
                    </h2>
                    <p className="text-lg opacity-90 leading-relaxed">
                        Traga seu filho para conhecer Jesus de maneira divertida e transformadora. As matrículas para a Escola Bíblica Dominical estão abertas.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
                        <Link href="/matricula" className="w-full sm:w-auto px-10 py-4 bg-button-primary hover:bg-button-hover text-button-text font-bold rounded-full shadow-lg transition-all hover:-translate-y-1">
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