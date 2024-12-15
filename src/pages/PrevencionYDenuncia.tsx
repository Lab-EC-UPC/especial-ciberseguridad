import { useEffect, useState } from "react";
import getCurrentTime from "../components/CurrentTime.ts";

export default function PrevencionYDenuncia() {
    const [visibleElements, setVisibleElements] = useState(0);

    const elements = [
        <div className="flex justify-center">
            <h1 className="chat-title-box">
                ¿Cómo prevenir estos ciberdelitos?
            </h1>
        </div>,
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
        </div>,

        <div className="flex justify-center">
            <h1 className="chat-title-box">
                Canales y vías de denuncia
            </h1>
        </div>,

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
        </div>,
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
        </div>,

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
        </div>,

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
        </div>,


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
        </div>,

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
        </div>,


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