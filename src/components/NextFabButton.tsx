import {Link} from "react-router";
import {ArrowRightIcon} from "@heroicons/react/24/outline";

interface NextButtonProps {
    url: string;
}

export default function NextFabButton({url}: NextButtonProps) {
    return (
        <Link to={`/${url}`}>
            <div className="flex gap-4 absolute bottom-4 md:bottom-8 right-4 md:right-24 z-10">
                <div className="hover:scale-90 duration-200 p-4 bg-green-dark rounded-full">
                    <ArrowRightIcon className="text-white h-6 w-6"/>
                </div>
            </div>
        </Link>
    );
}
