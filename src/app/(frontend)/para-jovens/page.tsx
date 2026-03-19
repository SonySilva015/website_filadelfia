import React from 'react';
import { BookOpen, Users, Cross, ArrowRight, MapPin, Phone } from 'lucide-react';

export default function IeiaLandingPage() {
    return (
        <div className="min-h-screen bg-background-primary font-sans text-text-body">

            {/* 1. Header Dinâmico (Secundário/Blue-900) */}
            <nav className="bg-secondary text-background-secondary shadow-lg sticky top-0 z-50">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                        <div className="bg-background-secondary p-1 rounded-full shadow-md">
                            <div className="w-10 h-10 flex items-center justify-center bg-primary text-background-secondary rounded-full font-black tracking-tighter">IEIA</div>
                        </div>
                        <div className="hidden sm:block">
                            <span className="block font-bold text-xl leading-none">IEIA</span>
                            <span className="block text-[10px] uppercase tracking-[0.3em] opacity-80">Angola</span>
                        </div>
                    </div>

                    <div className="flex items-center space-x-8 text-xs font-bold uppercase tracking-widest">
                        <a href="#historia" className="hover:text-primary transition-colors">Nossa História</a>
                        <a href="#ministerios" className="hover:text-primary transition-colors">Ministérios</a>
                        <button className="bg-button-primary hover:bg-button-hover text-button-text px-6 py-2.5 rounded-sm shadow-md transition-all active:scale-95">
                            Fale Conosco
                        </button>
                    </div>
                </div>
            </nav>

            {/* 2. Hero Section (Primary/Red-600 como destaque) */}
            <header className="relative py-24 md:py-36 overflow-hidden">
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="inline-block px-4 py-1.5 bg-primary-light text-primary font-bold text-xs uppercase tracking-[0.2em] rounded-full">
                            Fundada em 1884
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extrabold text-text-title leading-[1.1]">
                            Fé, Esperança e <br />
                            <span className="text-primary italic">Comunhão.</span>
                        </h1>
                        <p className="text-xl text-text-body/80 leading-relaxed max-w-lg">
                            Bem-vindo à Igreja Evangélica Independente em Angola.
                            Um lugar de refúgio, ensino e amor fraternal há mais de um século.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="bg-button-primary hover:bg-button-hover text-button-text font-bold py-4 px-10 rounded-sm shadow-xl transition-all flex items-center group">
                                Assista ao Culto <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <a href="#" className="text-text-link font-bold py-4 px-10 border-2 border-secondary hover:bg-secondary hover:text-background-secondary transition-all rounded-sm text-center">
                                Dízimos e Ofertas
                            </a>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="w-full h-[400px] bg-background-secondary rounded-2xl shadow-2xl border border-background-primary flex items-center justify-center overflow-hidden">
                            {/* Espaço para a foto da igreja ou cruz */}
                            <img
                                src="/placeholder-igreja.jpg"
                                alt="Igreja IEIA"
                                className="w-full h-full object-cover opacity-80"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent"></div>
                        </div>
                    </div>
                </div>
            </header>

            {/* 3. Pilares (Secondary/Blue-100 no fundo) */}
            <section className="bg-background-secondary py-24 border-y border-background-primary/50">
                <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12">

                    <div className="space-y-4 p-8 bg-background-primary/30 rounded-xl hover:shadow-lg transition-shadow">
                        <Cross className="text-primary w-12 h-12" strokeWidth={1.5} />
                        <h3 className="text-2xl font-bold text-text-title italic">A Cruz</h3>
                        <p className="text-text-body opacity-90 leading-relaxed">
                            Centrados no sacrifício de Cristo, nossa mensagem é de salvação e renovação espiritual para todos os angolanos.
                        </p>
                    </div>

                    <div className="space-y-4 p-8 bg-secondary-light/30 rounded-xl hover:shadow-lg transition-shadow border-b-4 border-secondary">
                        <Users className="text-secondary w-12 h-12" strokeWidth={1.5} />
                        <h3 className="text-2xl font-bold text-text-title italic">A União</h3>
                        <p className="text-text-body opacity-90 leading-relaxed">
                            Mãos dadas em serviço. Somos uma comunidade que caminha junta, cuidando das famílias e da nossa nação.
                        </p>
                    </div>

                    <div className="space-y-4 p-8 bg-background-primary/30 rounded-xl hover:shadow-lg transition-shadow">
                        <BookOpen className="text-primary w-12 h-12" strokeWidth={1.5} />
                        <h3 className="text-2xl font-bold text-text-title italic">A Palavra</h3>
                        <p className="text-text-body opacity-90 leading-relaxed">
                            O ensino bíblico é o nosso alicerce sólido, guiando nossos passos desde a fundação em 1884.
                        </p>
                    </div>

                </div>
            </section>

            {/* 4. Rodapé (Secondary/Blue-900) */}
            <footer className="bg-secondary text-background-secondary py-16">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-12 border-b border-background-secondary/10 pb-12">
                        <div className="space-y-4">
                            <h4 className="text-3xl font-black tracking-tighter italic">IEIA</h4>
                            <p className="max-w-xs text-secondary-light/70 text-sm">
                                Igreja Evangélica Independente em Angola.
                                Servindo ao Senhor e ao povo angolano desde 1884.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-12">
                            <div className="space-y-4 text-sm">
                                <span className="block font-bold uppercase tracking-widest text-primary">Links</span>
                                <ul className="space-y-2 opacity-80">
                                    <li><a href="#" className="hover:text-primary transition-colors">Ministérios</a></li>
                                    <li><a href="#" className="hover:text-primary transition-colors">Programação</a></li>
                                    <li><a href="#" className="hover:text-primary transition-colors">Localização</a></li>
                                </ul>
                            </div>
                            <div className="space-y-4 text-sm">
                                <span className="block font-bold uppercase tracking-widest text-primary">Contato</span>
                                <ul className="space-y-3 opacity-80">
                                    <li className="flex items-center"><Phone size={14} className="mr-2" /> +244 9XX XXX XXX</li>
                                    <li className="flex items-center"><MapPin size={14} className="mr-2" /> Luanda, Angola</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 text-center text-[10px] uppercase tracking-[0.4em] opacity-40">
                        © 2026 Todos os direitos reservados | IEIA Angola
                    </div>
                </div>
            </footer>
        </div>
    );
}