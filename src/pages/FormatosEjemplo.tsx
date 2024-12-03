import AudioPlayer from "../components/AudioPlayer.tsx";

export const FormatosEjemplo = () => {
    return (
        <>
            <div className="">
                {/*TITULOS VERDES*/}
                <div className="flex justify-center">
                    <h1 className="chat-title-box">
                        Ejemplo de titulo
                    </h1>
                </div>

                {/*CENTRO*/}
                <div className="flex flex-col items-center">
                    <div className="chat-box center">
                        <img src="src/assets/joined-chat-icon.svg"
                             alt="Joined chat icon"
                             className="w-12 h-12 md:w-24 md:h-24"
                        />
                        <h1 className="text-lg font-medium">Creaste el grupo</h1>
                        <small>Grupo 4 miembros</small>
                        <p>Explora los testimonios de quienes han sufrido estos ataques y cómo han enfrentado las
                            consecuencias.</p>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="chat-box center">
                        <p>Jessica Rojas se unió usando el enlace de invitación a El Comercio</p>
                    </div>
                </div>

                {/*CHAT IZQUIERDO*/}
                <div className="flex flex-col items-start">
                    <div className="chat-box left">
                        <p>
                            <span className="font-bold">Caja de tipo texto </span>
                            is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s with the release of
                            Letraset
                            sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
                            like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <small className="chat-time">18:50</small>
                    </div>
                </div>

                {/*CHAT DERECHA*/}
                <div className="flex flex-col items-end">
                    <div className="chat-box right">
                        <p>
                            <span className="font-bold">Caja de tipo texto </span>
                            is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s with the release of
                            Letraset
                            sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
                            like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <div className="flex items-center gap-1">
                            <small className="chat-time">18:50</small>
                            <img
                                src="src/assets/read-double-check-icon.svg"
                                alt="Double check icon"
                                className="h-4 w-4 md:h-6 md:w-6"
                            />
                        </div>
                    </div>
                </div>
                {/*IMAGEN DERECHA*/}
                <div className="flex flex-col items-end">
                    <div className="chat-box right">
                        <img
                            src="https://elcomercio.pe/resizer/wRFrqrlVBC0G6LfTG3p1k_C_9ks=/980x528/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/S5QSVVMMIJERFA3MR6OCQB4CPI.jpg"
                            alt="Imagen de ejemplo"
                            className=""
                        />
                        <div className="flex items-center gap-1">
                            <small className="chat-time">18:50</small>
                            <img
                                src="src/assets/read-double-check-icon.svg"
                                alt="Double check icon"
                                className="h-4 w-4 md:h-6 md:w-6"
                            />
                        </div>
                    </div>
                </div>
                {/* VOZ DERECHA */}
                <div className="flex flex-col items-start">
                    <div className="chat-box left">
                        <div className="flex items-center">
                            <div className="flex-1">
                                <AudioPlayer
                                    audio="https://d38nvwmjovqyq6.cloudfront.net/va90web25003/companions/Foundations%20of%20Rock/13.01.mp3"
                                    time="1:30"
                                />
                            </div>
                            <div className="flex-shrink-0">
                                <img
                                    src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                                    alt="Voice message avatar"
                                    className="w-12 h-12 md:w-24 md:h-24 rounded-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* VOZ IZQUIERDA */}
                <div className="flex flex-col items-end">
                    <div className="chat-box right">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <img
                                    src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                                    alt="Voice message avatar"
                                    className="w-12 h-12 md:w-24 md:h-24 rounded-full object-cover"
                                />
                            </div>
                            <div className="flex-1">
                                <AudioPlayer
                                    audio="https://d38nvwmjovqyq6.cloudfront.net/va90web25003/companions/Foundations%20of%20Rock/13.01.mp3"
                                    time="1:30"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}