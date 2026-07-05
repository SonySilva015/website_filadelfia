'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    Music,
    Mic,
    Guitar,
    Piano,
    Drum,
    Users,
    Heart,
    Calendar,
    ArrowRight,
    ChevronRight,
    Quote,
    Book as Bible,
    Clock,
    MapPin,
    Play,
    Pause,
    Download,
    Share2,
    BookOpen,
    Sparkles,
    Church,
    Headphones,
    Radio,
    Film,
    Disc,
    Volume2
} from 'lucide-react';

// --- IMAGENS (SUBSTITUA PELOS CAMINHOS REAIS) ---
import heroWorship from '@/public/adora/IMG-20250831-WA0043.jpg';
import bandaWorship from '@/public/adora/IMG-20250831-WA0043.jpg';
import coralWorship from '@/public/adora/IMG-20250831-WA0043.jpg';
import jovensWorship from '@/public/adora/IMG-20250831-WA0043.jpg';
import instrumentos from '@/public/adora/IMG-20250831-WA0043.jpg';
import cultoWorship from '@/public/adora/IMG-20250831-WA0043.jpg';
import ensaioWorship from '@/public/adora/IMG-20250831-WA0043.jpg';

// --- DADOS DOS CÂNTICOS ---
const hinos = [
    {
        titulo: "Grande é o Senhor",
        numero: 1,
        categoria: "Hino",
        letra: "Grande é o Senhor e mui digno de louvor...",
        refrao: "Grande é o Senhor, grande é o Senhor!",
        autor: "Igreja Evangélica Independente de Angola"
    },
    {
        titulo: "Quão Grande é o Meu Deus",
        numero: 2,
        categoria: "Hino",
        letra: "Quão grande é o meu Deus, quão grande é o meu Deus...",
        refrao: "Quão grande é o meu Deus!",
        autor: "Chris Tomlin / IEIA"
    },
    {
        titulo: "A Tua Graça me Basta",
        numero: 3,
        categoria: "Hino",
        letra: "A tua graça me basta, a tua graça me basta...",
        refrao: "A tua graça me basta, Senhor!",
        autor: "IEIA"
    },
    {
        titulo: "Eu Navegarei",
        numero: 4,
        categoria: "Cântico",
        letra: "Eu navegarei no oceano do Espírito...",
        refrao: "Eu navegarei!",
        autor: "IEIA"
    },
    {
        titulo: "Deus é Fiel",
        numero: 5,
        categoria: "Hino",
        letra: "Deus é fiel, não deixará de cumprir...",
        refrao: "Deus é fiel, Ele é fiel!",
        autor: "Igreja Evangélica Independente de Angola"
    }
];

// --- CORINHOS FAMOSOS DA IEIA ---
const corinhos = [
    {
        titulo: "Aleluia, Aleluia",
        descricao: "Cântico de alegria e exaltação ao Senhor",
        refrao: "Aleluia, aleluia, aleluia, glória a Deus!",
        uso: "Abertura de cultos"
    },
    {
        titulo: "Eu Sou Feliz",
        descricao: "Expressão de alegria pela salvação em Cristo",
        refrao: "Eu sou feliz, eu sou feliz, Jesus me salvou!",
        uso: "Momentos de testemunho"
    },
    {
        titulo: "O Amor de Deus",
        descricao: "Cântico sobre o amor infinito de Deus",
        refrao: "O amor de Deus é tão grande, tão grande é o Seu amor!",
        uso: "Ofertórios"
    },
    {
        titulo: "Vamos Louvar ao Senhor",
        descricao: "Convite à adoração coletiva",
        refrao: "Vamos louvar ao Senhor, vamos louvar ao Senhor!",
        uso: "Entrada do culto"
    },
    {
        titulo: "Glória, Glória",
        descricao: "Cântico de glória e honra ao Rei",
        refrao: "Glória, glória, aleluia! Glória a Deus nas alturas!",
        uso: "Momento de louvor"
    },
    {
        titulo: "Santo, Santo, Santo",
        descricao: "Adoração à santidade de Deus",
        refrao: "Santo, santo, santo, Deus Todo-Poderoso!",
        uso: "Adoração"
    }
];

