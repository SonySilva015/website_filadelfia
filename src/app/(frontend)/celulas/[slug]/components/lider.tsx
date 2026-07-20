// components/CelulaLider.tsx
'use client'

import Image from 'next/image';

import { Phone } from 'lucide-react';

interface CelulaLiderProps {
    fotoUrl: string | any;
    nome: string;
    numero: string;
}

export default function CelulaLider({ fotoUrl, nome, numero }: CelulaLiderProps) {
    return (
        <div className="bg-white rounded-2xl p-8 border border-secondary/20 shadow-sm animate-fade-in-up">
            <h2 className="text-2xl font-bold text-title mb-6">Líder</h2>
            <div className="flex items-center gap-6 p-6 bg-tertiary rounded-xl">
                <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-secondary/30 shrink-0">
                    <Image
                        src={fotoUrl || '/placeholder-avatar.jpg'}
                        alt={nome}
                        fill
                        className="object-cover"
                    />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-title">
                        {nome}
                    </h3>
                    <p className="text-body">Líder da célula</p>
                </div>
            </div>
            <div className="flex items-center gap-6 p-6 bg-tertiary rounded-xl">
                <Phone className="w-6 h-6 text-secondary" />
                <p className="text-body">Telefone: <span className='font-bold'> {numero}</span></p>
            </div>
        </div>
    );
}