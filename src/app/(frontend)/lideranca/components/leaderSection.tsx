'use client'

import TeamCard from './cards'
import SectionHeader from './sectionheader'
import type { Lidere } from "@/payload-types";

interface LeadersSectionProps {
    subtitle: string
    title: string
    description: string
    lideres: Lidere[]
    background?: string
    columns?: string
}

export default function LeadersSection({
    subtitle,
    title,
    description,
    lideres,
    background = 'bg-white',
    columns = 'lg:grid-cols-3',
}: LeadersSectionProps) {
    if (!lideres.length) return null

    return (
        <section className={`py-20 px-6 ${background}`}>
            <div className="max-w-6xl mx-auto">

                <SectionHeader
                    subtitle={subtitle}
                    title={title}
                    description={description}
                />

                <div
                    className={`grid gap-8 sm:grid-cols-2 ${columns}`}
                >
                    {lideres.map((lider, index) => (
                        <TeamCard
                            key={lider.id}
                            lider={lider}
                            index={index}
                        />
                    ))}
                </div>

            </div>
        </section>
    )
}