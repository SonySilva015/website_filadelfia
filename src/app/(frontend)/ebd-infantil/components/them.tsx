import { BookOpen, Calendar, Star, Target, Download } from 'lucide-react'



const temaDoMes = {
    titulo: "Heróis da Fé",
    mes: "Julho",
    ano: "2026",
    versiculo: "Pela fé, os heróis venceram reinos, praticaram justiça e alcançaram promessas.",
    referencia: "Hebreus 11:33-34",
    atividades: [
        { dia: "05", nome: "Abertura do Mês", desc: "Apresentação especial com todos os alunos" },
        { dia: "12", nome: "Gincana Bíblica", desc: "Competição com perguntas sobre os heróis" },
        { dia: "19", nome: "Cine Kids", desc: "Exibição do filme 'A História de Davi'" },
        { dia: "26", nome: "Encerramento", desc: "Coral infantil e premiação dos participantes" }
    ],
    recursos: [
        "Cartilha dos Heróis da Fé",
        "Playlist de louvor infantil",
        "Kit de atividades para colorir",
        "Guia do professor com 4 aulas prontas",
        "Fantoches para dramatização"
    ],
    destaque: {
        nome: "Davi e Golias",
        resumo: "Neste mês, as crianças aprenderão sobre a coragem e a fé do jovem Davi ao enfrentar o gigante Golias."
    }
};





export default function Them() {

    return (
        <>
            <section className="py-20 px-6 bg-slate-50 border-y border-slate-200">
                <div className="max-w-7xl mx-auto">
                    {/* Cabeçalho */}
                    <div className="text-center mb-14">
                        <div className="inline-flex items-center gap-3 bg-white px-6 py-2 rounded-full shadow-sm border border-slate-200 mb-6">
                            <Calendar size={20} className="text-slate-600" />
                            <span className="text-slate-700 font-bold uppercase tracking-wider text-sm">
                                {temaDoMes.mes} / {temaDoMes.ano}
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-4">
                            Tema do <span className="text-slate-600">Mês</span>
                        </h2>
                        <p className="text-3xl md:text-5xl font-bold text-slate-800 mb-4">
                            {temaDoMes.titulo}
                        </p>
                        <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl border border-slate-200 shadow-sm mt-4">
                            <span className="text-xl text-slate-600 font-light italic">"{temaDoMes.versiculo}"</span>
                            <p className="text-slate-500 font-bold text-sm mt-2">— {temaDoMes.referencia}</p>
                        </div>
                    </div>

                    {/* Grid: Destaque + Atividades */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Destaque do Herói */}
                        <div className="lg:col-span-2 bg-white rounded-2xl overflow-hidden shadow-md border border-slate-200">
                            <div className="h-48 bg-slate-800 flex items-center justify-center">
                                <div className="text-center text-white p-6">
                                    <Star size={48} className="mx-auto mb-3 text-slate-300" />
                                    <h3 className="text-3xl font-black">🌟 {temaDoMes.destaque.nome}</h3>
                                    <p className="text-lg font-light mt-2 max-w-lg mx-auto text-slate-300">
                                        {temaDoMes.destaque.resumo}
                                    </p>
                                </div>
                            </div>
                            <div className="p-6">
                                <h4 className="font-bold text-slate-700 mb-4 flex items-center gap-2">
                                    <Target size={20} className="text-slate-600" />
                                    Atividades do Mês
                                </h4>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                    {temaDoMes.atividades.map((atividade, i) => (
                                        <div key={i} className="bg-slate-50 rounded-xl p-4 text-center border border-slate-200 hover:shadow-sm transition-shadow">
                                            <span className="text-2xl font-black text-slate-700 block">{atividade.dia}</span>
                                            <p className="text-sm font-bold text-slate-700 leading-tight">{atividade.nome}</p>
                                            <p className="text-xs text-slate-500 mt-1">{atividade.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Recursos / Materiais */}
                        <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-200 lg:col-span-1">
                            <h4 className="font-bold text-slate-700 mb-4 flex items-center gap-2">
                                <BookOpen size={20} className="text-slate-600" />
                                Recursos Disponíveis
                            </h4>
                            <ul className="space-y-3">
                                {temaDoMes.recursos.map((recurso, i) => (
                                    <li key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200 hover:bg-slate-100 transition-colors">
                                        <span className="text-slate-400">📄</span>
                                        <span className="text-sm text-slate-700 font-medium">{recurso}</span>
                                    </li>
                                ))}
                            </ul>
                            <button className="w-full mt-6 px-6 py-3 bg-slate-800 hover:bg-slate-900 text-white font-bold rounded-xl transition-all shadow-md flex items-center justify-center gap-2">
                                <Download size={18} />
                                Baixar Materiais
                            </button>
                        </div>
                    </div>

                    {/* Versículo em destaque */}
                    <div className="mt-12 text-center bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
                        <div className="inline-block bg-slate-100 rounded-full px-4 py-2 mb-3">
                            <span className="text-slate-600 font-bold text-sm uppercase tracking-wider">📖 Versículo do Mês</span>
                        </div>
                        <p className="text-2xl md:text-3xl font-semibold text-slate-800 max-w-3xl mx-auto leading-relaxed">
                            “Pela fé, os heróis venceram reinos, praticaram justiça e alcançaram promessas.”
                        </p>
                        <p className="text-slate-500 font-bold mt-2">Hebreus 11:33-34</p>
                    </div>
                </div>
            </section>

        </>
    )
}