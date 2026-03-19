'use client'

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { AppWindow, ArrowLeft, Loader2 } from 'lucide-react';

export default function UnderConstructionSimple() {
    return (
        <div className="min-h-screen bg-white flex items-center justify-center px-6 font-sans selection:bg-blue-50">

            <div className="max-w-xl w-full text-center space-y-10">

                {/* ÍCONE MINIMALISTA COM ANIMAÇÃO DE CARREGAMENTO */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative inline-flex items-center justify-center"
                >
                    <div className="p-5 bg-blue-50 rounded-full text-blue-600 border border-blue-100 shadow-inner">
                        <AppWindow size={32} strokeWidth={1.5} />
                    </div>
                    {/* Spinner discreto flutuando */}
                    <div className="absolute -bottom-1 -right-1 bg-white p-1 rounded-full text-blue-500 shadow-md">
                        <Loader2 size={18} className="animate-spin" />
                    </div>
                </motion.div>

                {/* TEXTO DIRETO E LIMPO */}
                <motion.div
                    initial={{ y: 15, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    className="space-y-4"
                >
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tighter leading-tight">
                        Página em <br /> <span className="text-blue-600">desenvolvimento</span>
                    </h1>

                    <p className="text-base text-slate-600 max-w-sm mx-auto leading-relaxed">
                        Estamos trabalhando nesta seção para trazer novidades em breve. Obrigado pela sua paciência.
                    </p>
                </motion.div>

                {/* BOTÃO DE VOLTAR MINIMALISTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="pt-6"
                >
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2.5 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-full shadow-md hover:shadow-lg transition-all active:scale-95 group"
                    >
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        Voltar para o Início
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}