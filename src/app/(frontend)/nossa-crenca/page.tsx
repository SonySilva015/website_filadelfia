'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Imagens para a seção (considere usar imagens diferentes e mais representativas)
import trindadeImage from '@/public/img/casalmarcelo.jpg';
import criacaoImage from '@/public/img/casalmarcelo.jpg';
import jesusImage from '@/public/img/casalmarcelo.jpg';
import naturezaHomemImage from '@/public/img/casalmarcelo.jpg';
import segundaVindaImage from '@/public/img/casalmarcelo.jpg';
import batismoImage from '@/public/img/casalmarcelo.jpg';
import santidadeImage from '@/public/img/casalmarcelo.jpg';
import familiaCasamentoImage from '@/public/img/casalmarcelo.jpg';

// Animações reutilizáveis
const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: "easeOut" }
};

// Componente reutilizável para seções de crença
const CrencaSection = ({ title, subtitle, children, imageSrc, imageAlt, reverse = false }) => (
    <motion.section
        className={`py-24 px-6 ${reverse ? 'bg-slate-50' : 'bg-white'}`}
        {...fadeInUp}
    >
        <div className="max-w-6xl mx-auto">
            <div className={`grid md:grid-cols-2 gap-12 items-center ${reverse ? 'md:flex-row-reverse' : ''}`}>
                <motion.div
                    className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl order-1 md:order-none"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                >
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={false}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </motion.div>

                <motion.div
                    className="space-y-6 order-2 md:order-none"
                    initial={{ opacity: 0, x: reverse ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {subtitle && (
                        <span className="text-amber-600 font-semibold tracking-wider uppercase text-sm">
                            {subtitle}
                        </span>
                    )}
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-800 relative">
                        <span className="relative inline-block">
                            {title}
                            <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-amber-500 rounded-full" />
                        </span>
                    </h2>
                    <div className="prose prose-lg prose-slate max-w-none">
                        {children}
                    </div>
                </motion.div>
            </div>
        </div>
    </motion.section>
);

export default function NossaCrencaPage() {
    return (
        <div className="min-h-screen bg-white text-slate-900 selection:bg-amber-200 selection:text-slate-900">
            {/* --- HERO SECTION PROFISSIONAL --- */}
            <header className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1493475329181-89d8cc7fc64b?q=80&w=2070&auto=format&fit=crop"
                        alt="Fundo religioso - luz celestial"
                        fill
                        className="object-cover"
                        priority
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900/70" />
                </div>

                {/* Conteúdo do Hero */}
                <motion.div
                    className="relative z-10 max-w-5xl mx-auto px-6 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        <span className="inline-block px-4 py-2 mb-6 text-sm font-semibold text-amber-300 bg-amber-900/30 backdrop-blur-sm rounded-full border border-amber-500/30">
                            Fundamentos da Fé
                        </span>
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight">
                        Nossa{' '}
                        <span className="relative inline-block">
                            Crença
                            <motion.span
                                className="absolute -bottom-2 left-0 w-full h-2 bg-amber-500 rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ delay: 1, duration: 0.8 }}
                            />
                        </span>
                    </h1>

                    <motion.p
                        className="text-xl md:text-2xl text-slate-200 font-light leading-relaxed max-w-3xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        Nossa fé é fundamentada na Palavra de Deus, revelando Seu plano eterno desde a criação
                        até a gloriosa volta de Cristo.
                    </motion.p>

                    {/* Scroll Indicator */}
                    <motion.div
                        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                    >
                        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                            <div className="w-1 h-3 bg-white/60 rounded-full mt-2" />
                        </div>
                    </motion.div>
                </motion.div>
            </header>

            {/* --- SEÇÃO INTRODUTÓRIA --- */}
            <motion.section
                className="py-32 px-6 bg-white"
                {...fadeInUp}
            >
                <div className="max-w-4xl mx-auto text-center">
                    <motion.span
                        className="text-amber-600 font-semibold tracking-wider uppercase mb-4 block"
                        {...fadeInUp}
                    >
                        Nossa Fundação
                    </motion.span>
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold text-slate-800 mb-8"
                        {...fadeInUp}
                        transition={{ delay: 0.1 }}
                    >
                        A Base da Nossa Crença
                    </motion.h2>
                    <motion.div
                        className="w-24 h-1 bg-amber-500 mx-auto mb-8"
                        initial={{ width: 0 }}
                        whileInView={{ width: 96 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    />
                    <motion.p
                        className="text-xl text-slate-600 leading-relaxed"
                        {...fadeInUp}
                        transition={{ delay: 0.2 }}
                    >
                        Nossa crença é fundamentada nas Escrituras Sagradas, que revelam o plano de salvação de Deus
                        e os princípios de uma vida cristã plena. Acreditamos que a verdade de Deus é eterna e imutável,
                        desde a criação do mundo até a consumação dos séculos.
                    </motion.p>
                </div>
            </motion.section>

            {/* --- SEÇÃO 1: A TRINDADE (Imagem | Texto) --- */}
            <CrencaSection
                title="A Trindade"
                subtitle="Um Deus em Três Pessoas"
                imageSrc={trindadeImage}
                imageAlt="Representação artística da Trindade"
                reverse={false} // Imagem à esquerda, texto à direita
            >
                <p className="text-lg text-slate-600">
                    Cremos em um Deus único, mas triúno: <strong className="text-slate-800">Deus Pai, Deus Filho (Jesus Cristo) e Deus Espírito Santo</strong>.
                    Cada um desempenha um papel distinto, mas todos são iguais em essência, divindade e poder.
                    A Trindade é um mistério maravilhoso, mas é essencial para compreender a plenitude de Deus
                    e a Sua ação no mundo desde a criação.
                </p>
                <blockquote className="border-l-4 border-amber-500 pl-4 italic text-slate-500">
                    "Portanto, vão e façam discípulos de todas as nações, batizando-os em nome do Pai e do Filho e do Espírito Santo."
                    <footer className="text-sm mt-2">— Mateus 28:19</footer>
                </blockquote>
            </CrencaSection>

            {/* --- SEÇÃO 2: A CRIAÇÃO (Texto | Imagem) --- */}
            <CrencaSection
                title="A Criação"
                subtitle="O Propósito Original de Deus"
                imageSrc={criacaoImage}
                imageAlt="A criação do mundo"
                reverse={true} // Texto à esquerda, imagem à direita
            >
                <div className="space-y-4">
                    <p className="text-lg text-slate-600">
                        Cremos que <strong className="text-slate-800">Deus é o Criador de todas as coisas</strong>, visíveis e invisíveis.
                        Em seis dias, Ele criou os céus, a terra, os mares e tudo o que neles há, e viu que tudo era bom.
                        No ápice da criação, Deus formou o homem e a mulher à Sua imagem e semelhança.
                    </p>
                    <p className="text-lg text-slate-600">
                        A criação revela a glória, o poder e a sabedoria de Deus. Toda a natureza proclama a grandeza do Criador,
                        e nós fomos criados para adorá-Lo e viver em harmonia com Seu propósito original.
                    </p>
                    <blockquote className="border-l-4 border-amber-500 pl-4 italic text-slate-500">
                        "No princípio, Deus criou os céus e a terra. E Deus viu tudo o que havia feito, e tudo havia ficado muito bom."
                        <footer className="text-sm mt-2">— Gênesis 1:1,31</footer>
                    </blockquote>
                </div>
            </CrencaSection>

            {/* --- SEÇÃO 3: JESUS CRISTO (Imagem | Texto) --- */}
            <CrencaSection
                title="Jesus Cristo"
                subtitle="Nosso Salvador e Senhor"
                imageSrc={jesusImage}
                imageAlt="Jesus Cristo - Salvador e Senhor"
                reverse={false} // Imagem à esquerda, texto à direita
            >
                <div className="space-y-4">
                    <p className="text-lg text-slate-600">
                        Acreditamos que <strong className="text-slate-800">Jesus Cristo é o Filho de Deus</strong>, que veio ao mundo para salvar a humanidade
                        da condenação eterna. Ele é o Salvador e o único mediador entre Deus e os homens.
                    </p>
                    <p className="text-lg text-slate-600">
                        Por meio de Sua morte na cruz, Jesus expiou nossos pecados, e por Sua ressurreição,
                        Ele garantiu a vitória sobre a morte e o pecado. Jesus é Senhor de nossas vidas,
                        e Sua obra redentora é o fundamento de nossa fé.
                    </p>
                    <blockquote className="border-l-4 border-amber-500 pl-4 italic text-slate-500">
                        "Porque Deus tanto amou o mundo que deu o seu Filho Unigênito, para que todo o que nele crer não pereça, mas tenha a vida eterna."
                        <footer className="text-sm mt-2">— João 3:16</footer>
                    </blockquote>
                </div>
            </CrencaSection>

            {/* --- SEÇÃO 4: NATUREZA DO HOMEM (Texto | Imagem) --- */}
            <CrencaSection
                title="A Natureza do Homem"
                subtitle="Criado à Imagem de Deus"
                imageSrc={naturezaHomemImage}
                imageAlt="A natureza humana"
                reverse={true} // Texto à esquerda, imagem à direita
            >
                <div className="space-y-4">
                    <p className="text-lg text-slate-600">
                        Cremos que o <strong className="text-slate-800">ser humano foi criado à imagem e semelhança de Deus</strong>, dotado de dignidade,
                        liberdade e responsabilidade moral. Esta imagem divina concede ao homem valor intrínseco.
                    </p>
                    <p className="text-lg text-slate-600">
                        Porém, com a queda no Éden, o pecado entrou no mundo, corrompendo a natureza humana.
                        Todo ser humano nasce com uma natureza pecaminosa, necessitando da graça redentora
                        de Cristo para ser restaurado à comunhão com Deus.
                    </p>
                    <blockquote className="border-l-4 border-amber-500 pl-4 italic text-slate-500">
                        "Criou Deus o homem à sua imagem... Portanto, assim como por meio de um só homem o pecado entrou no mundo... a morte veio a todos os homens, porque todos pecaram."
                        <footer className="text-sm mt-2">— Gênesis 1:27; Romanos 5:12</footer>
                    </blockquote>
                </div>
            </CrencaSection>

            {/* --- SEÇÃO 5: SEGUNDA VINDA DE CRISTO (Imagem | Texto) --- */}
            <CrencaSection
                title="A Segunda Vinda de Cristo"
                subtitle="Nossa Esperança Bem-Aventurada"
                imageSrc={segundaVindaImage}
                imageAlt="A volta de Jesus Cristo"
                reverse={false} // Imagem à esquerda, texto à direita
            >
                <div className="space-y-4">
                    <p className="text-lg text-slate-600">
                        Cremos na <strong className="text-slate-800">volta pessoal, visível e gloriosa de Jesus Cristo</strong>. Assim como Ele subiu aos céus,
                        assim voltará para buscar Sua igreja e estabelecer Seu reino eterno.
                    </p>
                    <p className="text-lg text-slate-600">
                        Na Sua segunda vinda, os mortos em Cristo ressuscitarão, e os que estiverem vivos serão transformados.
                        Haverá um juízo final, onde os justos herdarão a vida eterna.
                    </p>
                    <blockquote className="border-l-4 border-amber-500 pl-4 italic text-slate-500">
                        "O próprio Senhor descerá do céu... e os mortos em Cristo ressuscitarão primeiro... E assim estaremos para sempre com o Senhor."
                        <footer className="text-sm mt-2">— 1 Tessalonicenses 4:16-17</footer>
                    </blockquote>
                </div>
            </CrencaSection>

            {/* --- SEÇÃO 6: O BATISMO (Texto | Imagem) --- */}
            <CrencaSection
                title="O Batismo"
                subtitle="Nosso Testemunho Público"
                imageSrc={batismoImage}
                imageAlt="Celebração do batismo"
                reverse={true} // Texto à esquerda, imagem à direita
            >
                <div className="space-y-4">
                    <p className="text-lg text-slate-600">
                        O batismo é um ato de obediência e simboliza a morte e ressurreição com Cristo.
                        Acreditamos que o batismo deve ser realizado por imersão, como símbolo da transformação.
                    </p>
                    <p className="text-lg text-slate-600">
                        O batismo não é condição para salvação, mas é uma declaração pública da fé em Cristo
                        e do desejo de viver segundo Seus ensinamentos.
                    </p>
                    <blockquote className="border-l-4 border-amber-500 pl-4 italic text-slate-500">
                        "Fomos, pois, sepultados com ele na morte por meio do batismo, a fim de que... também nós vivamos uma vida nova."
                        <footer className="text-sm mt-2">— Romanos 6:4</footer>
                    </blockquote>
                </div>
            </CrencaSection>

            {/* --- SEÇÃO 7: SANTIDADE (Imagem | Texto) --- */}
            <CrencaSection
                title="Santidade"
                subtitle="Chamados para Ser como Ele"
                imageSrc={santidadeImage}
                imageAlt="Jornada de santidade"
                reverse={false} // Imagem à esquerda, texto à direita
            >
                <div className="space-y-4">
                    <p className="text-lg text-slate-600">
                        A santidade é o chamado de todos os cristãos. Como seguidores de Cristo, somos chamados a viver
                        uma vida separada do pecado e consagrada a Deus.
                    </p>
                    <blockquote className="border-l-4 border-amber-500 pl-4 italic text-slate-500">
                        "Sejam santos, porque eu sou santo."
                        <footer className="text-sm mt-2">— 1 Pedro 1:15-16</footer>
                    </blockquote>
                </div>
            </CrencaSection>

            {/* --- SEÇÃO 8: FAMÍLIA E CASAMENTO (Texto | Imagem) --- */}
            <CrencaSection
                title="Família e Casamento"
                subtitle="Instituições Divinas"
                imageSrc={familiaCasamentoImage}
                imageAlt="Família cristã unida"
                reverse={true} // Texto à esquerda, imagem à direita
            >
                <div className="space-y-4">
                    <p className="text-lg text-slate-600">
                        A família é uma instituição divina, estabelecida por Deus desde a criação.
                        O casamento é uma aliança sagrada e reflexão do relacionamento de Cristo com a Igreja.
                    </p>
                    <p className="text-lg text-slate-600">
                        O casamento é a base para uma família saudável e ambiente ideal para criar filhos
                        no temor e amor a Deus.
                    </p>
                    <blockquote className="border-l-4 border-amber-500 pl-4 italic text-slate-500">
                        "Por isso, o homem deixará pai e mãe e se unirá à sua mulher, e os dois se tornarão uma só carne."
                        <footer className="text-sm mt-2">— Efésios 5:31</footer>
                    </blockquote>
                </div>
            </CrencaSection>

            {/* --- CALL TO ACTION --- */}
            <motion.section
                className="py-32 px-6 bg-gradient-to-br from-slate-900 to-slate-800 text-white"
                {...fadeInUp}
            >
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold mb-8"
                        {...fadeInUp}
                    >
                        Viva Essa Fé Conosco
                    </motion.h2>
                    <motion.p
                        className="text-xl text-slate-300 mb-12 leading-relaxed"
                        {...fadeInUp}
                        transition={{ delay: 0.1 }}
                    >
                        Das origens da criação à esperança da volta de Cristo, nossa fé é viva e transformadora.
                        Convidamos você a conhecer mais, fazer perguntas e caminhar conosco nessa jornada de fé.
                    </motion.p>
                    <motion.div
                        className="flex flex-wrap gap-4 justify-center"
                        {...fadeInUp}
                        transition={{ delay: 0.2 }}
                    >
                        <button className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                            Saiba Mais
                        </button>
                        <button className="px-8 py-4 border-2 border-white/30 hover:border-white/50 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-white/10 backdrop-blur-sm">
                            Entre em Contato
                        </button>
                    </motion.div>
                </div>
            </motion.section>
        </div>
    );
}