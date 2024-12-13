import {useEffect, useRef, useState} from "react";
import {MicrophoneIcon} from "@heroicons/react/24/solid";
import AudioPlayer from "../components/AudioPlayer.tsx";
import getCurrentTime from "../components/CurrentTime.ts";

export default function Testimonios () {
    const [visibleElements, setVisibleElements] = useState(0);

    const elements = [
        <div className="flex flex-col items-start animate-fade-in-fast">
            <div className="chat-box left">
                <p className="text-sm md:text-md">
                    <strong>Jessica Rojas (43 años)</strong> <br/>
                    Víctima de Vishing
                </p>
                <small className="chat-time">{getCurrentTime()}</small>
            </div>
        </div>,
        <div className="flex flex-col items-start animate-fade-in-fast">
            <div className="chat-box left">
                <div className="flex items-center">
                    <div className="flex-1">
                        <AudioPlayer
                            audio="https://d38nvwmjovqyq6.cloudfront.net/va90web25003/companions/Foundations%20of%20Rock/13.01.mp3"
                            time="1:30"
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
                                    <MicrophoneIcon className="h-2 w-2 md:h-4 md:w-4 text-white"/>
                            </span>
                        </div>
                        <small className="chat-time">{getCurrentTime()}</small>
                    </div>
                </div>
            </div>
        </div>,
        <div className="flex flex-col items-start animate-fade-in-fast">
            <div className="chat-box left">
                <p className="text-sm md:text-md">
                    Jessica recibió una <strong> llamada 📞 </strong> que simulaba ser de su
                    <strong> instituto educativo 🎓. </strong> Tras facilitarles un código de validación 🔑, los atacantes
                    accedieron a su
                    <strong> cuenta de WhatsApp 📱 </strong> y la utilizaron para <strong> estafar a sus contactos
                    💸. </strong> El delito
                    <strong> impactó su vida personal 👩‍💼, laboral 💼 y su negocio 🏢, </strong> ya que, como muchos,
                    usaba la aplicación como herramienta clave de comunicación 📲.
                </p>
                <small className="chat-time">{getCurrentTime()}</small>
            </div>
        </div>,

        <div className="flex flex-col items-center animate-fade-in-fast">
            <div className="chat-box center">
                <p className="text-sm md:text-md">
                    Irina González se unió usando el enlace de invitación
                </p>
            </div>
        </div>,
        <div className="flex flex-col items-end animate-fade-in-fast">
            <div className="chat-box right">
                <p className="text-sm md:text-md">
                    <strong>Irina Gonzales García (40 años)</strong> <br/>
                    Víctima de Smishing y Phishing
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
        </div>,
        <div className="flex flex-col items-end animate-fade-in-fast">
            <div className="chat-box right">
                <div className="flex items-center">
                    <div className="relative flex-shrink-0">
                        <img
                            src="testimonios/2.webp"
                            alt="Voice message avatar"
                            className="w-12 h-12 md:w-24 md:h-24 rounded-full object-cover"
                        />
                        <span className="absolute bottom-0 right-0 flex p-2 bg-green-dark rounded-full">
                                    <MicrophoneIcon className="h-2 w-2 md:h-4 md:w-4 text-white"/>
                                </span>
                    </div>
                    <div className="flex-1">
                        <AudioPlayer
                            audio="https://d38nvwmjovqyq6.cloudfront.net/va90web25003/companions/Foundations%20of%20Rock/13.01.mp3"
                            time="1:30"
                        />
                    </div>
                </div>
                <div className="flex items-center gap-1">
                    <small className="chat-time">{getCurrentTime()}</small>
                    <img
                        src="read-double-check-icon.svg"
                        alt="Double check icon"
                        className="h-4 w-4 md:h-6 md:w-6"
                    />
                </div>
            </div>
        </div>,
        <div className="flex flex-col items-end animate-fade-in-fast">
            <div className="chat-box right">
                <p className="text-sm md:text-md">
                    Irina fue engañada por un <strong> mensaje directo </strong> de Instagram 📩 que
                    <strong> parecía de un amigo 🧑‍🤝‍🧑. </strong> Compartió un <strong> código de SMS 📲 </strong>
                    y los estafadores <strong> tomaron sus cuentas 🌐, enviando mensajes fraudulentos 🛑 </strong> a su
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
        </div>,

        <div className="flex flex-col items-center animate-fade-in-fast">
            <div className="chat-box center">
                <p className="text-sm md:text-md">
                    Ekaterina Zakharova se unió usando el enlace de invitación
                </p>
            </div>
        </div>,
        <div className="flex flex-col items-start animate-fade-in-fast">
            <div className="chat-box left">
                <p className="text-sm md:text-md">
                    <strong>Ekaterina Zakharova (44 años)</strong> <br/>
                    Víctima de Phishing en comercio electrónico
                </p>
                <small className="chat-time">{getCurrentTime()}</small>
            </div>
        </div>,
        <div className="flex flex-col items-start animate-fade-in-fast">
            <div className="chat-box left">
                <div className="flex items-center">
                    <div className="flex-1">
                        <AudioPlayer
                            audio="https://d38nvwmjovqyq6.cloudfront.net/va90web25003/companions/Foundations%20of%20Rock/13.01.mp3"
                            time="1:30"
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
        </div>,
        <div className="flex flex-col items-start animate-fade-in-fast">
            <div className="chat-box left">
                <p className="text-sm md:text-md">
                    Ekaterina, al realizar compras en Alibaba, una <strong> plataforma de comercio en internet
                    🌐🛒, </strong>
                    fue estafada por un <strong> supuesto proveedor </strong> que presentó <strong> documentos falsos.
                    📄❌ </strong>
                    Como consecuencia, realizó <strong> pagos por un pedido que nunca llegó. 💸🚫  </strong> Los estafadores crearon
                    <strong> perfiles y páginas de seguimiento fraudulentas, simulando ser legítimos </strong>  dentro de la plataforma confiable. 🔍🎭
                </p>
                <small className="chat-time">{getCurrentTime()}</small>
            </div>
        </div>,

        <div className="flex flex-col items-center animate-fade-in-fast">
            <div className="chat-box center">
                <p className="text-sm md:text-md">
                    Sheyla Choque se unió usando el enlace de invitación
                </p>
            </div>
        </div>,
        <div className="flex flex-col items-end animate-fade-in-fast">
            <div className="chat-box right">
                <p className="text-sm md:text-md">
                    <strong>Sheyla Choque Vizcarra (23 años)</strong> <br/>
                    Víctima de Phishing y Vishing
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
        </div>,
        <div className="flex flex-col items-end animate-fade-in-fast">
            <div className="chat-box right">
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
                            audio="https://d38nvwmjovqyq6.cloudfront.net/va90web25003/companions/Foundations%20of%20Rock/13.01.mp3"
                            time="1:30"
                        />
                    </div>
                </div>
                <div className="flex items-center gap-1">
                    <small className="chat-time">{getCurrentTime()}</small>
                    <img
                        src="read-double-check-icon.svg"
                        alt="Double check icon"
                        className="h-4 w-4 md:h-6 md:w-6"
                    />
                </div>
            </div>
        </div>,
        <div className="flex flex-col items-end animate-fade-in-fast">
            <div className="chat-box right">
                <p className="text-sm md:text-md">
                    Sheyla ingresó datos en una <strong> página falsa del BCP 🏦 </strong> y recibió una
                    <strong> llamada 📞 </strong> del supuesto banco. Proporcionó <strong> códigos de seguridad (TOKEN) 🔑 y perdió 5,000 soles 💸. </strong>
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
        </div>,

    ];


    const lastElementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (visibleElements < elements.length) {
            const timer = setTimeout(() => {
                setVisibleElements(visibleElements + 1);
            }, 800);
            return () => clearTimeout(timer);
        }
    }, [visibleElements, elements.length]);

    useEffect(() => {
        if (lastElementRef.current) {
            lastElementRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [visibleElements]);

    return (
        <>
            <div className="flex justify-center">
                <h1 className="chat-title-box">
                    Uno de los delitos de mayor crecimiento
                </h1>
            </div>
            <div className="flex flex-col items-center">
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
                        Conoce los testimonios de quienes han sufrido alguna de las modalidades de phishing y cómo han
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
                        {element}
                    </div>
                ))}
            </div>
        </>
    )
}