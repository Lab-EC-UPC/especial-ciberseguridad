import {useEffect, useRef, useState} from "react";

export default function ElPhishing () {
    const [visibleElements, setVisibleElements] = useState(0);

    const elements = [

        //IZQUIERDA
        <div className="flex flex-col items-start animate-fade-in-fast">
            <div className="chat-box left">
                <p className="text-sm md:text-md">
                    El phishing es un tipo de
                    <span className="font-bold"> ciberataque </span>
                    que
                    <span className="font-bold"> utiliza correos electrónicos 📧, mensajes de texto 📱 , llamadas telefonicas 📞 o sitios web fraudulentos 🌐 </span>
                    para engañar a las personas y persuadirlas a realizar acciones como:
                </p>
                <small className="chat-time">21:06</small>
            </div>
        </div>,
        <div className="flex flex-col items-start animate-fade-in-fast">
            <div className="chat-box left">
                <p className="text-sm md:text-md">
                    <ul className="list-disc list-inside">
                        <li>
                            Compartir
                            <span className="font-bold"> datos confidenciales🔑❌ </span>
                        </li>
                        <li>
                            Descargar
                            <span className="font-bold"> malwares </span>
                            (cualquier tipo de código o aplicacion dañina que puede afectar a un dispositivo)💻⚠️
                        </li>
                        <li>
                            Exponer su
                            <strong> informacion personal </strong>
                            a la ciberdelincuencia 🛡️🚨
                        </li>
                    </ul>

                </p>
                <small className="chat-time">18:50</small>
            </div>
        </div>,

        //DERECHA
        <div className="flex flex-col items-end animate-fade-in-fast">
            <div className="chat-box right">
                <p className="text-sm md:text-md">
                    Entre julio de 2023 y julio de 2024, en toda América Latina, se registraron más de
                    <strong> 697 millones de bloqueos de phishing 🛡️📧</strong>
                    , según el Panorama de Amenazas de Kaspersky 🌐, empresa de ciberseguridad 🔒 dedicada a
                    <strong> ofrecer soluciones y servicios de protección para usuarios y compañías </strong>
                    en todo el mundo 🌍👩‍💻.
                </p>
                <div className="flex items-center gap-1">
                    <small className="chat-time">18:50</small>
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
                    En ese mismo periodo, en el Perú ️ 🇵🇪 se registraron cerca de
                    <strong> 91 millones de ataques de phishing, </strong>
                    casi
                    <strong> cuatro veces </strong>
                    más que en el año anterior. 📈⚠️
                </p>
                <div className="flex items-center gap-1">
                    <small className="chat-time">18:50</small>
                    <img
                        src="read-double-check-icon.svg"
                        alt="Double check icon"
                        className="h-4 w-4 md:h-6 md:w-6"
                    />
                </div>
            </div>
        </div>,

        //Falta agregar el grafico de Flourish
        //GRÁFICO
        <div className="flex flex-col items-start animate-fade-in-fast">
            <div className="chat-box left">
                <p className="text-sm md:text-md">
                    Los países que mostraron un
                    <strong> mayor crecimiento </strong>
                    en la actividad de
                    <strong> phishing 🎣 </strong>
                    en 2024 en <strong> Latinoamérica </strong> son:

                </p>
                <small className="chat-time">21:06</small>
            </div>
        </div>,
        <div className="flex flex-col items-start animate-fade-in-fast">
            <div className="chat-box left">
                <p className="text-sm md:text-md">
                    Gráfico de Flourish
                </p>
                <small className="chat-time">21:06</small>
            </div>
        </div>,

        //Falta colocar los iconos correspondientes a cada tipo de phishing
        //GRUPO
        <div className="flex flex-col items-center">
            <div className="chat-box center">
                <img src="joined-chat-icon.svg"
                     alt="Joined chat icon"
                     className="w-16 h-16 md:w-24 md:h-24"
                />
                <h1 className="text-lg font-medium">
                    Grupo creado por el Phishing
                </h1>
                <small>
                    Grupo 3 miembros
                </small>
                <p className="text-sm md:text-md">
                    Conoce acerca de las modalidades de uno de los ciberdelitos más comunes de la región.
                </p>
            </div>
        </div>,

        //VISHING
        <div className="flex flex-col items-center pt-3">
            <img src="joined-chat-icon.svg"
                 alt="Joined chat icon"
                 className="w-24 h-24 md:w-32 md:h-32"
            />
            <div className="chat-box center">
                <p className="text-sm md:text-md">
                    El <strong> Vishing </strong> se unió usando el enlace de invitación
                </p>
            </div>
        </div>,
        <div className="flex flex-col items-start animate-fade-in-fast">
            <div className="chat-box left">
                <p className="text-sm md:text-md">
                    Derivado de las palabras <strong> "voice" 🎙️ y "phishing" 🎣, </strong>
                    este método combina una <strong>llamada telefónica 📞</strong> con
                    <strong> información que el delincuente obtuvo previamente </strong>del usuario mediante internet 🌐.
                </p>
                <small className="chat-time">21:06</small>
            </div>
        </div>,
        <div className="flex flex-col items-end animate-fade-in-fast">
            <div className="chat-box right">
                <p className="text-sm md:text-md">
                    El objetivo es <strong> engañarlo 🕵 </strong> para que proporcione un
                    <strong> token digital 🔑 o un código de verificación 📲  </strong> que le permita al ciberdelincuente acceder a sus
                    <strong> cuentas bancarias  💳 y realizar transacciones 💸.</strong>
                </p>
                <div className="flex items-center gap-1">
                    <small className="chat-time">18:50</small>
                    <img
                        src="read-double-check-icon.svg"
                        alt="Double check icon"
                        className="h-4 w-4 md:h-6 md:w-6"
                    />
                </div>
            </div>
        </div>,

        //SMISHING
        <div className="flex flex-col items-center pt-3">
            <img src="joined-chat-icon.svg"
                 alt="Joined chat icon"
                 className="w-24 h-24 md:w-32 md:h-32"
            />
            <div className="chat-box center">
                <p className="text-sm md:text-md">
                    El <strong> Smishing </strong> se unió usando el enlace de invitación
                </p>
            </div>
        </div>,
        <div className="flex flex-col items-start animate-fade-in-fast">
            <div className="chat-box left">
                <p className="text-sm md:text-md">
                    El smishing es un tipo de <strong> fraude en línea </strong> que consiste en el
                    <strong> envío de mensajes de texto falsos 📱✉️ </strong> para <strong> engañar </strong>
                    a las personas y obtener su <strong> información personal o financiera. 🔑💳🚨</strong>
                </p>
                <small className="chat-time">21:06</small>
            </div>
        </div>,
        <div className="flex flex-col items-end animate-fade-in-fast">
            <div className="chat-box right">
                <p className="text-sm md:text-md">
                    Los <strong> ciberdelincuentes </strong>que realizan smishing se hacen pasar por
                    <strong> entidades legítimas 🏦📞, </strong> como <strong> bancos, empresas o instituciones públicas, </strong>
                    para conseguir sus objetivos. 🎯💳🚨
                </p>
                <div className="flex items-center gap-1">
                    <small className="chat-time">18:50</small>
                    <img
                        src="read-double-check-icon.svg"
                        alt="Double check icon"
                        className="h-4 w-4 md:h-6 md:w-6"
                    />
                </div>
            </div>
        </div>,
        <div className="flex flex-col items-start animate-fade-in-fast">
            <div className="chat-box left">
                <p className="text-sm md:text-md">
                    Según un estudio realizado en 10 países por el <strong> Mobile Ecosystem Forum, </strong>
                    una organización global que analiza las problemáticas del creciente ecosistema móvil,
                    <strong> 4 de cada 10 consumidores </strong> enfrentaron al menos
                    <strong> un intento de estafa por SMS </strong> en 2023. 📱🚨📊
                </p>
                <small className="chat-time">21:06</small>
            </div>
        </div>,

        //PHARMING
        <div className="flex flex-col items-center pt-3">
            <img src="joined-chat-icon.svg"
                 alt="Joined chat icon"
                 className="w-24 h-24 md:w-32 md:h-32"
            />
            <div className="chat-box center">
                <p className="text-sm md:text-md">
                    El <strong> Pharming </strong> se unió usando el enlace de invitación
                </p>
            </div>
        </div>,
        <div className="flex flex-col items-start animate-fade-in-fast">
            <div className="chat-box left">
                <p className="text-sm md:text-md">
                    Este cibercrimen involucra el <strong> uso de malware,  </strong> que
                    <strong> redirige automáticamente a la víctima hacia sitios web falsos. 💻⚠️🌐 </strong>
                </p>
                <small className="chat-time">21:06</small>
            </div>
        </div>,
        <div className="flex flex-col items-end animate-fade-in-fast">
            <div className="chat-box right">
                <p className="text-sm md:text-md">
                    Las personas <strong> introducen allí sus datos de inicio de sesión o información personal,  </strong>
                    los cuales son <strong> recolectados </strong> sin que puedan percatarse de que se
                    <strong> trata de un fraude. 🔑💻❌</strong>
                </p>
                <div className="flex items-center gap-1">
                    <small className="chat-time">18:50</small>
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