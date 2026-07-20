import Image from 'next/image'
import { Clock, Phone, UserCircle2, School, Users, Mail } from 'lucide-react'

interface Props {
    turmas: any[]
}

export default function Turmas({ turmas }: Props) {
    // Verifica se não há turmas
    if (!turmas || turmas.length === 0) {
        return (
            <section className="py-20 px-6 bg-slate-50 border-y border-slate-200">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold">
                            Nossas <span className="text-primary">Turmas</span>
                        </h2>
                        <p className="text-slate-600 mt-4">
                            Conheça nossas classes da Escola Bíblica Dominical.
                        </p>
                    </div>

                    <div className="flex flex-col items-center justify-center py-16 px-4 bg-white rounded-2xl shadow-lg">
                        <School size={64} className="text-primary/40 mb-4" />
                        <h3 className="text-2xl font-semibold text-slate-700 mb-2">
                            Nenhuma turma disponível no momento
                        </h3>
                        <p className="text-slate-500 text-center max-w-md">
                            Estamos organizando novas turmas para você.
                            Volte em breve para conferir as novidades!
                        </p>
                    </div>
                </div>
            </section>
        )
    }

    // Extrai professores únicos das turmas
    const professores = turmas.reduce((acc: any[], turma) => {
        if (turma.professor && !acc.find(p => p.nome === turma.professor)) {
            acc.push({
                nome: turma.professor,
                foto: turma.fotoProfessor,
                contacto: turma.contacto,
                email: turma.email || '',
                turma: turma.nome,
                anos: turma.anos
            })
        }
        return acc
    }, [])

    return (
        <>
            {/* Seção de Turmas */}
            <section className="py-20 px-6 bg-slate-50 border-y border-slate-200">
                <div className="max-w-7xl mx-auto">

                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold">
                            Nossas <span className="text-primary">Turmas</span>
                        </h2>

                        <p className="text-slate-600 mt-4">
                            Conheça nossas classes da Escola Bíblica Dominical.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                        {turmas.map((turma) => (
                            <div
                                key={turma.id}
                                className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-primary hover:shadow-xl transition-shadow duration-300"
                            >
                                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold">
                                    {turma.anos}
                                </span>

                                <h3 className="text-2xl font-bold mt-4">
                                    {turma.nome}
                                </h3>

                                <p className="text-slate-600 mt-3">
                                    {turma.descricao}
                                </p>

                                <div className="mt-6 flex items-center gap-3">

                                    <div className="w-14 h-14 rounded-full overflow-hidden bg-slate-200">

                                        {turma.fotoProfessor?.url ? (
                                            <Image
                                                src={turma.fotoProfessor.url}
                                                alt={turma.professor}
                                                width={56}
                                                height={56}
                                                className="object-cover w-full h-full"
                                            />
                                        ) : (
                                            <div className="flex items-center justify-center w-full h-full">
                                                <UserCircle2 size={30} />
                                            </div>
                                        )}

                                    </div>

                                    <div>
                                        <p className="font-semibold">
                                            {turma.professor}
                                        </p>

                                        <div className="flex items-center gap-1 text-sm text-slate-500">
                                            <Phone size={14} />
                                            {turma.contacto}
                                        </div>
                                    </div>

                                </div>

                                <div className="mt-5 pt-4 border-t flex items-center gap-2">
                                    <Clock size={16} className="text-primary" />
                                    <span>{turma.horario}</span>
                                </div>

                            </div>
                        ))}

                    </div>

                </div>
            </section>

        </>
    )
}