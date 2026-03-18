'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import capa from '@/public/img/Capaceia.jpeg'
import pa from '@/public/img/pao.jpeg'
import ceJ from '@/public/img/ceiaJ.jpg'
import ca from '@/public/img/caliceS.jpeg'
import ini from '@/public/img/iniCalice.png'

export default function SantaCeiaPage() {
    return (
        <div className="bg-[#FDFDFB] text-slate-900">

            {/* HERO */}
            <section className="relative h-[70vh] flex items-center justify-center text-center text-white">
                <Image

                    src={capa}
                    alt="Santa Ceia"
                    fill
                    className="object-cover"
                />

                <div className="absolute inset-0 bg-black/80" />

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="relative z-10 max-w-3xl px-6"
                >
                    <span className="uppercase tracking-[0.4em] text-xs text-red-300 font-bold">
                        Sacramento da Comunhão
                    </span>

                    <h1 className="text-5xl md:text-7xl font-serif italic mt-6">
                        A Santa Ceia
                    </h1>

                    <p className="mt-6 text-lg text-slate-200 font-light leading-relaxed">
                        Um memorial sagrado instituído por Jesus Cristo para lembrar o
                        sacrifício da cruz e renovar a nossa comunhão com Deus.
                    </p>
                </motion.div>
            </section>

            {/* O QUE É */}
            <section className="py-28 px-6 max-w-5xl mx-auto">
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    <Image
                        src={ini}
                        alt="pão da ceia"
                        width={500}
                        height={600}
                        className="rounded-2xl object-cover"
                    />

                    <div>
                        <h2 className="text-sm uppercase tracking-widest text-red-800 font-bold mb-4">
                            O que é a Santa Ceia?
                        </h2>

                        <p className="text-xl font-light text-slate-700 leading-relaxed mb-6">
                            A Santa Ceia é um dos momentos mais solenes da vida cristã. Ela foi
                            instituída por Jesus Cristo na noite em que foi traído e entregue
                            para ser crucificado.
                        </p>

                        <p className="text-slate-500 leading-relaxed">
                            Ao participar da Ceia, a igreja relembra o sacrifício de Cristo,
                            celebra a nova aliança e anuncia a esperança da sua segunda
                            vinda. Não é apenas um ritual, mas um momento profundo de comunhão
                            espiritual com Deus e com a comunidade de fé.
                        </p>
                    </div>

                </div>
            </section>

            {/* FUNDAMENTO BÍBLICO */}
            <section className="py-24 bg-slate-50 border-y border-slate-100 relative">
                <div className="absolute inset-0 z-0">
                    {/* Imagem de fundo */}
                    <Image
                        src={ceJ}
                        alt="Fundo Bíblico"
                        fill
                        className="object-cover w-full grayscale h-full opacity-30"
                    />
                </div>
                <div className="absolute inset-0 z-5 bg-slate-950/50" >
                </div>
                <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
                    <h2 className="text-3xl mb-10 text-white">
                        Fundamento Bíblico
                    </h2>

                    <blockquote className="text-xl text-white font-light leading-relaxed italic">
                        "Porque todas as vezes que comerdes este pão e beberdes este cálice,
                        anunciais a morte do Senhor até que venha."
                    </blockquote>

                    <p className="text-xs uppercase tracking-widest text-slate-400 mt-4">
                        1 Coríntios 11:26
                    </p>
                </div>
            </section>

            {/* ELEMENTOS */}
            <section className="py-28 px-6 max-w-6xl mx-auto">

                <div className="text-center mb-16">
                    <h2 className="text-3xl font-serif italic mb-4">
                        Os Elementos da Ceia
                    </h2>
                    <p className="text-slate-500 max-w-xl mx-auto">
                        Durante a celebração utilizamos símbolos que representam o
                        sacrifício de Cristo por nós.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-16">

                    <div>
                        <Image
                            src={pa}
                            alt="pão"
                            width={600}
                            height={400}
                            className="rounded-xl mb-6 object-cover max-h-100"
                        />

                        <h3 className="font-bold text-xl mb-2">O Pão</h3>

                        <p className="text-slate-500">
                            O pão representa o corpo de Cristo que foi entregue por nós na
                            cruz. Ele nos lembra do sacrifício e do amor de Deus pela
                            humanidade.
                        </p>
                    </div>

                    <div>
                        <Image
                            src={ca}
                            alt="cálice"
                            width={600}
                            height={400}
                            className="rounded-xl mb-6 object-cover max-h-100"
                        />

                        <h3 className="font-bold text-xl mb-2">O Cálice</h3>

                        <p className="text-slate-500">
                            O cálice simboliza o sangue de Cristo derramado para perdão dos
                            pecados e a nova aliança estabelecida entre Deus e o seu povo.
                        </p>
                    </div>

                </div>
            </section>

            {/* QUEM PODE PARTICIPAR */}
            <section className="py-24 bg-slate-900 text-white">

                <div className="max-w-4xl mx-auto px-6">


                    <h2 className="text-3xl font-serif italic mb-8">
                        Quem pode participar?
                    </h2>

                    <p className="text-slate-300 leading-relaxed mb-6">
                        A participação na Santa Ceia é destinada aos cristãos que professam
                        fé em Jesus Cristo como Senhor e Salvador e que vivem em comunhão
                        com a igreja.
                    </p>

                    <p className="text-slate-400 text-sm leading-relaxed">
                        A Bíblia também nos orienta a examinar o coração antes de
                        participar, buscando reconciliação com Deus e com o próximo.
                    </p>

                </div>

            </section>

            {/* EXAME */}
            <section className="py-24 px-6 max-w-3xl mx-auto text-center">



                <h2 className="text-2xl font-serif italic mb-6">
                    Examine-se cada um a si mesmo
                </h2>

                <p className="text-slate-500 leading-relaxed mb-10">
                    A Ceia do Senhor também é um momento de reflexão espiritual,
                    arrependimento e renovação da fé.
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                    <span className="px-5 py-2 border rounded-full text-sm">
                        Fé em Cristo
                    </span>
                    <span className="px-5 py-2 border rounded-full text-sm">
                        Arrependimento
                    </span>
                    <span className="px-5 py-2 border rounded-full text-sm">
                        Comunhão
                    </span>
                    <span className="px-5 py-2 border rounded-full text-sm">
                        Gratidão
                    </span>
                </div>

            </section>

        </div>
    );
}