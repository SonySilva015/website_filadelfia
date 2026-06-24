import {
    HeartIcon,
    Calendar,
    MapPin,
    Clock,
    Handshake,
    DoorOpen,
    Globe as GlobeIcon,
    Mic,
    Gift
} from 'lucide-react';

import Image from "next/image";

import evangel3 from '@/public/img/evangelho3.png';
import culto from '@/public/adora/culto2.png'
import amigos from '@/public/img/amigos.jpg';
import social from '@/public/adora/social.png'

import type { StaticImageData } from "next/image";
import ParallaxImage from './image';

interface Activity {
    image: string | StaticImageData;
}
export default function Page() {
    const activities = [
        {
            icon: Handshake,
            title: "Dia do Amigo",
            description: "Tiramos um dia, fora da cidade, um dia especial dedicado a celebrar a amizade e compartilhar o amor de Cristo.",
            image: amigos,
            content: "Convidamos amigos, familiares e vizinhos para um dia de comunhão, louvor e evangelismo. É uma oportunidade de fortalecer laços e apresentar a mensagem de Jesus de forma acolhedora, criando um ambiente de amizade e fé.",
            tags: ["Amizade", "Evangelismo", "Comunhão"]
        },
        {
            icon: DoorOpen,
            title: "Evangelho Porta a Porta",
            description: "Levamos a mensagem de salvação diretamente aos lares. Visitamos famílias, compartilhamos o amor de Jesus e oferecemos oração e apoio espiritual.",
            image: evangel3,
            content: "Visitamos lares e levamos palavras de esperança, a boa nova de salvação. desejamos que as famílias sejam transformadas, fortalecer a fé e criar conexões significativas com a comunidade.",
            tags: ["Missão", "Visitação", "Oração"]
        },
        {
            icon: GlobeIcon,
            title: "Cultos do Santo Evangelho",
            description: "Realizamos cultos em praças, parques e espaços públicos, levando a mensagem do evangelho a todos que passam. Louvor, pregação e testemunhos ao ar livre.",
            image: culto,
            content: "Os cultos são momentos de adoração e evangelismo, onde convidamos a comunidade a participar e ouvir a mensagem de Cristo.",
            tags: ["Louvor", "Pregação", "Público"]
        },

        {
            icon: Gift,
            title: "Ação Social",
            description: "Distribuímos alimentos, roupas e amor a comunidades carentes, demonstrando o amor de Deus através de ações concretas.",
            image: social,
            content: "Nosso projeto de ação social visa atender as necessidades básicas de comunidades carentes, cuidar de viúvas, idosos e crianças, levando dignidade, esperança e boas novas de salvação.",
            tags: ["Solidariedade", "Ação social", "Amor"]
        }
    ];

    return (
        <div className="max-w-6xl mx-auto px-4 py-16">
            <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-3">
                    Nossas Atividades de Evangelismo
                </h2>
                <div className="w-12 h-0.5 bg-gray-300 mx-auto mb-4"></div>
                <p className="text-gray-500 max-w-2xl mx-auto font-light">
                    Levar o amor de Jesus a todos é nossa missão. Conheça nossas atividades evangelísticas.
                </p>
            </div>

            <div className="space-y-6">
                {activities.map((activity, index) => (
                    <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-0`}>
                        {/* Imagem com texto sobreposto */}
                        <div className="relative w-full lg:w-1/2 h-80 lg:h-96 overflow-hidden">
                            <ParallaxImage
                                src={activity.image}
                                alt={activity.title}
                            />
                        </div>



                        <div className="w-full lg:w-1/2 bg-slate-100 px-8 py-8 flex flex-col justify-center">
                            <div className=" flex flex-col justify-center px-8 text-slate-800">
                                <div className="flex items-center gap-3 mb-3">
                                    <activity.icon className="text-slate-800" size={24} />
                                    <h3 className="text-2xl font-light">{activity.title}</h3>
                                </div>
                            </div>
                            <div className="space-y-3 text-sm">
                                <div className="flex  text-xl items-center gap-3 text-slate-700">

                                    <span>{activity.content}</span>
                                </div>

                            </div>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {activity.tags.map((tag, i) => (
                                    <span key={i} className="bg-white text-gray-600 px-3 py-1 rounded-full text-xs border border-gray-200">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}