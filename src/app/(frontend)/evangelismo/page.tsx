
import {
    Church,
    ArrowRight,
} from 'lucide-react';
import Image from "next/image";

import Section1 from './components/section1';
import CelulasServer from './components/celulasServer';
import Actividades from './components/actividades';
import Action from './components/action';
import Bastimal from './components/bastimal'
import mg from '@/public/img/homemEvang.jpg';
import { GetCelulas } from '@/collections/celulas/fetcher';


export default async function Page() {
    // Fetch feito no servidor (Server Component)
    const data = await GetCelulas();
    const celulas = data.celulas || [];

    return (
        <>
            {/* HERO */}
            <section className="relative isolate overflow-hidden h-full md:h-140 flex items-center">
                <Image
                    src={mg}
                    alt="Culto"
                    className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-slate-950/70"></div>

                <div className="absolute inset-0 bg-linear-to-r from-slate-950/90  to-slate-950/20"></div>

                <div className="absolute inset-0 opacity-10">
                    <div
                        className="h-full w-full"
                        style={{
                            backgroundImage:
                                "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
                            backgroundSize: "70px 70px",
                        }}
                    />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 w-full">

                    <div className="">

                        {/* ESQUERDA */}
                        <div>


                            <h1 className="text-5xl md:text-7xl lg:text-7xl font-serif text-white leading-[1.1] mb-10 tracking-tight">

                                Deus ainda transforma
                                <span className="block text-red-750">
                                    vidas.
                                </span>

                            </h1>

                            <p className="mt-8 text-xl text-blue-100 leading-9 max-w-xl">

                                Independentemente do seu passado,
                                existe um lugar preparado para você.
                                Venha conhecer uma família que vive o
                                Evangelho de Cristo com amor, comunhão
                                e propósito.

                            </p>

                            <div className="mt-10 flex flex-wrap gap-5">





                            </div>


                        </div>



                    </div>

                </div>

            </section>
            <Section1 />
            <Bastimal />
            <CelulasServer />
            <Actividades />
            <Action />


        </>
    );

} 