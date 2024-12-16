import { useEffect, useState } from "react";

export default function CiberAlertaPeru() {
    const [visibleElements, setVisibleElements] = useState(0);

    const elements = [
        // CHAT DERECHA (CON ANIMACIÓN)
        <div className="flex flex-col items-end animate-fade-in-fast">
            <div className="chat-box right">
                <p className="text-sm md:text-md">
                    Este tipo de delito ha aumentado debido a la <span className="font-bold">expansión
                    del internet </span> 🌐 y el crecimiento del <span className="font-bold">comercio
                    electrónico</span> 🛒, que se potenció a <span className="font-bold">raíz de la
                    pandemia </span>.🦠
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
                    ¿Qué es la ciberdelincuencia?
                </h1>
            </div>

            {/* CHAT IZQUIERDO (SIN ANIMACIÓN) */}
            <div className="flex flex-col items-start">
                <div className="chat-box left">
                    <p className="text-sm md:text-md">
                        La <span className="font-bold">ciberdelincuencia</span> engloba <span className="font-bold"> todos los delitos cometidos cometidos
                        por medio de internet </span> 🌐 y las <span
                        className="font-bold"> tecnologías digitales </span> 💻📱
                        que vulneran la seguridad de <span className="font-bold">empresas</span> 🏢 y <span
                        className="font-bold"> usuarios </span>👤.
                    </p>
                    <small className="chat-time">18:50</small>
                </div>
            </div>

            {/* IMAGEN IZQUIERDA (SIN ANIMACIÓN) */}
            {/*<div className="flex flex-col items-start">*/}
            {/*    <div className="chat-box right">*/}
            {/*        <img*/}
            {/*            src="https://elcomercio.pe/resizer/wRFrqrlVBC0G6LfTG3p1k_C_9ks=/980x528/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/S5QSVVMMIJERFA3MR6OCQB4CPI.jpg"*/}
            {/*            alt="Imagen de ejemplo"*/}
            {/*            className="w-full"*/}
            {/*        />*/}
            {/*        <div className="flex items-center gap-1">*/}
            {/*            <small className="chat-time">18:50</small>*/}
            {/*            <img*/}
            {/*                src="read-double-check-icon.svg"*/}
            {/*                alt="Double check icon"*/}
            {/*                className="h-4 w-4 md:h-6 md:w-6"*/}
            {/*            />*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/* Elementos con animación y retraso */}
            <div>
                {elements.slice(0, visibleElements).map((element, index) => (
                    <div key={index}>{element}</div>
                ))}
            </div>
        </div>
    );
}
