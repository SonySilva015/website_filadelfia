'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
    Clock,
    MapPin,
    Calendar,
    Music,
    BookOpen,
    Baby,
    ArrowRight,
    Youtube,
    Heart,
    Users,
    Church,
    Coffee,
    Shirt,
    Sparkles,
    Cross,
    Sun,
    Star,
    UsersRound
} from 'lucide-react'
import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'
import jov from '@/public/img/jovensf.jpg'
import doa from '@/public/img/doação.jpg.jpg'
import ceia from '@/public/img/ceia.jpeg'
import estudo from '@/public/img/esrudo.jpg'
import geral from '@/public/img/culto.jpeg'
import capa from '@/public/img/culto.jpeg'
import img1 from '@/public/adora/ado1.jpg'
import img2 from '@/public/adora/ado2.jpg'
import img3 from '@/public/adora/marta.jpg'

// Types
interface Culto {
    id: number
    nome: string
    dia: string
    horarios: string[]
    desc: string
    img: string
    icon?: React.ReactNode
    categoria: 'geral' | 'estudo' | 'santa_ceia' | 'jovens'
    corDestaque: string
}

interface InfoItem {
    id: number
    icon: React.ReactNode
    titulo: string
    descricao: string
    cor?: string
}

// Data
const cultos = [
    {
        id: 1,
        nome: "Cultos dos jovens",
        dia: "Quinzenalmente",
        horarios: "",
        desc: "Todos Jovens Estão convidados a participar deste culto, sem restição a comunhão ou congregação",
        img: jov,
        categoria: 'CUlto',
        corDestaque: "from-slate-900/90 to-slate-800/80"
    },
    {
        id: 2,
        nome: "Cultos de Ação de graças",
        dia: "Anualmente",
        horarios: '',
        desc: "Culto onde expressamos gratidão a Deus por tudo que tem feito por nós e por tudo que já fez",
        img: doa,
        categoria: 'Culto',
        corDestaque: "from-slate-900/90 to-slate-800/80"
    }
]

const comoFunciona: InfoItem[] = [
    {
        id: 1,
        icon: <Music size={36} />,
        titulo: "Louvor e Adoração",
        descricao: "Adoramos a Deus através da música e expressamos nossa gratidão com todo nosso ser."
    },
    {
        id: 2,
        icon: <BookOpen size={36} />,
        titulo: "Mensagem da Palavra",
        descricao: "Uma mensagem baseada na Bíblia para edificar nossa fé e transformar nosso caráter."
    },
    {
        id: 3,
        icon: <Baby size={36} />,
        titulo: "Ministério Infantil",
        descricao: "Um ambiente preparado para as crianças aprenderem sobre Deus de forma lúdica e segura."
    }
]

// Hero Section
const HeroSection: React.FC = () => (
    <section className="relative h-[60vh] md:h-[70vh] flex items-center overflow-hidden">
        <Image
            src={capa}
            fill
            alt="Culto na igreja"
            className="object-cover"
            priority
            quality={100}
        />
        <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/70 to-slate-950/50 z-10" />
        <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/50 to-transparent z-10" />

        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute z-20 text-white px-4 md:px-6 md:ml-10 max-w-3xl"
        >
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-3xl sm:text-4xl md:text-7xl font-light mb-4 md:mb-6 leading-tight"
            >
                Nossos <span className="font-bold">Cultos</span>
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-base sm:text-lg md:text-xl text-slate-200 max-w-xl"
            >
                Venha viver uma experiência de adoração, palavra e comunhão em nossa igreja.
            </motion.p>
        </motion.div>
    </section>
)

// Culto Card
const CultoCard: React.FC<{ culto: any; index: number }> = ({ culto, index }) => (
    <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        viewport={{ once: true, margin: "-50px" }}
        whileHover={{ scale: 1.02 }}
        className="group relative  sm:h-112 rounded-md overflow-hidden shadow-lg"
    >
        <Image
            src={culto.img}
            alt={culto.nome}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 to-slate-900/40" />

        <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 md:p-8 text-white">
            <div className="mb-2 sm:mb-3 md:mb-4">
                <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs sm:text-sm font-medium">
                    {culto.dia}
                </span>
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 md:mb-3">{culto.nome}</h3>
            <p className="text-white/80 mb-4 md:mb-6 line-clamp-2 text-sm sm:text-base">{culto.desc}</p>

        </div>
    </motion.article>
)

