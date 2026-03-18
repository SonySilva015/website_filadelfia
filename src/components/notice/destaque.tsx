import {
    Calendar,
    Clock,
} from "lucide-react";
import Image from "next/image";
import { getNoticesDestaques } from "@/collections/notice/fetcher";
import Link from "next/link";

export default async function Home() {

    const notices = await getNoticesDestaques()

    if (!notices || notices.length === 0) return null

    // 🔥 separação por destaque
    const principal = notices.find(n => Number(n.destaque) === 1)
    const secundaria = notices.find(n => Number(n.destaque) === 2)
    const terciaria = notices.find(n => Number(n.destaque) === 3)

    return (
        <main className="bg-linear-to-b from-gray-50 to-white">

            <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
                <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">

                    {/* 🔴 PRINCIPAL */}
                    {principal && (
                        <Link
                            href={`/noticias/${principal.slug}`}
                            className="lg:col-span-2 relative rounded-2xl overflow-hidden group cursor-pointer block"
                        >
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors z-10" />

                            <div className="relative h-96">
                                <Image
                                    src={(principal?.fotoCapa as any)?.cloudinary?.secure_url || '/img/fallback.jpg'}
                                    alt={principal.titulo}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 66vw"
                                    className="object-cover group-hover:scale-105 transition duration-700"
                                />
                            </div>

                            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent z-20" />

                            <div className="absolute bottom-0 p-6 sm:p-8 text-white z-30">

                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="bg-purple-700 px-3 py-1 text-sm rounded-full font-medium shadow-lg">
                                        {principal.tipo}
                                    </span>

                                    <span className="bg-white/20 backdrop-blur-sm px-3 py-1 text-sm rounded-full border border-white/30">
                                        <Calendar className="inline w-3 h-3 mr-1" />
                                        {principal.data
                                            ? new Date(principal.data).toLocaleDateString("pt-BR", {
                                                day: "numeric",
                                                month: "short",
                                                year: "numeric",
                                            })
                                            : "Sem data"}
                                    </span>
                                </div>

                                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-3">
                                    {principal.titulo}
                                </h1>

                                <span className="bg-purple-700 px-6 py-2.5 rounded-md mt-2 font-semibold">
                                    Ler mais
                                </span>
                            </div>
                        </Link>
                    )}

                    {/* 🔵 LATERAIS */}

                    <div className="space-y-4">

                        {[secundaria, terciaria].map((item) =>
                            item ? (
                                <Link
                                    key={item.id}
                                    href={`/noticias/${item.slug}`}
                                    className="relative group block h-45 rounded-xl overflow-hidden shadow-sm hover:shadow-lg border border-gray-100 transition"
                                >
                                    {/* 📸 Imagem de fundo */}
                                    <div className="absolute inset-0">
                                        <Image
                                            src={(item?.fotoCapa as any)?.cloudinary?.secure_url || '/img/fallback.jpg'}
                                            alt={item.titulo}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            className="object-cover group-hover:scale-105 transition duration-700"
                                        />
                                        <div className="absolute inset-0 bg-black/25 group-hover:bg-black/40 transition" />
                                    </div>

                                    {/* 📝 Conteúdo */}
                                    <div className="relative p-5 text-white z-10">
                                        <div className="flex items-center gap-2 text-xs mb-2">
                                            <span className="capitalize font-medium">{item.tipo}</span>
                                            <span>•</span>
                                            <span className="flex items-center gap-1">
                                                <Clock className="w-3 h-3" />
                                                {item.data
                                                    ? new Date(item.data).toLocaleDateString("pt-BR", {
                                                        day: "numeric",
                                                        month: "short",
                                                    })
                                                    : "Sem data"}
                                            </span>
                                        </div>

                                        <h3 className="font-semibold text-lg group-hover:text-blue-300 transition line-clamp-2">
                                            {item.titulo}
                                        </h3>

                                    </div>
                                </Link>
                            ) : null
                        )}

                    </div>

                </div>
            </section>
        </main>
    )
}