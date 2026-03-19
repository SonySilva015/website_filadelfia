
import Sobre from '@/components/sobre/sobre'
import fundo from '@/public/img/IMG-20250831-WA0043.jpg'

export const metadata = {
    title: "Sobre a Igreja Filadélfia ",
    description: "Saiba mais sobre nossa missão, visão e valores.",
    keywords: ["Igreja", "IEIA", "Filadélfia", "Angola"],
    authors: [{ name: "IEIA Filadélfia" }],
    openGraph: {
        title: "Filadélfia IEIA",
        description: "Transformando vidas pelo Evangelho",
        images: fundo,
        url: "https://ieiafiladelfia.vercel.app/",
        type: "website",
    },
};

export default function SobreFiladelfia() {
    return (
        <div>
            <Sobre />
        </div>

    )
}