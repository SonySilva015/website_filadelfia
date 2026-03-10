'use client'
import React from 'react';

const turmas = [
    {
        nome: "Cordeirinhos",
        idade: "0 a 3 anos",
        cor: "bg-pink-400",
        img: "/img/ebd1.jpeg",
        horario: "9h às 10h30",
        sala: "Sala 01 - Térreo",
        aprendizado: [
            "Primeiras histórias da Bíblia",
            "Músicas gestuais",
            "Afeto e acolhimento",
            "Orações simples"
        ]
    },
    {
        nome: "Pequenos Discípulos",
        idade: "4 a 6 anos",
        cor: "bg-yellow-400",
        img: "/img/ebd3.jpeg",
        horario: "9h às 11h",
        sala: "Sala 02 - Térreo",
        aprendizado: [
            "Histórias bíblicas ilustradas",
            "Versículos com gestos",
            "Atividades lúdicas",
            "Oração em grupo"
        ]
    },
    {
        nome: "Soldados de Cristo",
        idade: "7 a 9 anos",
        cor: "bg-green-400",
        img: "/img/ebd5.jpeg",
        horario: "9h às 11h15",
        sala: "Sala 03 - 1º Andar",
        aprendizado: [
            "Personagens bíblicos",
            "Dinâmicas interativas",
            "Oficinas de arte",
            "Pequenos grupos"
        ]
    },
    {
        nome: "Embaixadores do Rei",
        idade: "10 a 12 anos",
        cor: "bg-blue-400",
        img: "https://images.unsplash.com/photo-1551632432-c735e829942b?q=80&w=400",
        horario: "9h às 11h30",
        sala: "Sala 04 - 1º Andar",
        aprendizado: [
            "Estudos temáticos",
            "Debates bíblicos",
            "Projetos missionários",
            "Liderança cristã"
        ]
    },
];

const professores = [
    {
        nome: "Joaquim Paulo",
        cargo: "Coordenadora Geral",
        bio: "Pedagoga com especialização em Educação Cristã. Há 12 anos transformando vidas através do ensino bíblico criativo.",
        img: "",
        formacao: "Pedagogia - PUC",
        especialidade: "Desenvolvimento infantil"
    },
    {
        nome: "Anita Alfredo",
        cargo: "Professor - Soldados",
        bio: "Especialista em dinâmicas interativas e contação de histórias. Criador do método 'Teatro Bíblico' que encanta as crianças.",
        img: "/img/anita_pro.jpeg",
        formacao: "Teologia - UNASP",
        especialidade: "Didática lúdica"
    },
    {
        nome: " Januario Justo",
        cargo: "Professora - Cordeirinhos",
        bio: "Especializada em primeira infância com abordagem Montessori. Traz acolhimento e cuidado no primeiro contato com a Palavra.",
        img: "/img/papy.jpg",
        formacao: "Educação Infantil",
        especialidade: "Psicomotricidade"
    },
    {
        nome: "NataliaMarichi",
        cargo: "Professor - Embaixadores",
        bio: "Pastor e educador com foco em formação de jovens líderes. Prepara pré-adolescentes para os desafios da fé.",
        img: "",
        formacao: "Teologia e Filosofia",
        especialidade: "Liderança juvenil"
    },
];

const horarios = [
    { dia: "Domingo", horario: "09h00 - 11h30", atividade: "Escola Bíblica Dominical" },
    { dia: "Quarta-feira", horario: "19h00 - 20h30", atividade: "Classe Bíblica Kids" },
    { dia: "Sábado", horario: "15h00 - 17h00", atividade: "Oficinas e Ensaios" },
    { dia: "Último domingo do mês", horario: "09h00 - 12h00", atividade: "Culto Infantil Especial" },
];

const curriculo = [
    { modulo: "Módulo 1: Quem é Deus", temas: ["A criação", "O amor de Deus", "Cuidado e proteção"] },
    { modulo: "Módulo 2: Jesus, meu amigo", temas: ["Nascimento de Jesus", "Milagres", "Parábolas"] },
    { modulo: "Módulo 3: A Bíblia", temas: ["Como ler a Bíblia", "Histórias de fé", "Versículos para memorizar"] },
    { modulo: "Módulo 4: Frutos do Espírito", temas: ["Amor e alegria", "Paz e paciência", "Bondade e fé"] },
];

