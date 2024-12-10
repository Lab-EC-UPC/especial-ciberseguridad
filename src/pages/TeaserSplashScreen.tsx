export default function TeaserSplashScreen({ onSkip }: { onSkip: () => void }) {
    return (
        <div className="flex items-center justify-center h-screen w-screen">
            <div className="absolute top-4 left-4 z-10">
                <img src="https://avatars.githubusercontent.com/u/189483635?s=200&v=4"
                     alt="Lab EC-Data UPC"
                     className="h-12 w-auto rounded-2xl"
                />
            </div>
            <div className="flex items-center justify-center w-screen h-screen">
                <iframe
                        className={"w-full h-full"}
                        src="https://www.youtube.com/embed/YWtAj_HOs_E?si=V4FmGiKBL80cwUKP"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>

            <div className="absolute top-4 right-4 z-10">
                <button
                    onClick={onSkip}
                    className="button-green animate-pulse"
                >
                    Saltar teaser
                </button>
            </div>
        </div>
    );
}
