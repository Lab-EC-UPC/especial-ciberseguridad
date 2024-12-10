export default function TeaserSplashScreen({ onSkip }: { onSkip: () => void }) {
    return (
        <div className="relative h-screen w-screen overflow-hidden">
            <div className="absolute top-4 left-4 z-10">
                <img src="https://avatars.githubusercontent.com/u/189483635?s=200&v=4"
                     alt="Lab EC-Data UPC"
                     className="h-12 w-auto rounded-2xl"
                />
            </div>
            <video
                className="absolute top-0 left-0 h-full w-full object-cover"
                src="https://videos.pexels.com/video-files/6330778/6330778-hd_1920_1080_30fps.mp4"
                autoPlay
                controls
                muted
                loop
            ></video>

            <div className="absolute top-4 right-4 z-10">
                <button
                    onClick={onSkip}
                    className="button-green"
                >
                    Saltar teaser
                </button>
            </div>
        </div>
    );
}