// Cultos Grid
const CultosGrid: React.FC = () => (
    <section className="py-16 md:py-28 max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 md:mb-16"
        >
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-light text-slate-800 mb-2 md:mb-4">
                Cultos <span className="font-bold">Especias</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto px-4">
                Conheça outros nossos momentos especiais reservado para deus
            </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4  md:gap-40">
            {cultos.map((culto, index) => (
                <CultoCard key={culto.id} culto={culto} index={index} />
            ))}
        </div>
    </section>
)

// Seção de Introdução aos Cultos
const IntroCultosSection: React.FC = () => (
    <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <h1 className="mb-4 md:mb-5 text-xl sm:text-2xl md:text-4xl text-slate-800 font-light">
                    Conheça como são os nossos <span className="font-bold">Cultos</span>
                </h1>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    Conheça os nossos programas de adoração ao Senhor, momentos especiais
                    preparados para juntos louvar, agradecer e buscar a presença de Deus.
                    Em cada encontro vivemos tempos de oração, louvor e meditação na Palavra,
                    fortalecendo a nossa fé e comunhão.
                </p>
            </motion.div>
        </div>
    </section>
)

// Santa Ceia Section
const SantaCeiaSection: React.FC = () => (
    <section className="relative min-h-[60vh] md:h-screen flex items-center overflow-hidden py-16 md:py-0">
        {/* Imagem - visível apenas em md pra cima */}
        <div className="hidden md:block absolute inset-0 w-1/2">
            <Image
                src={ceia}
                fill
                alt="Santa Ceia"
                className="object-cover"
            />
        </div>
        {/* Imagem mobile */}
        <div className="md:hidden absolute inset-0">
            <Image
                src={ceia}
                fill
                alt="Santa Ceia"
                className="object-cover"
            />
        </div>
        <div className="absolute inset-0 bg-linear-to-l from-slate-900/90 via-slate-800/80 to-slate-900/90 md:to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
            <div className="grid md:grid-cols-2 gap-8 md:gap-16">
                <div className="md:col-start-2">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-white"
                    >
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4 md:mb-6">
                            <Cross size={32} className="md:size-30 text-white/80" />
                            <span className="text-md md:text-lg font-medium tracking-wider  text-purple-300">
                                Todos os Domingos 08h:30
                            </span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl md:text-7xl font-light mb-4 md:mb-8 leading-tight">
                            Santa Ceia<br />do <span className="font-bold">Senhor</span>
                        </h2>

                        <p className="text-base sm:text-lg md:text-xl text-white/80 mb-6 md:mb-8 leading-relaxed">
                            Todos os domingos, celebramos a Ceia do Senhor,
                            relembrando o sacrifício de Jesus e renovando nossa aliança com Deus.
                        </p>

                        <div className="space-y-2 md:space-y-4 mb-6 md:mb-4">
                            {[
                                "Celebramos no primeiro domingo de cada mês",
                                "Momento de reflexão e autoexame",
                                "Comunhão entre os irmãos",
                                "Renovação da aliança com Deus"
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-2 md:gap-3">
                                    <div className="w-1 h-1 bg-white/60 rounded-full" />
                                    <span className="text-sm sm:text-base text-white/70">{item}</span>
                                </div>
                            ))}
                        </div>

                        <motion.button
                            whileHover={{ x: 10 }}
                            className="flex items-center gap-2 text-white group-hover:gap-3 hover:text-red-300 transition-all w-fit text-sm md:text-base md:mb-10 duration-500"
                        >
                            <Link href="/santa-ceia">Saiba mais</Link>
                            <ArrowRight size={16} />
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </div>
    </section>
)

