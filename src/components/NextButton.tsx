import {Link} from "react-router";
import {ArrowUpCircleIcon} from "@heroicons/react/24/solid";

export default function NextButton(link: string, texto: string) {
    return (
        <Link to={`/${link}`}>
            <div className="flex flex-col items-center hover:scale-95 duration-300">
                <div className="chat-box center gap-2">
                    <ArrowUpCircleIcon className="h-6 text-green-dark animate-bounce"/>
                    <p className="text-sm md:text-lg">
                        <span className="font-bold text-green-dark">Continúa: </span>
                        {texto}
                    </p>
                </div>
            </div>
        </Link>
    );
}
