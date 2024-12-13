import {useEffect, useState} from "react";
import {Participants} from "../content/Participants.ts";

interface Participant {
    name: string;
    subtitle: string;
    avatar: string;
}

const ParticipantCard = (participant: Participant) => {
    return (
        <div className="flex bg-white items-center gap-6 animate-fade-in-fast">
            <img src={participant.avatar || "https://github.com/Lab-EC-UPC/assets/blob/main/especial-ciberseguridad/creditos/placeholder-photo.png?raw=true"}
                 alt={participant.name}
                 className="w-10 h-10 md:w-14 md:h-14 rounded-full object-cover"
            />
            <div className="grid text-justify">
                <h1 className="font-medium">
                    {participant.name}
                </h1>
                <small className="text-grey">
                    {participant.subtitle}
                </small>
            </div>
        </div>
    );
}

export default function Creditos () {
    const [visibleElements, setVisibleElements] = useState(0);
    const participants = Participants;

    useEffect(() => {
        if (visibleElements < participants.length) {
            const timer = setTimeout(() => {
                setVisibleElements(visibleElements + 1);
            }, 50);
            return () => clearTimeout(timer);
        }
    }, [visibleElements, participants.length]);

    return (
        <div>
            <div className="flex flex-col items-center">
                <div className="flex flex-col gap-2 md:gap-4 chat-box center">
                    <img src=""
                         alt="ECDATA-UPC"
                         className="w-16 h-16 md:w-32 md:h-32 border rounded-full"
                    />
                    <h1 className="text-lg font-medium">
                        ECDATA - UPC
                    </h1>
                    <small>
                        <strong>Grupo 22 miembros</strong>
                    </small>
                    <p className="text-sm md:text-md">
                        Este informe fue elaborado por los alumnos del Laboratorio de Periodismo Innovador de ECData y
                        la Universidad Peruana de Ciencias Aplicadas, bajo la supervisión y guía de periodistas de El
                        Comercio.
                    </p>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <div className="flex flex-col gap-2 md:gap-4 chat-box center">
                    <div className="flex flex-col items-start gap-3 md:gap-4">
                        <small className="text-grey text-justify">22 miembros</small>
                        {participants.slice(0, visibleElements).map((participant, index) => (
                            <ParticipantCard
                                key={index}
                                name={participant.name}
                                subtitle={participant.subtitle}
                                avatar={participant.avatar}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}