

export interface Celula {
    id: string;
    slug: string;
    nome: string;
    desc: string;
    descLonga: string;
    descCompleta: string;
    horario: string;
    imagemCapa: string;
    imagemPerfil: string;
    local: string;
    tag: string;
    lider: string;
    contato: string;
    numeroMembros: number;
    idade: string;
    genero: string;
    fundacao: string;
    objetivos: string[];
    programacao: {
        dia: string;
        horario: string;
        atividade: string;
    }[];
    galeria: {
        url: string;
        titulo: string;
    }[];
}

export const celulas: Celula[] = [
    {
        id: "1",
        slug: "mensagem-divina",
        nome: "Mensagem Divina",
        desc: "Estudo profundo da Palavra e revelação divina para os dias atuais.",
        descLonga: "Uma célula dedicada ao estudo aprofundado das Escrituras e à busca por revelação divina para os desafios contemporâneos.",
        descCompleta: "Mensagem Divina é um grupo comprometido com o estudo sistemático e profundo da Bíblia. Buscamos não apenas conhecimento intelectual, mas revelação espiritual que transforma vidas. Através de métodos indutivos de estudo, discussões em grupo e aplicação prática, mergulhamos nas Escrituras para extrair princípios eternos que respondem às questões do nosso tempo.",
        horario: "Terças-feiras, 19h30",
        imagemCapa: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&q=80&w=2000",
        imagemPerfil: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&q=80&w=400",
        local: "Sala 304 - Prédio Principal",
        tag: "Estudo Bíblico",
        lider: "Pr. Samuel Oliveira",
        contato: "+244 923 111 222",
        numeroMembros: 28,
        idade: "25-45 anos",
        genero: "Misto",
        fundacao: "2019",
        objetivos: [
            "Aprofundar o conhecimento das Escrituras",
            "Buscar revelação divina para os dias atuais",
            "Desenvolver capacidade de ensino bíblico",
            "Aplicar a Palavra à vida prática"
        ],
        programacao: [
            { dia: "Terça", horario: "19:30", atividade: "Oração e louvor" },
            { dia: "Terça", horario: "20:00", atividade: "Estudo bíblico expositivo" },
            { dia: "Terça", horario: "21:00", atividade: "Discussão em grupos" },
            { dia: "Terça", horario: "21:30", atividade: "Compartilhamento e encerramento" }
        ],
        galeria: [
            { url: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&q=80&w=800", titulo: "Estudo em grupo" },
            { url: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&q=80&w=800", titulo: "Momento de oração" },
            { url: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=800", titulo: "Confraternização" },
            { url: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800", titulo: "Louvor" }
        ]
    },
    {
        id: "2",
        slug: "geracao-eleita",
        nome: "Geração Eleita",
        desc: "Jovens escolhidos para fazer a diferença em sua geração.",
        descLonga: "Uma célula vibrante de jovens que buscam viver um propósito divino e impactar sua geração.",
        descCompleta: "Geração Eleita reúne jovens que entendem seu chamado para fazer a diferença. Em um ambiente descontraído mas profundo, abordamos temas relevantes para a juventude como identidade, propósito, relacionamentos e carreira, sempre à luz da Bíblia. Nossos encontros combinam louvor contemporâneo, ensino relevante e momentos de comunhão que criam laços fortes.",
        horario: "Sextas-feiras, 20h",
        imagemCapa: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=2000",
        imagemPerfil: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=400",
        local: "Auditório Jovem",
        tag: "Juventude",
        lider: "Diácono Marcos Paulo",
        contato: "+244 923 222 333",
        numeroMembros: 42,
        idade: "15-25 anos",
        genero: "Misto",
        fundacao: "2020",
        objetivos: [
            "Desenvolver identidade cristã na juventude",
            "Preparar líderes para a próxima geração",
            "Criar amizades saudáveis e duradouras",
            "Impactar a sociedade com o evangelho"
        ],
        programacao: [
            { dia: "Sexta", horario: "20:00", atividade: "Louvor vibrante" },
            { dia: "Sexta", horario: "20:45", atividade: "Palestra interativa" },
            { dia: "Sexta", horario: "21:30", atividade: "Dinâmicas de grupo" },
            { dia: "Sexta", horario: "22:15", atividade: "Lanche e comunhão" }
        ],
        galeria: [
            { url: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800", titulo: "Louvor jovem" },
            { url: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800", titulo: "Encontro de jovens" },
            { url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800", titulo: "Debate" },
            { url: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&q=80&w=800", titulo: "Confraternização" }
        ]
    },
    {
        id: "3",
        slug: "discipulo-de-esperanca",
        nome: "Discípulo de Esperança",
        desc: "Discipulado intencional para crescimento espiritual consistente.",
        descLonga: "Focados no discipulado individual e no fortalecimento da fé através do acompanhamento personalizado.",
        descCompleta: "Discípulo de Esperança é uma célula dedicada ao discipulado intencional. Acreditamos que o crescimento espiritual consistente acontece através de relacionamento próximo e acompanhamento personalizado. Cada membro é acolhido em pequenos grupos onde pode compartilhar desafios, receber orientação e crescer na fé com o suporte de irmãos mais experientes.",
        horario: "Quartas-feiras, 19h",
        imagemCapa: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&q=80&w=2000",
        imagemPerfil: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&q=80&w=400",
        local: "Sala 105 - Anexo",
        tag: "Discipulado",
        lider: "Pb. Ricardo Mendes",
        contato: "+244 923 333 444",
        numeroMembros: 23,
        idade: "30-60 anos",
        genero: "Misto",
        fundacao: "2018",
        objetivos: [
            "Fortalecer a caminhada cristã individual",
            "Formar discípulos que fazem discípulos",
            "Oferecer suporte emocional e espiritual",
            "Desenvolver maturidade cristã"
        ],
        programacao: [
            { dia: "Quarta", horario: "19:00", atividade: "Oração e acolhimento" },
            { dia: "Quarta", horario: "19:30", atividade: "Estudo de discipulado" },
            { dia: "Quarta", horario: "20:30", atividade: "Mentoria em duplas" },
            { dia: "Quarta", horario: "21:15", atividade: "Compartilhamento" }
        ],
        galeria: [
            { url: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&q=80&w=800", titulo: "Mentoria" },
            { url: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&q=80&w=800", titulo: "Estudo em grupo" },
            { url: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800", titulo: "Comunhão" },
            { url: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=800", titulo: "Momento de oração" }
        ]
    },
    {
        id: "4",
        slug: "manancial-de-amor",
        nome: "Manancial de Amor",
        desc: "Casais construindo lares segundo o coração de Deus.",
        descLonga: "Espaço acolhedor para casais que desejam fortalecer seu relacionamento à luz da Bíblia.",
        descCompleta: "Manancial de Amor é o grupo ideal para casais que buscam construir um lar segundo os princípios divinos. Através de encontros que abordam comunicação, finanças, educação de filhos e intimidade conjugal, oferecemos ferramentas práticas para um casamento saudável e duradouro. Nossos encontros são acolhedores e proporcionam troca de experiências entre casais em diferentes estágios da vida.",
        horario: "Sábados, 19h",
        imagemCapa: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&q=80&w=2000",
        imagemPerfil: "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&q=80&w=400",
        local: "Sala Casais - 2º Andar",
        tag: "Casais",
        lider: "Pr. Antônio e Ana Cristina",
        contato: "+244 923 444 555",
        numeroMembros: 18,
        idade: "25-50 anos",
        genero: "Casais",
        fundacao: "2017",
        objetivos: [
            "Fortalecer relacionamentos conjugais",
            "Orientar sobre criação de filhos",
            "Desenvolver comunicação saudável",
            "Construir lares que honram a Deus"
        ],
        programacao: [
            { dia: "Sábado", horario: "19:00", atividade: "Acolhimento e café" },
            { dia: "Sábado", horario: "19:30", atividade: "Tema sobre casamento" },
            { dia: "Sábado", horario: "20:30", atividade: "Dinâmica de casais" },
            { dia: "Sábado", horario: "21:15", atividade: "Confraternização" }
        ],
        galeria: [
            { url: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&q=80&w=800", titulo: "Encontro de casais" },
            { url: "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&q=80&w=800", titulo: "Palestra" },
            { url: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800", titulo: "Dinâmica" },
            { url: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800", titulo: "Confraternização" }
        ]
    },
    {
        id: "5",
        slug: "berianos",
        nome: "Berianos",
        desc: "Examinando as Escrituras diariamente com coração nobre.",
        descLonga: "Inspirados nos bereanos de Atos, que examinavam as Escrituras todos os dias.",
        descCompleta: "O grupo Berianos é inspirado nos cristãos de Bereia (Atos 17:11), que recebiam a palavra com toda avidez, examinando as Escrituras diariamente para conferir se as coisas eram de fato assim. Nosso foco é o estudo meticuloso da Bíblia, com ênfase na exegese e no contexto histórico-cultural. Cada encontro é uma oportunidade de mergulhar nas Escrituras com rigor e devoção.",
        horario: "Quintas-feiras, 19h30",
        imagemCapa: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&q=80&w=2000",
        imagemPerfil: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&q=80&w=400",
        local: "Biblioteca da Igreja",
        tag: "Exegese",
        lider: "Pb. Lucas Ferreira",
        contato: "+244 923 555 666",
        numeroMembros: 21,
        idade: "35+ anos",
        genero: "Misto",
        fundacao: "2016",
        objetivos: [
            "Estudar a Bíblia em profundidade",
            "Compreender o contexto histórico das Escrituras",
            "Desenvolver habilidades de interpretação bíblica",
            "Aplicar corretamente a Palavra"
        ],
        programacao: [
            { dia: "Quinta", horario: "19:30", atividade: "Oração inicial" },
            { dia: "Quinta", horario: "20:00", atividade: "Estudo exegético" },
            { dia: "Quinta", horario: "21:00", atividade: "Debate e perguntas" },
            { dia: "Quinta", horario: "21:45", atividade: "Encerramento" }
        ],
        galeria: [
            { url: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&q=80&w=800", titulo: "Estudo" },
            { url: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&q=80&w=800", titulo: "Debate" },
            { url: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=800", titulo: "Pesquisa" },
            { url: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800", titulo: "Comunhão" }
        ]
    },
    {
        id: "6",
        slug: "joias-de-cristo",
        nome: "Joias de Cristo",
        desc: "Mulheres que brilham com a beleza interior que vem de Deus.",
        descLonga: "Grupo exclusivo para mulheres que desejam crescer espiritualmente e desenvolver sua identidade em Cristo.",
        descCompleta: "Joias de Cristo é um espaço especial para mulheres de todas as idades que desejam brilhar com a beleza interior que vem de Deus. Nossos encontros abordam temas como autoestima, identidade, relacionamentos, família e propósito, sempre à luz da Palavra. É um ambiente de acolhimento, amizade e crescimento onde cada mulher é valorizada como preciosa aos olhos de Deus.",
        horario: "Segundas-feiras, 15h",
        imagemCapa: "https://images.unsplash.com/photo-1529333320936-e2193f4e3b32?auto=format&fit=crop&q=80&w=2000",
        imagemPerfil: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=400",
        local: "Sala Feminina",
        tag: "Feminino",
        lider: "Irmã Elisa Santos",
        contato: "+244 923 666 777",
        numeroMembros: 35,
        idade: "18-70 anos",
        genero: "Feminino",
        fundacao: "2015",
        objetivos: [
            "Fortalecer a identidade feminina em Cristo",
            "Desenvolver relacionamentos saudáveis",
            "Abordar temas relevantes para a mulher",
            "Capacitar para liderança feminina"
        ],
        programacao: [
            { dia: "Segunda", horario: "15:00", atividade: "Café da tarde" },
            { dia: "Segunda", horario: "15:30", atividade: "Palestra temática" },
            { dia: "Segunda", horario: "16:30", atividade: "Compartilhamento" },
            { dia: "Segunda", horario: "17:15", atividade: "Oração e encerramento" }
        ],
        galeria: [
            { url: "https://images.unsplash.com/photo-1529333320936-e2193f4e3b32?auto=format&fit=crop&q=80&w=800", titulo: "Encontro de mulheres" },
            { url: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800", titulo: "Palestra" },
            { url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800", titulo: "Momento de oração" },
            { url: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800", titulo: "Confraternização" }
        ]
    },
    {
        id: "7",
        slug: "nova-alianca",
        nome: "Nova Aliança",
        desc: "Vivendo os princípios da nova aliança em Cristo.",
        descLonga: "Uma célula que explora as implicações práticas da nova aliança para a vida cristã.",
        descCompleta: "Nova Aliança é um grupo que se dedica a compreender e viver as implicações práticas da nova aliança estabelecida por Cristo. Exploramos temas como graça, liberdade, vida no Espírito e o cumprimento das promessas em Jesus. Nossos encontros são profundos, reflexivos e aplicados à vida diária, buscando uma fé autêntica baseada no relacionamento com Deus.",
        horario: "Domingos, 9h",
        imagemCapa: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=2000",
        imagemPerfil: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=400",
        local: "Sala 210",
        tag: "Teologia",
        lider: "Pr. André Gomes",
        contato: "+244 923 777 888",
        numeroMembros: 26,
        idade: "20-50 anos",
        genero: "Misto",
        fundacao: "2021",
        objetivos: [
            "Compreender a nova aliança em Cristo",
            "Viver a graça de forma prática",
            "Aprofundar a vida no Espírito",
            "Desenvolver uma fé autêntica"
        ],
        programacao: [
            { dia: "Domingo", horario: "09:00", atividade: "Café da manhã" },
            { dia: "Domingo", horario: "09:30", atividade: "Estudo temático" },
            { dia: "Domingo", horario: "10:30", atividade: "Discussão" },
            { dia: "Domingo", horario: "11:15", atividade: "Oração e encerramento" }
        ],
        galeria: [
            { url: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=800", titulo: "Estudo" },
            { url: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800", titulo: "Discussão" },
            { url: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800", titulo: "Café da manhã" },
            { url: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&q=80&w=800", titulo: "Comunhão" }
        ]
    }
];