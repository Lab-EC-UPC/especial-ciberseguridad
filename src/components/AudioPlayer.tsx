import React, { useState, useRef } from "react";
import {PauseIcon, PlayIcon } from "@heroicons/react/24/solid";

interface AudioPlayerProps {
    audio: string;
    time: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ audio, time }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const audioRef = useRef(null);

    const togglePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleTimeUpdate = () => {
        setCurrentTime(audioRef.current.currentTime);
    };

    const handleLoadedMetadata = () => {
        setDuration(audioRef.current.duration);
    };

    const handleProgressChange = (e) => {
        const newTime = (e.target.value / 100) * duration;
        audioRef.current.currentTime = newTime;
        setCurrentTime(newTime);
    };

    const formatTime = (time) => {
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
                            onChange={handleProgressChange}
                            className="w-full h-1 bg-grey-light rounded-lg appearance-none focus:outline-none"
                        />
                        <div
                            className="absolute top-0 left-0 h-1 rounded-lg"
                            style={{width: `${(currentTime / duration) * 100 || 0}%`}}
                        />
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="text-xs text-grey">
                            {formatTime(currentTime)} / {formatTime(duration)}
                        </p>
                        <small className="text-xs text-grey">
                            {time}
                        </small>
                    </div>
                </div>
            </div>

            <audio
                ref={audioRef}
                src={audio}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
            />
        </div>
    );
};

export default AudioPlayer;
