// components/CelulaSobre.tsx (Versão Robusta)
'use client'

import Image from 'next/image';
import { Calendar, MapPin, Image as ImageIcon } from 'lucide-react';

interface CelulaSobreProps {
    conteudo: any[] | any;
    horarios: string;
    local?: string;
}

// Componente para renderizar texto rico do Lexical
function RichTextRenderer({ data }: { data: any }) {
    if (!data) return null;

    function extractTextFromLexical(lexicalData: any): string {
        if (!lexicalData) return '';

        if (lexicalData.root && lexicalData.root.children) {
            return lexicalData.root.children
                .map((child: any) => {
                    if (child.children) {
                        return child.children
                            .map((textNode: any) => textNode.text || '')
                            .join(' ');
                    }
                    return '';
                })
                .filter(Boolean)
                .join('\n\n');
        }

        if (Array.isArray(lexicalData)) {
            return lexicalData
                .map((item: any) => {
                    if (item.children) {
                        return item.children
                            .map((textNode: any) => textNode.text || '')
                            .join(' ');
                    }
                    return '';
                })
                .filter(Boolean)
                .join('\n\n');
        }

        if (typeof lexicalData === 'string') {
            return lexicalData;
        }

        if (lexicalData.text) {
            return lexicalData.text;
        }

        return '';
    }

    const textContent = extractTextFromLexical(data);

    if (!textContent) return null;

    return (
        <div className="text-body leading-relaxed text-lg whitespace-pre-line">
            {textContent}
        </div>
    );
}

// Componente para renderizar imagem
function ImageBlock({ block }: { block: any }) {
    const img = block.imagem || block.image;

    if (!img) {
        return (
            <div className="flex items-center justify-center p-8 bg-tertiary rounded-xl my-8">
                <div className="flex flex-col items-center gap-2 text-body/60">
                    <ImageIcon size={48} />
                    <span>Imagem não disponível</span>
                </div>
            </div>
        );
    }

    function getImageUrl(image: any): string {
        if (!image) return '';
        if (image.url) return image.url;
        if (image.thumbnailURL) return image.thumbnailURL;
        if (image.cloudinary?.secure_url) return image.cloudinary.secure_url;
        if (typeof image === 'string') return image;
        if (image.path) return image.path;
        return '';
    }

    const imageUrl = getImageUrl(img);

    if (!imageUrl) {
        return (
            <div className="flex items-center justify-center p-8 bg-tertiary rounded-xl my-8">
                <div className="flex flex-col items-center gap-2 text-body/60">
                    <ImageIcon size={48} />
                    <span>Imagem não disponível</span>
                </div>
            </div>
        );
    }

    return (
        <figure className="my-8 md:my-10">
            <div className="relative w-full h-auto overflow-hidden transition-shadow duration-300 rounded-xl bg-tertiary">
                <Image
                    src={imageUrl}
                    alt={block.alt || img.alt || ''}
                    width={img.width || 1200}
                    height={img.height || 800}
                    className="w-full h-auto object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                    unoptimized={imageUrl.startsWith('http')}
                    onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                            const fallback = document.createElement('div');
                            fallback.className = 'flex items-center justify-center p-8 bg-tertiary rounded-xl';
                            fallback.innerHTML = `
                                <div class="flex flex-col items-center gap-2 text-body/60">
                                    <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <span>Imagem indisponível</span>
                                </div>
                            `;
                            parent.appendChild(fallback);
                        }
                    }}
                />
            </div>
            {(block.legenda || img.caption || img.alt) && (
                <figcaption className="text-sm text-body mt-2 text-center italic">
                    {block.legenda || img.caption || img.alt}
                </figcaption>
            )}
        </figure>
    );
}

export default function CelulaSobre({ conteudo, horarios, local }: CelulaSobreProps) {
    if (!conteudo || conteudo.length === 0) {
        return (
            <div className="bg-white rounded-2xl p-8 border border-secondary/20 shadow-sm animate-fade-in-up">
                <div className="flex items-center gap-3 mb-6">
                    <h2 className="text-2xl font-bold text-title">Sobre esta célula</h2>
                </div>
                <p className="text-body text-center py-8">
                    Nenhum conteúdo disponível para esta célula.
                </p>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-2xl p-8 border border-secondary/20 shadow-sm animate-fade-in-up">
            <div className="flex items-center gap-3 mb-6">
                <h2 className="text-2xl font-bold text-title">Sobre esta célula</h2>
            </div>

            <section className="space-y-8 md:space-y-10 prose prose-lg max-w-none">
                {conteudo?.map((block: any, index: number) => {
                    // TextBlock
                    if (block.blockType === 'textblock' || block.blockType === 'textBlock') {
                        return (
                            <div key={block.id || index} className="text-body leading-relaxed">
                                <RichTextRenderer data={block.text} />
                            </div>
                        );
                    }

                    // ImageBlock
                    if (block.blockType === 'imageblock' || block.blockType === 'imageBlock') {
                        return <ImageBlock key={block.id || index} block={block} />;
                    }

                    // Fallback para texto
                    if (typeof block === 'object' && block.text) {
                        return (
                            <div key={index} className="text-body leading-relaxed">
                                <RichTextRenderer data={block.text} />
                            </div>
                        );
                    }

                    return null;
                })}
            </section>

            <div className="grid sm:grid-cols-2 gap-5 mt-8">
                <div className="flex items-start gap-3 p-4 bg-tertiary rounded-xl">
                    <div className="p-2 bg-secondary-light rounded-lg text-secondary">
                        <Calendar size={18} />
                    </div>
                    <div>
                        <p className="text-xs text-body mb-1">Horários</p>
                        <p className="text-sm font-semibold text-title">{horarios}</p>
                    </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-tertiary rounded-xl">
                    <div className="p-2 bg-secondary-light rounded-lg text-secondary">
                        <MapPin size={18} />
                    </div>
                    <div>
                        <p className="text-xs text-body mb-1">Local</p>
                        <p className="text-sm font-semibold text-title">{local || 'A definir'}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}