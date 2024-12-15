import {useState} from "react";

export default function TeaserSplashScreen({ onSkip }: { onSkip: () => void }) {
    const [isMuted, setIsMuted] = useState(true);

    return (
        <div className="flex items-center justify-center h-screen w-screen">
            <div className="absolute top-4 left-4 z-10">
                <img src="https://avatars.githubusercontent.com/u/189483635?s=200&v=4"
                     alt="Lab EC-Data UPC"
                     className="h-12 w-auto rounded-2xl"
                />
            </div>
            <div className="flex items-center justify-center w-screen h-screen">
                <video
                    autoPlay
                    muted={isMuted}
                    loop
                    className="w-screen h-screen object-cover"
                >
                    <source
                        src="https://github.com/Lab-EC-UPC/assets/raw/refs/heads/main/especial-ciberseguridad/videos/ec-ciberseguridad-horizontal_webm_hd.webm"
                        type="video/mp4"
                    />
                    Your browser does not support HTML video.
                </video>
            </div>

            <div className="flex gap-4 absolute top-2 right-4 z-10">
                <button
                    onClick={onSkip}
                    className="button-green animate-scale-loop"
                >
                    Ver especial
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
