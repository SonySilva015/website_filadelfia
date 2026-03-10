import Image from "next/image"

const notice = [

    {
        img: '/img/jovensf.jpg',
        type: 'evento social',
        title: 'Dia do Amigo, vem viver este momento com os jovens.',
        desc: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dolor voluptatum aliquam modi eaque excepturi voluptates...'

    },
    {
        img: '/img/jovensf.jpg',
        type: 'evento social',
        title: 'Dia do Amigo, vem viver este momento com os jovens.',
        desc: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dolor voluptatum aliquam modi eaque excepturi voluptates...'

    },
    {
        img: '/img/jovensf.jpg',
        type: 'evento social',
        title: 'Dia do Amigo, vem viver este momento com os jovens.',
        desc: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dolor voluptatum aliquam modi eaque excepturi voluptates...'

    }
]

export default function NoticyHome() {

    return (
        <div className="w-full">
            <h1 className="mb-10 md:ml-4 pl-2 border-l-4 border-l-red-600 text-3xl text-black font-semibold mx-auto">Eventos Recentes</h1>

            {notice.map((notice, index) => (
                <div key={index} className="rounded-md shadow-2xl md:rounded-none md:shadow-none flex flex-col items-center justify-center mb-6">
                    <article className="group flex flex-col md:flex-row items-center gap-6 w-full  rounded-xl  transition-all duration-300">

                        <div className="relative w-full md:w-[50%] h-60 overflow-hidden rounded-lg">
                            <Image
                                src={notice.img}
                                alt={notice.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                sizes="(max-width: 768px) 100vw, 40vw"
                            />
                        </div>

                        <div className="flex-1 p-6 md:p-2">
                            <span className="inline-block px-3 py-1 bg-red-50 text-red-600 text-xs font-medium rounded-full mb-3">
                                Evento Social
                            </span>

                            <h2 className="text-2xl font-bold text-gray-900 mb-2">
                                {notice.title}
                            </h2>
                            <p className="text-gray-700 text-md mb-4">
                                {notice.desc}
                            </p>

                            <a
                                href="#"
                                className="inline-flex items-center gap-1 text-purple-600 font-semibold hover:text-red-700 transition-colors"
                            >
                                Ler mais
                                <span className="text-lg group-hover:translate-x-1 transition-transform duration-300">
                                    →
                                </span>
                            </a>
                        </div>
                    </article>
                </div>
            ))}

            <div className="flex justify-center items-center mt-10">
                <div className="relative inline-block p-0.5 rounded-md overflow-hidden hover:scale-105 transition duration-300 active:scale-100 before:content-[''] before:absolute before:inset-0 before:bg-[conic-gradient(from_0deg,_#00F5FF,_#00F5FF30,_#00F5FF)] button-wrapper">
                    <button className="relative z-10 bg-gray-800 text-white rounded-md px-8 py-3 font-medium text-sm">Ver Mais Notícias</button>
                </div>
            </div>
        </div>

    )
}