// Estudo Dominical Section - Corrigida com imagem e texto separados
const EstudoDominicalSection: React.FC = () => (
    <section className="relative min-h-[60vh] md:h-screen flex items-center overflow-hidden py-16 md:py-0 md:bg-slate-800">
        {/* Imagem - visível apenas em md pra cima */}
        <div className="hidden md:block absolute inset-0 w-1/2 ml-auto right-0">
            <Image
                src={estudo}
                fill
                alt="Estudo bíblico"
                className="object-cover"
            />
        </div>
        {/* Imagem mobile */}
        <div className="md:hidden absolute inset-0">
            <Image
                src={estudo}
                fill
                alt="Estudo bíblico"
                className="object-cover"
            />
        </div>
        <div className="absolute inset-0 bg-linear-to-l from-slate-900/90 via-slate-800/80 to-slate-900/90 md:to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">

            <div className="grid md:grid-cols-2 gap-8 md:gap-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-white md:pr-12"
                >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4 md:mb-6">
                        <span className="text-md md:text-lg font-medium tracking-wider  text-purple-300">
                            Todos os Domingos 9h:30
                        </span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-7xl font-light mb-4 md:mb-8 leading-tight">
                        Escola Bíblica<br /><span className="font-bold">Dominical</span>
                    </h2>

                    <p className="text-base sm:text-lg md:text-xl text-white/80 mb-6 md:mb-8 leading-relaxed">
                        Estudo sistemático da Bíblia para adultos, com ensino profundo
                        e aplicação prática para o dia a dia.
                    </p>

                    <div className="space-y-2 md:space-y-4 mb-6 md:mb-8">
                        {[
                            "Classe de Novos Convertidos",
                            "Estudo Sistemático da Bíblia",
                            "Temas Relevantes para a vida cristã",
                            "Discussões, duvidas e mais..."
                        ].map((item, index) => (
                            <div key={index} className="flex items-center gap-2 md:gap-3">
                                <div className="w-1 h-1 bg-white/60 rounded-full" />
                                <span className="text-sm sm:text-base text-white/70">{item}</span>
                            </div>
                        ))}
                    </div>


                </motion.div>
            </div>

        </div>
    </section>
)

// Culto Geral Section
const CultoGeralSection: React.FC = () => (
    <section className="relative min-h-[60vh] md:h-screen flex items-center overflow-hidden py-16 md:py-0">
        {/* Imagem - visível apenas em md pra cima */}
        <div className="hidden md:block absolute inset-0 w-1/2">
            <Image
                src={geral}
                fill
                alt="Culto Geral"
                className="object-cover"
            />
        </div>
        {/* Imagem mobile */}
        <div className=" md:hidden absolute inset-0 ">
            <Image
                src={capa}
                fill
                alt="Culto Geral"
                className="object-cover"
            />
        </div>
        <div className="absolute z-0 inset-0 bg-linear-to-l from-slate-900/90 via-slate-800/80 to-slate-900/90 md:to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
            <div className="grid md:grid-cols-2 gap-8 md:gap-16">
                {/* Conteúdo na esquerda */}
                <div className='md:col-start-2'>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-white"
                    >
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4 md:mb-6">
                            <span className="text-md md:text-lg font-medium tracking-wider  text-purple-300">
                                Domingos as 10h:20
                            </span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl md:text-7xl font-light mb-4 md:mb-8 leading-tight">
                            Culto Geral<br />de <span className="font-bold">Celebração</span>
                        </h2>

                        <p className="text-base sm:text-lg md:text-xl text-white/80 mb-6 md:mb-8 leading-relaxed">
                            Nossa principal reunião semanal onde nos reunimos como família
                            para adorar a Deus, ouvir sua Palavra e fortalecer nossa comunhão.
                        </p>

                        <div className="space-y-2 md:space-y-4 mb-6 md:mb-8">
                            {[
                                "Louvores e que expressam a nossa Fé",
                                "Adoração ",
                                "Mensagem baseada na Palavra",

                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-2 md:gap-3">
                                    <div className="w-1 h-1 bg-white/60 rounded-full" />
                                    <span className="text-sm sm:text-base text-white/70">{item}</span>
                                </div>
                            ))}
                        </div>


                    </motion.div>
                </div>
                {/* Coluna vazia para manter a estrutura grid */}
                <div className="hidden md:block"></div>
            </div>
        </div>
    </section>
)
// Adoração Section
const AdoracaoSection: React.FC = () => (
    <section className="relative py-16 md:py-28 bg-linear-to-br from-slate-900 to-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1635282937057-dd12c9421b87?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] opacity-10" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-10 md:mb-16"
            >
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-light mb-4 md:mb-6">
                    Nossa <span className="font-bold">Adoração</span>
                </h2>
                <p className="text-sm sm:text-base md:text-xl text-white/70 max-w-3xl mx-auto px-4">
                    Acreditamos que a adoração vai além da música - é um estilo de vida
                    que expressa nosso amor e gratidão a Deus.
                </p>
            </motion.div>


        </div>
    </section>
)

