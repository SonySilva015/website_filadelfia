import Link from "next/link"

async function getNoticias() {
  try {
    const res = await fetch("http://localhost:3000/api/noticias?limit=10", {
      cache: "no-store",
    })

    if (!res.ok) {
      console.error("Erro ao buscar notícias:", res.statusText)
      return []
    }

    const data = await res.json()

    // verifica se data.docs existe
    return data?.docs || []
  } catch (err) {
    console.error("Erro na requisição:", err)
    return []
  }
}

export default async function NoticiasPage() {
  const noticias = await getNoticias()

  return (
    <div className="container py-10">

      <h1 className="text-3xl font-bold mb-8">
        Notícias
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {noticias.map((noticia: any) => (
          <Link
            key={noticia.id}
            href={`/noticias/${noticia.id}`}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:shadow-xl transition"
          >

            <h2 className="text-xl text-white font-semibold mb-2">
              {noticia.titulo}
            </h2>

            <p className="text-gray-400 text-sm">
              {noticia.descricao}
            </p>

          </Link>
        ))}

      </div>

    </div>
  )
}