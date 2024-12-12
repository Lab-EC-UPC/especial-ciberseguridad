import React, {useState} from 'react';

const VerificadorDeLinks: React.FC = () => {
    const [text, setText] = useState('');

    const [showTooltip1, setShowTooltip1] = useState(false);
    const [showTooltip2, setShowTooltip2] = useState(false);
    return (
        <>
            <div className="pb-14">
                {/*Titulo*/}
                <div className="flex justify-center mb-6">
                    <h1 className="chat-title-box">
                        ¡Descubre el nuevo verificador de enlaces!
                    </h1>
                </div>
                {/*CHAT IZQUIERDO*/}
                <div className="flex flex-col items-start">
                    <div className="bg-white shadow-md rounded-lg p-4 max-w-lg">
                        <p className="text-sm md:text-md">
                            Debido al auge de los ciberdelitos, presentamos el <span className="font-bold">Verificador de Links y QR de El Comercio</span>: tu aliado para detectar enlaces maliciosos ⚠️ y códigos QR sospechosos 🔍.
                        </p>
                        <small className="chat-time">18:50</small>
                    </div>
                </div>

                {/*CHAT DERECHA*/}
                <div className="flex flex-col items-end">
                    <div className="chat-box right">
                        <p className="text-sm md:text-md">
                            <span className="font-bold"> </span>
                            Este verificador 🔍<span className="font-bold"> no garantiza una seguridad absoluta 🛡️</span>, pero es un recurso útil para <span className="font-bold">identificar posibles riesgos ⚠️ y prevenir incidentes 🚨.</span>
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
                </div>
                {/*CHAT DERECHA*/}
                <div className="flex flex-col items-end">
                    <div className="chat-box right">
                        <p className="text-sm md:text-md">
                            <span className="font-bold"> </span>
                            Úsalo como tu <span className="font-bold">primera línea de defensa 🛡️</span> y complementa tu <span className="font-bold">navegación segura 🌐</span> con <span className="font-bold">hábitos responsables en el mundo digital 📱.</span>
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
                </div>
                {/*CENTRO*/}
                <div className="flex flex-col items-center">
                    <div className="chat-box center">
                        <img src="joined-chat-icon.svg"
                             alt="Joined chat icon"
                             className="w-16 h-16 md:w-24 md:h-24"
                        />
                        <h1 className="text-lg font-medium">
                            Se ha creado la herramienta
                        </h1>
                        <small className="font-medium">
                            Verificador de Enlaces
                        </small>
                        <p className="text-sm md:text-md ">
                            ¡Puedes estar un paso adelante de los ciberdelincuentes 🚨!
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="chat-box center">
                        <small className="font-medium">
                            Recuerda...
                        </small>
                        <p className="text-sm md:text-md mb-4">
                            🌐🔒 Ten en cuenta que nuestro verificador <span className="font-bold">no identifica si las páginas de redes sociales son falsas.</span>
                        </p>
                        <p className="text-sm md:text-md mb-4">
                            Por eso, cuando navegues en <span className="font-bold">redes sociales </span> Facebook, TikTok o Instagram y visites la página de una empresa, <span className="font-bold">asegúrate de que cuente con el check azul de verificación ✅.</span> Este símbolo confirma que es un <span className="font-bold">medio oficial de la compañía.</span>
                        </p>
                        <p className="text-sm md:text-md ">
                            <span className="font-bold"> 🚫 Evita confiar en páginas que no estén verificadas</span>, ya que podrían ser<span className="font-bold"> falsas o fraudulentas. ⚠️</span>
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="chat-box center">
                        <p className="text-sm md:text-md ">
                            Introduce el enlace o escanea el código QR sospechoso para proceder con su verificación.
                        </p>
                    </div>
                </div>
                {/* Barra fija inferior */}
                <div className="fixed bottom-0 w-7/12 bg-gray-300 shadow-lg p-4 flex items-center justify-between z-10">
                    {/* Input de enlace */}
                    <div className="flex-1 flex items-center">
                        <input
                            type="text"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            placeholder="Ingrese aquí su enlace, por favor"
                            className="w-full p-3 border rounded-lg shadow-sm text-sm text-gray-700 placeholder-gray-500"
                        />
                    </div>

                    {/* Botón para escanear QR */}
                    <div
                        className="relative ml-4 group flex flex-col items-center cursor-pointer"
                        onMouseEnter={() => setShowTooltip1(true)}
                        onMouseLeave={() => setShowTooltip1(false)}
                    >
                        <button className="bg-green hover:bg-green text-white p-3 rounded-full shadow-lg">
                            <img src="read-double-check-icon.svg" alt="QR" className="w-5 h-5" />
                        </button>
                        {showTooltip1 && (
                            <div className="absolute -top-10 bg-white text-xs p-2 rounded shadow-md">
                                Escanea un QR
                            </div>
                        )}
                    </div>

                    {/* Botón para subir imagen */}
                    <div
                        className="relative ml-4 group flex flex-col items-center cursor-pointer"
                        onMouseEnter={() => setShowTooltip2(true)}
                        onMouseLeave={() => setShowTooltip2(false)}
                    >
                        <button className="bg-green hover:bg-green-600 text-white p-3 rounded-full shadow-lg">
                            <img src="read-double-check-icon.svg" alt="Subir" className="w-5 h-5" />
                        </button>
                        {showTooltip2 && (
                            <div className="absolute -top-10 bg-white text-xs p-2 rounded shadow-md">
                                Sube un archivo
                            </div>
                        )}
                    </div>
                </div>




            </div>
        </>
    );
};

export default VerificadorDeLinks;
