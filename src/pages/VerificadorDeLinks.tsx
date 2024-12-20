import React, {useRef, useState, ChangeEvent, KeyboardEvent, useEffect} from 'react';
import jsQR from 'jsqr';
import PrevFabButton from "../components/PrevFabButton.tsx";
import NextFabButton from "../components/NextFabButton.tsx";
import {PaperAirplaneIcon, PhotoIcon, QrCodeIcon} from "@heroicons/react/24/solid";
import LoadingDots from "../components/LoadingDots.tsx";
import {LinkVerifierContent} from "../content/LinkVerifierContent.tsx";
import getCurrentTime from "../components/CurrentTime.ts";
import {Tooltip} from "@nextui-org/tooltip";
import {fetchUrlRiskScore, getChatColor, LinkVerifierChat} from "../utils/UrlRiskScoreService.ts";
import {useTranslation} from "react-i18next";

interface Props {
    visibleElements: number;
    setVisibleElements: (index: number) => void;
    chats: LinkVerifierChat[];
    setChats: React.Dispatch<React.SetStateAction<LinkVerifierChat[]>>;
}

export default function VerificadorDeLinks({visibleElements,setVisibleElements,chats,setChats} :  Props) {
    const [isLoading, setIsLoading] = useState(false);
    const lastElementRef = useRef<HTMLDivElement>(null);
    const elements = LinkVerifierContent();
    const [text, setText] = useState('');
    const [cameraActive, setCameraActive] = useState(false);
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [isLoadingFileUpload, setIsLoadingFileUpload] = useState(false);
    const [isFetchingResponse, setIsFetchingResponse] = useState(false);
    const { t } = useTranslation(["verificador"]);

    const appendChat = (chat: LinkVerifierChat) => {
        setChats((prev) => [...prev, chat]);
    };

    const sendUrlToEndpoint = async (urlToCheck: string) => {
        appendChat({
            message: urlToCheck,
            time: getCurrentTime(),
            alignment: 'right',
            color: 'neutral'
        });

        setIsFetchingResponse(true);
        await fetchUrlRiskScore(urlToCheck, t)
            .then((response)=>{
                if (response) {
                    appendChat({
                        message: response.message,
                        time: response.time,
                        alignment: response.alignment,
                        color: response.color
                    });
                }
                else {
                    appendChat({
                        message: t("message-1"),
                        time: getCurrentTime(),
                        alignment: 'left',
                        color: 'neutral'
                    });
                }
            })
            .finally(()=>setIsFetchingResponse(false));
    };

    const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
        setIsLoadingFileUpload(true);
        const file = e.target.files?.[0];
        if (!file) {
            setIsLoadingFileUpload(false);
            return;
        }

        const validImageTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
        if (!validImageTypes.includes(file.type)) {
            appendChat({
                message: t("message-2"),
                time: getCurrentTime(),
                alignment: 'left',
                color: 'neutral'
            });
            setIsLoadingFileUpload(false);
            return;
        }

        const reader = new FileReader();
        reader.onload = () => {
            if (typeof reader.result === 'string') {
                appendChat({
                    message: t("message-3"),
                    time: getCurrentTime(),
                    alignment: 'right',
                    color: 'neutral',
                    image: reader.result
                });

                const img = new Image();
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    canvas.width = img.width;
                    canvas.height = img.height;
                    const ctx = canvas.getContext('2d');
                    if (ctx) {
                        ctx.drawImage(img, 0, 0);
                        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                        const qrCodeData = jsQR(imageData.data, canvas.width, canvas.height);

                        if (qrCodeData) {
                            sendUrlToEndpoint(qrCodeData.data).finally(() => setText(''));
                        } else {
                            appendChat({
                                message: t("message-4"),
                                time: getCurrentTime(),
                                alignment: 'left',
                                color: 'neutral'
                            });
                        }
                    }
                };
                img.onerror = () => {
                    appendChat({
                        message: t("message-5"),
                        time: getCurrentTime(),
                        alignment: 'left',
                        color: 'neutral'
                    });
                };
                img.src = reader.result;
            }
        };
        reader.onerror = () => {
            appendChat({
                message: t("message-6"),
                time: getCurrentTime(),
                alignment: 'left',
                color: 'neutral'
            });
        };
        reader.readAsDataURL(file);

        setIsLoadingFileUpload(false);
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && text.trim()) {
            sendUrlToEndpoint(text.trim())
                .finally(() => setText(''));
        }
    };

    const handleOpenCamera = async () => {
        setCameraActive(true);
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                video: {facingMode: 'environment'},
            });
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
                await videoRef.current.play();
            }
        } catch (error) {
            appendChat({
                message: t("message-7"),
                time: getCurrentTime(),
                alignment: 'left',
                color: 'neutral'
            });
        }
    };

    const handleTakePhoto = () => {
        if (videoRef.current && canvasRef.current) {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');
            const video = videoRef.current;
            if (ctx) {
                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;
                ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

                const imageData = canvas.toDataURL('image/png');
                appendChat({
                    message: t("message-8"),
                    time: getCurrentTime(),
                    alignment: 'right',
                    color: 'neutral',
                    image: imageData
                });

                const qrCodeData = jsQR(
                    ctx.getImageData(0, 0, canvas.width, canvas.height).data,
                    canvas.width,
                    canvas.height
                );

                if (qrCodeData) {
                    sendUrlToEndpoint(qrCodeData.data)
                        .finally(() => setText(''));
                } else {
                    appendChat({
                        message: t("message-9"),
                        time: getCurrentTime(),
                        alignment: 'left',
                        color: 'neutral'
                    });
                }
            }
        }
        handleCloseCamera();
    };

    const handleCloseCamera = () => {
        if (videoRef.current && videoRef.current.srcObject) {
            const stream = videoRef.current.srcObject as MediaStream;
            stream.getTracks().forEach((track) => track.stop());
            videoRef.current.srcObject = null;
        }
        setCameraActive(false);
    };

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

    useEffect(() => {
        if (lastElementRef.current) {
            lastElementRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [visibleElements]);

    return (
        <div className="flex flex-col h-full justify-between">
            <div className="p-4">
                <div>
                    {elements.slice(0, visibleElements).map((element, index) => (
                        <div key={index} ref={index === visibleElements - 1 ? lastElementRef : null}>
                            {element["content"]}
                        </div>
                    ))}
                    {
                        isLoading && (
                            <LoadingDots alignment={elements[visibleElements].alignment} />
                        )
                    }
                </div>
                <div>
                    {chats.map((chat, index) => (
                        <div key={index}>
                            <div
                                className={`flex flex-col ${chat.alignment === 'right' ? 'items-end' : 'items-start'}`}>
                                <div
                                    className={`chat-box ${
                                        chat.color === 'neutral' ? chat.alignment : `bg-${chat.color}`
                                    }`}
                                >
                                    {chat.image ? (
                                        <img
                                            src={chat.image}
                                            alt={t("message-8")}
                                            className="rounded-lg shadow-md"
                                        />
                                    ) : (
                                        <p className="text-sm md:text-md">{chat.message}</p>
                                    )}
                                    <div className="flex items-center gap-1">
                                        <small className="chat-time">{chat.time}</small>
                                        {
                                            chat.alignment === 'right' && (
                                                <img src="read-double-check-icon.svg" alt="Double check icon"
                                                     className="h-4 w-4 md:h-6 md:w-6"/>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {
                        isLoadingFileUpload && (
                            <div
                                className={`w-full flex py-2 justify-end`}>
                                <div className="flex items-center space-x-1 px-4 py-3 rounded-xl bg-white w-fit">
                                    <p className="mr-4">{t("loading-file")}</p>
                                    <div className="h-2 w-2 rounded-full bg-gray-400 animate-pulse"></div>
                                    <div className="h-2 w-2 rounded-full bg-gray-400 animate-pulse"></div>
                                    <div className="h-2 w-2 rounded-full bg-gray-400 animate-pulse"></div>
                                </div>
                            </div>
                        )
                    }
                    {
                        isFetchingResponse && (
                            <div
                                className={`w-full flex py-2 justify-start`}>
                                <div className="flex items-center space-x-1 px-4 py-3 rounded-xl bg-white w-fit">
                                    <div className="h-2 w-2 rounded-full bg-gray-400 animate-pulse"></div>
                                    <div className="h-2 w-2 rounded-full bg-gray-400 animate-pulse"></div>
                                    <div className="h-2 w-2 rounded-full bg-gray-400 animate-pulse"></div>
                                    <p className="pl-4">
                                        {t("analyzing")}
                                    </p>
                                </div>
                            </div>
                        )
                    }
                    {cameraActive && (
                        <div
                            className="fixed inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center z-50">
                            <video ref={videoRef} className="w-full max-w-md rounded-lg" autoPlay playsInline muted/>
                            <canvas ref={canvasRef} className="hidden"/>
                            <div className="mt-4 space-x-4">
                                <button onClick={handleTakePhoto}
                                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">
                                    {t("scan-qr")}
                                </button>
                                <button onClick={handleCloseCamera}
                                        className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md">
                                    {t("close-camera")}
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="grid sticky bottom-0 w-full items-center z-10 gap-2">
                <div className="flex justify-between px-4">
                    <PrevFabButton url="prevencion-y-denuncia"/>
                    <NextFabButton url="creditos"/>
                </div>
                <div
                    className="w-full bg-[#D1D7DB] shadow-lg p-3 md:p-4 flex items-center justify-between gap-2 md:gap-4">
                    <div className="flex-1 items-center">
                        <div className="flex w-full border shadow-sm p-1 rounded-full bg-white">
                            <input
                                disabled={isFetchingResponse || isLoadingFileUpload}
                                type="text"
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder={t("input")}
                                className="w-full p-2 text-sm text-gray-700 placeholder-gray-500 rounded-full"
                            />
                            <button
                                disabled={isFetchingResponse || isLoadingFileUpload}
                                onClick={() => sendUrlToEndpoint(text).finally(() => setText(''))}
                                className="bg-green-dark hover:bg-green duration-200 text-white p-3 rounded-full shadow-lg">
                                <PaperAirplaneIcon className="w-4 h-4 md:w-6 md:h-6"/>
                            </button>
                        </div>
                    </div>
                    <Tooltip content={t("scan-qr")}>
                        <div className="relative group flex flex-col items-center cursor-pointer">
                            <button
                                onClick={handleOpenCamera}
                                disabled={isFetchingResponse || isLoadingFileUpload}
                                className="bg-green-dark hover:bg-green duration-200 text-white p-3 rounded-full shadow-lg">
                                <QrCodeIcon className="w-4 h-4 md:w-6 md:h-6"/>
                            </button>
                        </div>
                    </Tooltip>
                    <Tooltip content={t("upload-file")}>
                        <div className="relative group flex flex-col items-center cursor-pointer">
                            <label
                                className="bg-green-dark hover:bg-green duration-200 text-white p-3 rounded-full shadow-lg cursor-pointer">
                                <PhotoIcon className="w-4 h-4 md:w-6 md:h-6"/>
                                <input type="file" accept="image/*" className="hidden" onChange={handleFileUpload}
                                       disabled={isFetchingResponse || isLoadingFileUpload}/>
                            </label>
                        </div>
                    </Tooltip>
                </div>
            </div>
        </div>
    );
};
