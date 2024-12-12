import {useEffect, useState} from "react";

export default function Creditos () {
    const [visibleElements, setVisibleElements] = useState(0);

    const elements = [
        <div className="flex flex-col items-end animate-fade-in-fast">
            <div className="chat-box right">
                <p className="text-sm md:text-md">
                    <span className="font-bold">Hola </span>
                    Esto es un ejemplo
                </p>
                <div className="flex items-center gap-1">
                    <small className="chat-time">18:50</small>
                    <img
                        src="read-double-check-icon.svg"
                        alt="Double check icon"
                        className="h-4 w-4 md:h-6 md:w-6"
                    />
                </div>
            </div>
        </div>,
    ];


    useEffect(() => {
        if (visibleElements < elements.length) {
            const timer = setTimeout(() => {
                setVisibleElements(visibleElements + 1);
            }, 800);
            return () => clearTimeout(timer);
        }
    }, [visibleElements, elements.length]);

    return (
        <>
            <div>
                {elements.slice(0, visibleElements).map((element) => element)}
            </div>
        </>
    )
}