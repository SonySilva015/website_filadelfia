'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import fundoIgreja from '@/public/img/IMG-20250831-WA0043.jpg'

interface Lider {
    nome: string
    cargo: string
    descricao?: string
    foto: string // URL da imagem
}

const presbiteros: Lider[] = [
    {
        nome: 'Jaimes Catumbela',
        cargo: 'Presbítero',
        foto: 'https://picsum.photos/seed/jaimes/400/400',
        descricao: 'Servo dedicado ao cuidado espiritual da igreja.'
    },
    {
        nome: 'Domingos António Ngueve',
        cargo: 'Presbítero',
        foto: 'https://picsum.photos/seed/domingos/400/400',
        descricao: 'Homem de fé comprometido com a palavra de Deus.'
    },
    {
        nome: 'Nataniel Chicuacua',
        cargo: 'Presbítero',
        foto: 'https://picsum.photos/seed/nataniel/400/400',
        descricao: 'Líder sábio e conselheiro espiritual.'
    }
]

const diaconos: Lider[] = [
    {
        nome: 'Maros Muamichinda',
        cargo: 'Diácono',
        foto: 'https://picsum.photos/seed/maros/400/400',
        descricao: 'Responsável pela assistência social e visitas aos necessitados.'
    },
    {
        nome: 'Marcelo Daimone Caumba',
        cargo: 'Diácono',
        foto: 'https://picsum.photos/seed/marcelo/400/400',
        descricao: 'Atua na organização dos cultos e recepção dos visitantes.'
    }
]

const lideresDepartamentos: Lider[] = [
    {
        nome: 'Fernando Malichi',
        cargo: 'Líder do Departamento da Juventude',
        foto: 'https://picsum.photos/seed/fernando/400/400',
        descricao: 'Responsável por coordenar as atividades, eventos e cultos voltados para os jovens da igreja.'
    },
    {
        nome: 'Natália Marichi',
        cargo: 'Líder do Ministério Infantil',
        foto: 'https://picsum.photos/seed/natalia/400/400',
        descricao: 'Coordena as atividades para crianças, incluindo escola bíblica e eventos especiais.'
    }
]

function TeamCard({ lider, index }: { lider: Lider; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 text-center border border-gray-100 hover:border-purple-200"
        >
            {/* Foto Circular */}
            <div className="relative mx-auto mb-4 w-32 h-32">
                {/* Efeito de brilho atrás da foto */}
                <div className="absolute inset-0 rounded-full bg-linear-to-br from-purple-400 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl scale-110" />

                {/* Container da Foto */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-purple-100 group-hover:border-purple-400 transition-all duration-300">
                    <Image
                        src={lider.foto}
                        alt={lider.nome}
                        fill
                        className="object-cover"
                        sizes="(max-width: 128px) 100vw, 128px"
                        unoptimized // Necessário para imagens externas
                    />
                    {/* Overlay no hover */}
                    <div className="absolute inset-0 bg-purple-600/0 group-hover:bg-purple-600/10 transition-colors duration-300" />
                </div>
            </div>

            {/* Nome e Cargo */}
            <h3 className="text-xl font-bold text-gray-800 group-hover:text-purple-700 transition-colors duration-300">
                {lider.nome}
            </h3>
            <p className="text-purple-600 font-semibold text-sm mb-3">
                {lider.cargo}
            </p>
            {lider.descricao && (
                <p className="text-gray-600 text-sm leading-relaxed">
                    {lider.descricao}
                </p>
            )}
        </motion.div>
    )
}

function SectionHeader({
    subtitle,
    title,
    description
}: {
    subtitle: string
    title: string
    description: string
}) {
    return (
        <div className="text-center mb-12">
            <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-purple-600 font-semibold tracking-wider uppercase text-sm"
            >
                {subtitle}
            </motion.span>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-4xl font-bold text-gray-800 mt-3 mb-4"
            >
                {title}
            </motion.h2>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
                {description}
            </motion.p>
        </div>
    )
}

export default function LiderancaPage() {
    return (
        <div className="min-h-screen bg-white text-slate-900 selection:bg-purple-200 selection:text-slate-900">

            {/* HERO */}
            <header className="relative h-screen min-h-150 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={fundoIgreja}
                        alt="Igreja Filadélfia IEIA"
                        fill
                        className="object-cover"
                        priority
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-900/80 to-slate-900/70" />
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.7 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight"
                    >
                        Nossa Liderança
                        <span className="relative block text-purple-300 text-xl md:text-3xl mt-4 font-light">
                            Servindo com Amor e Dedicação
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="text-lg md:text-xl text-purple-100 font-light leading-relaxed max-w-2xl mx-auto"
                    >
                        Conheça os líderes que Deus colocou para guiar, ensinar e cuidar da nossa comunidade,
                        seguindo o exemplo de Cristo.
                    </motion.p>
                </div>
            </header>

            {/* PRESBÍTEROS */}
            <section className="py-16 md:py-20 px-6 bg-purple-50/50">
                <div className="max-w-6xl mx-auto">
                    <SectionHeader
                        subtitle="Presbitério"
                        title="Presbíteros"
                        description="Homens chamados para apoiar o pastoreio e cuidar das necessidades espirituais da igreja."
                    />
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {presbiteros.map((lider, index) => (
                            <TeamCard key={lider.nome} lider={lider} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* DIÁCONOS */}
            <section className="py-16 md:py-20 px-6 bg-white">
                <div className="max-w-4xl mx-auto">
                    <SectionHeader
                        subtitle="Diaconia"
                        title="Diáconos"
                        description="Servos dedicados ao auxílio prático e cuidado das necessidades da igreja."
                    />
                    <div className="grid sm:grid-cols-2 gap-6 md:gap-8 max-w-2xl mx-auto">
                        {diaconos.map((lider, index) => (
                            <TeamCard key={lider.nome} lider={lider} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* LÍDERES DE DEPARTAMENTOS */}
            <section className="py-16 md:py-20 px-6 bg-purple-50/50">
                <div className="max-w-4xl mx-auto">
                    <SectionHeader
                        subtitle="Departamentos"
                        title="Líderes de Departamentos"
                        description="Pessoas dedicadas a liderar áreas específicas do trabalho da igreja."
                    />
                    <div className="grid sm:grid-cols-2 gap-6 md:gap-8 max-w-2xl mx-auto">
                        {lideresDepartamentos.map((lider, index) => (
                            <TeamCard key={lider.nome} lider={lider} index={index} />
                        ))}
                    </div>
                </div>
            </section>

        </div>
    )
}