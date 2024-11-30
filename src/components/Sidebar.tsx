import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { CheckIcon } from "@heroicons/react/20/solid"; // Correct import path

interface Route {
    link: string;
    title: string;
    message: string;
    time: string;
    avatar: string;
    isPinned: boolean;
    isMute: boolean;
    isRead: boolean;
}

interface SidebarProps {
    routes: Route[];
}

const Sidebar: React.FC<SidebarProps> = ({ routes }) => {
    const [readStatus, setReadStatus] = useState<Record<string, boolean>>(
        routes.reduce((acc, route) => {
            acc[route.link] = route.isRead || false;
            return acc;
        }, {} as Record<string, boolean>)
    );

    const handleNavLinkClick = (link: string) => {
        setReadStatus((prevStatus) => ({
            ...prevStatus,
            [link]: true,
        }));
    };

    return (
        <div className="h-screen w-1/3 flex flex-col">
            <div className="grid h-20 p-4 items-center border-gray-200">
                <h1 className="text-xl font-bold">WhatsApp Web</h1>
            </div>
            <ul className="flex-1 overflow-y-auto">
                {routes.map((route, index) => (
                    <NavLink
                        key={index}
                        to={route.link}
                        onClick={() => handleNavLinkClick(route.link)}
                        className={({ isActive }) =>
                            `flex items-center p-4 cursor-pointer ${
                                isActive ? "bg-zinc-100" : "hover:bg-slate-100"
                            }`
                        }
                    >
                        <img
                            src={route.avatar}
                            alt={route.title}
                            className="h-16 w-16 rounded-full mr-4"
                        />
                        <div className="flex-1 border-b border-gray-300">
                            <div className="pb-4">
                                <div className="flex justify-between items-center">
                                    <h2 className="text-sm font-bold">{route.title}</h2>
                                    <div className="flex items-center">
                                        <span className="text-xs text-gray-400 ml-2">
                                            {route.time}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1">
                                    {readStatus[route.link] ? (
                                        <div className="text-blue-500 flex">
                                            <CheckIcon className="h-4 w-4"/>
                                            <CheckIcon className="h-4 w-4"/>
                                        </div>
                                    ) : (
                                        <CheckIcon className="h-4 w-4 text-gray-400"/>
                                    )}
                                    <p className="text-sm text-gray-500 truncate">{route.message}</p>
                                </div>
                            </div>
                        </div>
                    </NavLink>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
