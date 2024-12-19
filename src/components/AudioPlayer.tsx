import React, { useState, useRef, useEffect } from "react";
import { PauseIcon, PlayIcon } from "@heroicons/react/24/solid";

interface AudioPlayerProps {
    audio: string;
    time: string;
    currentAudioId: string | null;
    setCurrentAudioId: (id: string | null) => void;
    audioId: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ audio, time, currentAudioId, setCurrentAudioId, audioId }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const togglePlayPause = () => {
        if (currentAudioId !== audioId) {
            setCurrentAudioId(audioId);
            setIsPlaying(true);
            audioRef.current?.play();
        } else {
            if (isPlaying) {
                audioRef.current?.pause();
            } else {
                audioRef.current?.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleTimeUpdate = () => {
        setCurrentTime(audioRef.current?.currentTime || 0);
    };

    const handleLoadedMetadata = () => {
        setDuration(audioRef.current?.duration || 0);
    };

    const handleAudioEnd = () => {
        setIsPlaying(false);
        setCurrentTime(0);
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
        }
    };

    useEffect(() => {
        if (currentAudioId !== audioId && isPlaying) {
            audioRef.current?.pause();
            setIsPlaying(false);
        }
    }, [currentAudioId, audioId, isPlaying]);

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    };

    return (
        <div className="flex items-start space-x-4 p-4">
            <button
                onClick={togglePlayPause}
                className="w-6 h-6 md:w-8 md:h-8 text-grey"
            >
                {isPlaying ? (
                    <PauseIcon />
                ) : (
                    <PlayIcon />
                )}
            </button>

            <div className="flex-1 relative">
                <div className="grid w-full">
                    <div>
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={(currentTime / duration) * 100 || 0}
                            onChange={(e) => {
                                const newTime = (e.target.valueAsNumber / 100) * duration;
                                if (audioRef.current) {
                                    audioRef.current.currentTime = newTime;
                                }
                                setCurrentTime(newTime);
                            }}
                            className="w-full h-1 bg-gray-300 rounded-lg appearance-none"
                        />
                        <div
                            className="absolute top-0 left-0 h-1 rounded-lg"
                            style={{ width: `${(currentTime / duration) * 100 || 0}%` }}
                        />
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="text-xs text-grey">
                            {formatTime(currentTime)}
                        </p>
                        <p className="text-xs text-grey">
                            {time}
                        </p>
                    </div>
                </div>
            </div>

            <audio
                ref={audioRef}
                src={audio}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onEnded={handleAudioEnd}
            />
        </div>
    );
};

export default AudioPlayer;
