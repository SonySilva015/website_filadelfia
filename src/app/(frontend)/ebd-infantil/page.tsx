'use client'
import React from 'react';
import hero from '@/public/img/hero.jpg'
import Image from 'next/image'

const professores = [
    {
        nome: "Joaquim Paulo",
        cargo: " ",
        img: "",

    },
    {
        nome: "Anita Alfredo",
        cargo: " ",
        img: "/img/anita_pro.jpeg",

    },
    {
        nome: " Januario Justo",
        cargo: " ",
        img: "/img/papy.jpg",

    },
    {
        nome: "Natalia Marichi",
        cargo: "Professora - Coodernadora",
        img: "",

    },
];




export default function EbdInfantil() {
    const [activeTab, setActiveTab] = React.useState(0);

    return (
        <div className="bg-white font-sans">

            {/* --- HERO EBD --- */}
            <section className="relative h-100 flex  overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src={hero}
                        alt="Crianças felizes"
                        fill
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/70"></div>
                </div>
                <div className="relative z-10 ml-10 mt-10 px-4 text-white">
                    <h1 className="text-5xl md:text-7xl font-black mb-4 drop-shadow-lg uppercase tracking-tighter">
                        EBD Infantil
                    </h1>
                    <p className="text-xl md:text-2xl font-bold bg-white/20 backdrop-blur-md inline-block px-6 py-2 rounded-full mb-6">
                        Ensina a criança no caminho em que deve andar
                    </p>
                    <p className="text-lg max-w-2xl mx-auto bg-black/20 backdrop-blur-sm p-4 rounded-xl">
                        Provérbios 22:6 - Instrui o menino no caminho em que deve andar, e até quando envelhecer não se desviará dele.
                    </p>
                </div>
            </section>

            {/* --- INTRODUÇÃO MELHORADA --- */}
            <section className="py-20 px-6 max-w-5xl mx-auto text-center">


                <h2 className="text-4xl font-bold text-gray-800 mb-6">
                    Onde a Palavra vira <span className="text-purple-500">diversão</span>!
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                    Nossa Escola Bíblica Dominical Infantil vai além do ensino tradicional.
                    Desenvolvemos um método exclusivo que combina **fundamentos bíblicos sólidos** com
                    **metodologias pedagógicas modernas**.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                    <div className="p-6 bg-white rounded-xl shadow-2xl">
                        <span className="text-3xl mb-3 block"></span>
                        <h3 className="font-bold text-lg mb-2 text-purple-500">Ensino Contextualizado</h3>
                        <p className="text-gray-600">Cada lição adaptada à faixa etária e nível de compreensão</p>
                    </div>
                    <div className="p-6 bg-white rounded-xl shadow-2xl">
                        <span className="text-3xl mb-3 block"></span>
                        <h3 className="font-bold text-lg mb-2 text-purple-500">Metodologia Ativa</h3>
                        <p className="text-gray-600">Artes, música, teatro e dinâmicas que engajam os pequenos</p>
                    </div>
                    <div className="p-6 bg-white rounded-xl shadow-2xl">
                        <span className="text-3xl mb-3 block"></span>
                        <h3 className="font-bold text-lg mb-2 text-purple-500">Valores Eternos</h3>
                        <p className="text-gray-600">Formação de caráter baseada nos princípios bíblicos</p>
                    </div>
                </div>
            </section>

            {/* --- HORÁRIOS DESTAQUE --- */}
            <section className="relative py-20 px-6 overflow-hidden">
                {/* Background com Overlay */}
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-500 hover:scale-105"
                    style={{ backgroundImage: "url('/img/ebd1.jpeg')" }}
                />
                <div className="absolute inset-0 bg-black/80 z-10"></div>

                <div className="relative z-20 max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h3 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                            Horários de <span className="text-blue-500">Estudo</span>
                        </h3>
                        <div className="h-1 w-20 bg-blue-500 mx-auto mt-4 rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Card de Horário */}
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl flex flex-col items-center text-center hover:bg-white/20 transition-all group">
                            <div className="bg-blue-500 p-3 rounded-full mb-4 group-hover:scale-110 transition-transform">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="Refazer: M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h4 className="text-white font-semibold text-xl mb-2">Domingo</h4>
                            <p className="text-gray-300 text-lg font-medium">07:30h</p>
                            <span className="text-xs text-blue-400 mt-2 uppercase tracking-widest font-bold">Escola Bíblica</span>
                        </div>

                        {/* Você pode repetir o card acima para outros horários ou deixar o grid vazio por enquanto */}
                    </div>
                </div>
            </section>



            {/* --- SEÇÃO PROFESSORES (AMPLIADA) --- */}
            <section className="py-20 bg-linear-to-b from-white to-orange-50 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h3 className="text-5xl font-bold text-gray-800 mb-4">Nossos Professores</h3>
                        <p className="text-gray-500 text-xl italic">Equipe preparada e apaixonada pelo Reino</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {professores.map((prof, i) => (
                            <div key={i} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all text-center group">
                                <div className="relative mb-6 inline-block">
                                    <div className="absolute -inset-2 bg-linear-to-tr from-purple-400 to-purple-950 rounded-full blur opacity-25 group-hover:opacity-100 transition duration-300"></div>
                                    <img
                                        src={prof.img}
                                        alt={prof.nome}
                                        className="relative w-36 h-36 rounded-full object-cover border-4 border-white shadow-lg mx-auto"
                                    />
                                </div>
                                <h4 className="text-2xl font-bold text-gray-800">{prof.nome}</h4>
                                <p className="text-orange-500 font-bold text-sm uppercase mb-2">{prof.cargo}</p>

                            </div>
                        ))}
                    </div>
                </div>
            </section>



            {/* --- CHAMADA FINAL --- */}
            <section className="py-20 px-6 bg-linear-to-r from-purple-800 to-purple-950 text-white">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-6"> Faça parte dessa história!</h2>
                    <p className="text-xl mb-8 opacity-90">
                        Traga seu filho para conhecer Jesus de maneira divertida e transformadora.
                        As matrículas estão abertas!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-8 py-4 bg-white text-black-600 font-bold rounded-full hover:bg-gray-100 transition-colors shadow-lg">
                            Matricular agora
                        </button>
                        <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-colors">
                            Falar com coordenadora
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}