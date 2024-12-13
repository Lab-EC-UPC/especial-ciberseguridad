import {Link} from "react-router";
import {ArrowDownCircleIcon} from "@heroicons/react/24/solid";

interface NextButtonProps {
    url: string;
    texto: string;
}

export default function NextButton({url, texto}: NextButtonProps) {
    return (
        <Link to={`/${url}`}>
            <div className="flex flex-col items-center hover:scale-95 duration-300">
                <div className="chat-box center gap-2">
                    <p className="text-sm md:text-lg">
                        <span className="font-bold text-green-dark">Continúa: </span>
                        {texto}
                    </p>
                    <ArrowDownCircleIcon className="h-6 text-green-dark animate-bounce"/>
                </div>
            </div>
        </Link>
    );
}
