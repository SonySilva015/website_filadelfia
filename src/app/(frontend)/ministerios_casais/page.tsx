'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    Heart,
    Handshake,
    Home,
    Calendar,
    BookOpen,
    MessageCircle,
    ArrowRight,
    Sparkles,
    Camera,
    Quote,

} from "lucide-react";


import retiroCasais from '@/public/casais/casais_q.png'
import local from '@/public/casais/local_retiro.jpeg'
import encontro from '@/public/casais/casais1.png'
import casalDestaque from '@/public/casais/casal.png'
import casais from '@/public/casais/casal.png'


// --- DADOS ---
const atividades = [
    {
        icon: BookOpen,
        titulo: "Estudos para Casais",
        descricao: "Momentos de aprendizagem bíblica voltados para o fortalecimento do casamento e da família cristã.",
        imagem: encontro,
        cor: "from-blue-500 to-blue-600"
    },
    {
        icon: MessageCircle,
        titulo: "Aconselhamento Familiar",
        descricao: "Orientação espiritual baseada na Palavra de Deus para auxiliar casais nos desafios da vida matrimonial.",
        imagem: null,
        cor: "from-emerald-500 to-emerald-600"
    },
    {
        icon: Calendar,
        titulo: "Retiros de Casais",
        descricao: "Encontros especiais para renovação dos votos, fortalecimento da união e crescimento espiritual.",
        imagem: retiroCasais,
        cor: "from-purple-500 to-purple-600"
    },
    {
        icon: Handshake,
        titulo: "Comunhão entre Famílias",
        descricao: "Actividades que promovem amizade, integração e apoio mútuo entre os lares da igreja.",
        imagem: casais,
        cor: "from-amber-500 to-amber-600"
    },
    {
        icon: Heart,
        titulo: "Encontro de Casais",
        descricao: "Momentos que compartilhamos dor, dificuldades, alegria, orações e conselhos",
        imagem: encontro,
        cor: "from-rose-500 to-rose-600"
    },
    {
        icon: Home,
        titulo: "Fortalecimento do Lar",
        descricao: "Iniciativas voltadas para a construção de famílias saudáveis fundamentadas nos princípios bíblicos.",
        imagem: null,
        cor: "from-teal-500 to-teal-600"
    }
];

const depoimentos = [
    {
        nome: "José e Maria Silva",
        texto: "O ministério dos casais transformou nosso relacionamento. Aprendemos a nos comunicar melhor e a colocar Deus no centro do nosso lar.",
        casados: "12 anos"
    },
    {
        nome: "Pedro e Ana Santos",
        texto: "Participar dos retiros de casais foi a melhor decisão que tomamos. Renovamos nossos votos e nossa fé em Deus.",
        casados: "8 anos"
    },
    {
        nome: "Carlos e Sofia Rodrigues",
        texto: "A comunhão com outras famílias nos ensinou que não estamos sozinhos. Apoio mútuo faz toda a diferença.",
        casados: "15 anos"
    }
];

const eventosProximos = [
    {
        titulo: "Retiro de Casais",
        data: "15-17 Agosto 2026",
        local: "Centro de Retiros Shalom",
        vagas: 30
    },
    {
        titulo: "Jantar Romântico",
        data: "7 Setembro 2026",
        local: "Salão da Igreja",
        vagas: 50
    },
    {
        titulo: "Estudo Especial: O Amor de Cristo",
        data: "14 Setembro 2026",
        local: "Auditório Central",
        vagas: 40
    }
];

const coordenacao = {
    nome: "Pastor João e Pastora Maria Silva",
    cargo: "Coordenadores do Ministério dos Casais",
    email: "casais@filadelfia.org",
    telefone: "(21) 99999-9999"
};

