import {Link} from "react-router";
import {useTranslation} from "react-i18next";

// interface OutletContext {
//     toggleSidebar: () => void;
// }

export default function Inicio() {
    // const { toggleSidebar } = useOutletContext<OutletContext>();

    const { t } = useTranslation(["general"]);

    return (
        <div className="flex flex-col items-center justify-center py-4 md:py-10">
            <div className="w-full flex flex-col items-center animate-fade-in-fast">
                <div className="chat-box center font-bold">
                    <img
                        src="start-icon.webp"
                        alt="Joined chat icon"
                        className="w-12 h-12 md:w-24 md:h-24 m-2"
                    />
                    <p className="text-xs">{t("text1")}</p>
                    <h1 className="text-3xl md:text-5xl">{t("text2")}</h1>
                    <p className="text-sm md:text-xl font-semibold">{t("text3")}</p>
                </div>
                <div className="chat-box center">
                    <p className="text-sm md:text-md">{t("text4")}</p>
                </div>
            </div>
            <div className="grid gap-1 md:gap-2 w-3/4 md:max-w-xl">
                <Link to="/verificador-de-links">
                    <button className="button-start bg-[#122D28] w-full animate-scale-loop">
                        {t("link-verifier")} 🔗
                    </button>
                </Link>
                <Link to="/ciberdelincuencia">
                    <button className="button-start bg-[#215C54] w-full">
                        {t("start")} 🚀
                    </button>
                </Link>
            </div>
        </div>
    );
};
