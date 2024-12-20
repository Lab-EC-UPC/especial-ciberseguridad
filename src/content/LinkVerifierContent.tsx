import getCurrentTime from "../components/CurrentTime.ts";
import {useTranslation} from "react-i18next";

export const LinkVerifierContent = () => {
    const { t } = useTranslation(["verificador"]);

    return [
        {
            cooldown: 100,
            alignment: "center",
            content:
                <div className="flex justify-center mb-6 animate-fade-in-fast">
                    <h1 className="chat-title-box">{t("title")}</h1>
                </div>
        },
        {
            cooldown: 100,
            alignment: "left",
            content:
                <div className="flex flex-col items-start animate-fade-in-fast">
                    <div className="bg-white shadow-md rounded-lg p-4 max-w-lg">
                        <p className="text-sm md:text-md">
                            {t("text-1")}
                            <span className="font-bold">{t("text-1-1")}</span>:
                            {t("text-1-2")}
                        </p>
                        <small className="chat-time">{getCurrentTime()}</small>
                    </div>
                </div>
        },
        {
            cooldown: 500,
            alignment: "right",
            content:
                <div className="flex flex-col items-end">
                    <div className="chat-box right">
                        <p className="text-sm md:text-md">
                            {t("text-2")}
                            <strong>{t("text-2-1")}</strong>
                            {t("text-2-2")}
                            <strong>{t("text-2-3")}</strong>
                        </p>
                        <div className="flex items-center gap-1">
                            <small className="chat-time">{getCurrentTime()}</small>
                            <img src="read-double-check-icon.svg" alt="Double check icon"
                                 className="h-4 w-4 md:h-6 md:w-6"/>
                        </div>
                    </div>
                </div>
        },
        {
            cooldown: 500,
            alignment: "right",
            content:
                <div className="flex flex-col items-end">
                    <div className="chat-box right">
                        <p className="text-sm md:text-md">
                            {t("text-3")}
                            <strong>{t("text-3-1")}</strong>
                            {t("text-3-2")}
                            <strong>{t("text-3-3")}</strong>
                        </p>
                        <div className="flex items-center gap-1">
                            <small className="chat-time">{getCurrentTime()}</small>
                            <img src="read-double-check-icon.svg" alt="Double check icon"
                                 className="h-4 w-4 md:h-6 md:w-6"/>
                        </div>
                    </div>
                </div>
        },
        {
            cooldown: 500,
            alignment: "center",
            content:
                <div className="flex flex-col items-center">
                    <div className="chat-box center">
                        <img src="chat-icons/8.webp" alt="Ícono de verificador de enlaces"
                             className="w-16 h-16 md:w-24 md:h-24"/>
                        <h1 className="text-lg font-medium">{t("text-4")}</h1>
                        <small className="font-medium">{t("text-4-1")}</small>
                        <p className="text-sm md:text-md">
                            {t("text-4-2")}
                        </p>
                    </div>
                </div>
        },
        {
            cooldown: 500,
            alignment: "center",
            content:
                <div className="flex flex-col items-center">
                    <div className="chat-box center">
                        <strong>{t("text-5")}</strong>
                        <p className="text-sm md:text-md mb-4">
                            {t("text-5-1")}
                            <strong>{t("text-5-2")}</strong>
                        </p>
                        <p className="text-sm md:text-md mb-4">
                            {t("text-5-3")}
                            <strong>{t("text-5-4")}</strong>
                            {t("text-5-5")}
                            <strong>{t("text-5-6")}</strong>
                            {t("text-5-7")}
                            <strong>{t("text-5-8")}</strong>
                        </p>
                        <p className="text-sm md:text-md">
                            <strong>
                                {t("text-5-9")}
                            </strong>
                        </p>
                    </div>
                </div>
        },
        {
            cooldown: 500,
            alignment: "center",
            content:
                <div className="flex flex-col items-center">
                    <div className="chat-box center">
                        <p className="text-sm md:text-md">
                            {t("text-6")}
                        </p>
                    </div>
                </div>
        },
    ];
}
