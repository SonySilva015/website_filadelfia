import { GetLideres } from "@/collections/lideres/fetcher";
import Hero from "./Hero";
import TeamCard from "./TeamCard";
import SectionHeader from "./SectionHeader";

export default async function LiderancaPage() {
    const lideres = await GetLideres();

    const presbiteros = lideres.filter(l => l.cargo === "presbitero");
    const diaconos = lideres.filter(l => l.cargo === "diacono");
    const departamentos = lideres.filter(l => l.cargo === "departamento");

    return (
        <>
            <Hero />

            <section>
                <SectionHeader
                    subtitle="Presbitério"
                    title="Presbíteros"
                    description="Homens chamados para apoiar o pastoreio."
                />

                <div className="grid lg:grid-cols-3 gap-8">
                    {presbiteros.map((lider, index) => (
                        <TeamCard
                            key={lider.id}
                            lider={lider}
                            index={index}
                        />
                    ))}
                </div>
            </section>

            {/* Demais seções */}
        </>
    );
}