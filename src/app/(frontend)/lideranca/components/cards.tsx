'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import type { Lidere } from "@/payload-types";

interface Media {
    url?: string
}

interface TeamCardProps {
    lider: Lidere;
    index: number;
}

export default function TeamCard({
    lider,
    index,
}: TeamCardProps) {
    const foto =
        typeof lider.foto === "object" &&
            lider.foto !== null &&
            "url" in lider.foto
            ? lider.foto.url ?? "/img/avatar-placeholder.png"
            : "/img/avatar-placeholder.png";

    const cargo =
        lider.cargo === 'departamento'
            ? lider.departamento || 'Departamento'
            : lider.cargo === 'presbitero'
                ? 'Presbítero'
                : lider.cargo === 'diacono'
                    ? 'Diácono'
                    : lider.cargo

    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 30,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: true,
            }}
            transition={{
                duration: .5,
                delay: index * .08,
            }}
            className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-300"
        >
            <div className="flex flex-col items-center">

                <div className="relative w-36 h-36 mb-6">

                    <div className="absolute inset-0 rounded-full bg-linear-to-r from-violet-500 to-purple-600 opacity-0 blur-xl scale-110 transition-all duration-500 group-hover:opacity-30" />

                    <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-purple-100 group-hover:border-purple-500 transition-all duration-300">

                        <Image
                            src={foto}
                            alt={lider.nome}
                            fill
                            className="object-cover"
                            sizes="144px"
                        />

                    </div>

                </div>

                <h3 className="text-2xl font-bold text-slate-800 text-center group-hover:text-purple-700 transition-colors">
                    {lider.nome}
                </h3>

                <span className="mt-2 inline-flex rounded-full bg-purple-100 px-4 py-1 text-sm font-semibold text-purple-700">
                    {cargo}
                </span>

                {lider.descricao && (
                    <p className="mt-5 text-center text-slate-600 leading-7">
                        {lider.descricao}
                    </p>
                )}

            </div>
        </motion.div>
    )
}