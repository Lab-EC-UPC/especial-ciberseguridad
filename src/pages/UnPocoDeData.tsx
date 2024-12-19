import {useEffect, useRef, useState} from "react";
import NextFabButton from "../components/NextFabButton.tsx";
import getCurrentTime from "../components/CurrentTime.ts";
import PrevFabButton from "../components/PrevFabButton.tsx";
import LoadingDots from "../components/LoadingDots.tsx";
import {useTranslation} from "react-i18next";


interface Props {
    visibleElements: number;
    setVisibleElements: (index: number) => void;
}

export default function UnPocoDeData ({visibleElements,setVisibleElements} :  Props) {
    const [isLoading, setIsLoading] = useState(false);
    const lastElementRef = useRef<HTMLDivElement>(null);
    const{ t } = useTranslation(["data"])
    const elements = [
        {
            cooldown: 800,
            alignment: "right",
            content:
                <div className="flex flex-col items-end animate-fade-in-fast">
                    <div className="chat-box right">
                        <p className="text-sm md:text-md">
                            {t("SegundoChat1")} <span className="font-bold">{t("SegundoChat2")}</span>
                            {t("SegundoChat3")} <span className="font-bold">{t("SegundoChat4")} </span>
                            {t("SegundoChat5")}. 🔒📉💻
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
                            {t("TercerChat1")}
                            <span className="font-bold"> {t("TercerChat2")}</span>. 💻💸
                        </p>
                        <small className="chat-time">{getCurrentTime()}</small>
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
                            {t("CuartoChat1")} <span className="font-bold">{t("CuartoChat2")}</span>. 💰🌐⚠️
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
                            {t("QuintoChat1")} <span className="font-bold">{t("QuintoChat2")} </span>
                             🌍, {t("QuintoChat3")} <span className="font-bold">{t("QuintoChat4")}</span> 🇺🇸 {t("QuintoChat6")}
                            <span className="font-bold"> {t("QuintoChat5")}</span> 🇨🇳.

                        </p>
                        <small className="chat-time">{getCurrentTime()}</small>
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
                            {t("SextoChat1")} 💰🌐📉
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
                            <span className="font-bold">{t("Grafico1")}</span>
                        </p>
                        <iframe
                            className="flourish-embed flourish-chart"
                            src="https://public.flourish.studio/visualisation/20792110/embed"
                            width="100%"
                            height="300"
                            frameBorder="0"
                            allowFullScreen
                            title="Flourish Chart"
                        />
                        <p className="text-sm md:text-md">{t("Grafico1.1")}</p>
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
                            {t("SepChat1")} <span className="font-bold">{t("SepChat2")}</span> {t("SepChat3")}. 📈💻 {t("SepChat4")} <span className="font-bold">{t("SepChat5")}</span>
                            {t("SepChat6")} <span className="font-bold">{t("SepChat7")}</span>. ⚠️🌐
                        </p>
                        <small className="chat-time">{getCurrentTime()}</small>
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
                            <span className="font-bold">{t("Grafico2")}</span>
                            <br></br>{t("Grafico2.1")}</p>
                        <iframe
                            className="flourish-embed flourish-chart"
                            src="https://public.flourish.studio/visualisation/20785916/embed"
                            width="100%"
                            height="300"
                            frameBorder="0"
                            allowFullScreen
                            title="Flourish Chart"
                        />
                        <p className="text-sm md:text-md">{t("Grafico2.2")}</p>
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
                            <span className="font-bold">{t("OctChat1")}</span>⚖️💻
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
                            {t("NonChat1")}
                            <span className="font-bold"> {t("NonChat2")}</span> {t("NonChat3")}
                            <span className="font-bold"> {t("NonChat4")}</span> 💳, {t("NonChat5")}
                            <span className="font-bold"> {t("NonChat6")}</span>. ⚠️📈
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
                            <span className="font-bold">{t("Grafico3")}</span>
                            <br></br>{t("Grafico3.1")}
                        </p>
                        <iframe
                            className="flourish-embed flourish-charts"
                            src="https://public.flourish.studio/visualisation/20801750/embed"
                            width="100%"
                            height="550"
                            frameBorder="0"
                            allowFullScreen
                            title="Flourish Chart"
                        />
                        <p className="text-sm md:text-md">Fuente: DIVINDAT</p>
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

    return (
        <div className="flex flex-col h-full justify-between">
            <div className="p-4">
                <div className="flex justify-center animate-fade-in-fast">
                    <h1 className="chat-title-box">
                        {t("tituloData")}
                    </h1>
                </div>
                <div className="flex flex-col items-start animate-fade-in-fast">
                    <div className="chat-box left">
                        <p className="text-sm md:text-md">
                            {t("PrimerChat1")} <span className="font-bold">{t("PrimerChat2")} </span>
                            {t("PrimerChat3")} <span
                            className="font-bold">{t("PrimerChat4")} </span>
                            .💻⚠️👮‍♂️
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
                <PrevFabButton url="ciberdelincuencia"/>
                <NextFabButton url="el-phishing"/>
            </div>
        </div>
    );
}
