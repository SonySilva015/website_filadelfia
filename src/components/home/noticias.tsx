
import Image from "next/image"
import Link from 'next/link'
import logo from '@/public/icon/logo.png'
import { Newspaper } from 'lucide-react'

export default async function NoticyHome({ noticias }: any) {

    if (!noticias || noticias.length == 0) {
        return (
            <section className="p-4 bg-slate-100" >
                <div className="flex gap-5 flex-col lg:flex-row md:p-10">
                    <div className="flex gap-5 flex-col lg:flex-row md:p-10">
                        <div className="w-full  py-8">
                            <h1 className="mb-10 md:ml-4 pl-2 border-l-4 border-l-red-600 text-3xl text-black font-semibold">
                                Destaques
                            </h1>

                            <div className="flex flex-col justify-center items-center gap-4 bg-gray-100 h-full rounded-xl">

                                <Newspaper size={50} className="text-red-600 opacity-80" />

                                <h1 className="text-red-700 text-2xl text-center font-medium">
                                    Nenhuma notícia
                                </h1>

                                <p className="text-gray-500 text-sm text-center max-w-sm">
                                    Ainda não há notícias disponíveis no momento. Volte mais tarde para ver atualizações.
                                </p>

                            </div>
                        </div>
                    </div>

                    <div className="space-y-6 lg:w-[45%] mt-6">

                        <div className="bg-white rounded-lg shadow p-2">
                            <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Links Rápido</h1>

                            <div className="flex flex-1 flex-col gap-2">

                                <div className="p-4 rounded shadow ">
                                    <Link href="/#" className="text-lg font-semibold text-red-700 mb-2">Nossos cultos</Link>
                                    <p className="text-gray-700 text-sm">
                                        <span className="font-bold">Todos os domingos</span>
                                    </p>
                                </div>


                                <div className="p-4 rounded shadow">
                                    <Link href="/#" className="text-lg font-semibold text-red-700 mb-2">Estudos biblicos dominical</Link>
                                    <p className="text-gray-700 text-sm">
                                        <span className="font-bold">Adultos Jovens e crianças</span>
                                    </p>
                                </div>


                                <div className="p-4 rounded shadow">
                                    <Link href="/#" className="text-lg font-semibold text-red-700 mb-2">Obras Sociais</Link>
                                    <p className="text-gray-700 text-sm">
                                        <span className="font-bold">+50 ações</span>
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div className="bg-white shadow rounded-md p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                            <div className="flex-1">
                                <h4 className="text-sm text-gray-700 font-bold">Jesus é caminho e a vida</h4>
                                <p className="text-xs text-gray-600 mt-1 leading-snug">joão 1-12, mas todos aqueles que nele creram deu-lhes o poder de se tornarem filho de Deus</p>
                            </div>
                            <Image width={50} height={50} src={logo} alt="Jesus" className="object-cover rounded-md" />
                        </div>
                    </div>
                </div>

            </section>
        )
    } else {

        return (
            <section className="p-4" >
                <div className="flex gap-10 flex-col lg:flex-row md:p-10">
                    <div className="w-full max-w-6xl mx-auto py-8">
                        <h1 className="mb-10 md:ml-4 pl-2 border-l-4 border-l-red-600 text-3xl text-black font-semibold">
                            Destaques
                        </h1>

                        <div className="flex flex-col gap-8">
                            {noticias.map((n: any) => (
                                <div
                                    key={n.id}
                                    className="group flex flex-col shadow-2xl md:shadow-none rounded-lg md:rounded-none  md:flex-row items-center  gap-6 w-full h-auto cursor-pointer md:border-t border-gray-200 pt-6 transition-all duration-300"
                                >
                                    <div className="relative w-full md:w-[45%] h-60 overflow-hidden bg-black md:rounded-md shadow-md">
                                        {n.fotoCapa?.cloudinary?.secure_url && (
                                            <Image
                                                src={n.fotoCapa.cloudinary.secure_url}
                                                alt={n.titulo || "Capa da notícia"}
                                                fill
                                                sizes="(max-width: 768px) 100vw, 45vw"
                                                className="object-cover "
                                                placeholder="blur"
                                                blurDataURL="/img/placeholder.png"
                                            />
                                        )}
                                    </div>

                                    <div className="flex-1 p-4 md:p-0">
                                        <span className="inline-block px-3 py-1 bg-blue-900/30 text-link text-xs font-bold rounded-full mb-3 uppercase ">
                                            {n.tipo}
                                        </span>

                                        <h2 className="text-2xl font-bold text-title mb-2  transition-colors">
                                            {n.titulo}
                                        </h2>
                                        <p className="text-gray-600 text-md mb-4 line-clamp-3">
                                            {n.descricao}
                                        </p>

                                        <Link
                                            href={`/noticias/${n.slug || n.id}`}
                                            className="inline-flex items-center gap-2 text-link font-bold group-hover:gap-4 transition-all"
                                        >
                                            Ler mais <span>→</span>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex justify-center items-center mt-12">
                            <button className="button-primary hover:bg-red-800   rounded-md px-10 py-3 font-medium transition-all hover:scale-105 active:scale-95 shadow-lg duration-300">
                                Ver Mais Notícias
                            </button>
                        </div>
                    </div>

                    <div className="space-y-6 lg:w-[45%] mt-6">

                        <div className="bg-white rounded-lg shadow p-2">
                            <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Links Rápido</h1>

                            <div className="flex flex-1 flex-col gap-2">

                                <div className="p-4 rounded shadow ">
                                    <Link href="/#" className="text-lg font-semibold text-link mb-2">Nossos cultos</Link>
                                    <p className="text-gray-700 text-sm">
                                        <span className="font-bold">Todos os domingos</span>
                                    </p>
                                </div>


                                <div className="p-4 rounded shadow">
                                    <Link href="/#" className="text-lg font-semibold text-link mb-2">Estudos biblicos dominical</Link>
                                    <p className="text-gray-700 text-sm">
                                        <span className="font-bold">Adultos Jovens e crianças</span>
                                    </p>
                                </div>


                                <div className="p-4 rounded shadow">
                                    <Link href="/#" className="text-lg font-semibold text-link mb-2">Artigos</Link>
                                    <p className="text-gray-700 text-sm">

                                    </p>
                                </div>
                                <div className="p-4 rounded shadow">
                                    <Link href="/#" className="text-lg font-semibold text-link mb-2">Santa ceia</Link>
                                    <p className="text-gray-700 text-sm">
                                        <span className="font-bold"></span>
                                    </p>
                                </div>

                                <div className="p-4 rounded shadow">
                                    <Link href="/#" className="text-lg font-semibold text-link mb-2">Obras Sociais</Link>
                                    <p className="text-gray-700 text-sm">
                                        <span className="font-bold">Cultos de Adoração</span>
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div className="bg-second shadow rounded-md p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                            <div className="flex-1">
                                <h4 className="text-sm text-gray-700 font-bold">Jesus é caminho e a vida</h4>
                                <p className="text-xs text-gray-600 mt-1 leading-snug">joão 1-12, mas todos aqueles que nele creram deu-lhes o poder de se tornarem filho de Deus</p>
                            </div>
                            <Image width={50} height={50} src="/img/logo.png" alt="Jesus" className="object-cover rounded-md" />
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}