import Image from "next/image";
import logo from '@/public/icon/logo.png'
import Link from "next/link";
import {
    Facebook,
    Instagram,
    Youtube,
    MapPin,
    Phone,
    Mail,
    Clock,
    Heart,
    ChevronRight
} from 'lucide-react';

export default function Footer() {
    const anoAtual = new Date().getFullYear();

    const linksIgreja = [
        { nome: "Sobre Nós", href: "#sobre" },
        { nome: "Notícias", href: "#noticias" },
        { nome: "Jovens", href: "#jovens" },
        { nome: "Células", href: "#celulas" },
        { nome: "Membros", href: "#membros" },
        { nome: "Liderança", href: "#lideranca" },
        { nome: "EBD - Infantil", href: "#ebd" }
    ];

    const linksMinisterios = [
        { nome: "Louvor", href: "#louvor" },
        { nome: "Intercessão", href: "#intercessao" },
        { nome: "Jovens", href: "#jovens" },
        { nome: "Crianças", href: "#criancas" },
        { nome: "Casais", href: "#casais" },
        { nome: "Ação Social", href: "#social" }
    ];

    const linksProgramacao = [
        { nome: "Culto de Domingo", href: "#domingo", horario: "09h e 19h" },
        { nome: "Oração", href: "#oracao", horario: "Qua - 19h" },
        { nome: "Jovens", href: "#jovens", horario: "Sáb - 19h" },
        { nome: "Escola Bíblica", href: "#ebd", horario: "Dom - 09h" },
        { nome: "Células", href: "#celulas", horario: "Durante a semana" }
    ];

    const contatos = [
        { icone: MapPin, texto: "Rua das Acácias, 123 - Luanda, Angola" },
        { icone: Phone, texto: "+244 999 999 999" },
        { icone: Mail, texto: "contato@ieia.ao" },
        { icone: Clock, texto: "Seg - Sáb: 08h - 20h" }
    ];

    const redesSociais = [
        { icone: Facebook, href: "#", nome: "Facebook" },
        { icone: Instagram, href: "#", nome: "Instagram" },
        { icone: Youtube, href: "#", nome: "YouTube" }
    ];

    return (
        <footer className="w-full bg-gradient-to-b from-[#f5f0ff] to-white relative">
            {/* Onda decorativa no topo */}
            <div className="absolute top-0 left-0 w-full overflow-hidden rotate-180">
                <svg
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    className="relative block w-full h-12 md:h-16 fill-purple-600/10"
                >
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
                </svg>
            </div>

            {/* Conteúdo principal */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 relative z-10">
                {/* Topo do footer com logo e informações principais */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-12 pb-12 border-b border-purple-100">
                    {/* Logo e descrição */}
                    <div className="max-w-md">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="relative">
                                <div className="absolute inset-0 bg-purple-600 rounded-full blur-lg opacity-20"></div>
                                <Image
                                    alt="IEIA Filadélfia"
                                    src={logo}
                                    className="w-16 md:w-20 h-auto relative z-10"
                                />
                            </div>
                            <div>
                                <h2 className="font-bold text-xl md:text-2xl text-gray-800">
                                    IEIA Filadélfia
                                </h2>
                                <p className="text-sm text-purple-700 font-medium">
                                    Igreja Evangélica dos Irmãos em Angola
                                </p>
                            </div>
                        </div>

                        <p className="text-gray-600 text-sm leading-relaxed mb-6">
                            Uma comunidade acolhedora que busca viver o amor de Cristo
                            e servir à sociedade com dedicação e fé.
                        </p>

                        {/* Redes sociais */}
                        <div className="flex gap-3">
                            {redesSociais.map((rede, index) => {
                                const Icone = rede.icone;
                                return (
                                    <Link
                                        key={index}
                                        href={rede.href}
                                        className="w-10 h-10 bg-purple-100 hover:bg-purple-600 text-purple-700 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 group"
                                        aria-label={rede.nome}
                                    >
                                        <Icone className="w-5 h-5" />
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    {/* Contato rápido */}
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100 min-w-[280px]">
                        <h3 className="font-semibold text-lg text-gray-800 mb-4 flex items-center gap-2">
                            <Heart className="w-5 h-5 text-purple-600 fill-purple-600" />
                            Informações de Contato
                        </h3>
                        <ul className="space-y-3">
                            {contatos.map((item, index) => {
                                const Icone = item.icone;
                                return (
                                    <li key={index} className="flex items-start gap-3 text-sm">
                                        <Icone className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-600">{item.texto}</span>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>

                {/* Links rápidos em grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Igreja */}
                    <div>
                        <h3 className="font-semibold text-lg text-gray-800 mb-4 relative inline-block">
                            Igreja
                            <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-purple-600 rounded-full"></span>
                        </h3>
                        <ul className="space-y-2">
                            {linksIgreja.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-600 hover:text-purple-700 text-sm flex items-center gap-1 group"
                                    >
                                        <ChevronRight className="w-4 h-4 text-purple-400 group-hover:translate-x-1 transition-transform" />
                                        {link.nome}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Ministérios */}
                    <div>
                        <h3 className="font-semibold text-lg text-gray-800 mb-4 relative inline-block">
                            Ministérios
                            <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-purple-600 rounded-full"></span>
                        </h3>
                        <ul className="space-y-2">
                            {linksMinisterios.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-600 hover:text-purple-700 text-sm flex items-center gap-1 group"
                                    >
                                        <ChevronRight className="w-4 h-4 text-purple-400 group-hover:translate-x-1 transition-transform" />
                                        {link.nome}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Programação */}
                    <div>
                        <h3 className="font-semibold text-lg text-gray-800 mb-4 relative inline-block">
                            Programação
                            <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-purple-600 rounded-full"></span>
                        </h3>
                        <ul className="space-y-3">
                            {linksProgramacao.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        href={item.href}
                                        className="group block"
                                    >
                                        <span className="text-gray-800 group-hover:text-purple-700 font-medium text-sm flex items-center gap-1">
                                            <ChevronRight className="w-4 h-4 text-purple-400" />
                                            {item.nome}
                                        </span>
                                        <span className="text-xs text-gray-500 ml-5">
                                            {item.horario}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Horários especiais */}
                    <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl p-6 text-white">
                        <h3 className="font-semibold text-lg mb-3">Horário Especial</h3>
                        <p className="text-sm text-purple-100 mb-4">
                            Confira nossa programação especial de feriados e eventos.
                        </p>
                        <Link
                            href="#programacao"
                            className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-medium transition"
                        >
                            Ver programação completa
                            <ChevronRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </div>



            {/* Copyright */}
            <div className="bg-purple-200 text-purple-200 py-4">
                <div className="max-w-7xl mx-auto px-4 text-center text-sm">
                    <p>© {anoAtual} IEIA Filadélfia. Todos os direitos reservados.</p>
                    <p className="text-xs mt-1 text-purple-300">
                        Desenvolvido com ❤️ pela comunidade IEIA
                    </p>
                </div>
            </div>
        </footer>
    );
}