import React from 'react';

export default function BannerNoticiasIEIA() {
    return (
        <div className="max-w-6xl mx-auto my-12 overflow-hidden rounded-3xl bg-white shadow-2xl flex flex-col md:flex-row min-h-[450px]">

            {/* Lado Esquerdo: Imagem com Overlay de Logo */}
            <div className="relative w-full md:w-1/2 h-64 md:h-auto">
                <img
                    src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=1000&auto=format&fit=crop"
                    alt="Comunidade IEIA"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Overlay de Gradiente para a Logo brilhar */}
                <div className="absolute top-6 left-6 bg-white/90 p-3 rounded-full shadow-lg backdrop-blur-sm border border-blue-100">
                    {/* Placeholder para a Logo da IEIA */}
                    <div className="w-12 h-12 flex items-center justify-center text-blue-700 font-bold text-xs text-center leading-none">
                        IEIA<br />LOGO
                    </div>
                </div>
            </div>

            {/* Lado Direito: Conteúdo e Ação */}
            <div className="w-full md:w-1/2 bg-gradient-to-br from-[#00AEEF] to-[#0077B6] p-8 md:p-16 flex flex-col justify-center text-white relative">

                {/* Detalhe de Design: Formas Abstratas ao Fundo */}
                <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
                    <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <polygon points="0,100 100,0 100,100" fill="white" />
                    </svg>
                </div>

                <div className="relative z-10">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight tracking-tight">
                        Últimas Notícias da IEIA
                    </h2>

                    <p className="text-lg text-blue-50 mb-10 leading-relaxed font-light">
                        Acompanhe as boas novas, eventos, projectos missionários e
                        iniciativas que impactam <span className="font-semibold text-white underline decoration-yellow-400 decoration-2 underline-offset-4">Angola e o mundo</span>.
                    </p>

                    <button className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-[#0077B6] transition-all duration-200 bg-white rounded-xl hover:bg-blue-50 active:scale-95 shadow-lg">
                        <span>Visitar a Sala de Notícias</span>
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