import Link from "next/link";
export default function Action() {

    return (
        <>
           

            <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="text-center bg-gray-50 p-8 rounded-2xl border border-gray-200">

                    <h4 className="text-2xl font-light text-gray-900 mb-3">
                        🕊️ Não deixe para amanhã a decisão mais importante da sua vida.
                    </h4>

                    <p className="text-gray-500 font-light mb-4">
                        "Hoje, se ouvirdes a sua voz, não endureçais os vossos corações." <br />
                        <span className="text-gray-600">Hebreus 3:15</span>
                    </p>

                    <Link href={`https://wa.me/${934028046}`} className="mt-10 bg-gray-800 text-white px-10 py-3 rounded-full font-medium hover:bg-gray-700 transition">
                        Quero conhecer Jesus
                    </Link>

                </div>
            </div>
        </>
    );
}