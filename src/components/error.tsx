'use client'

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    Users,
    ArrowLeft,
    Home,
    Search,
    AlertCircle
} from 'lucide-react';

export default function CelulaNotFoundPage() {
    return (
        <div className="min-h-screen bg-tertiary font-sans flex items-center justify-center px-6">
            <div className="max-w-2xl w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-3xl p-12 shadow-xl border border-secondary/10 text-center"
                >
                    {/* Ícone de erro */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        className="w-24 h-24 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-8"
                    >
                        <AlertCircle size={48} className="text-red-500" />
                    </motion.div>

                    {/* Título */}
                    <h1 className="text-4xl md:text-5xl font-black text-title mb-4">
                        Célula não encontrada
                    </h1>

                    {/* Descrição */}
                    <p className="text-lg text-body mb-8 max-w-md mx-auto">
                        Desculpe, não conseguimos encontrar a célula que você está procurando.
                        Ela pode ter sido removida ou o endereço pode estar incorreto.
                    </p>




                    {/* Link para voltar */}
                    <Link
                        href="/celulas"
                        className="inline-flex items-center gap-2 text-body hover:text-secondary transition-colors mt-8 text-sm"
                    >
                        <ArrowLeft size={16} />
                        Voltar para células
                    </Link>
                </motion.div>

                {/* Rodapé decorativo */}
                <div className="mt-8 text-center text-xs text-body/60">
                    <p>Se você acredita que isso é um erro, entre em contato com o administrador.</p>
                </div>
            </div>
        </div>
    );
}