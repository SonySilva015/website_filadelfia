import {
    ArrowRight,
    MessageCircle,
    Phone,
    Mail,
    MapPin,
    Clock,
    Calendar,
} from 'lucide-react';

export default function Action() {

    return (
        <>
            {/* EVENTO + CONTACTO */}
            <div className="max-w-6xl mx-auto px-4 py-10">
                <div className="grid md:grid-cols-2 gap-6 mb-10">

                    {/* EVENTO */}
                    <div className="bg-gray-900 text-white p-6 rounded-xl shadow-sm">
                        <h3 className="text-lg font-light mb-2 flex items-center gap-2">
                            <Calendar className="w-5 h-5 text-gray-300" />
                            Culto de Evangelismo - IEIA Filadélfia
                        </h3>

                        <p className="text-gray-400 text-sm mb-3 font-light">
                            Todos os Domingos
                        </p>

                        <p className="text-2xl font-light flex items-center gap-2">
                            <Clock className="w-5 h-5 text-gray-300" />
                            9:30 AM - 12:00 PM
                        </p>                     

                        <button className="mt-5 bg-white text-gray-900 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition flex items-center gap-2 text-sm">
                            Quero participar <ArrowRight size={16} />
                        </button>
                    </div>

                    {/* CONTACTO REAL */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                        <h3 className="text-lg font-light mb-4 text-gray-800">
                            Contactos da Igreja
                        </h3>

                        <div className="space-y-4 text-sm">

                            <div className="flex items-center gap-3 text-gray-700">
                                <MessageCircle className="w-5 h-5 text-green-500" />
                                <span>WhatsApp: +244 9XX XXX XXX</span>
                            </div>

                            <div className="flex items-center gap-3 text-gray-700">
                                <Phone className="w-5 h-5 text-blue-500" />
                                <span>Telefone: +244 9XX XXX XXX</span>
                            </div>

                            <div className="flex items-center gap-3 text-gray-700">
                                <Mail className="w-5 h-5 text-red-500" />
                                <span>Email: igreja@email.com</span>
                            </div>

                            <div className="flex items-center gap-3 text-gray-700">
                                <MapPin className="w-5 h-5 text-gray-500" />
                                <span>Endereço: ao lado da Centralidade</span>
                            </div>


                        </div>

                    </div>

                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="text-center bg-gray-50 p-8 rounded-2xl border border-gray-200">

                    <h4 className="text-2xl font-light text-gray-900 mb-3">
                        🕊️ Não deixe para amanhã a decisão mais importante da sua vida.
                    </h4>

                    <p className="text-gray-500 font-light">
                        "Hoje, se ouvirdes a sua voz, não endureçais os vossos corações." <br />
                        <span className="text-gray-600">Hebreus 3:15</span>
                    </p>

                    <button className="mt-6 bg-gray-800 text-white px-10 py-3 rounded-full font-medium hover:bg-gray-700 transition">
                        Quero conhecer Jesus
                    </button>

                </div>
            </div>
        </>
    );
}