// --- CÂNTICOS POR CATEGORIA ---
const canticosAgrupados = {
    "Hinos de Adoração": [
        "Grande é o Senhor",
        "Quão Grande é o Meu Deus",
        "Santo, Santo, Santo",
        "Deus é Fiel",
        "A Tua Graça me Basta"
    ],
    "Cânticos de Louvor": [
        "Eu Navegarei",
        "Aleluia, Aleluia",
        "Eu Sou Feliz",
        "Vamos Louvar ao Senhor"
    ],
    "Cânticos de Ofertório": [
        "O Amor de Deus",
        "Glória, Glória",
        "Alegria no Senhor"
    ],
    "Cânticos de Encerramento": [
        "Até Breve",
        "Deus Te Abençoe",
        "Vai na Paz"
    ]
};

// --- DADOS DOS MINISTROS ---
const ministros = [
    {
        nome: "Irmão João da Silva",
        cargo: "Regente do Coral",
        especialidade: "Coral e Música Sacra",
        img: ""
    },
    {
        nome: "Irmã Maria dos Santos",
        cargo: "Líder de Louvor",
        especialidade: "Vocal e Teclado",
        img: "/img/worship/maria.jpg"
    },
    {
        nome: "Irmão Pedro Kiala",
        cargo: "Instrumentista",
        especialidade: "Guitarra e Baixo",
        img: "/img/worship/pedro.jpg"
    },
    {
        nome: "Irmã Ana Jamba",
        cargo: "Coordenadora do Coral Infantil",
        especialidade: "Música Infantil",
        img: "/img/worship/ana.jpg"
    }
];

// --- PRÓXIMOS EVENTOS ---
const eventosWorship = [
    {
        titulo: "Ensaio Geral do Coral",
        data: "Sábado - 15:00h",
        local: "Salão da Igreja",
        vagas: "Todos os membros"
    },
    {
        titulo: "Culto de Louvor e Adoração",
        data: "Domingo - 09:00h",
        local: "Templo Central",
        vagas: "Aberto ao público"
    },
    {
        titulo: "Oficina de Música Sacra",
        data: "Sábado 20/07 - 14:00h",
        local: "Auditório",
        vagas: "30 vagas"
    },
    {
        titulo: "Concerto de Cânticos",
        data: "Domingo 28/07 - 18:00h",
        local: "Templo Central",
        vagas: "Aberto ao público"
    }
];

// --- PLAYERS DE ÁUDIO FICTÍCIOS ---
const musicasPlayer = [
    { titulo: "Grande é o Senhor", duracao: "4:32", artista: "Coral IEIA" },
    { titulo: "Quão Grande é o Meu Deus", duracao: "5:10", artista: "Louvor IEIA" },
    { titulo: "Aleluia, Aleluia", duracao: "3:45", artista: "Coral Infantil" },
    { titulo: "Eu Navegarei", duracao: "4:50", artista: "Banda IEIA" }
];

