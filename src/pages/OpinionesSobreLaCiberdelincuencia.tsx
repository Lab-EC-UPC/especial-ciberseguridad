import {useEffect, useRef, useState} from "react";
import getCurrentTime from "../components/CurrentTime.ts";
import PrevFabButton from "../components/PrevFabButton.tsx";
import NextFabButton from "../components/NextFabButton.tsx";

export default function OpinionesSobreLaCiberdelincuencia() {
    const [visibleElements, setVisibleElements] = useState(0);
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
                            <span className="font-bold">🔴 Especialista 1: Diego Oviedo </span>
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
            cooldown: 100,
            alignment: "left",
            content:
                <div className="flex flex-col items-start animate-fade-in-fast">
                    <div className="chat-box left">
                        <p className="text-sm md:text-md">
                            Especialista en Ciberseguridad
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
            cooldown: 100,
            alignment: "left",
            content:
                <div className="flex flex-col items-start animate-fade-in-fast">
                    <img src="https://github.com/Lab-EC-UPC/assets/blob/main/especial-ciberseguridad/especialistas/Diego%20Oviedo.jpeg?raw=true" style={{ width: '200px', height: '200px', borderRadius: '50%' }} alt="Especialista en Ciberseguridad"></img>
                </div>
        },
        {
            cooldown: 1000,
            alignment: "left",
            content:
                <div className="flex flex-col items-start animate-fade-in-fast">
                    <div className="chat-box left">
                        <p className="text-sm md:text-md">
                            “Cuando tú le preguntas a un delincuente ‘¿por qué el mundo de la ciberdelincuencia es atractivo para ti?’, lo primero que te va a decir, probablemente, es que en esta forma de delinquir uno no tiene que exponer la vida. Para un delincuente es un mundo donde puedes generar mucho impacto negativo con simplemente algunos clics”
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
            cooldown: 5000,
            alignment: "right",
            content:
                <div className="flex flex-col items-end animate-fade-in-fast">
                    <div className="chat-box right">
                        <p className="text-sm md:text-md">
                            <span className="font-bold">🔴 Especialista 2: Jose Carlos Vargas</span>
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
            alignment: "right",
            content:
                <div className="flex flex-col items-end animate-fade-in-fast">
                    <div className="chat-box right">
                        <p className="text-sm md:text-md">
                            Presidente de ISACA
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
            alignment: "right",
            content:
                <div className="flex flex-col items-end animate-fade-in-fast">
                    <img src="https://github.com/Lab-EC-UPC/assets/blob/main/especial-ciberseguridad/especialistas/Jose%20Carlos%20Vargas.jpeg?raw=true" style={{ width: '200px', height: '200px', borderRadius: '50%' }} alt="Presidente de ISACA"></img>
                </div>
        },
        {
            cooldown: 1000,
            alignment: "right",
            content:
                <div className="flex flex-col items-end animate-fade-in-fast">
                    <div className="chat-box right">
                        <p className="text-sm md:text-md">
                            “Nunca antes el saber cómo protegerte en el mundo digital ha marcado tanto impacto en la calidad de vida de todas las personas. (…) En temas de ciberseguridad, ahora mismo hay un fenómeno que es mundial: la ausencia de perfiles profesionales para poder abordar los retos de la ciberseguridad. No hay profesionales”
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
            cooldown: 5000,
            alignment: "left",
            content:
                <div className="flex flex-col items-start animate-fade-in-fast">
                    <div className="chat-box left">
                        <p className="text-sm md:text-md">
                            <span className="font-bold">🔴 Especialista 3: Victor Ruiz </span>
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
            alignment: "left",
            content:
                <div className="flex flex-col items-start animate-fade-in-fast">
                    <div className="chat-box left">
                        <p className="text-sm md:text-md">
                            Especialista en Ciberseguridad
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
            alignment: "left",
            content:
                <div className="flex flex-col items-start animate-fade-in-fast">
                    <img src="https://github.com/Lab-EC-UPC/assets/blob/main/especial-ciberseguridad/especialistas/VictorRuiz_squared.jpg?raw=true" style={{ width: '200px', height: '200px', borderRadius: '50%' }} alt="Especialista en Ciberseguridad"></img>
                </div>
        },
        {
            cooldown: 2000,
            alignment: "left",
            content:
                <div className="flex flex-col items-start animate-fade-in-fast">
                    <div className="chat-box left">
                        <p className="text-sm md:text-md">
                            “Es muy importante que se integre la ciberseguridad como parte del desarrollo económico. Recientemente, hablábamos con algunas empresas y les decíamos: ‘tú ya tienes que considerar en tu empresa tener un área de ciberseguridad que le dé seguridad tanto a sus colaboradores y clientes, así como tienes tu área legal, tu área de finanzas y tu área de recursos humanos”.
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
            cooldown: 5000,
            alignment: "right",
            content:
                <div className="flex flex-col items-end animate-fade-in-fast">
                    <div className="chat-box right">
                        <p className="text-sm md:text-md">
                            <span className="font-bold">🔴 Especialista 4: Erick Iriarte</span>
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
            alignment: "right",
            content:
                <div className="flex flex-col items-end animate-fade-in-fast">
                    <div className="chat-box right">
                        <p className="text-sm md:text-md">
                            Especialista en Derecho Digital
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
            alignment: "right",
            content:
                <div className="flex flex-col items-end animate-fade-in-fast">
                    <img src="https://github.com/Lab-EC-UPC/assets/blob/main/especial-ciberseguridad/especialistas/ErickIriarte_squared.jpg?raw=true" style={{ width: '200px', height: '200px', borderRadius: '50%' }} alt="Especialista en Derecho Digital"></img>
                </div>
        },
        {
            cooldown: 1000,
            alignment: "right",
            content:
                <div className="flex flex-col items-end animate-fade-in-fast">
                    <div className="chat-box right">
                        <p className="text-sm md:text-md">
                            “En el Perú, no tenemos cultura de ciberseguridad ni protección de datos. Ni siquiera los niños en las escuelas aprenden cómo cuidar su información o la de sus familias. (...)El reglamento de protección de datos tiene más de una década y no se ajusta a las dinámicas actuales. Un nuevo reglamento es urgente para dar más herramientas a los ciudadanos"
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
            cooldown: 5000,
            alignment: "left",
            content:
                <div className="flex flex-col items-start animate-fade-in-fast">
                    <div className="chat-box left">
                        <p className="text-sm md:text-md">
                            <span className="font-bold">🔴 Especialista 5: Jorge Zeballos</span>
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
            alignment: "left",
            content:
                <div className="flex flex-col items-start animate-fade-in-fast">
                    <div className="chat-box left">
                        <p className="text-sm md:text-md">
                            Gerente General de ESET Perú
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
            alignment: "left",
            content:
                <div className="flex flex-col items-start animate-fade-in-fast">
                    <img src="https://github.com/Lab-EC-UPC/assets/blob/main/especial-ciberseguridad/especialistas/JorgeZeballos_squared.jpg?raw=true" style={{ width: '200px', height: '200px', borderRadius: '50%' }} alt="Gerente General de ESET Perú"></img>
                </div>
        },
        {
            cooldown: 1000,
            alignment: "left",
            content:
                <div className="flex flex-col items-start animate-fade-in-fast">
                    <div className="chat-box left">
                        <p className="text-sm md:text-md">
                            “Como ciudadanos, necesitamos que el tema de la protección de los datos personales esté mejor regulado. Mi dato no puede caminar libremente, ellos saben dónde trabajas, cuánto ganas, qué tarjetas usas, etc., y eso no está bien. Es parte de mi derecho fundamental, y está establecido hasta en la Constitución”               </p>
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
                        ¿Qué dicen los especialistas?
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
                <PrevFabButton url="testimonios"/>
                <NextFabButton url="prevencion-y-denuncia"/>
            </div>
        </div>
    );
}