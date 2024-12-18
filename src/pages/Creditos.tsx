import {useEffect, useState} from "react";
import {Participants} from "../content/Participants.ts";
import PrevFabButton from "../components/PrevFabButton.tsx";
import {useTranslation} from "react-i18next";

interface Participant {
    name: string;
    subtitle: string;
    avatar: string;
}

const ParticipantCard = (participant: Participant) => {
    return (
        <div className="flex bg-white items-center gap-6">
            <img src={participant.avatar || "https://github.com/Lab-EC-UPC/assets/blob/main/especial-ciberseguridad/creditos/placeholder-photo.png?raw=true"}
                 alt={participant.name}
                 className="w-10 h-10 md:w-16 md:h-16 rounded-full object-cover"
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
    const { t } = useTranslation(["creditos"])

    useEffect(() => {
        if (visibleElements < participants.length) {
            const timer = setTimeout(() => {
                setVisibleElements(visibleElements + 1);
            }, 1);
            return () => clearTimeout(timer);
        }
    }, [visibleElements, participants.length]);

    return (
        <div className="flex flex-col h-full justify-between p-4">
            <div>
                <div className="flex flex-col items-center animate-fade-in-fast">
                    <div className="flex flex-col gap-2 md:gap-4 chat-box center">
                        <img src="https://github.com/Lab-EC-UPC/assets/blob/main/logo-ec-data.png?raw=true"
                             alt="ECDATA-UPC"
                             className="w-16 h-16 md:w-32 md:h-32 border rounded-full"
                        />
                        <h1 className="text-lg font-medium">
                            ECDATA - UPC
                        </h1>
                        <small>
                            <strong>
                                {t("grupo")}
                            </strong>
                        </small>
                        <p className="text-sm md:text-md">
                            {t("descripcion")}
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="flex flex-col gap-2 md:gap-4 chat-box center">
                        <div className="flex flex-col items-start gap-3 md:gap-4">
                            <small className="text-grey text-justify">22 miembros</small>
                            {participants.slice(0, visibleElements).map((participant, index) => (
                                <div
                                    key={index}
                                    className={`flex bg-white items-center gap-6 ${
                                        index % 2 === 0 ? "animate-from-left" : "animate-from-right"
                                    }`}
                                >
                                    <ParticipantCard
                                        name={participant.name}
                                        subtitle={t(`${participant.id}`)}
                                        avatar={participant.avatar}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="sticky bottom-0 flex justify-between w-full items-center z-10">
                <PrevFabButton url="verificador-de-links"/>
                <></>
            </div>
        </div>
    )
}