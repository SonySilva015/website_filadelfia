
"use client";

import Image from "next/image";
import logo from "@/public/icon/logo.png";
import Link from "next/link";
import { useState } from "react";

import {
    Facebook,
    Instagram,
    Youtube,
    MapPin,
    Phone,
    Mail,
    ChevronRight,
    ChevronDown,
    ChevronUp,
} from "lucide-react";

function FooterSection({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Desktop */}
            <div className="hidden lg:block">
                <h3 className="font-semibold text-lg text-gray-800 mb-4 relative inline-block">
                    {title}
                    <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-purple-600 rounded-full"></span>
                </h3>
                {children}
            </div>

            {/* Mobile */}
            <details
                className="lg:hidden border-b border-gray-200 pb-3"
                onToggle={(e) =>
                    setOpen((e.target as HTMLDetailsElement).open)
                }
            >
                <summary className="flex items-center justify-between cursor-pointer font-semibold text-gray-800 list-none py-2">
                    {title}

                    <span className="transition-transform duration-200">
                        {open ? (
                            <ChevronUp className="w-5 h-5 text-purple-600" />
                        ) : (
                            <ChevronDown className="w-5 h-5 text-purple-600" />
                        )}
                    </span>
                </summary>

                <div className="mt-3">{children}</div>
            </details>
        </>
    );
}

export default function Footer() {
    const anoAtual = new Date().getFullYear();

    const linksIgreja = [
        { nome: "Sobre Nós", href: "#sobre" },
        { nome: "Notícias", href: "#noticias" },
        { nome: "Jovens", href: "#jovens" },
        { nome: "Células", href: "#celulas" },
        { nome: "Membros", href: "#membros" },
        { nome: "Liderança", href: "#lideranca" },
        { nome: "EBD - Infantil", href: "#ebd" },
    ];

    const linksMinisterios = [
        { nome: "Louvor", href: "#louvor" },
        { nome: "Intercessão", href: "#intercessao" },
        { nome: "Jovens", href: "#jovens" },
        { nome: "Crianças", href: "#criancas" },
        { nome: "Casais", href: "#casais" },
        { nome: "Ação Social", href: "#social" },
    ];

    const linksProgramacao = [
        { nome: "Culto de Domingo", href: "#domingo", horario: "09h e 19h" },
        { nome: "Jovens", href: "#jovens", horario: "Sáb - 19h" },
        { nome: "Escola Bíblica", href: "#ebd", horario: "Dom - 09h" },
        { nome: "Células", href: "#celulas", horario: "Durante a semana" },
    ];

    const contatos = [
        { icone: MapPin, texto: "Centralidade - Luena, Angola" },
        { icone: Phone, texto: "+244 999 999 999" },
        { icone: Mail, texto: "contato@ieia.ao" },
    ];

    const redesSociais = [
        { icone: Facebook, href: "#", nome: "Facebook" },
        { icone: Instagram, href: "#", nome: "Instagram" },
        { icone: Youtube, href: "#", nome: "YouTube" },
    ];

    return (
        <footer className="w-full bg-linear-to-b from-[#f5f0ff] to-white relative">
            <div className=" w-full overflow-hidden rotate-180 ">
                <svg
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    className="relative block w-full h-12 md:h-16 fill-purple-600/10"
                >
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
                </svg>

            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
                {/* Topo */}
                <div className="flex flex-col lg:flex-row justify-between gap-10 mb-12 pb-12 border-b border-purple-100">
                    {/* Logo */}
                    <div className="max-w-md">
                        <div className="flex items-center gap-4 mb-4">
                            <Image
                                alt="IEIA Filadélfia"
                                src={logo}
                                className="w-16 h-auto"
                            />

                            <div>
                                <h2 className="font-bold text-xl md:text-2xl text-purple-800">
                                    IEIA Filadélfia
                                </h2>

                                <p className="text-sm text-gray-700">
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
                                        className="w-10 h-10 bg-purple-100 hover:bg-purple-600 text-purple-700 hover:text-white rounded-full flex items-center justify-center transition"
                                    >
                                        <Icone className="w-5 h-5" />
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    {/* Contato */}
                    <div className="bg-white rounded-lg p-6 border border-purple-100 min-w-[280px]">
                        <h3 className="font-semibold text-lg text-gray-800 mb-4">
                            Informações de Contato
                        </h3>

                        <ul className="space-y-3">
                            {contatos.map((item, index) => {
                                const Icone = item.icone;

                                return (
                                    <li key={index} className="flex items-start gap-3 text-sm">
                                        <Icone className="w-5 h-5 text-purple-600 mt-0.5" />
                                        <span className="text-gray-600">{item.texto}</span>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>

                {/* Links */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Igreja */}
                    <FooterSection title="Igreja">
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
                    </FooterSection>

                    {/* Ministérios */}
                    <FooterSection title="Ministérios">
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
                    </FooterSection>

                    {/* Programação */}
                    <FooterSection title="Programação">
                        <ul className="space-y-3">
                            {linksProgramacao.map((item, index) => (
                                <li key={index}>
                                    <Link href={item.href} className="group block">
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
                    </FooterSection>

                    {/* Card */}
                    <div className="bg-linear-to-br from-purple-600 to-purple-800 rounded-2xl p-6 text-white">
                        <h3 className="font-semibold text-lg mb-3">
                            Horário Especial
                        </h3>

                        <p className="text-sm text-purple-100 mb-4">
                            Confira nossa programação especial de eventos.
                        </p>

                        <Link
                            href="#programacao"
                            className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg text-sm"
                        >
                            Ver programação
                            <ChevronRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="bg-gray-800 text-white py-4">
                <div className="max-w-7xl mx-auto px-4 text-center text-sm">
                    <p>© {anoAtual} IEIA Filadélfia. Todos os direitos reservados.</p>

                    <p className="mt-1">
                        Desenvolvido por{" "}
                        <Link
                            href="http://sony-cassungulo.vercel.app"
                            className="text-red-300 underline"
                        >
                            Sony Cassungulo
                        </Link>
                    </p>
                </div>
            </div>
        </footer>
    );
}

