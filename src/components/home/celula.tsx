import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const EstudosBiblicos = ({ celulas }: any) => {
    const celArray = Array.isArray(celulas) ? celulas : [];

    if (celulas.length === 0) {
        return (
            <section className="relative py-24 px-6">
                <div className="relative z-10 max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-title">
                        Conheça Nossas <span className="secondary">Células</span>
                    </h2>
                    <p className="text-lg text-body mb-14 max-w-2xl mx-auto">
                        Grupos de jovens que se reúnem toda semana para fortalecer a comunhão
                    </p>
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg max-w-2xl mx-auto">
                        <p className="text-yellow-700 text-lg">
                            No momento, não há grupos de células disponíveis para exibição.
                        </p>
                        <p className="text-gray-600 mt-2">
                            Volte em breve para conhecer nossos grupos disponíveis.
                        </p>
                    </div>
                </div>
            </section>
        );
    } else {
        return (
            <div className='bg-tertiary'>
                {/* SEÇÃO CÉLULAS */}
                <section className="relative py-24 px-6">
                    <div className="absolute inset-0"> </div>

                    <div className="relative z-10 max-w-7xl mx-auto text-center">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-title">
                            Conheça Nossas <span className="secondary">Células</span>
                        </h2>

                        <p className="text-lg text-body mb-14 max-w-2xl mx-auto">
                            Grupos de jovens que se reúnem toda semana para fortalecer a comunhão
                        </p>


                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                            {celArray.map((cel: any) => (
                                <div
                                    key={cel.id}
                                    className="group relative h-105 rounded-xl overflow-hidden shadow-2xl transition duration-500 hover:scale-105"
                                >
                                    <Image
                                        src={cel.capa?.url || '/placeholder.jpg'}
                                        fill
                                        alt={cel.nome}
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition"></div>

                                    <div className="relative z-10 h-full flex flex-col justify-end p-8 text-left">
                                        <h3 className="text-2xl font-bold text-secondary-light mb-3">
                                            {cel.nome}
                                        </h3>
                                        <p className="text-gray-200 text-sm">
                                            {cel.descricao}
                                        </p>


                                    </div>
                                    <div className='bg-white/10 backdrop-blur-md z-10 absolute top-6 left-4 p-2 rounded-full'>
                                        <p className='text-secondary-light'>{cel.horarios}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* BOTÃO */}
                        <div className="mt-16">
                            <Link
                                href={'/celulas'}
                                className="button-primary px-8 py-4 rounded-lg shadow-lg transition duration-300 hover:scale-105 font-semibold"
                            >
                                Ver mais Células
                            </Link>
                        </div>
                    </div>
                </section>


            </div>
        )
    }
}

export default EstudosBiblicos;