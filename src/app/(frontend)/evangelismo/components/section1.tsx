import { HeartHandshake, Users, Home, Church } from "lucide-react";
import { celulas } from "../../celulas/data";

const totalCelulas = celulas.length;

export default function Section1() {
    return (
        <section className="max-w-6xl mx-auto px-4 py-20">

            <div className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden">

                <div className="grid lg:grid-cols-2">

                    {/* ESQUERDA */}

                    <div className="p-8 md:p-12 ">

                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-700 border border-red-200 text-sm font-medium mb-6">
                            ✝ Igreja Evangélica IEIA Filadélfia
                        </span>

                        <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-6">
                            Uma família para caminhar com você na presença de Deus.
                        </h2>

                        <p className="text-lg text-gray-600 leading-8 mb-6">
                            Na <strong>IEIA Filadélfia</strong>, acreditamos que a Igreja
                            vai muito além das quatro paredes de um templo. Somos uma
                            comunidade que vive o Evangelho diariamente através da
                            comunhão, do discipulado e do amor ao próximo.
                        </p>

                        <p className="text-lg text-gray-600 leading-8 mb-6">
                            Independentemente da sua história, idade ou momento de vida,
                            existe um lugar preparado para você. Aqui encontrará pessoas
                            dispostas a caminhar consigo, orar, ensinar a Palavra de Deus
                            e ajudar no seu crescimento espiritual.
                        </p>

                        <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6">

                            <p className="italic text-xl text-gray-700 leading-8">
                                "Vinde a mim, todos os que estais cansados e oprimidos,
                                e eu vos aliviarei."
                            </p>

                            <span className="text-sm text-gray-500 mt-4 block">
                                Mateus 11:28
                            </span>

                        </div>

                    </div>


                    <div className="bg-linear-to-br from-red-50 via-white to-red-100 p-8 md:p-12">

                        <h3 className="text-2xl font-bold text-gray-900 mb-8">
                            Uma Igreja em Células
                        </h3>

                        <div className="space-y-8">

                            <div className="flex gap-5">

                                <div className="w-14 h-14 rounded-xl  flex items-center justify-center">
                                    <Home className="text-red-700" />
                                </div>

                                <div>

                                    <h4 className="font-semibold text-gray-900 text-lg">
                                        Encontros Semanais nos Lares
                                    </h4>

                                    <p className="text-gray-600 leading-7 mt-2">
                                        Todas as semanas as nossas células reúnem-se em
                                        diferentes bairros e casas, criando um ambiente
                                        acolhedor onde cada pessoa é conhecida pelo nome,
                                        ouvida e cuidada.
                                    </p>

                                </div>

                            </div>

                            <div className="flex gap-5">

                                <div className="w-14 h-14 rounded-xl  flex items-center justify-center">
                                    <Users className="text-red-700" />
                                </div>

                                <div>

                                    <h4 className="font-semibold text-gray-900 text-lg">
                                        Comunhão e Familiarização
                                    </h4>

                                    <p className="text-gray-600 leading-7 mt-2">
                                        Mais do que reuniões, as células são pequenas
                                        famílias espirituais onde desenvolvemos amizades
                                        verdadeiras, partilhamos experiências e crescemos
                                        juntos na fé.
                                    </p>

                                </div>

                            </div>

                            <div className="flex gap-5">

                                <div className="w-14 h-14 rounded-full flex items-center justify-center">
                                    <HeartHandshake className="text-red-700" />
                                </div>

                                <div>

                                    <h4 className="font-semibold text-gray-900 text-lg">
                                        Cuidado e Discipulado
                                    </h4>

                                    <p className="text-gray-600 leading-7 mt-2">
                                        Cada membro recebe acompanhamento espiritual,
                                        encorajamento, oração e ensino bíblico,
                                        fortalecendo o relacionamento com Deus e com a
                                        Igreja.
                                    </p>

                                </div>

                            </div>

                            <div className="flex gap-5">

                                <div className="w-14 h-14 rounded-xl  flex items-center justify-center">
                                    <Church className="text-red-700" />
                                </div>

                                <div>

                                    <h4 className="font-semibold text-gray-900 text-lg">
                                        Uma Igreja que Cresce Servindo
                                    </h4>

                                    <p className="text-gray-600 leading-7 mt-2">
                                        Acreditamos que cada cristão possui um propósito
                                        dado por Deus. Nas células descobrimos dons,
                                        desenvolvemos liderança e servimos a Deus e à
                                        sociedade com excelência.
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>


            </div>


            <div className="md:p-5 mt-8">
                <h3 className="text-xl font-light text-gray-900 mb-6 flex items-center gap-3">
                    Palavras de Vida
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <p className="text-gray-700 italic font-light">
                            "Porque todo aquele que invocar o nome do Senhor será salvo."
                        </p>
                        <p className="text-gray-500 text-sm mt-2">Romanos 10:13</p>
                        <div className="mt-3 flex items-center gap-2 text-sm text-gray-500">

                            <span>Deus está esperando por você.</span>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <p className="text-gray-700 italic font-light">
                            "Eis que estou à porta e bato; se alguém ouvir a minha voz e abrir a porta, entrarei em sua casa..."
                        </p>
                        <p className="text-gray-500 text-sm mt-2">Apocalipse 3:20</p>
                        <div className="mt-3 flex items-center gap-2 text-sm text-gray-500">

                            <span>Jesus quer um relacionamento com você.</span>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <p className="text-gray-700 italic font-light">
                            "Jesus respondeu: Eu sou o caminho, a verdade e a vida..."
                        </p>
                        <p className="text-gray-500 text-sm mt-2">João 14:6</p>
                        <div className="mt-3 flex items-center gap-2 text-sm text-gray-500">

                            <span>Encontre o caminho para a vida eterna.</span>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <p className="text-gray-700 italic font-light">
                            "Portanto ide, fazei discípulos de todas as nações..."
                        </p>
                        <p className="text-gray-500 text-sm mt-2">Mateus 28:19</p>
                        <div className="mt-3 flex items-center gap-2 text-sm text-gray-500">

                            <span>Faça parte desta missão.</span>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}