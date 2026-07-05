'use client'
import React from 'react';
import {
    ArrowRight,
} from "lucide-react";
import fundo from '@/public/adora/jovens.png'
import Image from 'next/image'

export default function Juventude() {

    return (
        <>
            <section className="relative overflow-hidden text-white min-h-[60vh] ">
                {/* Imagem de fundo */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src={fundo}
                        alt="Fundo Juventude"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-linear-to-r from-slate-800 to-slate-950/30" />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-800 to-slate-950/30" />
                </div>

                {/* Padrão decorativo sobre a imagem */}
                <div className="absolute inset-0 z-10 bg-[url('/img/pattern.png')] opacity-10"></div>

                {/* Conteúdo */}
                <div className="relative z-20 max-w-7xl mx-auto px-6 py-24">
                    <div className="max-w-4xl">
                        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                            Juventude
                            <span className="block text-blue-400">
                                Igreja Filadélfia
                            </span>
                        </h1>

                        <p className="text-xl text-slate-300 leading-relaxed max-w-3xl">
                            Uma geração apaixonada por Cristo, comprometida
                            com a Palavra de Deus, o evangelismo, a comunhão e
                            o serviço ao próximo. Nossa missão é formar jovens
                            que impactam a igreja, a família e a sociedade com
                            os valores do Reino de Deus.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}