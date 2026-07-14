'use client'

import { motion } from 'framer-motion'

interface SectionHeaderProps {
    subtitle: string
    title: string
    description: string
}

export default function SectionHeader({
    subtitle,
    title,
    description,
}: SectionHeaderProps) {
    return (
        <div className="text-center mb-14">

            <motion.span
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="uppercase tracking-[0.25em] text-sm font-semibold text-purple-600"
            >
                {subtitle}
            </motion.span>

            <motion.h2
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.6,
                    delay: 0.1,
                }}
                className="mt-4 text-3xl md:text-5xl font-bold text-slate-800"
            >
                {title}
            </motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                    delay: 0.2,
                }}
                className="mt-5 max-w-3xl mx-auto text-lg leading-relaxed text-slate-600"
            >
                {description}
            </motion.p>

        </div>
    )
}