// O Que Vestir Section
const OQueVestirSection: React.FC = () => (
    <section className="py-16 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-10 md:mb-16"
            >

                <h2 className="text-2xl sm:text-3xl md:text-5xl font-light mb-4 md:mb-6 text-slate-800">
                    O que <span className="font-bold">vestir?</span>
                </h2>
                <p className="text-sm sm:text-base text-slate-600 max-w-3xl mx-auto px-4">
                    Em nossa igreja, você é bem-vindo como é. Não temos roupa code rígido,
                    mas aqui vão algumas dicas para seu conforto:
                </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 md:mb-12">
                {[
                    {

                        titulo: "Vestimenta Adequada",
                        desc: "Paulo, em suas cartas, enfatiza que o vestuário cristão deve ser guiado pela modéstia, decência e bom senso, priorizando a beleza interior (caráter) sobre a exterior. Em 1 Timóteo 2:9-10, "
                    },
                    {

                        titulo: "Estilo Pessoal",
                        desc: "Você pode expressar seu estilo, desde que com decência e respeito ao local sagrado."
                    }
                ].map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-slate-50 rounded-xl md:rounded-2xl p-6 md:p-8 text-center hover:shadow-md transition-shadow"
                    >
                        <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-slate-800">{item.titulo}</h3>
                        <p className="text-sm md:text-base text-slate-600">{item.desc}</p>
                    </motion.div>
                ))}
            </div>


        </div>
    </section>
)

// Galeria Section
const GaleriaSection: React.FC = () => {
    const imagens: StaticImageData[] = [img1, img2, img3]

    return (
        <section className="py-16 md:py-28 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-2xl sm:text-3xl md:text-5xl font-light text-center mb-8 md:mb-16 text-slate-800"
                >
                    Momentos de <span className="font-bold">Adoração</span>
                </motion.h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 grayscale-60 ">
                    {imagens.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative h-60 sm:h-72 md:h-90 rounded-xl md:rounded-md overflow-hidden shadow-md group"
                        >
                            <Image
                                src={img}
                                alt={`Momento de culto ${index + 1}`}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 to-slate-950/90  group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

// CTA Section
const CTASection: React.FC = () => (
    <section className="py-16 md:py-28 px-4 sm:px-6">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-linear-to-br from-slate-900 to-slate-800 rounded-2xl md:rounded-3xl p-8 md:p-16 text-center text-white"
        >
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-light mb-4 md:mb-6">
                Planeja nos <span className="font-bold">visitar?</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-300 mb-6 md:mb-10 max-w-2xl mx-auto">
                Será uma alegria receber você e sua família em nossa igreja.
                Venha fazer parte desta família!
            </p>

        </motion.div>
    </section>
)

// Main Component
export default function CultosPage() {
    return (
        <main className="bg-white overflow-hidden">
            <HeroSection />
            <IntroCultosSection />
            <div className="flex items-center justify-center flex-col md:p-5 gap-5">
                <SantaCeiaSection />
                <EstudoDominicalSection />
                <CultoGeralSection />
            </div>
            <CultosGrid />
            <AdoracaoSection />
            <GaleriaSection />
            <OQueVestirSection />
            <CTASection />

        </main>
    )
}