export default function CasaisPage() {
    return (
        <main className="bg-white font-sans">



            {/* --- HERO SECTION COM IMAGEM --- */}
            <section className="relative h-[70vh] min-h-500px flex items-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src={casais}
                        alt="Casais na Igreja Filadélfia"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-linear-to-r from-slate-950 to-slate-600/50"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <div className="max-w-3xl">
                        <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-2 rounded-full text-white text-sm font-semibold border border-white/20 mb-6">
                            <Heart size={16} className="text-rose-400 fill-rose-400" />
                            Ministério dos Casais
                        </span>

                        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
                            Casamentos
                            <span className="block text-rose-300">
                                que Honram a Deus
                            </span>
                        </h1>

                        <p className="text-xl text-gray-200 leading-relaxed max-w-2xl">
                            Um ministério dedicado ao fortalecimento dos casamentos, à edificação das famílias e à promoção dos valores cristãos que sustentam um lar saudável, feliz e abençoado por Deus.
                        </p>


                    </div>
                </div>



            </section>


            <section id="missao" className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="inline-block px-4 py-1.5 bg-rose-100 text-rose-700 font-bold text-xs uppercase tracking-wider rounded-full mb-4">
                                Nossa Missão
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                                Casamentos Fortes,
                                <br />
                                <span className="text-rose-600">Famílias Fortes</span>
                            </h2>

                            <p className="text-lg text-slate-600 leading-relaxed mb-6">
                                O Ministério dos Casais da Igreja Filadélfia tem como propósito fortalecer os lares através dos princípios bíblicos, promovendo relacionamentos saudáveis, amor, respeito, compromisso e comunhão com Deus.
                            </p>

                            <div className="grid grid-cols-2 gap-4 mt-8">
                                <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200">
                                    <Heart className="w-8 h-8 text-rose-500 mb-2" />
                                    <h4 className="font-bold text-slate-900">Amor Cristão</h4>
                                    <p className="text-sm text-slate-600">Baseado nos ensinamentos de Cristo</p>
                                </div>

                                <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200">
                                    <Handshake className="w-8 h-8 text-rose-500 mb-2" />
                                    <h4 className="font-bold text-slate-900">União e Respeito</h4>
                                    <p className="text-sm text-slate-600">Diálogo e confiança</p>
                                </div>

                                <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200 col-span-2">
                                    <Home className="w-8 h-8 text-rose-500 mb-2" />
                                    <h4 className="font-bold text-slate-900">Famílias Saudáveis</h4>
                                    <p className="text-sm text-slate-600">Lares que glorificam a Deus e são exemplo para a sociedade</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src={casalDestaque}
                                    alt="Casal feliz na igreja"
                                    width={600}
                                    height={500}
                                    className="w-full h-450px object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-6 -left-6 bg-rose-600 text-white rounded-2xl p-4 shadow-xl">
                                <Quote className="w-8 h-8 text-rose-200" />
                                <p className="font-bold text-sm max-w-180px">
                                    "O que Deus ajuntou não separe o homem"
                                </p>
                                <span className="text-xs text-rose-200">Mateus 19:6</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- ATIVIDADES COM IMAGENS --- */}
            <section id="atividades" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1.5 bg-rose-100 text-rose-700 font-bold text-xs uppercase tracking-wider rounded-full mb-4">
                            O Que Fazemos ??
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                            Nossas <span className="text-rose-600">Actividades</span>
                        </h2>
                        <p className="text-slate-600 text-lg max-w-3xl mx-auto">
                            Desenvolvemos iniciativas que fortalecem o casamento, promovem a comunhão e ajudam as famílias a crescerem espiritualmente.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {atividades.map((atividade, index) => {
                            const Icon = atividade.icon;

                            return (
                                <div
                                    key={index}
                                    className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100"
                                >
                                    {atividade.imagem && (
                                        <div className="relative h-48 overflow-hidden">
                                            <Image
                                                src={atividade.imagem}
                                                alt={atividade.titulo}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                                            <div className="absolute bottom-4 left-4">
                                                <Icon className="w-8 h-8 text-white" />
                                            </div>
                                        </div>
                                    )}

                                    <div className="p-6">
                                        {!atividade.imagem && (
                                            <div className={`w-14 h-14 rounded-xl bg-linear-to-r ${atividade.cor} flex items-center justify-center mb-4`}>
                                                <Icon className="w-7 h-7 text-white" />
                                            </div>
                                        )}

                                        <h3 className="font-bold text-xl text-slate-900 mb-2">
                                            {atividade.titulo}
                                        </h3>

                                        <p className="text-slate-600 leading-relaxed">
                                            {atividade.descricao}
                                        </p>

                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* --- RETIROS (DESTAQUE COM IMAGEM) --- */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src={local}
                        alt="Retiro de Casais"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-r from-slate-900/90 via-slate-900/80 to-slate-900/60"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="text-white">

                            <span className="inline-block px-4 py-1.5 bg-rose-500/30 text-rose-200 font-bold text-xs uppercase tracking-wider rounded-full mb-4">
                                Destaque
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Retiros de Casais
                            </h2>

                            <p className="text-rose-100 text-lg leading-relaxed mb-5">
                                Um dos momentos mais especiais do ministério, onde os casais têm a oportunidade de renovar sua comunhão com Deus e fortalecer o seu relacionamento.
                            </p>

                            <p className="text-rose-200/80 leading-relaxed">
                                São dias dedicados à oração, reflexão, aconselhamento, lazer e fortalecimento dos laços conjugais.
                            </p>

                            <div className="grid grid-cols-2 gap-4 mt-8">
                                {[
                                    "Renovação do amor",
                                    "Crescimento espiritual",
                                    "Melhor comunicação",
                                    "Fortalecimento da parceria",
                                    "Fortalecimento da família",
                                    "Aprendizagem bíblica"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-2 text-sm text-rose-100/90">
                                        <div className="w-1.5 h-1.5 rounded-full bg-rose-400"></div>
                                        {item}
                                    </div>
                                ))}
                            </div>


                        </div>


                    </div>
                </div>
            </section>


            {/* --- FUNDAMENTO BÍBLICO --- */}
            <section className="py-24 bg-linear-to-br from-slate-900 to-slate-800 text-white">
                <div className="max-w-4xl mx-auto px-6 text-center">

                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        A Palavra como Base
                    </h2>

                    <div className="relative">
                        <div className="absolute -top-4 -left-4 text-6xl text-rose-500/20 font-serif">"</div>
                        <blockquote className="text-2xl md:text-3xl italic text-slate-200 leading-relaxed px-8 py-4">
                            "Assim já não são dois, mas uma só carne. Portanto, o que Deus ajuntou não o separe o homem."
                        </blockquote>
                        <div className="absolute -bottom-4 -right-4 text-6xl text-rose-500/20 font-serif rotate-180">"</div>
                    </div>

                    <p className="mt-4 text-rose-400 font-bold text-lg">
                        Mateus 19:6
                    </p>
                </div>
            </section>

            {/* --- GALERIA DE FOTOS --- */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <Camera className="w-12 h-12 mx-auto text-rose-500 mb-4" />
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                            Momentos <span className="text-rose-600">Especiais</span>
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Registros dos nossos encontros, retiros e confraternizações
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[retiroCasais, local, encontro].map((img, i) => (
                            <div
                                key={i}
                                className={`relative rounded-2xl overflow-hidden group cursor-pointer ${i === 0 ? 'col-span-2 row-span-2' : ''
                                    } ${i === 2 ? 'col-span-1' : ''}`}
                            >
                                <Image
                                    src={img}
                                    alt={`Momento ${i + 1}`}
                                    width={400}
                                    height={i === 0 ? 500 : 250}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors"></div>
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                                    <div className="bg-white/90 rounded-full p-3">
                                        <Camera className="w-6 h-6 text-slate-800" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- CTA FINAL --- */}
            <section className="py-24 bg-linear-to-br from-rose-700 to-rose-800 text-white">
                <div className="max-w-4xl mx-auto px-6 text-center">


                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Faça Parte Deste Ministério
                    </h2>

                    <p className="text-rose-100 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                        Junte-se ao Ministério dos Casais e fortaleça o seu casamento através da comunhão, da Palavra de Deus e do apoio mútuo entre famílias cristãs.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href="/contato"
                            className="inline-flex items-center gap-2 bg-white hover:bg-rose-50 text-rose-700 px-8 py-4 rounded-xl font-bold transition shadow-xl"
                        >
                            Participar Agora
                            <ArrowRight size={18} />
                        </Link>


                    </div>

                </div>
            </section>

        </main>
    );
}