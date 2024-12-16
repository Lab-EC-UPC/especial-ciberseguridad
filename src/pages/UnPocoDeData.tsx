import {useEffect, useState} from "react";

export default function UnPocoDeData () {
    const [visibleElements, setVisibleElements] = useState(0);

    const elements = [
        // CHAT DERECHA (CON ANIMACIÓN)
        <div className="flex flex-col items-end animate-fade-in-fast">
            <div className="chat-box right">
                <p className="text-sm md:text-md">
                    Solo el <span className="font-bold">24% de usuarios en la región </span>(Latinoamérica)
                    poseen un <span className="font-bold">software de seguridad instalado </span>
                    en sus dispositivos. 🔒📉💻
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
        // 2do CHAT IZQUIERDO (CON ANIMACIÓN)
        <div className="flex flex-col items-start animate-fade-in-fast">
            <div className="chat-box left">
                <p className="text-sm md:text-md">
                    Según Cybersecurity Ventures, en 2015 la ciberdelincuencia tenía un costo de <span className="font-bold">US$3 billones</span>. 💻💸
                </p>
                <small className="chat-time">18:50</small>
            </div>
        </div>,
        // SEGUNDO CHAT DERECHA (CON ANIMACIÓN)
        <div className="flex flex-col items-end animate-fade-in-fast">
            <div className="chat-box right">
                <p className="text-sm md:text-md">
                    Se estima que para el 2025, el costo de los daños de la ciberdelincuencia será de <span className="font-bold">US$10 billones</span>. 💰🌐⚠️
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
        // Tercer CHAT IZQUIERDO (CON ANIMACIÓN)
        <div className="flex flex-col items-start animate-fade-in-fast">
            <div className="chat-box left">
                <p className="text-sm md:text-md">
                    Esto convierte a la ciberdelincuencia en la <span className="font-bold">tercera economía </span>
                    más grande del mundo 🌍, solo detrás de <span className="font-bold">Estados Unidos</span> 🇺🇸 y <span className="font-bold">China</span> 🇨🇳.

                </p>
                <small className="chat-time">18:50</small>
            </div>
        </div>,
        // TERCER CHAT DERECHA (CON ANIMACIÓN)
        <div className="flex flex-col items-end animate-fade-in-fast">
            <div className="chat-box right">
                <p className="text-sm md:text-md">
                    En el 2025, el costo de los daños de la ciberdelincuencia será superior incluso
                    al PIB combinado de Alemania, Italia y Canadá. 💰🌐📉
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
        // Cuarto CHAT DERECHA (CON ANIMACIÓN)
        <div className="flex flex-col items-end animate-fade-in-fast">
            <div className="chat-box right">
                <p className="text-sm md:text-md">
                    GRAFICA
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
        // Cuarto CHAT IZQUIERDO (CON ANIMACIÓN)
        <div className="flex flex-col items-start animate-fade-in-fast">
            <div className="chat-box left">
                <p className="text-sm md:text-md">
                    Entre enero y junio de 2024, se reportaron <span className="font-bold">20,704 delitos
                    informáticos </span>en el Perú. 📈💻 Esta cifra es casi <span className="font-bold">seis veces más alta</span>
                    que la registrada en el <span className="font-bold">mismo periodo del 2020. </span>⚠️🌐
                </p>
                <small className="chat-time">18:50</small>
            </div>
        </div>,
        // QUINTO CHAT Izquierda (CON ANIMACIÓN)
        <div className="flex flex-col items-end animate-fade-in-fast">
            <div className="chat-box left">
                <p className="text-sm md:text-md">
                    Grafico
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
        // Quinto CHAT DERECHA (CON ANIMACIÓN)
        <div className="flex flex-col items-end animate-fade-in-fast">
            <div className="chat-box right">
                <p className="text-sm md:text-md">
                    <span className="font-bold">¿Qué delito informático se denuncia más?</span>⚖️💻
                </p>
                <div className="flex items-center gap-1">
                    <small className="chat-time">18:50</small>
                </div>
            </div>
        </div>,
        // Sexto CHAT DERECHA (CON ANIMACIÓN)
        <div className="flex flex-col items-end animate-fade-in-fast">
            <div className="chat-box right">
                <p className="text-sm md:text-md">
                    La División de Investigación de Delitos de Alta Tecnología (Divindat) de la PNP 📊💻 recibió
                    <span className="font-bold"> 27,934 casos de delitos informáticos</span> en 2024. De estos,
                    <span className="font-bold"> 19,067 fueron fraudesinformáticos</span> 💳, representando el
                    <span className="font-bold"> 68.3% del total</span>. ⚠️📈
                </p>
                <div className="flex items-center gap-1">
                    <small className="chat-time">18:50</small>
                </div>
            </div>
        </div>,
        // Setimo CHAT DERECHA (CON ANIMACIÓN)
        <div className="flex flex-col items-end animate-fade-in-fast">
            <div className="chat-box right">
                <p className="text-sm md:text-md">
                    GRAFICA
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
        </div>
    ];


    useEffect(() => {
        if (visibleElements < elements.length) {
            const timer = setTimeout(() => {
                setVisibleElements(visibleElements + 1);
            }, 800); // Cada elemento aparecerá con un retraso de 800 ms
            return () => clearTimeout(timer);
        }
    }, [visibleElements, elements.length]);

    return (
        <div>
            {/* TÍTULO (SIN ANIMACIÓN) */}
            <div className="flex justify-center">
                <h1 className="chat-title-box">
                    La ciberdelincuencia en cifras
                </h1>
            </div>

            {/* CHAT IZQUIERDO (SIN ANIMACIÓN) */}
            <div className="flex flex-col items-start">
                <div className="chat-box left">
                    <p className="text-sm md:text-md">
                        En el año 2023, la La <span className="font-bold">Policía Nacional del Perú (PNP) </span>
                        registró un promedio de <span className="font-bold">107 intentos de ciberataques por minuto</span>. 💻⚠️👮‍♂️
                    </p>
                    <small className="chat-time">18:50</small>
                </div>
            </div>


            {/* Elementos con animación y retraso */}
            <div>
                {elements.slice(0, visibleElements).map((element, index) => (
                    <div key={index}>{element}</div>
                ))}
            </div>
        </div>
    );
}
