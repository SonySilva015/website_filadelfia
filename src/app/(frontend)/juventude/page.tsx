import Image from "next/image";
import {
    Users,
    Heart,
    Trophy,
    Footprints,
    Tent,
    DoorOpen,
    Handshake,
    Calendar,
    Target,
    BookOpen,
} from "lucide-react";
import Hero from "./hero";
import fundo from '@/public/adora/jovens.png'
import jogo from '@/public/img/jogo.png'
import retira from '@/public/img/retirada.png'
import eva from '@/public/img/evangelho3.png'
import cam from '@/public/img/caminhada.png'
import jv from '@/public/img/jovensf.jpg'

export default function JuventudePage() {

    const atividades = [
        {
            titulo: "Cultos da Juventude",
            imagem: fundo,
            icon: Users,
            descricao:
                "Momentos de adoração, oração, louvor e ensino da Palavra de Deus para fortalecer a fé dos jovens.",
        },
        {
            titulo: "Futebol & Evangelho",
            imagem: jogo,
            icon: Trophy,
            descricao:
                "Unimos o desporto ao Evangelho, promovendo partidas acompanhadas por oração, reflexão bíblica e comunhão.",
        },

        {
            titulo: "Retiros dos Jovens",
            imagem: retira,
            icon: Tent,
            descricao:
                "Dias especiais de oração, louvor, estudos bíblicos e comunhão para renovar a vida espiritual.",
        },
        {
            titulo: "Caminhadas",
            imagem: cam,
            icon: Footprints,
            descricao:
                "Passeios e caminhadas com momentos de oração, louvor e evangelização nas comunidades.",
        },
        {
            titulo: "Evangelismo",
            imagem: eva,
            icon: DoorOpen,
            descricao:
                "Levamos a mensagem de Jesus Cristo através de visitas, evangelismo porta a porta e actividades comunitárias.",
        },
    ];

    return (
        <main>

            <Hero />

            {/* SOBRE */}

            <section className="py-24 bg-white">

                <div className="max-w-6xl mx-auto px-6">

                    <div className="text-center max-w-4xl mx-auto">

                        <h2 className="text-5xl font-bold mb-8">
                            Jovens Transformados para Transformar vidas
                        </h2>

                        <p className="text-lg text-gray-600 leading-8">
                            A Juventude da Igreja Filadélfia existe para
                            formar uma geração comprometida com Jesus Cristo,
                            desenvolvendo jovens através da Palavra de Deus,
                            comunhão, discipulado, evangelismo e serviço.
                        </p>

                    </div>

                </div>

            </section>



            <section
                className="relative bg-fixed bg-center bg-cover py-32"
                style={{
                    backgroundImage: `url(${fundo.src})`,
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-slate-950/85" />

                <div className="relative max-w-7xl mx-auto ">

                    <div className="text-center text-white max-w-5xl mx-auto mb-20">

                        <h2 className="mt-4 text-5xl lg:text-6xl font-bold leading-tight">
                            Ande connosco
                        </h2>

                        <p className="mt-8 text-xl text-slate-200 leading-9">
                            A verdadeira transformação começa quando um jovem entrega a sua vida a
                            Jesus Cristo. Renovados pela Palavra de Deus e guiados pelo Espírito
                            Santo, somos chamados a viver uma fé autêntica e a levar essa mesma
                            esperança a outros jovens, sendo sal da terra e luz do mundo.
                        </p>

                    </div>

                    <div className="grid gap-8 lg:grid-cols-3">

                        <div className="rounded-3xl border border-white/20 bg-white/10 p-10 backdrop-blur-md">


                            <h3 className="mb-4 text-2xl font-bold text-white">
                                Transformados pela Palavra
                            </h3>

                            <p className="leading-8 text-slate-200">
                                Através dos cultos, oração, discipulado e estudos bíblicos, crescemos
                                diariamente para viver uma vida que honra a Deus.
                            </p>
                        </div>

                        <div className="rounded-3xl border border-white/20 bg-white/10 p-10 backdrop-blur-md">

                            <h3 className="mb-4 text-2xl font-bold text-white">
                                Transformando Jovens
                            </h3>

                            <p className="leading-8 text-slate-200">
                                O nosso testemunho alcança outros através do evangelismo, desporto,
                                retiros, caminhadas e acções sociais, mostrando o amor de Cristo na
                                prática.
                            </p>
                        </div>

                        <div className="rounded-3xl border border-white/20 bg-white/10 p-10 backdrop-blur-md">


                            <h3 className="mb-4 text-2xl font-bold text-white">
                                Impactando uma Geração
                            </h3>

                            <p className="leading-8 text-slate-200">
                                Queremos formar líderes cristãos que influenciem positivamente as
                                suas famílias, escolas, universidades e comunidades para a glória de
                                Deus.
                            </p>
                        </div>

                    </div>

                    <div className="mx-auto mt-20 max-w-4xl text-center">

                        <blockquote className="text-2xl italic text-white">
                            "E não vos conformeis com este mundo, mas transformai-vos pela renovação
                            da vossa mente..."
                        </blockquote>

                        <p className="mt-4 text-lg font-semibold text-blue-300">
                            Romanos 12:2
                        </p>

                    </div>

                </div>
            </section>


            {/* ACTIVIDADES */}

            <section className="py-24">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center mb-16">

                        <h2 className="text-5xl font-bold">
                            Nossas Actividades
                        </h2>

                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

                        {atividades.map((item, index) => {

                            const Icon = item.icon;

                            return (

                                <div
                                    key={index}
                                    className="bg-white rounded-3xl shadow overflow-hidden hover:shadow-xl duration-300"
                                >

                                    <div className="relative h-60">

                                        <Image
                                            src={item.imagem}
                                            alt=""
                                            fill
                                            className="object-cover"
                                        />

                                    </div>

                                    <div className="p-8">

                                        <Icon className="w-10 h-10 text-blue-700 mb-4" />

                                        <h3 className="text-2xl font-bold mb-4">
                                            {item.titulo}
                                        </h3>

                                        <p className="text-gray-600 leading-7">
                                            {item.descricao}
                                        </p>

                                    </div>

                                </div>

                            );

                        })}

                    </div>

                </div>

            </section>


            {/* COMUNHÃO */}

            <section className="py-24 bg-white">

                <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto px-6 items-center">

                    <Image
                        src={jv}
                        width={600}
                        height={500}
                        alt=""
                        className="rounded-3xl"
                    />

                    <div>

                        <Handshake className="w-14 h-14 text-blue-600 mb-6" />

                        <h2 className="text-5xl font-bold mb-6">
                            Comunhão que Transforma
                        </h2>

                        <p className="text-lg text-gray-600 leading-8">
                            Acreditamos que ninguém cresce sozinho.
                            Vivemos em comunhão através dos cultos,
                            retiros, caminhadas, evangelismo,
                            actividades desportivas e momentos de lazer,
                            formando uma verdadeira família em Cristo.
                        </p>

                    </div>

                </div>

            </section>

            {/* COORDENAÇÃO */}

            <section className="bg-slate-900 text-white py-24">

                <div className="text-center max-w-4xl mx-auto px-6">

                    <Users className="mx-auto w-20 h-20 text-blue-400" />

                    <h2 className="text-5xl font-bold mt-8">
                        Coordenação
                    </h2>

                    <h3 className="text-3xl mt-6 text-blue-400">
                        Fernando Malichi
                    </h3>

                    <p className="mt-8 text-slate-300 leading-8">
                        A liderança da Juventude Filadélfia trabalha para
                        desenvolver uma geração apaixonada por Cristo,
                        comprometida com a Palavra de Deus,
                        preparada para servir à igreja e impactar a sociedade.
                    </p>

                </div>

            </section>



            <section className="py-24 bg-slate-600 text-white text-center">

                <h2 className="text-5xl font-bold">
                    Faça Parte Desta Geração
                </h2>

                <p className="text-xl mt-8 max-w-3xl mx-auto">

                    participar das nossas actividades e viver o propósito
                    que Deus preparou para a sua vida.
                </p>
            </section>

        </main>
    );
}