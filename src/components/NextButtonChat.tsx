import {Link} from "react-router";
import getCurrentTime from "./CurrentTime.ts";

interface NextButtonProps {
    url: string;
    texto: string;
}

export default function NextButtonChat({url, texto}: NextButtonProps) {
    return (
        <Link to={`/${url}`}>
            <div className="flex flex-col items-end">
                <div className="chat-box right">
                    <p className="text-sm md:text-md">
                        {texto}
                        <span className="underline text-blue-600">Conoce más con el siguiente</span>
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
        </Link>
    );
}
