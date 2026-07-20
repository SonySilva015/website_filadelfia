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

const navItems = [
    { id: 'inicio', label: 'Início', href: '/' },
    { id: 'noticia', label: 'Notícias', href: '/noticias' },
    {
        id: 'mini',
        label: 'Ministérios',
        dropdown: [
            { name: 'Evangelismo', href: '/celulas' },
            { name: 'EBD - Infantil', href: '/ebd-infantil' },
            { name: 'Estudos Bíblicos', href: '/estudo-biblico' },
            { name: 'Juventude', href: '/juventude' },
            { name: 'Ministério dos Casais', href: '/ministerios_casais' },
            //   { name: 'Adoração', href: '/adoracao' },
            // { name: 'Ação Social', href: '/#' },
        ],
    },
    {
        id: 'bib',
        label: 'Biblioteca',
        dropdown: [
            { name: 'Artigos', href: '/artigos' },
            { name: 'Ajuda Para Vida', href: '/desevolvimento' },
            { name: 'Para Jovens', href: '/desevolvimento' },
        ],
    },
    {
        id: 'programacao',
        label: 'Programações',
        dropdown: [
            { name: 'Cultos', href: '/cultos' },
            { name: 'Santa Ceia', href: '/santa-ceia' },
        ],
    },
    {
        id: 'sobre',
        label: 'Sobre Nós',
        dropdown: [
            { name: 'Nossa história', href: '/nossa-historia' },
            { name: 'O que cremos', href: '/nossa-crenca' },
            { name: 'Sobre a Igreja', href: '/sobre' },
            { name: 'Liderança', href: '/lideranca' },
        ],
    },
]

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
                <h3 className="font-semibold text-lg text-title mb-4 relative inline-block">
                    {title}
                    <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-secondary rounded-full"></span>
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
                <summary className="flex items-center justify-between cursor-pointer font-semibold text-title list-none py-2">
                    {title}
                    <span className="transition-transform duration-200">
                        {open ? (
                            <ChevronUp className="w-5 h-5 text-secondary" />
                        ) : (
                            <ChevronDown className="w-5 h-5 text-secondary" />
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

    const contatos = [
        { icone: MapPin, texto: "Centralidade - Luena, Angola" },
        { icone: Phone, texto: " +244 934 028 046  " },
        { icone: Phone, texto: " +244 924 266 075  " },
        { icone: Mail, texto: "ieia.filadelfia@gmail.com" },
    ];

    const redesSociais = [
        { icone: Facebook, href: "#", nome: "Facebook" },
        { icone: Instagram, href: "#", nome: "Instagram" },
        { icone: Youtube, href: "#", nome: "YouTube" },
    ];

    return (
        <footer className="w-full bg-linear-to-b from-secondary-light/30 to-secondary/30 relative">
            <div className="w-full overflow-hidden rotate-180">
                <svg
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    className="relative block w-full h-12 md:h-16 fill-secondary/20"
                >
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
                {/* Topo */}
                <div className="flex flex-col lg:flex-row justify-between gap-10 mb-12 pb-12 border-b border-secondary/20">
                    {/* Logo */}
                    <div className="max-w-md">
                        <div className="flex items-center gap-4 mb-4">
                            <Image
                                alt="IEIA Filadélfia"
                                src={logo}
                                className="w-16 h-auto"
                            />
                            <div>
                                <h2 className="font-bold text-xl md:text-2xl text-secondary">
                                    IEIA Filadélfia
                                </h2>
                                <p className="text-sm text-body">
                                    Igreja Evangélica dos Irmãos em Angola
                                </p>
                            </div>
                        </div>

                        <p className="text-body text-sm leading-relaxed mb-6">
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
                                        className="w-10 h-10 bg-secondary-light hover:bg-secondary text-secondary hover:text-white rounded-full flex items-center justify-center transition"
                                    >
                                        <Icone className="w-5 h-5" />
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    {/* Contato */}
                    <div className="bg-white rounded-lg p-6 border border-secondary/20 min-w-70">
                        <h3 className="font-semibold text-lg text-title mb-4">
                            Informações de Contato
                        </h3>

                        <ul className="space-y-3">
                            {contatos.map((item, index) => {
                                const Icone = item.icone;
                                return (
                                    <li key={index} className="flex items-start gap-3 text-sm">
                                        <Icone className="w-5 h-5 text-secondary mt-0.5" />
                                        <span className="text-body">{item.texto}</span>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>

                {/* Links usando navItems */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Início */}
                    <FooterSection title="Início">
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/"
                                    className="text-body hover:text-secondary text-sm flex items-center gap-1 group"
                                >
                                    <ChevronRight className="w-4 h-4 text-secondary/60 group-hover:translate-x-1 transition-transform" />
                                    Início
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/noticias"
                                    className="text-body hover:text-secondary text-sm flex items-center gap-1 group"
                                >
                                    <ChevronRight className="w-4 h-4 text-secondary/60 group-hover:translate-x-1 transition-transform" />
                                    Notícias
                                </Link>
                            </li>
                        </ul>
                    </FooterSection>

                    {/* Ministérios */}
                    <FooterSection title="Ministérios">
                        <ul className="space-y-2">
                            {navItems.find(item => item.id === 'mini')?.dropdown?.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        href={item.href}
                                        className="text-body hover:text-secondary text-sm flex items-center gap-1 group"
                                    >
                                        <ChevronRight className="w-4 h-4 text-secondary/60 group-hover:translate-x-1 transition-transform" />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </FooterSection>

                    {/* Biblioteca & Programações */}
                    <div className="space-y-6">
                        <FooterSection title="Biblioteca">
                            <ul className="space-y-2">
                                {navItems.find(item => item.id === 'bib')?.dropdown?.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            href={item.href}
                                            className="text-body hover:text-secondary text-sm flex items-center gap-1 group"
                                        >
                                            <ChevronRight className="w-4 h-4 text-secondary/60 group-hover:translate-x-1 transition-transform" />
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </FooterSection>

                        <FooterSection title="Programações">
                            <ul className="space-y-2">
                                {navItems.find(item => item.id === 'programacao')?.dropdown?.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            href={item.href}
                                            className="text-body hover:text-secondary text-sm flex items-center gap-1 group"
                                        >
                                            <ChevronRight className="w-4 h-4 text-secondary/60 group-hover:translate-x-1 transition-transform" />
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </FooterSection>
                    </div>

                    {/* Sobre Nós & Card */}
                    <div className="space-y-6">
                        <FooterSection title="Sobre Nós">
                            <ul className="space-y-2">
                                {navItems.find(item => item.id === 'sobre')?.dropdown?.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            href={item.href}
                                            className="text-body hover:text-secondary text-sm flex items-center gap-1 group"
                                        >
                                            <ChevronRight className="w-4 h-4 text-secondary/60 group-hover:translate-x-1 transition-transform" />
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </FooterSection>

                        {/* Card */}

                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="bg-slate-800 text-white py-4">
                <div className="max-w-7xl mx-auto px-4 text-center text-sm">
                    <p>© {anoAtual} IEIA Filadélfia. Todos os direitos reservados.</p>
                    <p className="mt-1">
                        Desenvolvido por{" "}
                        <Link
                            href="http://sony-cassungulo.vercel.app"
                            className="text-red-300 underline hover:text-red-400 transition"
                        >
                            Sony Cassungulo
                        </Link>
                    </p>
                </div>
            </div>
        </footer>
    );
}