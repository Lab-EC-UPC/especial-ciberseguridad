import React, {useRef, useState} from 'react';
import jsQR from "jsqr";

const VerificadorDeLinks: React.FC = () => {
    const [text, setText] = useState('');
    const [showTooltip1, setShowTooltip1] = useState(false);
    const [showTooltip2, setShowTooltip2] = useState(false);
    const [responses, setResponses] = useState([]);
    const [cameraActive, setCameraActive] = useState(false);
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);



    const sendUrlToEndpoint = async (urlToCheck) => {
        try {
            const response = await fetch("https://link-validator-api.up.railway.app/api/v1/webrisk/verify", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ url: urlToCheck }),
            });

            if (!response.ok) {
                throw new Error("Error al conectar con el backend");
            }

            const result = await response.json();
            setResponses((prev) => [...prev, { message: result.message, details: result.details || "", time: new Date().toLocaleTimeString() }]);
        } catch (error) {
            setResponses((prev) => [...prev, { message: error.message || "Error desconocido", time: new Date().toLocaleTimeString() }]);
        }
    };
    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = () => {
            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement("canvas");
                canvas.width = img.width;
                canvas.height = img.height;
                const ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0);
                const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                const qrCodeData = jsQR(imageData.data, canvas.width, canvas.height);

                if (qrCodeData) {
                    sendUrlToEndpoint(qrCodeData.data);
                } else {
                    setResponses((prev) => [...prev, { message: "No se pudo leer el código QR de la imagen", time: new Date().toLocaleTimeString() }]);
                }
            };
            img.src = typeof reader.result === "string" ? reader.result : "";

        };
        reader.readAsDataURL(file);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && text.trim()) {
            sendUrlToEndpoint(text.trim());
        }
    };

    const handleOpenCamera = async () => {
        setCameraActive(true);
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                video: { facingMode: 'environment' },
            });
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
                await videoRef.current.play();

            }
        } catch (error) {
            console.error("No se pudo acceder a la cámara:", error);
        }
    };

    const handleTakePhoto = () => {
        if (videoRef.current && canvasRef.current) {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext("2d");
            const video = videoRef.current;
            if (ctx) {
                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;
                ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                const qrCodeData = jsQR(imageData.data, canvas.width, canvas.height);

                if (qrCodeData) {
                    sendUrlToEndpoint(qrCodeData.data);
                } else {
                    setResponses((prev) => [...prev, { message: "No se pudo leer el código QR de la imagen", time: new Date().toLocaleTimeString() }]);
                }
            }
        }
        handleCloseCamera();
    };

    const handleCloseCamera = () => {
        if (videoRef.current && videoRef.current.srcObject) {
            const stream = videoRef.current.srcObject as MediaStream;
            stream.getTracks().forEach(track => track.stop());
            videoRef.current.srcObject = null;
        }
        setCameraActive(false);
    };


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
                {responses.map((response, index) => (
                    <div key={index} className="flex flex-col items-start mb-1">
                        <div className="bg-white shadow-md rounded-lg p-4 max-w-lg">
                            <p className="text-sm md:text-md">{response.message}</p>
                            {response.details && <pre className="text-xs md:text-sm">{JSON.stringify(response.details, null, 2)}</pre>}
                            <small className="chat-time">{response.time}</small>
                        </div>
                    </div>
                ))}



                {cameraActive && (
                    <div className="fixed inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center z-50">
                        <video ref={videoRef} className="w-full max-w-md rounded-lg" autoPlay playsInline muted />
                        <canvas ref={canvasRef} className="hidden" />
                        <div className="mt-4 space-x-4">
                            <button
                                onClick={handleTakePhoto}
                                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
                            >
                                Tomar Foto
                            </button>
                            <button
                                onClick={handleCloseCamera}
                                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md"
                            >
                                Cerrar Cámara
                            </button>
                        </div>
                    </div>
                )}
                {/* Barra fija inferior */}
                <div className="fixed bottom-0 w-7/12 bg-gray-300 shadow-lg p-4 flex items-center justify-between z-10">
                    {/* Input de enlace */}
                    <div className="flex-1 flex items-center">
                        <input
                            type="text"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="Ingrese aquí su enlace, por favor"
                            className="w-full p-3 border rounded-lg shadow-sm text-sm text-gray-700 placeholder-gray-500"
                        />
                    </div>

                    {/* Botón para escanear QR */}
                    <div
                        className="relative ml-4 group flex flex-col items-center cursor-pointer"
                        onMouseEnter={() => setShowTooltip1(true)}
                        onMouseLeave={() => setShowTooltip1(false)}
                        onClick={handleOpenCamera}

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
                        <label className="bg-green hover:bg-green-600 text-white p-3 rounded-full shadow-lg cursor-pointer">
                            <img src="read-double-check-icon.svg" alt="Subir" className="w-5 h-5" />
                            <input type="file" accept="image/*" className="hidden" onChange={handleFileUpload} />
                        </label>
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