export default function EbdInfantil() {
    const [activeTab, setActiveTab] = React.useState(0);

    return (
        <div className="bg-white font-sans">

            {/* --- HERO EBD --- */}
            <section className="relative h-[400px] flex  overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/img/hero.jpg"
                        alt="Crianças felizes"
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
            <section
                className="relative p-20 h-120"
                style={{
                    backgroundImage: "url('/img/ebd1.jpeg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            >
                <div className='absolute inset-0 bg-black/70'></div>
                <div className="absolute inset-0 px-6 z-100">
                    <h3 className="text-3xl font-bold text-center 02mt-10">Horas de Estudo</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <p>Domingo as 7:30 min</p>
                    </div>
                </div>
            </section>

            {/* --- TURMAS DETALHADAS --- */}
            <section className="py-20 bg-gray-50 px-6">
                <div className="max-w-7xl mx-auto">
                    <h3 className="text-4xl font-black text-center text-gray-800 mb-4">Nossos Programas</h3>
                    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                        Cada turma tem um currículo específico, preparado por pedagogos e teólogos
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {turmas.map((turma, i) => (
                            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                                <div className="flex flex-col md:flex-row">
                                    <div className="md:w-1/3">
                                        <img src={turma.img} alt={turma.nome} className="w-full h-48 md:h-full object-cover" />
                                    </div>
                                    <div className="md:w-2/3 p-6">
                                        <div className={`inline-block px-4 py-1 rounded-full text-white font-bold mb-3 ${turma.cor}`}>
                                            {turma.idade}
                                        </div>
                                        <h4 className="text-2xl font-bold text-gray-800 mb-2">{turma.nome}</h4>

                                        <div className="flex items-center gap-2 text-gray-600 mb-3">
                                            <span className="font-semibold">🕐 {turma.horario}</span>
                                            <span className="text-gray-300">|</span>
                                            <span>📍 {turma.sala}</span>
                                        </div>

                                        <div className="mb-4">
                                            <p className="font-semibold text-gray-700 mb-2">O que a criança aprende:</p>
                                            <div className="flex flex-wrap gap-2">
                                                {turma.aprendizado.map((item, idx) => (
                                                    <span key={idx} className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">
                                                        {item}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <button className="mt-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                                            Matricular criança
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- CURRÍCULO E APRENDIZADO --- */}
            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <h3 className="text-4xl font-black text-center text-gray-800 mb-4">O que ensinamos</h3>
                    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                        Currículo anual organizado em módulos temáticos para aprendizado progressivo
                    </p>

                    {/* Tabs do currículo */}
                    <div className="flex flex-wrap justify-center gap-2 mb-8">
                        {curriculo.map((mod, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveTab(index)}
                                className={`px-6 py-3 rounded-full font-semibold transition-all ${activeTab === index
                                    ? 'bg-orange-500 text-white shadow-lg'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                            >
                                {mod.modulo}
                            </button>
                        ))}
                    </div>

                    <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl p-8">
                        <h4 className="text-2xl font-bold text-gray-800 mb-6">{curriculo[activeTab].modulo}</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {curriculo[activeTab].temas.map((tema, idx) => (
                                <div key={idx} className="bg-white p-4 rounded-xl shadow-sm flex items-center gap-3">
                                    <span className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                                        {idx + 1}
                                    </span>
                                    <span className="text-gray-700">{tema}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* --- SEÇÃO PROFESSORES (AMPLIADA) --- */}
            <section className="py-20 bg-gradient-to-b from-white to-orange-50 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h3 className="text-5xl font-bold text-gray-800 mb-4">Nossos Professores</h3>
                        <p className="text-gray-500 text-xl italic">Equipe preparada e apaixonada pelo Reino</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {professores.map((prof, i) => (
                            <div key={i} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all text-center group">
                                <div className="relative mb-6 inline-block">
                                    <div className="absolute -inset-2 bg-gradient-to-tr from-yellow-400 to-orange-500 rounded-full blur opacity-25 group-hover:opacity-100 transition duration-300"></div>
                                    <img
                                        src={prof.img}
                                        alt={prof.nome}
                                        className="relative w-36 h-36 rounded-full object-cover border-4 border-white shadow-lg mx-auto"
                                    />
                                </div>
                                <h4 className="text-2xl font-bold text-gray-800">{prof.nome}</h4>
                                <p className="text-orange-500 font-bold text-sm uppercase mb-2">{prof.cargo}</p>
                                <p className="text-sm font-semibold text-gray-500 mb-3">{prof.formacao}</p>
                                <p className="text-gray-600 text-sm mb-4">{prof.bio}</p>
                                <div className="border-t pt-4">
                                    <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs">
                                        {prof.especialidade}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            {/* --- CHAMADA FINAL --- */}
            <section className="py-20 px-6 bg-linear-to-r from-yellow-400 to-orange-500 text-white">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-6">🌟 Faça parte dessa história!</h2>
                    <p className="text-xl mb-8 opacity-90">
                        Traga seu filho para conhecer Jesus de maneira divertida e transformadora.
                        As matrículas estão abertas!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-8 py-4 bg-white text-orange-600 font-bold rounded-full hover:bg-gray-100 transition-colors shadow-lg">
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