import React from 'react'
import Link from 'next/link'

const atalhos = [
    { titulo: 'Imagens', descricao: 'Carregar e gerir ficheiros', href: '/admin/collections/media' },
    { titulo: 'Utilizadores', descricao: 'Contas e permissões', href: '/admin/collections/users' },
    // Acrescente aqui as suas colecções, por exemplo:
    // { titulo: 'Publicações', descricao: 'Escrever e publicar artigos', href: '/admin/collections/posts' },
]

export default function BeforeDashboard() {
    return (
        <section className="dash-welcome">

            <h2 className="dash-welcome__title">Painel Administrativo</h2>
            <p className="dash-welcome__text">
                Gira publicações, imagens e utilizadores num só lugar.
            </p>

            <div className="dash-welcome__grid">
                {atalhos.map((a) => (
                    <Link key={a.href} href={a.href} className="dash-welcome__card">
                        <span className="dash-welcome__card-title">{a.titulo}</span>
                        <span className="dash-welcome__card-text">{a.descricao}</span>
                    </Link>
                ))}
            </div>
        </section>
    )
}