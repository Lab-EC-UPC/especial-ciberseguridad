import {useEffect, useRef, useState} from "react";
import getCurrentTime from "../components/CurrentTime.ts";
import PrevFabButton from "../components/PrevFabButton.tsx";
import NextFabButton from "../components/NextFabButton.tsx";
import LoadingDots from "../components/LoadingDots.tsx";
import { useTranslation } from "react-i18next";

interface Props {
    visibleElements: number;
    setVisibleElements: (index: number) => void;
}

export default function OpinionesSobreLaCiberdelincuencia({visibleElements,setVisibleElements} :  Props) {
    const [isLoading, setIsLoading] = useState(false);
    const lastElementRef = useRef<HTMLDivElement>(null);

    const { t } = useTranslation(["opiniones"]);

    const elements = [

        {
            cooldown: 800,
            alignment: "left",
            content:
                <div className="flex flex-col items-start animate-fade-in-fast">
                    <div className="chat-box left relative">
                        {/* Nueva área de imagen circular y nombre */}
                        <div className="flex items-center gap-2 mb-1">
                            <div className="rounded-full bg-gray-300 overflow-hidden aspect-square w-10 min-w-[40px] min-h-[40px] ">
                                <img
                                    src="especialistas/diego.webp" // Reemplazar con URL dinámica
                                    alt="Avatar Usuario 1"
                                    className="w-full h-full object-cover aspect-square"
                                />
                            </div>
                            <span className="text-sm font-bold text-gray-700">{t("nameDiego")}</span>
                        </div>
                        <p className="text-sm md:text-md">
                        {t("txtDiego")}
                        </p>
                        <div className="flex items-center gap-1">
                            <small className="chat-time">{getCurrentTime()}</small>
                        </div>
                    </div>
                </div>
        },
        {
            cooldown: 2000,
            alignment: "center",
            content:
                <div className="flex flex-col items-center animate-fade-in-fast">
                    <div className="chat-box center">
                        <p className="text-sm md:text-md">
                        {t("joinJoseCarlos")}
                        </p>
                    </div>
                </div>
        },
        {
            cooldown: 800,
            alignment: "right",
            content:
                <div className="flex flex-col items-end animate-fade-in-fast">
                    <div className="chat-box right">
                        <div className="flex items-center gap-2 mb-1 justify-end">
                            <span
                                className="text-sm font-bold text-gray-700">{t("nameJoseCarlos")}</span>
                            <div className="rounded-full bg-gray-300 overflow-hidden aspect-square w-10 min-w-[40px] min-h-[40px]">
                                <img
                                    src="especialistas/jose.webp" // Reemplazar con URL dinámica
                                    alt="Avatar Tú"
                                    className="w-full h-full object-cover aspect-square"
                                />
                            </div>
                        </div>
                        <p className="text-sm md:text-md">
                        {t("txtJoseCarlos")}
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
            cooldown: 2000,
            alignment: "center",
            content:
                <div className="flex flex-col items-center animate-fade-in-fast">
                    <div className="chat-box center">
                        <p className="text-sm md:text-md">
                        {t("joinVictor")}
                        </p>
                    </div>
                </div>
        },
        {
            cooldown: 800,
            alignment: "left",
            content:
                <div className="flex flex-col items-start animate-fade-in-fast">
                    <div className="chat-box left relative">
                        {/* Nueva área de imagen circular y nombre */}
                        <div className="flex items-center gap-2 mb-1">
                            <div className="rounded-full bg-gray-300 overflow-hidden aspect-square w-10 min-w-[40px] min-h-[40px]">
                                <img
                                    src="especialistas/victor.webp" // Reemplazar con URL dinámica
                                    alt="Avatar Usuario 1"
                                    className="w-full h-full object-cover aspect-square"
                                />
                            </div>
                            <span className="text-sm font-bold text-gray-700">{t("nameVictor")}</span>
                        </div>
                        <p className="text-sm md:text-md">
                        {t("txtVictor")}
                        </p>
                        <div className="flex items-center gap-1">
                            <small className="chat-time">{getCurrentTime()}</small>
                        </div>
                    </div>
                </div>
        },
        {
            cooldown: 2000,
            alignment: "center",
            content:
                <div className="flex flex-col items-center animate-fade-in-fast">
                    <div className="chat-box center">
                        <p className="text-sm md:text-md">
                        {t("joinErick")}
                        </p>
                    </div>
                </div>
        },
        {
            cooldown: 800,
            alignment: "right",
            content:
                <div className="flex flex-col items-end animate-fade-in-fast">
                    <div className="chat-box right">
                        <div className="flex items-center gap-2 mb-1 justify-end">
                            <span
                                className="text-sm font-bold text-gray-700">{t("nameErick")}</span>
                            <div className="rounded-full bg-gray-300 overflow-hidden aspect-square w-10 min-w-[40px] min-h-[40px]">
                                <img
                                    src="especialistas/erick.webp" // Reemplazar con URL dinámica
                                    alt="Avatar Tú"
                                    className="w-full h-full object-cover aspect-square"
                                />
                            </div>
                        </div>
                        <p className="text-sm md:text-md">
                        {t("txtErick")}
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
            cooldown: 2000,
            alignment: "center",
            content:
                <div className="flex flex-col items-center animate-fade-in-fast">
                    <div className="chat-box center">
                        <p className="text-sm md:text-md">
                        {t("joinJorge")}
                        </p>
                    </div>
                </div>
        },

        {
            cooldown: 800,
            alignment: "left",
            content:
                <div className="flex flex-col items-start animate-fade-in-fast">
                    <div className="chat-box left relative">
                        {/* Nueva área de imagen circular y nombre */}
                        <div className="flex items-center gap-2 mb-1">
                            <div className="rounded-full bg-gray-300 overflow-hidden aspect-square w-10 min-w-[40px] min-h-[40px]">
                                <img
                                    src="especialistas/jorge.webp" // Reemplazar con URL dinámica
                                    alt="Avatar Usuario 1"
                                    className="w-full h-full object-cover aspect-square"
                                />
                            </div>
                            <span className="text-sm font-bold text-gray-700">{t("nameJorge")}</span>
                        </div>
                        <p className="text-sm md:text-md">
                        {t("txtJorge")}
                        </p>
                        <div className="flex items-center gap-1">
                            <small className="chat-time">{getCurrentTime()}</small>
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

    return (
        <div className="flex flex-col h-full justify-between">
            <div className="p-4">
                <div className="flex justify-center animate-fade-in-fast">
                    <h1 className="chat-title-box">
                    {t("titulo")}
                    </h1>
                </div>
                <div className="flex flex-col items-center animate-fade-in-fast">
                    <div className="chat-box center">
                        <img src="chat-icons/6.webp"
                             alt="Joined chat icon"
                             className="w-16 h-16 md:w-24 md:h-24"
                        />
                        <h1 className="text-lg font-medium">
                        {t("lead1")}
                        </h1>
                        <small>
                        {t("lead2")}
                        </small>
                        <p className="text-sm md:text-md">
                        {t("lead3")}
                        </p>
                    </div>
                    <div className="chat-box center">
                        <p className="text-sm md:text-md">
                        {t("joinDiego")}
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
                        <LoadingDots alignment={elements[visibleElements].alignment} />
                    )}
                </div>
            </div>
            <div className="sticky bottom-0 flex justify-between w-full items-center z-10 p-2">
                <PrevFabButton url="testimonios"/>
                <NextFabButton url="prevencion-y-denuncia"/>
            </div>
        </div>
    );
}