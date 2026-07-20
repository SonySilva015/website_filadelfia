// components/CelulaSidebar.tsx
'use client'

import { Users, Calendar, User, Phone, MessageCircle } from 'lucide-react';
import Link from 'next/link';

interface CelulaSidebarProps {
    nome: string;
    membros: number;
    horarios: string;
    liderNome: string;
    numero: string;
}

export default function CelulaSidebar({ nome, membros, horarios, liderNome, numero }: CelulaSidebarProps) {
    return (
        <div className="bg-white rounded-2xl p-6 border border-secondary/20 shadow-sm sticky top-24 animate-slide-in-right">
            <h3 className="text-xl font-bold text-title text-center mb-1">
                {nome}
            </h3>
            <p className="text-sm text-body text-center mb-6">
                {membros} membros
            </p>

            <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 p-3 bg-tertiary rounded-xl">
                    <div className="p-2 bg-secondary-light rounded-lg text-secondary">
                        <Phone size={16} />
                    </div>
                    <div>
                        <p className="text-xs text-body">Horários</p>
                        <p className="text-sm font-medium text-title">{horarios}</p>
                    </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-tertiary rounded-xl">
                    <div className="p-2 bg-secondary-light rounded-lg text-secondary">
                        <User size={16} />
                    </div>
                    <div>
                        <p className="text-xs text-body">Líder</p>
                        <p className="text-sm font-medium text-title">{liderNome || 'Não informado'}</p>
                    </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-tertiary rounded-xl">
                    <div className="p-2 bg-secondary-light rounded-lg text-secondary">
                        <Users size={16} />
                    </div>
                    <div>
                        <p className="text-xs text-body">Membros</p>
                        <p className="text-sm font-medium text-title">{membros}</p>
                    </div>
                </div>
            </div>

            <Link
                href={`https://wa.me/${numero}`}
                className="w-full bg-green-800 hover:bg-green-950 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 mb-3 shadow-lg shadow-secondary/25"
            >
                <MessageCircle size={18} />
                Quero participar
            </Link>

            <div className="mt-6 pt-4 border-t border-secondary/20">
                <p className="text-xs text-body text-center">
                    Todas as células são abertas a visitantes.
                    Venha conhecer!
                </p>
            </div>
        </div>
    );
}