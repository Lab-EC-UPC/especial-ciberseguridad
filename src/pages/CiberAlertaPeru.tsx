import NextFabButton from "../components/NextFabButton.tsx";
import {useEffect, useRef, useState} from "react";
import getCurrentTime from "../components/CurrentTime.ts";
import PrevFabButton from "../components/PrevFabButton.tsx";
import LoadingDots from "../components/LoadingDots.tsx";

interface Props {
    visibleElements: number;
    setVisibleElements: (index: number) => void;
}

export default function CiberAlertaPeru({visibleElements,setVisibleElements} :  Props) {
    const [isLoading, setIsLoading] = useState(false);
    const lastElementRef = useRef<HTMLDivElement>(null);

    const elements = [
        {
            cooldown: 800,
            alignment: "left",
            content:
                <div className="flex flex-col items-start animate-fade-in-fast">
                    <div className="chat-box left">
                        <video
                            controls
                            autoPlay
                            muted
                            playsInline
                        >
                            <source
                                src="https://lab-ec-upc.github.io/assets/especial-ciberseguridad/videos/video_teaser_recortado.webm"
                                type="video/webm"
                            />
                        </video>
                        <div className="flex items-center gap-1">
                            <small className="chat-time">{getCurrentTime()}</small>
                        </div>
                    </div>
                </div>
        },
        {
            cooldown: 800,
            alignment: "right",
            content:
                <div className="flex flex-col items-end animate-fade-in-fast">
                    <div className="chat-box right">
                        <p className="text-sm md:text-md">
                            Este tipo de delito ha aumentado debido a la <span className="font-bold">expansión
                    del internet </span> 🌐 y el crecimiento del <span className="font-bold">comercio
                    electrónico</span> 🛒, que se potenció a <span className="font-bold">raíz de la
                    pandemia </span>.🦠
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

    // useEffect(() => {
    //     if (lastElementRef.current) {
    //         lastElementRef.current.scrollIntoView({ behavior: 'smooth' });
    //     }
    // }, [visibleElements]);

    return (
        <div className="flex flex-col h-full justify-between p-4">
            <div>
                <div className="flex justify-center animate-fade-in-fast">
                    <h1 className="chat-title-box">
                        ¿Qué es la ciberdelincuencia?
                    </h1>
                </div>
                <div className="flex flex-col items-start animate-fade-in-fast">
                    <div className="chat-box left">
                        <p className="text-sm md:text-md">
                            La <span className="font-bold">ciberdelincuencia</span> engloba <span className="font-bold"> todos los delitos cometidos cometidos
                        por medio de internet </span> 🌐 y las <span
                            className="font-bold"> tecnologías digitales </span> 💻📱
                            que vulneran la seguridad de <span className="font-bold">empresas</span> 🏢 y <span
                            className="font-bold"> usuarios </span>👤.
                        </p>
                        <small className="chat-time">{getCurrentTime()}</small>
                    </div>
                </div>
                <div>
                    {elements.slice(0, visibleElements).map((element, index) => (
                        <div key={index} ref={index === visibleElements - 1 ? lastElementRef : null}>
                            {element["content"]}
                        </div>
                    ))}
                    {isLoading && (
                        <LoadingDots alignment={elements[visibleElements].alignment} />
                    )}
                </div>
            </div>
            <div className="sticky bottom-0 flex justify-between w-full items-center z-10">
                <PrevFabButton url=""/>
                <NextFabButton url="un-poco-de-data"/>
            </div>
        </div>
    );
}