export default function AdoracaoPage() {
    const [playing, setPlaying] = useState<number | null>(null);

    return (
        <main className="bg-white font-sans">

            {/* --- HERO SECTION --- */}
            <section className="relative h-[70vh] min-h-500px flex items-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src={heroWorship}
                        alt="Ministério de Adoração e Louvor"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-linear-to-r from-indigo-900/80 via-purple-900/60 to-indigo-900/40"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <div className="max-w-3xl">
                        <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-2 rounded-full text-white text-sm font-semibold border border-white/20 mb-6">
                            <Music size={16} className="text-purple-300" />
                            Ministério de Adoração
                        </span>

                        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
                            Adoração
                            <span className="block text-purple-300">
                                e Louvor
                            </span>
                        </h1>

                        <p className="text-xl text-gray-200 leading-relaxed max-w-2xl">
                            "Cantai ao Senhor um cântico novo, cantai ao Senhor, todas as terras!"
                            — Um ministério dedicado a conduzir a igreja em adoração sincera e
                            espiritual.
                        </p>

                        <div className="flex flex-wrap gap-4 mt-8">
                            <a
                                href="#canticos"
                                className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-bold transition shadow-lg shadow-purple-600/30"
                            >
                                Ver Cânticos
                                <ChevronRight size={18} />
                            </a>

                            <a
                                href="#eventos"
                                className="inline-flex items-center gap-2 border-2 border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-bold transition"
                            >
                                <Calendar size={18} />
                                Próximos Eventos
                            </a>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
                    <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
                        <div className="w-1.5 h-3 bg-white/60 rounded-full"></div>
                    </div>
                </div>
            </section>

            {/* --- SOBRE O MINISTÉRIO --- */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="inline-block px-4 py-1.5 bg-purple-100 text-purple-700 font-bold text-xs uppercase tracking-wider rounded-full mb-4">
                                Nossa Missão
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                                Conduzindo a Igreja em
                                <span className="block text-purple-600">Adoração Verdadeira</span>
                            </h2>

                            <p className="text-lg text-slate-600 leading-relaxed mb-6">
                                O Ministério de Adoração e Louvor da IEIA tem como missão conduzir
                                a igreja em momentos de profunda adoração, através da música e
                                cânticos que exaltam o nome de Deus e edificam a fé dos irmãos.
                            </p>

                            <div className="grid grid-cols-2 gap-4 mt-8">
                                <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200">
                                    <Music className="w-8 h-8 text-purple-500 mb-2" />
                                    <h4 className="font-bold text-slate-900">Música Sacra</h4>
                                    <p className="text-sm text-slate-600">Hinos e cânticos espirituais</p>
                                </div>

                                <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200">
                                    <Mic className="w-8 h-8 text-purple-500 mb-2" />
                                    <h4 className="font-bold text-slate-900">Louvor Vibrante</h4>
                                    <p className="text-sm text-slate-600">Música contemporânea</p>
                                </div>

                                <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200">
                                    <Users className="w-8 h-8 text-purple-500 mb-2" />
                                    <h4 className="font-bold text-slate-900">Coral e Conjuntos</h4>
                                    <p className="text-sm text-slate-600">Vocais e instrumentais</p>
                                </div>

                                <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200">
                                    <Heart className="w-8 h-8 text-purple-500 mb-2" />
                                    <h4 className="font-bold text-slate-900">Adoração Espiritual</h4>
                                    <p className="text-sm text-slate-600">Em espírito e em verdade</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src={bandaWorship}
                                    alt="Banda de Louvor"
                                    width={600}
                                    height={500}
                                    className="w-full h-450px object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-6 -left-6 bg-purple-600 text-white rounded-2xl p-4 shadow-xl">
                                <Quote className="w-8 h-8 text-purple-200" />
                                <p className="font-bold text-sm max-w-180px">
                                    "Cantai ao Senhor um cântico novo"
                                </p>
                                <span className="text-xs text-purple-200">Salmos 96:1</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- PILARES DA ADORAÇÃO --- */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                            Pilares da <span className="text-purple-600">Adoração</span>
                        </h2>
                        <p className="text-slate-600 text-lg max-w-3xl mx-auto">
                            Nossos valores e fundamentos para uma adoração que agrada a Deus
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            {
                                icon: Bible,
                                titulo: "Fundamento Bíblico",
                                desc: "Baseamos nossa adoração na Palavra de Deus"
                            },
                            {
                                icon: Heart,
                                titulo: "Adoração Espiritual",
                                desc: "Adoramos em espírito e em verdade"
                            },
                            {
                                icon: Users,
                                titulo: "Unidade do Corpo",
                                desc: "Todos unidos em um só coração"
                            },
                            {
                                icon: Music,
                                titulo: "Excelência Musical",
                                desc: "Oferecemos o melhor para Deus"
                            }
                        ].map((pilar, i) => (
                            <div key={i} className="bg-slate-50 rounded-2xl p-8 text-center border border-slate-200 hover:shadow-xl transition hover:-translate-y-2">
                                <div className="w-16 h-16 mx-auto rounded-full bg-purple-100 flex items-center justify-center mb-4">
                                    <pilar.icon className="w-8 h-8 text-purple-600" />
                                </div>
                                <h3 className="font-bold text-xl text-slate-900 mb-2">{pilar.titulo}</h3>
                                <p className="text-slate-600 text-sm">{pilar.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- CORINHOS FAMOSOS DA IEIA --- */}
            <section className="py-24 bg-linear-to-br from-indigo-900 via-purple-900 to-indigo-900 text-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1.5 bg-purple-500/30 text-purple-200 font-bold text-xs uppercase tracking-wider rounded-full mb-4">
                            Tradição IEIA
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Corinhos Famosos da <span className="text-purple-300">IEIA</span>
                        </h2>
                        <p className="text-purple-200/80 text-lg max-w-3xl mx-auto">
                            Cânticos que marcaram gerações e continuam vivos em nossos cultos
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {corinhos.map((corinho, i) => (
                            <div key={i} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/20 transition">
                                <div className="flex items-start justify-between mb-3">
                                    <h3 className="text-xl font-bold">{corinho.titulo}</h3>
                                    <span className="bg-purple-500/30 text-purple-200 text-xs font-bold px-3 py-1 rounded-full">
                                        {corinho.uso}
                                    </span>
                                </div>
                                <p className="text-purple-200/70 text-sm mb-3">{corinho.descricao}</p>
                                <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                                    <p className="text-lg font-semibold text-purple-200 italic">
                                        "{corinho.refrao}"
                                    </p>
                                </div>
                                <div className="mt-3 flex items-center gap-2 text-xs text-purple-300/60">
                                    <Music size={14} />
                                    <span>{corinho.uso}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- HINOS E CÂNTICOS --- */}
            <section id="canticos" className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1.5 bg-purple-100 text-purple-700 font-bold text-xs uppercase tracking-wider rounded-full mb-4">
                            Nosso Repertório
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                            Hinos e <span className="text-purple-600">Cânticos</span>
                        </h2>
                        <p className="text-slate-600 max-w-3xl mx-auto">
                            Uma seleção dos hinos e cânticos que fazem parte da nossa tradição musical
                        </p>
                    </div>

                    {/* Tabela de Hinos */}
                    <div className="bg-white rounded-3xl overflow-hidden shadow-md border border-slate-200 mb-16">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-slate-100">
                                    <tr>
                                        <th className="px-6 py-4 text-left text-sm font-bold text-slate-700">#</th>
                                        <th className="px-6 py-4 text-left text-sm font-bold text-slate-700">Título</th>
                                        <th className="px-6 py-4 text-left text-sm font-bold text-slate-700">Categoria</th>
                                        <th className="px-6 py-4 text-left text-sm font-bold text-slate-700">Autor</th>
                                        <th className="px-6 py-4 text-left text-sm font-bold text-slate-700">Ação</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {hinos.map((hino, i) => (
                                        <tr key={i} className="border-b border-slate-100 hover:bg-slate-50 transition">
                                            <td className="px-6 py-4 text-sm text-slate-600 font-bold">{hino.numero}</td>
                                            <td className="px-6 py-4">
                                                <div>
                                                    <p className="font-bold text-slate-900">{hino.titulo}</p>
                                                    <p className="text-xs text-slate-500 italic">"{hino.refrao}"</p>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className={`px-3 py-1 text-xs font-bold rounded-full ${hino.categoria === 'Hino'
                                                    ? 'bg-indigo-100 text-indigo-700'
                                                    : 'bg-purple-100 text-purple-700'
                                                    }`}>
                                                    {hino.categoria}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-slate-600">{hino.autor}</td>
                                            <td className="px-6 py-4">
                                                <button className="text-purple-600 hover:text-purple-700 font-bold text-sm flex items-center gap-1">
                                                    <Play size={16} />
                                                    Ouvir
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Cânticos por Categoria */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {Object.entries(canticosAgrupados).map(([categoria, canticos]) => (
                            <div key={categoria} className="bg-white rounded-2xl p-6 shadow-md border border-slate-200">
                                <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                    <BookOpen size={18} className="text-purple-600" />
                                    {categoria}
                                </h3>
                                <ul className="space-y-2">
                                    {canticos.map((cântico, i) => (
                                        <li key={i} className="text-sm text-slate-600 flex items-center gap-2">
                                            <Music size={12} className="text-purple-400" />
                                            {cântico}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- PLAYER DE ÁUDIO --- */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <Headphones className="w-12 h-12 mx-auto text-purple-600 mb-4" />
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">
                            Ouça os <span className="text-purple-600">Cânticos</span>
                        </h2>
                        <p className="text-slate-600">
                            Alguns dos nossos cânticos para edificação e louvor
                        </p>
                    </div>

                    <div className="space-y-4">
                        {musicasPlayer.map((musica, i) => (
                            <div key={i} className="bg-slate-50 rounded-2xl p-4 border border-slate-200 hover:shadow-md transition">
                                <div className="flex items-center gap-4">
                                    <button
                                        onClick={() => setPlaying(playing === i ? null : i)}
                                        className="w-12 h-12 rounded-full bg-purple-600 hover:bg-purple-700 text-white flex items-center justify-center transition flex-shrink-0"
                                    >
                                        {playing === i ? <Pause size={20} /> : <Play size={20} />}
                                    </button>

                                    <div className="flex-1">
                                        <h4 className="font-bold text-slate-900">{musica.titulo}</h4>
                                        <p className="text-sm text-slate-500">{musica.artista}</p>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <span className="text-sm text-slate-500">{musica.duracao}</span>
                                        <button className="text-slate-400 hover:text-purple-600 transition">
                                            <Download size={18} />
                                        </button>
                                        <button className="text-slate-400 hover:text-purple-600 transition">
                                            <Share2 size={18} />
                                        </button>
                                    </div>
                                </div>

                                {/* Barra de progresso (visual) */}
                                {playing === i && (
                                    <div className="mt-4">
                                        <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
                                            <div className="h-full bg-purple-600 rounded-full w-1/3 animate-pulse"></div>
                                        </div>
                                        <div className="flex justify-between text-xs text-slate-400 mt-1">
                                            <span>0:00</span>
                                            <span>{musica.duracao}</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- GALERIA DE FOTOS --- */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                            Momentos de <span className="text-purple-600">Louvor</span>
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Registros dos nossos momentos de adoração e louvor
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { img: bandaWorship, label: "Banda" },
                            { img: coralWorship, label: "Coral" },
                            { img: jovensWorship, label: "Jovens" },
                            { img: instrumentos, label: "Instrumentos" },
                            { img: cultoWorship, label: "Culto" },
                            { img: ensaioWorship, label: "Ensaio" }
                        ].map((item, i) => (
                            <div
                                key={i}
                                className={`relative rounded-2xl overflow-hidden group cursor-pointer ${i === 0 ? 'col-span-2 row-span-2' : ''
                                    } ${i === 2 ? 'col-span-1' : ''}`}
                            >
                                <Image
                                    src={item.img}
                                    alt={item.label}
                                    width={400}
                                    height={i === 0 ? 500 : 250}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition"></div>
                                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition">
                                    <span className="text-sm font-bold bg-black/50 px-3 py-1 rounded-full">
                                        {item.label}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- INSTRUMENTOS --- */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                            Instrumentos <span className="text-purple-600">Musicais</span>
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Os instrumentos utilizados em nosso ministério de louvor
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Piano, nome: "Teclado / Piano", desc: "Base harmônica" },
                            { icon: Guitar, nome: "Guitarra", desc: "Acompanhamento" },
                            { icon: Drum, nome: "Bateria", desc: "Ritmo" },
                            { icon: Mic, nome: "Vocais", desc: "Vozes" }
                        ].map((inst, i) => (
                            <div key={i} className="bg-slate-50 rounded-2xl p-6 text-center border border-slate-200 hover:shadow-lg transition">
                                <div className="w-16 h-16 mx-auto rounded-full bg-purple-100 flex items-center justify-center mb-4">
                                    <inst.icon className="w-8 h-8 text-purple-600" />
                                </div>
                                <h3 className="font-bold text-slate-900">{inst.nome}</h3>
                                <p className="text-sm text-slate-600">{inst.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- EQUIPE DO MINISTÉRIO --- */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1.5 bg-purple-100 text-purple-700 font-bold text-xs uppercase tracking-wider rounded-full mb-4">
                            Nossa Equipe
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                            Ministros de <span className="text-purple-600">Louvor</span>
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Pessoas dedicadas a conduzir a adoração com excelência e unção
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {ministros.map((ministro, i) => (
                            <div key={i} className="bg-white rounded-3xl p-6 text-center shadow-md border border-slate-200 hover:shadow-xl transition">
                                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-gradient-to-r from-purple-400 to-purple-600 flex items-center justify-center mb-4">
                                    {ministro.img ? (
                                        <Image
                                            src={ministro.img}
                                            alt={ministro.nome}
                                            width={128}
                                            height={128}
                                            className="object-cover w-full h-full"
                                        />
                                    ) : (
                                        <Music className="w-12 h-12 text-white" />
                                    )}
                                </div>
                                <h4 className="text-xl font-bold text-slate-900">{ministro.nome}</h4>
                                <p className="text-purple-600 font-bold text-sm">{ministro.cargo}</p>
                                <p className="text-sm text-slate-500 mt-1">{ministro.especialidade}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- EVENTOS --- */}
            <section id="eventos" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1.5 bg-purple-100 text-purple-700 font-bold text-xs uppercase tracking-wider rounded-full mb-4">
                            Agenda
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                            Próximos <span className="text-purple-600">Eventos</span>
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Fique por dentro dos ensaios, cultos e eventos do ministério
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {eventosWorship.map((evento, i) => (
                            <div key={i} className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition group">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
                                        <Music className="w-6 h-6 text-purple-600" />
                                    </div>
                                    <div>
                                        <span className="text-xs font-bold text-purple-600 bg-purple-100 px-2 py-0.5 rounded-full">
                                            {evento.vagas}
                                        </span>
                                    </div>
                                </div>

                                <h3 className="text-lg font-bold text-slate-900 mb-2">{evento.titulo}</h3>

                                <div className="space-y-1.5 text-sm text-slate-600">
                                    <p className="flex items-center gap-2">
                                        <Clock size={16} className="text-purple-500" />
                                        {evento.data}
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <MapPin size={16} className="text-purple-500" />
                                        {evento.local}
                                    </p>
                                </div>

                                <button className="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-xl font-bold transition">
                                    Participar
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- VERSÍCULO --- */}
            <section className="py-24 bg-gradient-to-br from-indigo-900 to-purple-900 text-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <Music className="w-16 h-16 mx-auto mb-6 text-purple-300" />

                    <span className="inline-block px-4 py-1.5 bg-purple-500/20 text-purple-200 font-bold text-xs uppercase tracking-wider rounded-full mb-6">
                        Palavra de Deus
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        O Louvor que Agrada a Deus
                    </h2>

                    <blockquote className="text-2xl md:text-3xl italic text-purple-100 leading-relaxed">
                        "Louvai ao Senhor. Cantai ao Senhor um cântico novo, e o seu louvor na congregação dos santos."
                    </blockquote>

                    <p className="mt-4 text-purple-300 font-bold text-lg">
                        Salmos 149:1
                    </p>
                </div>
            </section>

            {/* --- CTA FINAL --- */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <div className="inline-flex items-center gap-2 bg-purple-100 px-6 py-2 rounded-full mb-6">
                        <Heart className="w-5 h-5 text-purple-600 fill-purple-600" />
                        <span className="text-sm font-bold text-purple-700">Participe do Ministério</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                        Faça Parte do <span className="text-purple-600">Ministério de Louvor</span>
                    </h2>

                    <p className="text-slate-600 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                        Se você tem dom musical, deseja aprender ou quer servir através da música,
                        venha fazer parte da nossa equipe de adoração e louvor.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href="/contato"
                            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-bold transition shadow-lg shadow-purple-600/30"
                        >
                            Quero Participar
                            <ArrowRight size={18} />
                        </Link>

                        <Link
                            href="/ensaios"
                            className="inline-flex items-center gap-2 border-2 border-purple-200 hover:bg-purple-50 text-slate-700 px-8 py-4 rounded-xl font-bold transition"
                        >
                            Ver Ensaios
                            <Calendar size={18} />
                        </Link>
                    </div>

                    <div className="mt-12 pt-12 border-t border-slate-200 flex flex-wrap justify-center gap-8 text-sm text-slate-500">
                        <span>🎵 Corais</span>
                        <span>🎸 Bandas</span>
                        <span>🎹 Instrumentos</span>
                        <span>🎤 Vocais</span>
                    </div>
                </div>
            </section>

        </main>
    );
}