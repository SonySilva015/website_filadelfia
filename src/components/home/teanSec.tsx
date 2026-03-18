import React from 'react';

export default function BannerNoticiasIEIA() {
    return (
        <div className="max-w-6xl mx-auto my-12 overflow-hidden rounded-md bg-white shadow-2xl flex flex-col md:flex-row min-h-122">

            {/* Lado Esquerdo: Imagem com Overlay de Logo */}
            <div className="relative w-full md:w-1/2 h-64 md:h-auto">
                <img
                    src="https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=773&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Comunidade IEIA"
                    className="absolute inset-0 w-full h-full object-cover"
                />


            </div>

            {/* Lado Direito: Conteúdo e Ação */}
            <div className="w-full md:w-1/2 bg-linear-to-br from-[#6c0595] to-[#470252] p-8 md:p-16 flex flex-col justify-center text-white relative">

                {/* Detalhe de Design: Formas Abstratas ao Fundo */}
                <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
                    <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <polygon points="0,100 100,0 100,100" fill="white" />
                    </svg>
                </div>

                <div className="relative z-10">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight tracking-tight">
                        Artigos Motivadoras
                    </h2>

                    <p className="text-lg text-blue-50 mb-10 leading-relaxed font-light">
                        Veja artigos, escrituras escrita para motivar os jovens no crescimento social
                        como no crescimento espiritual, iniciativas que impactam
                    </p>

                    <button className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-[#7a0761] transition-all duration-200 bg-white rounded-xl hover:bg-blue-50 active:scale-95 shadow-lg">
                        <span>Ver Artigos </span>
                        <svg
                            className="w-5 h-5 ml-2 transition-transform duration-200 group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </div>
            </div>

        </div>
    );
}