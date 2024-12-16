import {Link} from "react-router";
import {ArrowRightIcon} from "@heroicons/react/24/outline";

interface NextButtonProps {
    url: string;
}

export default function NextFabButton({url}: NextButtonProps) {
    return (
        <Link to={`/${url}`}>
            <div className="hover:scale-90 duration-200 p-2 md:p-3 bg-green-dark rounded-full">
                <ArrowRightIcon className="text-white h-4 w-4 md:h-6 md:w-6"/>
            </div>
        </Link>
    );
}
