import {useEffect, useRef, useState} from "react";
import {MicrophoneIcon} from "@heroicons/react/24/solid";
import AudioPlayer from "../components/AudioPlayer.tsx";
import getCurrentTime from "../components/CurrentTime.ts";
import PrevFabButton from "../components/PrevFabButton.tsx";
import NextFabButton from "../components/NextFabButton.tsx";
import LoadingDots from "../components/LoadingDots.tsx";
import {useTranslation} from "react-i18next";

interface Props {
    visibleElements: number;
    setVisibleElements: (index: number) => void;
}

export default function Testimonios ({visibleElements,setVisibleElements} :  Props) {
    const [isLoading, setIsLoading] = useState(false);
    const [currentAudioId, setCurrentAudioId] = useState<string | null>(null);
    const lastElementRef = useRef<HTMLDivElement>(null);
    const {t} = useTranslation(["testimonios"]);

    const elements = [

        {
            cooldown: 800,
            alignment: "left",
            content: (
                <div className="flex flex-col items-start animate-fade-in-fast">
                    <div className="chat-box left relative p-3 bg-white shadow-lg rounded-lg">
                        {/* Encabezado: Nombre y Foto en el extremo izquierdo */}
                        <div className="flex justify-start items-center gap-2 mb-2">
                            <div className="rounded-full bg-gray-300 overflow-hidden aspect-square w-10 min-w-[40px] min-h-[40px]">
                                <img
                                    src="testimonios/1.webp" // Reemplazar con URL dinámica
                                    alt="Avatar Jessica"
                                    className="w-full h-full object-cover aspect-square"
                                />
                            </div>
                            <span className="text-sm font-bold text-gray-700">{t("aud1")}</span>
                        </div>
                        {/* Contenido del mensaje */}
                        <div className="flex items-center">
                            <div className="flex-1">
                                <AudioPlayer
                                    audio="https://lab-ec-upc.github.io/assets/especial-ciberseguridad/audios-testimonios/jessica.mp3"
                                    time="1.29"
                                    currentAudioId={currentAudioId}
                                    setCurrentAudioId={setCurrentAudioId}
                                    audioId="1"
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
            cooldown: 800,
            alignment: "left",
            content:
                <div className="flex flex-col items-start animate-fade-in-fast">
                    <div className="chat-box left">
                        <div className="flex items-center gap-2 mb-1">
                            <div className="rounded-full bg-gray-300 overflow-hidden aspect-square w-10 min-w-[40px] min-h-[40px]">
                                <img
                                    src="testimonios/1.webp" // Reemplazar con URL dinámica
                                    alt="Avatar Usuario 1"
                                    className="w-full h-full object-cover aspect-square"
                                />
                            </div>
                            <span className="text-sm font-bold text-gray-700">{t("aud1")}</span>
                        </div>
                        <p className="text-sm md:text-md">
                            {t("jess-1")}
                            <strong>{t("jess-2")}</strong>

                            {t("jess-3")}
                            <strong>{t("jess-4")}</strong>
                            {t("jess-5")}
                        </p>
                        <small className="chat-time">{getCurrentTime()}</small>
                    </div>
                </div>
        },
        {
            cooldown: 800,
            alignment: "center",
            content:
                <div className="flex flex-col items-center animate-fade-in-fast">
                    <div className="chat-box center">
                        <p className="text-sm md:text-md">
                            {t("inv-2")}
                        </p>
                    </div>
                </div>
        },

        {
            cooldown: 800,
            alignment: "right",
            content: (
                <div className="flex flex-col items-end animate-fade-in-fast">
                    <div className="chat-box right relative p-3 bg-white shadow-lg rounded-lg">
                        {/* Encabezado: Nombre y Foto en el extremo derecho */}
                        <div className="flex justify-end items-center gap-2 mb-2">
                            <span className="text-sm font-bold text-gray-700">{t("aud2")}</span>
                            <div className="rounded-full bg-gray-300 overflow-hidden aspect-square w-10 min-w-[40px] min-h-[40px]">
                                <img
                                    src="testimonios/2.webp" // Reemplazar con URL dinámica
                                    alt="Avatar Tú"
                                    className="w-full h-full object-cover aspect-square"
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
                                    time="0:43"
                                    currentAudioId={currentAudioId}
                                    setCurrentAudioId={setCurrentAudioId}
                                    audioId="2"
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
            cooldown: 800,
            alignment: "right",
            content:
                <div className="flex flex-col items-end animate-fade-in-fast">
                    <div className="chat-box right">
                        <div className="flex items-center gap-2 mb-1 justify-end">
                            <span className="text-sm font-bold text-gray-700">{t("aud2")}</span>
                            <div className="rounded-full bg-gray-300 overflow-hidden aspect-square w-10 min-w-[40px] min-h-[40px]">
                                <img
                                    src="testimonios/2.webp" // Reemplazar con URL dinámica
                                    alt="Avatar Tú"
                                    className="w-full h-full object-cover aspect-square"
                                />
                            </div>
                        </div>

                        <p className="text-sm md:text-md">
                            {t("irin-1")}
                            <strong>{t("irin-2")}</strong>
                            {t("irin-3")}
                            <strong>{t("irin-4")}</strong>
                            {t("irin-5")}
                            <strong>{t("irin-6")}</strong>
                            {t("irin-7")}
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
                            {t("inv-3")}
                        </p>
                    </div>
                </div>
        },
        {
            cooldown: 800,
            alignment: "left",
            content: (
                <div className="flex flex-col items-start animate-fade-in-fast">
                    <div className="chat-box left relative p-3 bg-white shadow-lg rounded-lg">
                        {/* Encabezado: Nombre y Foto en el extremo izquierdo */}
                        <div className="flex justify-start items-center gap-2 mb-2">
                            <div className="rounded-full bg-gray-300 overflow-hidden aspect-square w-10 min-w-[40px] min-h-[40px]">
                                <img
                                    src="testimonios/3.webp" // Reemplazar con URL dinámica
                                    alt="Avatar"
                                    className="w-full h-full object-cover aspect-square"
                                />
                            </div>
                            <span className="text-sm font-bold text-gray-700">{t("aud3")}</span>
                        </div>
                        {/* Contenido del mensaje */}
                        <div className="flex items-center">
                            <div className="flex-1">
                                <AudioPlayer
                                    audio="https://lab-ec-upc.github.io/assets/especial-ciberseguridad/audios-testimonios/ekaterina.m4a"
                                    time="00:55"
                                    currentAudioId={currentAudioId}
                                    setCurrentAudioId={setCurrentAudioId}
                                    audioId="3"
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
            cooldown: 800,
            alignment: "left",
            content:
                <div className="flex flex-col items-start animate-fade-in-fast">
                    <div className="chat-box left">
                        <div className="flex items-center gap-2 mb-1">
                            <div className="rounded-full bg-gray-300 overflow-hidden aspect-square w-10 min-w-[40px] min-h-[40px]">
                                <img
                                    src="testimonios/3.webp" // Reemplazar con URL dinámica
                                    alt="Avatar Usuario 1"
                                    className="w-full h-full object-cover aspect-square"
                                />
                            </div>
                            <span className="text-sm font-bold text-gray-700">{t("aud3")}</span>
                        </div>

                        <p className="text-sm md:text-md">
                            {t("ekat-1")}
                            <strong>{t("ekat-2")}</strong>

                            {t("ekat-3")}
                            <strong>{t("ekat-4")}</strong>
                            {t("ekat-5")}
                            <strong>{t("ekat-6")}</strong>
                            {t("ekat-7")}
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
                            {t("inv-4")}
                        </p>
                    </div>
                </div>
        },
        {
            cooldown: 800,
            alignment: "right",
            content: (
                <div className="flex flex-col items-end animate-fade-in-fast">
                    <div className="chat-box right relative p-3 bg-white shadow-lg rounded-lg">
                        {/* Encabezado: Nombre y Foto en el extremo derecho */}
                        <div className="flex justify-end items-center gap-2 mb-2">
                            <span className="text-sm font-bold text-gray-700">{t("aud4")}</span>
                            <div className="rounded-full bg-gray-300 overflow-hidden aspect-square w-10 min-w-[40px] min-h-[40px]">
                                <img
                                    src="testimonios/4.webp" // Reemplazar con URL dinámica
                                    alt="Avatar Tú"
                                    className="w-full h-full object-cover aspect-square"
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
                                    currentAudioId={currentAudioId}
                                    setCurrentAudioId={setCurrentAudioId}
                                    audioId="4"
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
            cooldown: 800,
            alignment: "right",
            content:
                <div className="flex flex-col items-end animate-fade-in-fast">
                    <div className="chat-box right">
                        <div className="flex items-center gap-2 mb-1 justify-end">
                            <span className="text-sm font-bold text-gray-700">{t("aud4")}</span>
                            <div className="rounded-full bg-gray-300 overflow-hidden aspect-square w-10 min-w-[40px] min-h-[40px]">
                                <img
                                    src="testimonios/4.webp" // Reemplazar con URL dinámica
                                    alt="Avatar Tú"
                                    className="w-full h-full object-cover aspect-square"
                                />
                            </div>
                        </div>

                        <p className="text-sm md:text-md">
                            {t("shey-1")}
                            <strong>{t("shey-2")}</strong>
                            {t("shey-3")}
                            <strong>{t("shey-4")}</strong>
                            {t("shey-5")}
                            <strong>{t("shey-6")}</strong>
                            {t("shey-7")}
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
        <div className="flex flex-col h-full justify-between">
            <div className="p-4">
                <div className="flex flex-col items-center animate-fade-in-fast">
                    <div className="chat-box center">
                        <img src="joined-chat-icon.svg"
                             alt="Joined chat icon"
                             className="w-16 h-16 md:w-24 md:h-24"
                        />
                        <h1 className="text-lg font-medium">
                            {t("group-msg")}
                        </h1>
                        <small>
                            {t("group-mem")}
                        </small>
                        <p className="text-sm md:text-md">
                            {t("group-desc")}
                        </p>
                    </div>
                    <div className="chat-box center">
                        <p className="text-sm md:text-md">
                            {t("inv-1")}
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
            <div className="sticky bottom-0 flex justify-between w-full items-center p-2">
                <PrevFabButton url="el-phishing"/>
                <NextFabButton url="opiniones-sobre-la-ciberdelincuencia"/>
            </div>
        </div>
    )
}