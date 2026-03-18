import Not from '@/components/notice/noticias'
import Destaque from '@/components/notice/destaque'



export default function Notice() {
    return (
        <section>

            <div className="relative h-60 flex items-center justify-center overflow-hidden bg-linear-to-t from-slate-950 to-slate-800">


                <div className="relative z-10 text-white px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                        Home / Notícias
                    </h1>
                    <p className="text-lg sm:text-xl max-w-2xl mx-auto">
                        veja aqui as notícias
                    </p>
                </div>
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <svg className="w-6 h-6 text-white mx-auto" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor" >
                        <path d="M19 14l-7 7-7-7"></path>
                    </svg>
                </div>
            </div>
            <Destaque />
            <Not />
        </section>
    )
}