import type { MetadataRoute } from "next";

const siteUrl = "https://ieia-filadelfia.org/";

export default function sitemap(): MetadataRoute.Sitemap {
    const paginas = ["",
        "/sobre",
        "/nossa-crenca",
        "/eventos",
        "/noticias",
        "/juventude", "/lideranca", "/ministerios_casais", "cultos", "/evangelismo"]; // ajuste às suas rotas
    return paginas.map((rota) => ({
        url: `${siteUrl}${rota}`,
        lastModified: new Date(),
    }));
}