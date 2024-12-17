import {useEffect, useRef, useState} from "react";
import {MicrophoneIcon} from "@heroicons/react/24/solid";
import AudioPlayer from "../components/AudioPlayer.tsx";
import getCurrentTime from "../components/CurrentTime.ts";
import PrevFabButton from "../components/PrevFabButton.tsx";
import NextFabButton from "../components/NextFabButton.tsx";

interface Props {
    visibleElements: number;
    setVisibleElements: (index: number) => void;
}

export default function Testimonios ({visibleElements,setVisibleElements} :  Props) {
    const [isLoading, setIsLoading] = useState(false);
    const lastElementRef = useRef<HTMLDivElement>(null);

    const elements = [

        {
            cooldown: 1000,
            alignment: "left",
            content: (
                <div className="flex flex-col items-start animate-fade-in-fast">
                    <div className="chat-box left relative p-3 bg-white shadow-lg rounded-lg">
                        {/* Encabezado: Nombre y Foto en el extremo izquierdo */}
                        <div className="flex justify-start items-center gap-2 mb-2">
                            <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
                                <img
                                    src="testimonios/1.webp" // Reemplazar con URL dinámica
                                    alt="Avatar Jessica"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <span className="text-sm font-bold text-gray-700">Jessica Rojas, 43 años (Víctima de Vishing)</span>
                        </div>
                        {/* Contenido del mensaje */}
                        <div className="flex items-center">
                            <div className="flex-1">
                                <AudioPlayer
                                    audio="https://lab-ec-upc.github.io/assets/especial-ciberseguridad/audios-testimonios/jessica.mp3"
                                    time="1.29"
                                />
                            </div>
                            <div>
                                <div className="relative flex-shrink-0">
                                    <img
                                        src="testimonios/1.webp"
                                        alt="Voice message avatar"
                                        className="w-12 h-12 md:w-24 md:h-24 rounded-full object-cover"
                                    />
                                    <span className="absolute bottom-0 left-0 flex p-2 bg-green-dark rounded-full">
                                <MicrophoneIcon className="h-2 w-2 md:h-4 md:w-4 text-white" />
                            </span>
                                </div>
                                <small className="chat-time">{getCurrentTime()}</small>
                            </div>
                        </div>
                    </div>
                </div>
            ),
        },

        {
            cooldown: 2000,
            alignment: "left",
            content:
                <div className="flex flex-col items-start animate-fade-in-fast">
                    <div className="chat-box left">
                        <div className="flex items-center gap-2 mb-1">
                            <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
                                <img
                                    src="testimonios/1.webp" // Reemplazar con URL dinámica
                                    alt="Avatar Usuario 1"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <span className="text-sm font-bold text-gray-700">Jessica Rojas, 43 años (Víctima de Vishing)</span>
                        </div>
                        <p className="text-sm md:text-md">
                            Jessica recibió una <strong> llamada 📞 </strong> que simulaba ser de su
                            <strong> instituto educativo 🎓. </strong> Tras facilitarles un código de validación 🔑, los
                            atacantes
                            accedieron a su
                            <strong> cuenta de WhatsApp 📱 </strong> y la utilizaron para <strong> estafar a sus
                            contactos
                            💸. </strong> El delito
                            <strong> impactó su vida personal 👩‍💼, laboral 💼 y su negocio 🏢, </strong> ya que, como
                            muchos,
                            usaba la aplicación como herramienta clave de comunicación 📲.
                        </p>
                        <small className="chat-time">{getCurrentTime()}</small>
                    </div>
                </div>
        },
        {
            cooldown: 12000,
            alignment: "center",
            content:
                <div className="flex flex-col items-center animate-fade-in-fast">
                    <div className="chat-box center">
                        <p className="text-sm md:text-md">
                            Irina González se unió usando el enlace de invitación
                        </p>
                    </div>
                </div>
        },

        {
            cooldown: 2000,
            alignment: "right",
            content: (
                <div className="flex flex-col items-end animate-fade-in-fast">
                    <div className="chat-box right relative p-3 bg-white shadow-lg rounded-lg">
                        {/* Encabezado: Nombre y Foto en el extremo derecho */}
                        <div className="flex justify-end items-center gap-2 mb-2">
                            <span className="text-sm font-bold text-gray-700">Irina Gonzales García, 40 años (Víctima de Smishing y Phishing)</span>
                            <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
                                <img
                                    src="testimonios/2.webp" // Reemplazar con URL dinámica
                                    alt="Avatar Tú"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        {/* Contenido del mensaje */}
                        <div className="flex items-center">
                            <div className="relative flex-shrink-0">
                                <img
                                    src="testimonios/2.webp"
                                    alt="Voice message avatar"
                                    className="w-12 h-12 md:w-24 md:h-24 rounded-full object-cover"
                                />
                                <span className="absolute bottom-0 right-0 flex p-2 bg-green-dark rounded-full">
                            <MicrophoneIcon className="h-2 w-2 md:h-4 md:w-4 text-white" />
                        </span>
                            </div>
                            <div className="flex-1">
                                <AudioPlayer
                                    audio="https://lab-ec-upc.github.io/assets/especial-ciberseguridad/audios-testimonios/irina.mp3"
                                    time="00:43"
                                />
                            </div>
                        </div>
                        {/* Footer con hora e ícono */}
                        <div className="flex items-center gap-1 mt-2">
                            <small className="chat-time">{getCurrentTime()}</small>
                            <img
                                src="read-double-check-icon.svg"
                                alt="Double check icon"
                                className="h-4 w-4 md:h-6 md:w-6"
                            />
                        </div>
                    </div>
                </div>
            ),
        },


        {
            cooldown: 2000,
            alignment: "right",
            content:
                <div className="flex flex-col items-end animate-fade-in-fast">
                    <div className="chat-box right">
                        <div className="flex items-center gap-2 mb-1 justify-end">
                            <span className="text-sm font-bold text-gray-700">Irina Gonzales García, 40 años (Víctima de Smishing y Phishing)</span>
                            <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
                                <img
                                    src="testimonios/2.webp" // Reemplazar con URL dinámica
                                    alt="Avatar Tú"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        <p className="text-sm md:text-md">
                            Irina fue engañada por un <strong> mensaje directo </strong> de Instagram 📩 que
                            <strong> parecía de un amigo 🧑‍🤝‍🧑. </strong> Compartió un <strong> código de SMS
                            📲 </strong>
                            y los estafadores <strong> tomaron sus cuentas 🌐, enviando mensajes fraudulentos
                            🛑 </strong> a su
                            círculo cercano 👥.
                        </p>
                        <div className="flex items-center gap-1">
                            <small className="chat-time">{getCurrentTime()}</small>
                            <img
                                src="read-double-check-icon.svg"
                                alt="Double check icon"
                                className="h-4 w-4 md:h-6 md:w-6"
                            />
                        </div>
                    </div>
                </div>
        },
        {
            cooldown: 12000,
            alignment: "center",
            content:
                <div className="flex flex-col items-center animate-fade-in-fast">
                    <div className="chat-box center">
                        <p className="text-sm md:text-md">
                            Ekaterina Zakharova se unió usando el enlace de invitación
                        </p>
                    </div>
                </div>
        },
        {
            cooldown: 2000,
            alignment: "left",
            content: (
                <div className="flex flex-col items-start animate-fade-in-fast">
                    <div className="chat-box left relative p-3 bg-white shadow-lg rounded-lg">
                        {/* Encabezado: Nombre y Foto en el extremo izquierdo */}
                        <div className="flex justify-start items-center gap-2 mb-2">
                            <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
                                <img
                                    src="testimonios/3.webp" // Reemplazar con URL dinámica
                                    alt="Avatar"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <span className="text-sm font-bold text-gray-700">Ekaterina Zakharova, 44 años (Víctima de Phishing en comercio electrónico)</span>
                        </div>
                        {/* Contenido del mensaje */}
                        <div className="flex items-center">
                            <div className="flex-1">
                                <AudioPlayer
                                    audio="https://lab-ec-upc.github.io/assets/especial-ciberseguridad/audios-testimonios/ekaterina.m4a"
                                    time="00:55"
                                />
                            </div>
                            <div>
                                <div className="relative flex-shrink-0">
                                    <img
                                        src="testimonios/3.webp"
                                        alt="Voice message avatar"
                                        className="w-12 h-12 md:w-24 md:h-24 rounded-full object-cover"
                                    />
                                    <span className="absolute bottom-0 left-0 flex p-2 bg-green-dark rounded-full">
                                    <MicrophoneIcon className="h-2 w-2 md:h-4 md:w-4 text-white"/>
                            </span>
                                </div>
                                <small className="chat-time">{getCurrentTime()}</small>
                            </div>
                        </div>
                    </div>
                </div>
            ),
        },

        {
            cooldown: 2000,
            alignment: "left",
            content:
                <div className="flex flex-col items-start animate-fade-in-fast">
                    <div className="chat-box left">
                        <div className="flex items-center gap-2 mb-1">
                            <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
                                <img
                                    src="testimonios/3.webp" // Reemplazar con URL dinámica
                                    alt="Avatar Usuario 1"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <span className="text-sm font-bold text-gray-700">Ekaterina Zakharova, 44 años (Víctima de Phishing en comercio electrónico)</span>
                        </div>

                        <p className="text-sm md:text-md">
                            Ekaterina, al realizar compras en Alibaba, una <strong> plataforma de comercio en internet
                            🌐🛒, </strong>
                            fue estafada por un <strong> supuesto proveedor </strong> que presentó <strong> documentos
                            falsos.
                            📄❌ </strong>
                            Como consecuencia, realizó <strong> pagos por un pedido que nunca llegó. 💸🚫 </strong> Los
                            estafadores crearon
                            <strong> perfiles y páginas de seguimiento fraudulentas, simulando ser
                                legítimos </strong> dentro de la plataforma confiable. 🔍🎭
                        </p>
                        <small className="chat-time">{getCurrentTime()}</small>
                    </div>
                </div>
        },
        {
            cooldown: 12000,
            alignment: "center",
            content:
                <div className="flex flex-col items-center animate-fade-in-fast">
                    <div className="chat-box center">
                        <p className="text-sm md:text-md">
                            Sheyla Choque se unió usando el enlace de invitación
                        </p>
                    </div>
                </div>
        },
        {
            cooldown: 2000,
            alignment: "right",
            content: (
                <div className="flex flex-col items-end animate-fade-in-fast">
                    <div className="chat-box right relative p-3 bg-white shadow-lg rounded-lg">
                        {/* Encabezado: Nombre y Foto en el extremo derecho */}
                        <div className="flex justify-end items-center gap-2 mb-2">
                            <span className="text-sm font-bold text-gray-700">Sheyla Choque Vizcarra, 23 años (Víctima de Phishing y Vishing)</span>
                            <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
                                <img
                                    src="testimonios/4.webp" // Reemplazar con URL dinámica
                                    alt="Avatar Tú"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        {/* Contenido del mensaje */}
                        <div className="flex items-center">
                            <div className="relative flex-shrink-0">
                                <img
                                    src="testimonios/4.webp"
                                    alt="Voice message avatar"
                                    className="w-12 h-12 md:w-24 md:h-24 rounded-full object-cover"
                                />
                                <span className="absolute bottom-0 right-0 flex p-2 bg-green-dark rounded-full">
                                    <MicrophoneIcon className="h-2 w-2 md:h-4 md:w-4 text-white"/>
                                </span>
                            </div>
                            <div className="flex-1">
                                <AudioPlayer
                                    audio="https://lab-ec-upc.github.io/assets/especial-ciberseguridad/audios-testimonios/sheila.mp3"
                                    time="1:04"
                                />
                            </div>
                        </div>
                        {/* Footer con hora e ícono */}
                        <div className="flex items-center gap-1 mt-2">
                            <small className="chat-time">{getCurrentTime()}</small>
                            <img
                                src="read-double-check-icon.svg"
                                alt="Double check icon"
                                className="h-4 w-4 md:h-6 md:w-6"
                            />
                        </div>
                    </div>
                </div>
            ),
        },


        {
            cooldown: 2000,
            alignment: "right",
            content:
                <div className="flex flex-col items-end animate-fade-in-fast">
                    <div className="chat-box right">
                        <div className="flex items-center gap-2 mb-1 justify-end">
                            <span className="text-sm font-bold text-gray-700">Sheyla Choque Vizcarra, 23 años (Víctima de Phishing y Vishing)</span>
                            <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
                                <img
                                    src="testimonios/4.webp" // Reemplazar con URL dinámica
                                    alt="Avatar Tú"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        <p className="text-sm md:text-md">
                            Sheyla ingresó datos en una <strong> página falsa del BCP 🏦 </strong> y recibió una
                            <strong> llamada 📞 </strong> del supuesto banco. Proporcionó <strong> códigos de seguridad
                            (TOKEN) 🔑 y perdió 5,000 soles 💸. </strong>
                            Tras denunciar, logró recuperar su dinero ✅.
                        </p>
                        <div className="flex items-center gap-1">
                            <small className="chat-time">{getCurrentTime()}</small>
                            <img
                                src="read-double-check-icon.svg"
                                alt="Double check icon"
                                className="h-4 w-4 md:h-6 md:w-6"
                            />
                        </div>
                    </div>
                </div>
        }
    ];

    useEffect(() => {
        if (visibleElements < elements.length) {
            setIsLoading(true);
            const timer = setTimeout(() => {
                setIsLoading(false);
                setVisibleElements(visibleElements + 1);
            }, elements[visibleElements].cooldown);
            return () => clearTimeout(timer);
        }
    }, [visibleElements, elements.length]);

    return (
        <div className="flex flex-col h-full justify-between p-4">
            <div>
                <div className="flex justify-center animate-fade-in-fast">
                <h1 className="chat-title-box">
                        Uno de los delitos de mayor crecimiento
                    </h1>
                </div>
                <div className="flex flex-col items-center animate-fade-in-fast">
                    <div className="chat-box center">
                        <img src="joined-chat-icon.svg"
                             alt="Joined chat icon"
                             className="w-16 h-16 md:w-24 md:h-24"
                        />
                        <h1 className="text-lg font-medium">
                            Se ha creado el grupo: Testimonios
                        </h1>
                        <small>
                            Grupo 4 miembros
                        </small>
                        <p className="text-sm md:text-md">
                            Conoce los testimonios de quienes han sufrido alguna de las modalidades de phishing y cómo
                            han
                            enfrentado las consecuencias
                        </p>
                    </div>
                    <div className="chat-box center">
                        <p className="text-sm md:text-md">
                            Jessica Rojas se unió usando el enlace de invitación
                        </p>
                    </div>
                </div>
                <div>
                    {elements.slice(0, visibleElements).map((element, index) => (
                        <div key={index} ref={index === visibleElements - 1 ? lastElementRef : null}>
                            {element["content"]}
                        </div>
                    ))}
                    {isLoading && (
                        <div
                            className={`w-full flex ${elements[visibleElements].alignment === "left" ? "justify-start" : "justify-end"}`}>
                            <div className="flex items-end space-x-1 px-4 py-3 rounded-xl bg-gray-100 w-fit">
                                <div className="h-2 w-2 rounded-full bg-gray-400 animate-pulse"></div>
                                <div className="h-2 w-2 rounded-full bg-gray-400 animate-pulse"></div>
                                <div className="h-2 w-2 rounded-full bg-gray-400 animate-pulse"></div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="sticky bottom-0 flex justify-between w-full items-center">
                <PrevFabButton url="el-phishing"/>
                <NextFabButton url="opiniones-sobre-la-ciberdelincuencia"/>
            </div>
        </div>
    )
}