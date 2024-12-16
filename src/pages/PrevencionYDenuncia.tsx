import {useEffect, useRef, useState} from "react";
import getCurrentTime from "../components/CurrentTime.ts";
import PrevFabButton from "../components/PrevFabButton.tsx";
import NextFabButton from "../components/NextFabButton.tsx";

interface Props {
    visibleElements: number;
    setVisibleElements: (index: number) => void;
}

export default function PrevencionYDenuncia({visibleElements,setVisibleElements} :  Props) {
    const [isLoading, setIsLoading] = useState(false);
    const lastElementRef = useRef<HTMLDivElement>(null);

    const elements = [
        {
            cooldown: 500,
            alignment: "left",
            content:
                <div className="flex flex-col items-start animate-fade-in-fast">
                    <div className="chat-box left">
                        <p className="text-sm md:text-md">
                            Según un estudio de <span className="font-bold">Kaspersky 📊, aunque el 69% de los peruanos</span> se preocupa
                            por revisar la <span className="font-bold">legitimidad de los sitios web</span> 🌐 antes de ingresar sus <span className="font-bold">datos
                        personales</span> 🔐, el <span className="font-bold">77% reconoce que no sabe
                            cómo identificar una página falsa.</span> ⚠️❌

                        </p>
                        <div className="flex items-center gap-1">
                            <small className="chat-time">{getCurrentTime()}</small>
                            <img
                                src="read-double-check-icon.svg"
                                alt="Double check icon"
                                className="h-4 w-4 md:h-6 md:w-6"
                            />
                        </div>
                    </div>
                </div>
        },
        {
            cooldown: 500,
            alignment: "center",
            content:
                <div className="flex justify-center">
                    <h1 className="chat-title-box">
                        Canales y vías de denuncia
                    </h1>
                </div>
        },
        {
            cooldown: 2000,
            alignment: "right",
            content:
                <div className="flex flex-col items-start animate-fade-in-fast">
                    <div className="chat-box left">
                        <p className="text-sm md:text-md">
                            En esta sección podrás encontrar los <span className="font-bold">principales medios para
                        denunciar ciberdelitos</span> en el Perú. En caso hayas sido
                            <span className="font-bold">víctima de un ciberdelito</span> 🖥️🔒 o busques <span className="font-bold">reportar una actividad
                        sospechosa</span> ⚠️, puedes ponerte en <span className="font-bold">contacto con las siguientes
                            entidades responsables:</span> 📞📧.
                        </p>
                        <div className="flex items-center gap-1">
                            <small className="chat-time">{getCurrentTime()}</small>
                            <img
                                src="read-double-check-icon.svg"
                                alt="Double check icon"
                                className="h-4 w-4 md:h-6 md:w-6"
                            />
                        </div>
                    </div>
                </div>
        },
        {
            cooldown: 1000,
            alignment: "right",
            content:
                <div className="flex flex-col items-end animate-fade-in-fast">
                    <div className="chat-box right">
                        <p className="text-sm md:text-md">
                            📞 <span className="font-bold">División de Investigación de Delitos de Alta Tecnología (DIVINDAT)</span> 💻🔍
                        </p>
                        <div className="flex items-center gap-1">
                            <small className="chat-time">{getCurrentTime()}</small>
                            <img
                                src="read-double-check-icon.svg"
                                alt="Double check icon"
                                className="h-4 w-4 md:h-6 md:w-6"
                            />
                        </div>
                    </div>
                </div>
        },
        {
            cooldown: 2000,
            alignment: "right",
            content:
                <div className="flex flex-col items-end animate-fade-in-fast">
                    <div className="chat-box right">
                        <p className="text-sm md:text-md">
                            Esta es la unidad especializada de la Policía Nacional del Perú (PNP)
                            que atiende delitos informáticos.
                        </p>
                        <div className="flex items-center gap-1">
                            <small className="chat-time">{getCurrentTime()}</small>
                            <img
                                src="read-double-check-icon.svg"
                                alt="Double check icon"
                                className="h-4 w-4 md:h-6 md:w-6"
                            />
                        </div>
                    </div>
                </div>
        },
        {
            cooldown: 2000,
            alignment: "left",
            content:
                <div className="flex flex-col items-end animate-fade-in-fast">
                    <div className="chat-box right">
                        <p className="text-sm md:text-md">
                            ☎️ Teléfonos: (01) 431-8898 o línea gratuita 1818<br></br>
                            📧 Correo: divindat.depcpi@policia.gob.pe<br></br>
                            📍 Dirección: Piso 9, Dirección de Investigación Criminal (DIRINCRI), Av. España 323, Cercado de Lima.
                        </p>
                        <div className="flex items-center gap-1">
                            <small className="chat-time">{getCurrentTime()}</small>
                            <img
                                src="read-double-check-icon.svg"
                                alt="Double check icon"
                                className="h-4 w-4 md:h-6 md:w-6"
                            />
                        </div>
                    </div>
                </div>
        },
        {
            cooldown: 2000,
            alignment: "left",
            content:
                <div className="flex flex-col items-start animate-fade-in-fast">
                    <div className="chat-box left">
                        <p className="text-sm md:text-md">
                            📞 <span className="font-bold">Ministerio Público - Fiscalía de la Nación ⚖️💻</span>
                        </p>
                        <div className="flex items-center gap-1">
                            <small className="chat-time">{getCurrentTime()}</small>
                            <img
                                src="read-double-check-icon.svg"
                                alt="Double check icon"
                                className="h-4 w-4 md:h-6 md:w-6"
                            />
                        </div>
                    </div>
                </div>
        },
        {
            cooldown: 2000,
            alignment: "left",
            content:
                <div className="flex flex-col items-start animate-fade-in-fast">
                    <div className="chat-box left">
                        <p className="text-sm md:text-md">
                            📞 En su portal puedes <span className="font-bold">presentar
                        denuncias</span> sobre cualquier tipo de delito, incluidos los
                            ciberdelitos. <br></br>🌐✅Es necesario <span className="font-bold">identificarte con tu DNI
                        🆔 y proporcionar pruebas claras 📂.</span>
                        </p>
                        <div className="flex items-center gap-1">
                            <small className="chat-time">{getCurrentTime()}</small>
                            <img
                                src="read-double-check-icon.svg"
                                alt="Double check icon"
                                className="h-4 w-4 md:h-6 md:w-6"
                            />
                        </div>
                    </div>
                </div>
        },
        {
            cooldown: 2000,
            alignment: "left",
            content:
                <div className="flex flex-col items-start animate-fade-in-fast">
                    <div className="chat-box left">
                        <p className="text-sm md:text-md">
                            <span className="font-bold">🔗 Enlace:</span> <a href="https://portal.mpfn.gob.pe/denuncias-en-linea" style={{color: "#3497f9", textDecoration: "underline"}}>Denuncias en línea</a>
                        </p>
                        <div className="flex items-center gap-1">
                            <small className="chat-time">{getCurrentTime()}</small>
                            <img
                                src="read-double-check-icon.svg"
                                alt="Double check icon"
                                className="h-4 w-4 md:h-6 md:w-6"
                            />
                        </div>
                    </div>
                </div>
        }
    ];

    useEffect(() => {
        if (visibleElements < elements.length) {
            setIsLoading(true);
            const timer = setTimeout(() => {
                setIsLoading(false);
                setVisibleElements(visibleElements + 1);
            }, elements[visibleElements].cooldown);
            return () => clearTimeout(timer);
        }
    }, [visibleElements, elements.length]);

    return (
        <div className="flex flex-col h-full justify-between p-4">
            <div>
                <div className="flex justify-center animate-fade-in-fast">
                    <h1 className="chat-title-box">
                        ¿Cómo prevenir estos ciberdelitos?
                    </h1>
                </div>
                <div>
                    {elements.slice(0, visibleElements).map((element, index) => (
                        <div key={index} ref={index === visibleElements - 1 ? lastElementRef : null}>
                            {element["content"]}
                        </div>
                    ))}
                    {isLoading && (
                        <div
                            className={`w-full flex ${elements[visibleElements].alignment === "left" ? "justify-start" : "justify-end"}`}>
                            <div className="flex items-end space-x-1 px-4 py-3 rounded-xl bg-gray-100 w-fit">
                                <div className="h-2 w-2 rounded-full bg-gray-400 animate-pulse"></div>
                                <div className="h-2 w-2 rounded-full bg-gray-400 animate-pulse"></div>
                                <div className="h-2 w-2 rounded-full bg-gray-400 animate-pulse"></div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="sticky bottom-0 flex justify-between w-full items-center z-10">
                <PrevFabButton url="opiniones-sobre-la-ciberdelincuencia"/>
                <NextFabButton url="verificador-de-links"/>
            </div>
        </div>
    )
}