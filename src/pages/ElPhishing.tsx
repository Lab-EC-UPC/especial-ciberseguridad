import {useEffect, useRef, useState} from "react";
import getCurrentTime from "../components/CurrentTime.ts";
import PrevFabButton from "../components/PrevFabButton.tsx";
import NextFabButton from "../components/NextFabButton.tsx";
import LoadingDots from "../components/LoadingDots.tsx";
import {useTranslation} from "react-i18next";

interface Props {
    visibleElements: number;
    setVisibleElements: (index: number) => void;
}

export default function ElPhishing ({visibleElements,setVisibleElements} :  Props) {
    const [isLoading, setIsLoading] = useState(false);
    const lastElementRef = useRef<HTMLDivElement>(null);
    const {t} = useTranslation(["elphishing"]);

    const elements = [
        {
            cooldown: 800,
            alignment: "left",
            content:
                <div className="flex flex-col items-start animate-fade-in-fast">
                    <div className="chat-box left">
                        <p className="text-sm md:text-md">
                            <ul className="list-disc list-inside">
                                <li>
                                    {t("msg2-1")}
                                    <span className="font-bold"> {t("msg2-2")} </span>
                                </li>
                                <li>
                                    {t("msg2-3")}
                                    <span className="font-bold"> {t("msg2-4")} </span>
                                    {t("msg2-5")}
                                </li>
                                <li>
                                    {t("msg2-6")}
                                    <strong> {t("msg2-7")} </strong>
                                    {t("msg2-8")}
                                </li>
                            </ul>

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
                            {t("msg3-1")}
                            <strong> {t("msg3-2")}</strong>
                            {t("msg3-3")}
                            {t("msg3-4")}
                            {t("msg3-5")}
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
                            {t("msg4-1")}
                            <strong> {t("msg4-2")} </strong>
                            {t("msg4-3")}
                            <strong> {t("msg4-4")} </strong>
                            {t("msg4-5")}
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
                            {t("msg5-1")}
                            <strong>{t("msg5-2")}</strong>
                            {t("msg5-3")}
                            <strong>{t("msg5-4")}</strong>
                            {t("msg5-5")}<strong>{t("msg5-6")}</strong>{t("msg5-7")}
                        </p>
                        <small className="chat-time">{getCurrentTime()}</small>
                    </div>
                </div>,
        },
        {
            cooldown: 800,
            alignment: "left",
            content:
                <div className="flex flex-col items-start animate-fade-in-fast">
                    <div className="chat-box left">
                        <p className="text-sm md:text-md">
                            <span className="font-bold">{t("msg6-1")}</span>
                            <br></br>{t("msg6-2")}<br></br>
                        </p>
                        <iframe
                            className="flourish-embed flourish-charts"
                            src={t("graphic")}
                            width="100%"
                            height="300"
                            frameBorder="0"
                            allowFullScreen
                            title="Flourish Chart"
                        />
                        <p className="text-sm md:text-md">{t("msg6-3")}</p>
                        <small className="chat-time">{getCurrentTime()}</small>
                    </div>
                </div>
        },
        {
            cooldown: 800,
            alignment: "left",
            content:
                <div className="flex flex-col items-center animate-fade-in-fast">
                    <div className="chat-box center">
                        <img src="el-phishing/1.webp"
                             alt="Joined chat icon"
                             className="w-16 h-16 md:w-24 md:h-24"
                        />
                        <h1 className="text-lg font-medium">
                            {t("ph-group-title")}
                        </h1>
                        <small>
                            <strong>{t("ph-group-mem")}</strong>
                        </small>
                        <p className="text-sm md:text-md">
                            {t("ph-group-desc")}
                        </p>
                    </div>
                </div>
        },
        {
            cooldown: 800,
            alignment: "left",
            content:
                <div className="flex flex-col items-center pt-3 animate-fade-in-fast">

                    <div className="chat-box center">
                        <p className="text-sm md:text-md">
                            {t("inv-1")}<strong> {t("inv-2-v")} </strong> {t("inv-3")}
                        </p>
                    </div>
                </div>
        },
        {
            cooldown: 800,
            alignment: "left",
            content:
                <div className="flex flex-col items-start animate-fade-in-fast">
                    <div className="chat-box left">
                        <div className="flex items-center gap-2 mb-1">
                            <div
                                className="rounded-full bg-gray-300 overflow-hidden aspect-square w-10 min-w-[40px] min-h-[40px] ">
                                <img
                                    src="el-phishing/2.webp" // Reemplazar con URL dinámica
                                    alt="Avatar Usuario 1"
                                    className="w-full h-full object-cover aspect-square"
                                />
                            </div>
                            <span className="text-sm font-bold text-gray-700">{t("Vishing")}</span>
                        </div>
                        <p className="text-sm md:text-md">
                            {t("msg7-1")}<strong> {t("msg7-2")}</strong>
                            {t("msg7-3")}<strong>{t("msg7-4")}</strong>
                            {t("msg7-5")}
                            {t("msg7-6")}
                            {t("msg7-7")}
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
                        <div className="flex items-center gap-2 mb-1">
                            <div
                                className="rounded-full bg-gray-300 overflow-hidden aspect-square w-10 min-w-[40px] min-h-[40px] ">
                                <img
                                    src="el-phishing/2.webp" // Reemplazar con URL dinámica
                                    alt="Avatar Usuario 1"
                                    className="w-full h-full object-cover aspect-square"
                                />
                            </div>
                            <span className="text-sm font-bold text-gray-700">{t("Vishing")}</span>
                        </div>
                        <p className="text-sm md:text-md">
                            {t("msg8-1")}<strong>{t("msg8-2")}</strong> {t("msg8-3")}
                            <strong>{t("msg8-4")}</strong>{t("msg8-5")}
                            <strong>{t("msg8-6")}</strong>
                        </p>
                        <small className="chat-time">{getCurrentTime()}</small>
                    </div>
                </div>
        },
        {
            cooldown: 800,
            alignment: "left",
            content:
                <div className="flex flex-col items-center pt-3 animate-fade-in-fast">

                    <div className="chat-box center">
                        <p className="text-sm md:text-md">
                            {t("inv-1")}<strong> {t("inv-2-s")} </strong> {t("inv-3")}
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
                                className="text-sm font-bold text-gray-700">{t("Smishing")}</span>
                            <div
                                className="rounded-full bg-gray-300 overflow-hidden aspect-square w-10 min-w-[40px] min-h-[40px]">
                                <img
                                    src="el-phishing/3.webp" // Reemplazar con URL dinámica
                                    alt="Avatar Tú"
                                    className="w-full h-full object-cover aspect-square"
                                />
                            </div>
                        </div>
                        <p className="text-sm md:text-md">
                            {t("msg9-1")}<strong>{t("msg9-2")}</strong>{t("msg9-3")}
                            <strong>{t("msg9-4")}</strong>{t("msg9-5")}<strong>{t("msg9-6")}</strong>
                            {t("msg9-7")}<strong>{t("msg9-8")}</strong>
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
                        <div className="flex items-center gap-2 mb-1 justify-end">
                            <span
                                className="text-sm font-bold text-gray-700">{t("Smishing")}</span>
                            <div
                                className="rounded-full bg-gray-300 overflow-hidden aspect-square w-10 min-w-[40px] min-h-[40px]">
                                <img
                                    src="el-phishing/3.webp" // Reemplazar con URL dinámica
                                    alt="Avatar Tú"
                                    className="w-full h-full object-cover aspect-square"
                                />
                            </div>
                        </div>
                        <p className="text-sm md:text-md">
                            {t("msg10-1")}
                            {t("msg10-2")}
                            {t("msg10-3")}
                            {t("msg10-4")}
                            {t("msg10-5")}<strong>{t("msg10-6")}</strong>
                            {t("msg10-7")}
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
                        <div className="flex items-center gap-2 mb-1 justify-end">
                            <span
                                className="text-sm font-bold text-gray-700">{t("Smishing")}</span>
                            <div
                                className="rounded-full bg-gray-300 overflow-hidden aspect-square w-10 min-w-[40px] min-h-[40px]">
                                <img
                                    src="el-phishing/3.webp" // Reemplazar con URL dinámica
                                    alt="Avatar Tú"
                                    className="w-full h-full object-cover aspect-square"
                                />
                            </div>
                        </div>
                        <p className="text-sm md:text-md">
                            {t("msg11-1")}<strong>{t("msg11-2")}</strong>{t("msg11-3")}
                            <strong>{t("msg11-4")}</strong>{t("msg11-5")}
                            <strong>{t("msg11-6")}</strong>{t("msg11-7")}
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
                <div className="flex flex-col items-center pt-3 animate-fade-in-fast">

                    <div className="chat-box center">
                        <p className="text-sm md:text-md">
                            {t("inv-1")}<strong> {t("inv-2-p")} </strong> {t("inv-3")}
                        </p>
                    </div>
                </div>
        },
        {
            cooldown: 800,
            alignment: "left",
            content:
                <div className="flex flex-col items-start animate-fade-in-fast">
                    <div className="chat-box left">
                        <div className="flex items-center gap-2 mb-1">
                            <div
                                className="rounded-full bg-gray-300 overflow-hidden aspect-square w-10 min-w-[40px] min-h-[40px] ">
                                <img
                                    src="el-phishing/4.webp" // Reemplazar con URL dinámica
                                    alt="Avatar Usuario 1"
                                    className="w-full h-full object-cover aspect-square"
                                />
                            </div>
                            <span className="text-sm font-bold text-gray-700">{t("Pharming")}</span>
                        </div>
                        <p className="text-sm md:text-md">
                            {t("msg12-1")}<strong>{t("msg12-2")}</strong>{t("msg12-3")}
                            <strong>{t("msg12-4")}</strong>
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
                        <div className="flex items-center gap-2 mb-1">
                            <div
                                className="rounded-full bg-gray-300 overflow-hidden aspect-square w-10 min-w-[40px] min-h-[40px] ">
                                <img
                                    src="el-phishing/4.webp" // Reemplazar con URL dinámica
                                    alt="Avatar Usuario 1"
                                    className="w-full h-full object-cover aspect-square"
                                />
                            </div>
                            <span className="text-sm font-bold text-gray-700">{t("Pharming")}</span>
                        </div>
                        <p className="text-sm md:text-md">
                            {t("msg13-1")}<strong>{t("msg13-2")}</strong>{t("msg13-3")}
                            <strong>{t("msg13-4")}</strong>{t("msg13-5")}
                            <strong>{t("msg13-6")}</strong>
                        </p>
                        <small className="chat-time">{getCurrentTime()}</small>
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
                        {t("title")}
                    </h1>
                </div>
                <div className="flex flex-col items-start animate-fade-in-fast">
                    <div className="chat-box left">
                        <p className="text-sm md:text-md">
                            {t("msg1-1")}
                            <span className="font-bold"> {t("msg1-2")} </span>
                            {t("msg1-3")}
                            <span className="font-bold"> {t("msg1-4")} </span>
                            {t("msg1-5")}
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
                <PrevFabButton url="un-poco-de-data"/>
                <NextFabButton url="testimonios"/>
            </div>
        </div>
    );
}