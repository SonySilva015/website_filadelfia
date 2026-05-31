'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '@/public/icon/logo.png'

const Navbar = () => {
    const pathname = usePathname()
    const [mobileOpen, setMobileOpen] = useState(false)
    const [mobileDropdown, setMobileDropdown] = useState<string | null>(null)
    const [desktopDropdown, setDesktopDropdown] = useState<string | null>(null)
    const [scrolled, setScrolled] = useState(false)

    // Bloquear scroll quando menu mobile estiver aberto
    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [mobileOpen])

    // Detectar scroll para efeito de sombra
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Fechar dropdown desktop ao clicar fora
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (desktopDropdown && !(e.target as Element).closest('.dropdown-container')) {
                setDesktopDropdown(null)
            }
        }
        document.addEventListener('click', handleClickOutside)
        return () => document.removeEventListener('click', handleClickOutside)
    }, [desktopDropdown])

    const navItems = [
        { id: 'inicio', label: 'Início', href: '/' },
        { id: 'noticia', label: 'Notćias', href: '/noticias' },

        {
            id: 'mini',
            label: 'Ministérios',
            dropdown: [
                { name: 'Evangelismo', href: '/celulas' },
                { name: 'EBD - Infantil', href: '/ebd-infantil' },
                { name: 'Estudos Bíblicos', href: '/desevolvimento' },
                { name: 'Adoração e louvores ', href: '/desevolvimento' },
                { name: 'Juventude', href: '/desevolvimento' },
                { name: 'Oração', href: '/desevolvimento' },
                { name: 'Dos Casais', href: '/desevolvimento' },
                { name: 'Ação  social', href: '/desevolvimento' },


            ],
        },
        {
            id: 'bib',
            label: 'Biblioteca',
            dropdown: [
                { name: 'Artigos', href: '/artigos' },
                { name: 'Ajuda Para Vida', href: '/media/para-vida' },
                { name: 'Para Jovens', href: '/media/para-jovens' },
                { name: 'Crescimento Social', href: '/desevolvimento' },
                { name: 'Galeria', href: '/desevolvimento' },


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
                { name: 'Liderença', href: '/lideranca' },

            ],
        },
    ]

    const isActive = (href: string) => {
        if (href === '/') return pathname === '/'
        return pathname?.startsWith(href)
    }

    const closeMobileMenu = () => {
        setMobileOpen(false)
        setMobileDropdown(null)
    }

    const toggleDesktopDropdown = (id: string) => {
        setDesktopDropdown(desktopDropdown === id ? null : id)
    }

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-100 transition-all  duration-300 ${scrolled
                    ? 'bg-white shadow-lg'
                    : 'bg-white shadow-md'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16 md:h-20">

                        {/* LOGO */}
                        <Link
                            href="/"
                            className="flex items-center gap-3 group"
                            onClick={closeMobileMenu}
                        >
                            <div className="relative">
                                <div className=" w-12 h-12  flex items-center justify-center font-bold text-sm md:text-base ">
                                    <Image width={50} height={50} src={logo} alt="logo" />
                                </div>
                            </div>
                            <div className="block">
                                <p className="font-bold text-red-600 text-md md:text-lg ">
                                    IEIA - Filadélfia
                                </p>
                                <p className="text-sm text-gray-900 md:text">
                                    Igreja dos Irmãos em Angola
                                </p>
                            </div>
                        </Link>

                        {/* DESKTOP MENU - Apenas clique */}
                        <div className="hidden lg:flex items-center gap-1 xl:gap-2">
                            {navItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="relative dropdown-container"
                                >
                                    {!item.dropdown ? (
                                        <Link
                                            href={item.href!}
                                            className={`relative px-3 xl:px-4 py-2 font-medium text-sm transition-all duration-300 group ${isActive(item.href!)
                                                ? 'text-red-600'
                                                : 'text-gray-900 hover:text-red-600'
                                                }`}
                                        >
                                            {item.label}
                                            <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full ${isActive(item.href!) ? 'w-full' : ''
                                                }`} />
                                        </Link>
                                    ) : (
                                        <>
                                            <button
                                                onClick={() => toggleDesktopDropdown(item.id)}
                                                className={`px-3 xl:px-4 py-2 font-medium text-sm cursor-pointer transition-all duration-300 flex items-center gap-1 ${desktopDropdown === item.id
                                                    ? 'text-red-600'
                                                    : 'text-gray-900 hover:text-red-600'
                                                    }`}
                                            >
                                                {item.label}
                                                <motion.svg
                                                    animate={{ rotate: desktopDropdown === item.id ? 180 : 0 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="w-4 h-4"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </motion.svg>
                                            </button>

                                            <AnimatePresence>
                                                {desktopDropdown === item.id && (
                                                    <motion.div
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: 10 }}
                                                        transition={{ duration: 0.2 }}
                                                        className="absolute top-full left-0 mt-2 w-56 bg-white rounded-md shadow-xl py-2 overflow-hidden border-t-2 border-red-500 z-200"
                                                    >
                                                        {item.dropdown.map((sub, i) => (
                                                            <Link
                                                                key={i}
                                                                href={sub.href}
                                                                className="block px-5 py-3 text-sm text-gray-700 hover:bg-red-300/10 hover:text-red-600 transition-all duration-200"
                                                                onClick={() => setDesktopDropdown(null)}
                                                            >
                                                                {sub.name}
                                                            </Link>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </>
                                    )}
                                </div>
                            ))}

                            {/* BOTÃO VISITAR */}

                            <Link
                                href="/admin/login"
                                className="ml-4 bg-red-600  text-white text-md px-6 py-2.5 rounded-md font-medium text-sm shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
                            >
                                Login
                            </Link>
                        </div>

                        {/* MOBILE BUTTON */}
                        <button
                            onClick={() => setMobileOpen(true)}
                            className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors z-200"
                            aria-label="Abrir menu"
                        >
                            <div className="space-y-1.5">
                                <span className="block w-6 h-0.5 bg-gray-600"></span>
                                <span className="block w-6 h-0.5 bg-gray-600"></span>
                                <span className="block w-6 h-0.5 bg-gray-600"></span>
                            </div>
                        </button>
                    </div>
                </div>

                {/* MOBILE MENU - Z-index máximo sempre no topo */}
                <AnimatePresence>
                    {mobileOpen && (
                        <>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="fixed inset-0 bg-white/60 z-1500"
                                onClick={closeMobileMenu}
                            />

                            <motion.div
                                initial={{ x: '100%' }}
                                animate={{ x: 0 }}
                                exit={{ x: '100%' }}
                                transition={{ type: 'tween', duration: 0.2 }}
                                className="fixed top-0 right-0 h-full w-[85%] bg-white shadow-2xl z-2000 overflow-y-auto"
                            >
                                <div className="p-6">
                                    <div className="flex items-center justify-between ">

                                        <button
                                            onClick={closeMobileMenu}
                                            className="w-10 h-10 rounded-full flex items-start justify-center transition-colors"
                                            aria-label="Fechar menu"
                                        >
                                            <svg className="w-6 h-6" fill="none" stroke="black" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>

                                    <div className="space-y-1">
                                        {navItems.map((item) => (
                                            <div key={item.id} className="border-b border-gray-300 last:border-0">
                                                {!item.dropdown ? (
                                                    <Link
                                                        href={item.href!}
                                                        onClick={closeMobileMenu}
                                                        className={`block py-4 font-medium transition-colors ${isActive(item.href!)
                                                            ? 'text-red-600'
                                                            : 'text-gray-800 hover:text-red-600'
                                                            }`}
                                                    >
                                                        {item.label}
                                                    </Link>
                                                ) : (
                                                    <>
                                                        <button
                                                            onClick={() => setMobileDropdown(
                                                                mobileDropdown === item.id ? null : item.id
                                                            )}
                                                            className="flex items-center justify-between w-full py-4 font-medium text-gray-800 hover:text-red-600 transition-colors"
                                                        >
                                                            {item.label}
                                                            <motion.svg
                                                                animate={{ rotate: mobileDropdown === item.id ? 180 : 0 }}
                                                                transition={{ duration: 0.3 }}
                                                                className="w-4 h-4"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                viewBox="0 0 24 24"
                                                            >
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                            </motion.svg>
                                                        </button>

                                                        <AnimatePresence>
                                                            {mobileDropdown === item.id && (
                                                                <motion.div
                                                                    initial={{ opacity: 0, height: 0 }}
                                                                    animate={{ opacity: 1, height: 'auto' }}
                                                                    exit={{ opacity: 0, height: 0 }}
                                                                    transition={{ duration: 0.2 }}
                                                                    className="overflow-hidden"
                                                                >
                                                                    <div className="pl-4 pb-4 space-y-2">
                                                                        {item.dropdown.map((sub, i) => (
                                                                            <motion.div
                                                                                initial={{ x: -20, opacity: 0 }}
                                                                                animate={{ x: 0, opacity: 1 }}
                                                                                transition={{ delay: i * 0.05 }}
                                                                                key={i}
                                                                            >
                                                                                <Link
                                                                                    href={sub.href}
                                                                                    onClick={closeMobileMenu}
                                                                                    className="block py-2.5 text-gray-600 hover:text-red-600 transition-colors border-t-2 border-gray-500/10 text-sm"
                                                                                >
                                                                                    {sub.name}
                                                                                </Link>
                                                                            </motion.div>
                                                                        ))}
                                                                    </div>
                                                                </motion.div>
                                                            )}
                                                        </AnimatePresence>
                                                    </>
                                                )}
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-8">
                                        <Link
                                            href="/admin/login"
                                            onClick={closeMobileMenu}
                                            className="block w-full bg-linear-to-r from-red-600 to-red-700 text-white text-center py-4 rounded-2xl font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                                        >
                                            login
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </nav>

            {/* Espaçador para compensar o navbar fixo */}
            <div className="h-16 md:h-20" />
        </>
    )
}

export default Navbar