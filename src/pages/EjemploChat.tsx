import {useEffect, useState} from "react";
import {Link} from "react-router";
import {ArrowDownCircleIcon} from "@heroicons/react/24/solid";

export default function EjemploChat () {
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
        <div className="flex flex-col items-end animate-fade-in-fast">
            <div className="chat-box right">
                <p className="text-sm md:text-md">
                    <span className="font-bold">Hola de nuevo 🤨</span>
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
        <div className="flex flex-col items-end animate-fade-in-fast">
            <div className="chat-box right">
                <p className="text-sm md:text-md">
                    Oye pero respóndeme 🤨
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
        <Link to="/">
            <div className="flex flex-col items-center hover:scale-95 duration-300 animate-fade-in-fast">
                <div className="chat-box center gap-2">
                    <p className="text-sm md:text-lg">
                        <span className="font-bold text-green-dark">Siguiente: </span>
                        Título del siguiente
                    </p>
                    <ArrowDownCircleIcon className="h-6 text-green-dark animate-bounce"/>
                </div>
            </div>
        </Link>
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
            <div className="flex justify-center">
                <h1 className="chat-title-box">
                    Ejemplo de titulo fijo al inicio
                </h1>
            </div>
            <div className="flex flex-col items-start">
                <div className="chat-box left">
                    <p className="text-sm md:text-md">
                        <span className="font-bold">Hola!! </span>
                        Esto es un ejemplo
                    </p>
                    <small className="chat-time">18:50</small>
                </div>
            </div>
            <div>
                {elements.slice(0, visibleElements).map((element) => element)}
            </div>
        </>
    )
}