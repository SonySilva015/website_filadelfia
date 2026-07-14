import { GetLideres } from "@/collections/lideres/fetcher";

import Hero from "./components/hero";
import LeadersSection from "./components/leaderSection";

export default async function LiderancaPage() {
    const lideres = (await GetLideres()) ?? [];

    const presbiteros = lideres.filter(
        (lider: any) => lider.cargo === "presbitero"
    );

    const diaconos = lideres.filter(
        (lider: any) => lider.cargo === "diacono"
    );

    const departamentos = lideres.filter(
        (lider: any) => lider.cargo === "departamento"
    );

    return (
        <main className="min-h-screen bg-white text-slate-900">

            <Hero />

            {lideres.length === 0 ? (
                <section className="py-24">
                    <div className="max-w-3xl mx-auto px-6 text-center">
                        <h2 className="text-3xl font-bold text-slate-800">
                            Nenhum líder cadastrado
                        </h2>

                        <p className="mt-4 text-slate-600">
                            Ainda não existem líderes cadastrados no sistema.
                        </p>
                    </div>
                </section>
            ) : (
                <>
                    <LeadersSection
                        subtitle="Presbitério"
                        title="Presbíteros"
                        description="Homens chamados para apoiar o pastoreio e cuidar das necessidades espirituais da igreja."
                        lideres={presbiteros}
                        background="bg-purple-50/50"
                        columns="lg:grid-cols-3"
                    />

                    <LeadersSection
                        subtitle="Diaconia"
                        title="Diáconos"
                        description="Servos dedicados ao auxílio prático e cuidado das necessidades da igreja."
                        lideres={diaconos}
                        background="bg-white"
                        columns="lg:grid-cols-2"
                    />

                    <LeadersSection
                        subtitle="Departamentos"
                        title="Líderes de Departamentos"
                        description="Pessoas dedicadas a liderar áreas específicas do trabalho da igreja."
                        lideres={departamentos}
                        background="bg-purple-50/50"
                        columns="lg:grid-cols-2"
                    />
                </>
            )}

        </main>
    );
}