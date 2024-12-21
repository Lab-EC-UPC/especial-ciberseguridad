import { useState, useEffect } from "react";
import {useTranslation} from "react-i18next";

export default function TeaserSplashScreen({ onSkip }: { onSkip: () => void }) {
    const [isMuted, setIsMuted] = useState(true);
    const [videoSrc, setVideoSrc] = useState("");
    const { t } = useTranslation(["general"]);

    const desktopVideo = t('splash-desktop-url');
    const mobileVideo = t('splash-mobile-url');

    useEffect(() => {
        console.log(mobileVideo);
        const updateVideoSrc = () => {
            if (window.innerWidth <= 768) {
                setVideoSrc(mobileVideo);
            } else {
                setVideoSrc(desktopVideo);
            }
        };

        updateVideoSrc();

        window.addEventListener("resize", updateVideoSrc);

        return () => {
            window.removeEventListener("resize", updateVideoSrc);
        };
    }, []);

    return (
        <div className="h-screen w-screen">
            <video
                autoPlay
                muted={isMuted}
                loop
                playsInline
                className="object-fit h-full w-full"
            >
                <source
                    src={videoSrc || "https://lab-ec-upc.github.io/assets/especial-ciberseguridad/videos/inicio-vertical-logo.webm"}
                    type="video/webm"/>
                <source
                    src={videoSrc || "https://lab-ec-upc.github.io/assets/especial-ciberseguridad/videos/inicio-vertical-logo.webm"}
                    type="video/mp4"/>
                <source
                    src={videoSrc || "https://lab-ec-upc.github.io/assets/especial-ciberseguridad/videos/inicio-vertical-logo.webm"}
                    type="video/ogg"/>
                Your browser does not support HTML video.
            </video>

            <div className="flex gap-4 absolute top-2 right-4 z-10">
                <button
                    onClick={onSkip}
                    className="button-green animate-scale-loop"
                >
                    {t("btn-skip-splash")}
                </button>
                <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="rounded-full text-white bg-black bg-opacity-50 p-2"
                >
                    {isMuted ? (
                        <img
                            src="volume-mute-outline.svg"
                            alt="Unmute"
                            className="h-8 w-8"
                        />
                    ) : (
                        <img
                            src="volume-medium-outline.svg"
                            alt="Mute"
                            className="h-8 w-8"
                        />
                    )}
                </button>
            </div>
        </div>
    );
}
