import Image from "next/image";
import { BookOpenCheck, CheckCircle2 } from "lucide-react";
import evangel3 from '@/public/livros/va.jpg';

export default function CursoPreBatismalSection() {
    const topicos = [
        "Conhecendo Jesus Cristo",
        "O Plano da Salvação",
        "Arrependimento e Nova Vida",
        "O Batismo nas Águas",
        "Vida de Oração",
        "Leitura e Estudo da Bíblia",
        "Comunhão com a Igreja",
        "Vivendo uma Vida Cristã",
    ];

    return (
        <section className="bg-white py-8">
            <div className="mx-auto grid max-w-7xl items-center gap-8 px-8 lg:grid-cols-2">
                {/* Imagem */}
                <div className="relative overflow-hidden rounded-3xl">
                    <Image
                        src={evangel3}
                        alt="Curso Pré-Batismal Vida Abundante"
                        width={700}
                        height={700}
                        className="h-full w-full object-cover transition duration-500 hover:scale-105"
                    />

                    <div className="absolute left-6 top-6 rounded-xl bg-blue-600 px-5 py-3 text-white shadow-lg">
                        <h3 className="text-xl font-bold">
                            Curso Pré-Batismal
                        </h3>
                    </div>
                </div>

                {/* Conteúdo */}
                <div>

                    <span className="font-semibold uppercase tracking-[5px] text-blue-600">
                        Vida Abundante
                    </span>

                    <h2 className="mt-4 text-5xl font-bold text-slate-900">
                        Curso Pré-Batismal
                    </h2>

                    <p className="mt-8 text-lg leading-8 text-slate-600">
                        O <strong>Curso Pré-Batismal – Vida Abundante</strong> é destinado
                        a todos aqueles que aceitaram Jesus Cristo como Senhor e Salvador
                        e desejam preparar-se para o batismo nas águas. Durante este
                        percurso, os participantes são discipulados nos fundamentos da fé
                        cristã, fortalecendo o relacionamento com Deus e compreendendo o
                        propósito da nova vida em Cristo.
                    </p>

                    <div className="mt-10 grid gap-4 sm:grid-cols-2">
                        {topicos.map((item) => (
                            <div
                                key={item}
                                className="flex items-center gap-3 rounded-xl bg-slate-50 p-4"
                            >
                                <CheckCircle2 className="h-6 w-6 text-green-600" />

                                <span className="font-medium text-slate-700">
                                    {item}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 rounded-2xl border-l-4 border-blue-600 bg-blue-50 p-6">
                        <div className="flex items-start gap-4">
                            <BookOpenCheck className="mt-1 h-8 w-8 text-blue-700" />

                            <div>
                                <h4 className="text-xl font-bold text-slate-900">
                                    Objectivo
                                </h4>

                                <p className="mt-2 leading-7 text-slate-700">
                                    Formar discípulos comprometidos com Cristo, preparados para
                                    testemunhar a sua fé, integrar-se na igreja local e viver uma
                                    vida abundante segundo os ensinamentos da Palavra de Deus.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10">
                        <blockquote className="border-l-4 border-blue-600 pl-5 text-lg italic text-slate-700">
                            "O ladrão não vem senão a roubar, a matar e a destruir; eu vim
                            para que tenham vida e a tenham em abundância."
                        </blockquote>

                        <p className="mt-3 font-semibold text-blue-700">
                            João 10:10
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}