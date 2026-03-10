export default function EmDesenvolvimento() {
    return (
        <div className="min-h-[500px] bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center px-6">

            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-2xl flex flex-col items-center text-center max-w-md">

                {/* Ícone SVG */}
                <div className="bg-yellow-500/10 p-4 rounded-full mb-4 animate-pulse">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-10 h-10 text-yellow-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.8}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.7 6.3a4 4 0 01-5.66 5.66L3 18l3 3 6.04-6.04a4 4 0 005.66-5.66z"
                        />
                    </svg>
                </div>

                <h3 className="text-2xl font-semibold text-white mb-2">
                    Página em Desenvolvimento
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed">
                    Estamos trabalhando para trazer esta funcionalidade em breve.
                    Volte mais tarde para conferir as novidades.
                </p>

                {/* Linha decorativa */}
                <div className="w-16 h-1 bg-yellow-400/60 rounded-full mt-6"></div>

            </div>
        </div>
    );
}
