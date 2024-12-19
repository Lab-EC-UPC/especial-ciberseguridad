import NextFabButton from "../components/NextFabButton.tsx";
import {useEffect, useRef, useState} from "react";
import getCurrentTime from "../components/CurrentTime.ts";
import PrevFabButton from "../components/PrevFabButton.tsx";
import LoadingDots from "../components/LoadingDots.tsx";
import {useTranslation} from "react-i18next";

interface Props {
    visibleElements: number;
    setVisibleElements: (index: number) => void;
}

export default function CiberAlertaPeru({visibleElements,setVisibleElements} :  Props) {
    const [isLoading, setIsLoading] = useState(false);
    const lastElementRef = useRef<HTMLDivElement>(null);
    const{ t } = useTranslation(["ciberalerta"])
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
                                src="https://lab-ec-upc.github.io/assets/especial-ciberseguridad/videos/teaser_v2.webm"
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
                            {t("SegundoChat1")} <span className="font-bold">{t("SegundoChat2")} </span> 🌐 {t("SegundoChat3")} <span className="font-bold">{t("SegundoChat4")}</span> {t("SegundoChat5")} 🛒, {t("SegundoChat6")} <span className="font-bold">{t("SegundoChat7")} </span>.🦠
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
        <div className="flex flex-col h-full justify-between">
            <div className="p-4">
                <div className="flex justify-center animate-fade-in-fast">
                    <h1 className="chat-title-box">
                        {t("tituloCiber")}
                    </h1>
                </div>
                <div className="flex flex-col items-start animate-fade-in-fast">
                    <div className="chat-box left">
                        <p className="text-sm md:text-md">
                            <span className="font-bold">{t("PrimerChat1")}</span> {t("PrimerChat2")} <span className="font-bold"> {t("PrimerChat3")} </span> 🌐 {t("PrimerChat4")} <span
                            className="font-bold"> {t("PrimerChat5")} </span> 💻📱
                            {t("PrimerChat6")} <span className="font-bold">{t("PrimerChat7")}</span> 🏢 {t("PrimerChat8")} <span
                            className="font-bold"> {t("PrimerChat9")} </span>👤.
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
            <div className="sticky bottom-0 flex justify-between w-full items-center z-10 p-2">
                <PrevFabButton url=""/>
                <NextFabButton url="un-poco-de-data"/>
            </div>
        </div>
    );
}
