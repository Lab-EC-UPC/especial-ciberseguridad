import {Link} from "react-router";
import {ArrowLeftIcon} from "@heroicons/react/24/outline";

interface NextButtonProps {
    url: string;
}

export default function PrevFabButton({url}: NextButtonProps) {
    return (
        <Link to={`/${url}`}>
            <div className="hover:scale-90 duration-200 p-4 bg-green-dark rounded-full">
                <ArrowLeftIcon className="text-white h-6 w-6"/>
            </div>
        </Link>
    );
}
