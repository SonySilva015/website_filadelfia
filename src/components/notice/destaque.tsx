
import { useState } from "react";
import {
    Calendar,
    Clock,

} from "lucide-react";
import Image from "next/image";
import { getNoticebyDestaque1 } from "@/collections/notice/fetcher";
import Link from "next/link";





export default async function Home() {
    
 const notice = await getNoticebyDestaque1()
        if (!notice) return (<div></div>)
    

    return (
        <main className="bg-linear-to-b from-gray-50 to-white min-h-screen">
           
           

            {/* DESTAQUES */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
                <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">

                    <Link href={`/noticias/${notice.slug}`} className="lg:col-span-2 relative rounded-2xl overflow-hidden group cursor-pointer">
                       
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors z-10" />
                        <div className="relative h-96">
                            <Image
                                src={notice.fotoCapa.cloudinary.secure_url}
                                alt="Evento principal"
                                fill
                                className="object-cover group-hover:scale-105 transition duration-700"
                            />
                        </div>

                        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent z-20" />

                        <div className="absolute bottom-0 p-6 sm:p-8 text-white z-30">
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="bg-linear-to-r from-blue-600 to-blue-700 px-3 py-1 text-sm rounded-full font-medium shadow-lg">
                                    {notice.tipo == 'evento'?`${notice.tipo} . especial`:
                                    notice.tipo == 'noticia'?`${notice.tipo} . Urgente`:
                                    `${notice.tipo} . Aviso`
                                    } 
                                </span>
                                <span className="bg-white/20 backdrop-blur-sm px-3 py-1 text-sm rounded-full border border-white/30">
                                    <Calendar className="inline w-3 h-3 mr-1" />
                                   {new Date(notice.data).toLocaleDateString("pt-BR", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                                </span>
                            </div>

                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-3">
                               {notice.titulo}
                            </h1>

                            <Link  href={''} className="bg-blue-700 px-6 py-2.5 rounded-full font-semibold">
                                Ler mais
                            </Link>
                        </div>
                    </Link>

                    {/* 🔥 Notícias Laterais */}
                    <div className="space-y-4">
                     


                                <div
                                    
                                    className="group bg-white p-5 rounded-xl shadow-sm hover:shadow-lg transition border border-gray-100 cursor-pointer"
                                >
                                    <div className="flex items-start gap-3">


                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                                                <span className="font-medium"></span>
                                                <span>•</span>
                                                <span className="flex items-center gap-1">
                                                    <Clock className="w-3 h-3" />
                                                    
                                                </span>
                                            </div>

                                            <h3 className="font-semibold text-gray-800 group-hover:text-blue-700 transition">
                                               
                                            </h3>

                                            <p className="mt-2 text-xs text-gray-500">
                                            
                                            </p>
                                        </div>
                                    </div>
                                </div>
                        

                      
                    </div>
                </div>
            </section>
        </main>
    );
}