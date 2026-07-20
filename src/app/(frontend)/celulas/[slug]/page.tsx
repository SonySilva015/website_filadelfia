
import { GetCelulaBySlug } from '@/collections/celulas/fetcher';
import Error from '@/components/error';
import Hero from './components/hero';
import Sobre from './components/sobre';
import Lider from './components/lider';
import Sidebar from './components/sidebar';


export default async function CelulaDetalhePage({ params }: { params: Promise<{ slug: string }> }) {
    const slug = await params;

    if (!slug) {
        return <Error />;
    }


    const celula = await GetCelulaBySlug(slug.slug);
    console.log('Celula:', celula);

    if (!celula) {
        return <Error />;
    }

    const capaUrl =
        typeof celula.capa === "object" &&
            celula.capa !== null &&
            "url" in celula.capa
            ? celula.capa.url
            : "/placeholder.jpg";
    const fotoUrl =
        celula.lider &&
            typeof celula.lider.foto === "object" &&
            celula.lider.foto !== null &&
            "url" in celula.lider.foto
            ? celula.lider.foto.url
            : "/placeholder-user.jpg";

    return (
        <div className="min-h-screen bg-tertiary font-sans">
            <Hero
                nome={celula.nome}
                descricao={celula.descricao}
                membros={celula.membros}
                horarios={celula.horarios}
                capaUrl={capaUrl}
            />

            <section className="py-16 px-6 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-8">
                        <Sobre
                            conteudo={celula.conteudo}
                            horarios={celula.horarios}
                            local={celula.local}
                        />

                        {celula.lider && (
                            <Lider
                                fotoUrl={fotoUrl}
                                nome={celula.lider.nome}
                                numero={celula.lider.numero}
                            />
                        )}
                    </div>

                    <div className="space-y-6">
                        <Sidebar
                            nome={celula.nome}
                            membros={celula.membros}
                            horarios={celula.horarios}
                            liderNome={celula.lider?.nome}
                            numero={celula.lider?.numero}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}