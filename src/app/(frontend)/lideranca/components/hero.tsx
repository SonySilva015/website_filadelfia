'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import fundoIgreja from '@/public/img/capa_lider.png'

export default function Hero() {
    return (
        <header className="relative h-110 min-h-700px flex items-center justify-center overflow-hidden">

            <div className="absolute inset-0">
                <Image
                    src={fundoIgreja}
                    alt="Igreja"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                />

                <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-900/80 to-slate-900/70" />
            </div>

            <div className="relative z-10 max-w-5xl px-6 text-center">

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: .8
                    }}
                    className="text-5xl md:text-7xl font-bold text-white"
                >
                    Nossa Liderança

                    <span className="block mt-4 text-purple-300 text-2xl md:text-3xl font-light">
                        Servindo com Amor e Dedicação
                    </span>

                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        delay: .4
                    }}
                    className="mt-8 text-lg md:text-xl text-purple-100 leading-relaxed max-w-3xl mx-auto"
                >
                    Conheça os líderes que Deus levantou para ensinar,
                    cuidar, servir e conduzir a igreja com amor,
                    compromisso e fidelidade à Palavra de Deus.
                </motion.p>

            </div>

        </header>
    )
}