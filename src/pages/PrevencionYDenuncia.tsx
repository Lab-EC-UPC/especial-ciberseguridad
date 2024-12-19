import { useEffect, useRef, useState } from "react";
import getCurrentTime from "../components/CurrentTime.ts";
import PrevFabButton from "../components/PrevFabButton.tsx";
import NextFabButton from "../components/NextFabButton.tsx";
import LoadingDots from "../components/LoadingDots.tsx";
import { useTranslation } from "react-i18next";

interface Props {
    visibleElements: number;
    setVisibleElements: (index: number) => void;
}

export default function PrevencionYDenuncia({ visibleElements, setVisibleElements }: Props) {
    const [isLoading, setIsLoading] = useState(false);
    const lastElementRef = useRef<HTMLDivElement>(null);

    const { t } = useTranslation(["prevencion"]);

    const elements = [
        {
            cooldown: 800,
            alignment: "left",
            content:
                <div className="flex flex-col items-start animate-fade-in-fast">
                    <div className="chat-box left">
                        <p className="text-sm md:text-md">
                            {t("primer1")}
                            <span className="font-bold">{t("primer2")}</span>
                            {t("primer3")}
                            <span className="font-bold">{t("primer4")}</span>
                            {t("primer5")}
                            <span className="font-bold">{t("primer6")}</span>
                            {t("primer7")}
                            <span className="font-bold">{t("primer8")}</span> ⚠️❌
                        </p>
                        <div className="flex items-center gap-1">
                            <small className="chat-time">{getCurrentTime()}</small>

                        </div>
                    </div>
                </div>
        },
        {
            cooldown: 800,
            alignment: "center",
            content:
                <div className="flex justify-center">
                    <h1 className="chat-title-box">
                        {t("titulo2")}
                    </h1>
                </div>
        },
        {
            cooldown: 800,
            alignment: "right",
            content:
                <div className="flex flex-col items-start animate-fade-in-fast">
                    <div className="chat-box left">
                        <p className="text-sm md:text-md">
                        {t("segundo1")}
                            <span className="font-bold">{t("segundo2")}</span> 
                            {t("segundo3")}
                            <span className="font-bold">{t("segundo4")}</span>
                            {t("segundo5")}
                            <span className="font-bold">{t("segundo6")}</span> 
                            {t("segundo7")}
                            <span className="font-bold">{t("segundo8")}</span> 📞📧.
                        </p>
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
                            📞 <span className="font-bold">{t("tercero")}</span> 💻🔍
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
            cooldown: 800,
            alignment: "right",
            content:
                <div className="flex flex-col items-end animate-fade-in-fast">
                    <div className="chat-box right">
                        <p className="text-sm md:text-md">
                        {t("cuarto")}
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
            cooldown: 800,
            alignment: "left",
            content:
                <div className="flex flex-col items-end animate-fade-in-fast">
                    <div className="chat-box right">
                        <p className="text-sm md:text-md">
                        {t("quinto1")}
                            <br></br>
                            {t("quinto2")}
                            <br></br>
                            {t("quinto3")}
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
            cooldown: 800,
            alignment: "left",
            content:
                <div className="flex flex-col items-start animate-fade-in-fast">
                    <div className="chat-box left">
                        <p className="text-sm md:text-md">
                            📞 <span className="font-bold">{t("sexto")}</span>
                        </p>
                        <div className="flex items-center gap-1">
                            <small className="chat-time">{getCurrentTime()}</small>

                        </div>
                    </div>
                </div>
        },
        {
            cooldown: 800,
            alignment: "left",
            content:
                <div className="flex flex-col items-start animate-fade-in-fast">
                    <div className="chat-box left">
                        <p className="text-sm md:text-md">
                            📞 {t("septimo1")}<span className="font-bold">
                            {t("septimo2")}
                                </span> 
                                {t("septimo3")}
                                <br></br>
                            {t("septimo4")}
                            
                            <span className="font-bold">
                                {t("septimo5")}</span>
                        </p>
                        <div className="flex items-center gap-1">
                            <small className="chat-time">{getCurrentTime()}</small>
                        </div>
                    </div>
                </div>
        },
        {
            cooldown: 800,
            alignment: "left",
            content:
                <div className="flex flex-col items-start animate-fade-in-fast">
                    <div className="chat-box left">
                        <p className="text-sm md:text-md">
                            <span className="font-bold">🔗 {t("octavo1")}</span> <a href="https://portal.mpfn.gob.pe/denuncias-en-linea" target="_blank" style={{ color: "#3497f9", textDecoration: "underline" }}>{t("octavo2")}</a>
                        </p>
                        <div className="flex items-center gap-1">
                            <small className="chat-time">{getCurrentTime()}</small>
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
        <div className="flex flex-col h-full justify-between">
            <div className="p-4">
                <div className="flex justify-center animate-fade-in-fast">
                    <h1 className="chat-title-box">
                        {t("titulo1")}
                    </h1>
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
                <PrevFabButton url="opiniones-sobre-la-ciberdelincuencia" />
                <NextFabButton url="verificador-de-links" />
            </div>
        </div>
    )
}