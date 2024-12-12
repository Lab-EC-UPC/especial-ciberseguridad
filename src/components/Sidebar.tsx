import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {ChatBubbleLeftIcon, EllipsisVerticalIcon, XMarkIcon} from "@heroicons/react/24/outline";
import {SpeakerXMarkIcon} from "@heroicons/react/24/solid";


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
    toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ routes, toggleSidebar }) => {
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
        toggleSidebar();
    };

    return (
        <div className="relative h-full flex flex-col bg-white border-r-2 border-grey-light">
            <div className="flex justify-between h-20 p-4 items-center border-gray-200">
                <h1 className="md:text-2xl font-bold">
                    Especial Ciberdelincuencia
                </h1>
                <div className="hidden md:block">
                    <div className="flex gap-4 h-6 text-grey">
                        <ChatBubbleLeftIcon/>
                        <EllipsisVerticalIcon/>
                    </div>
                </div>
                <button
                    className="md:hidden"
                    onClick={toggleSidebar}
                >
                    <XMarkIcon className="h-6 text-grey"/>
                </button>
            </div>
            <div className="flex-1 overflow-auto">
                <ul className="">
                    {routes.map((route, index) => (
                        <NavLink
                            key={index}
                            to={route.link}
                            onClick={() => handleNavLinkClick(route.link)}
                            className={({isActive}) =>
                                `flex items-center p-4 cursor-pointer ${
                                    isActive ? "bg-zinc-100" : "hover:bg-slate-100"
                                }`
                            }
                        >
                            <img
                                src={route.avatar}
                                alt={route.title}
                                className="h-16 w-16 rounded-full object-cover mr-4 border"
                            />
                            <div className="flex-1 border-b border-grey-light">
                                <div className="pb-4">
                                    <div className="flex justify-between items-center">
                                        <h2 className="font-medium">{route.title}</h2>
                                        <div className="grid items-center">
                                        <span className="text-xs text-gray-400 ml-2">
                                            {route.time}
                                        </span>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-1">
                                            {readStatus[route.link] ? (
                                                <img
                                                    src="read-double-check-icon.svg"
                                                    alt="Double check icon"
                                                    className="h-4 w-4 md:h-6 md:w-6"
                                                />
                                            ) : (
                                                <img
                                                    src="unread-double-check-icon.svg"
                                                    alt="Double check icon"
                                                    className="h-4 w-4 md:h-6 md:w-6"
                                                />
                                            )}
                                            <p className="text-sm text-gray-500 truncate">{route.message}</p>
                                        </div>
                                        <div className="flex gap-1">
                                            {
                                                route.isPinned ? (
                                                    <svg
                                                        className="h-4"
                                                        viewBox="0 0 24 24" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round"
                                                           stroke-linejoin="round"></g>
                                                        <g id="SVGRepo_iconCarrier">
                                                            <path
                                                                d="M19.1835 7.80516L16.2188 4.83755C14.1921 2.8089 13.1788 1.79457 12.0904 2.03468C11.0021 2.2748 10.5086 3.62155 9.5217 6.31506L8.85373 8.1381C8.59063 8.85617 8.45908 9.2152 8.22239 9.49292C8.11619 9.61754 7.99536 9.72887 7.86251 9.82451C7.56644 10.0377 7.19811 10.1392 6.46145 10.3423C4.80107 10.8 3.97088 11.0289 3.65804 11.5721C3.5228 11.8069 3.45242 12.0735 3.45413 12.3446C3.45809 12.9715 4.06698 13.581 5.28476 14.8L6.69935 16.2163L2.22345 20.6964C1.92552 20.9946 1.92552 21.4782 2.22345 21.7764C2.52138 22.0746 3.00443 22.0746 3.30236 21.7764L7.77841 17.2961L9.24441 18.7635C10.4699 19.9902 11.0827 20.6036 11.7134 20.6045C11.9792 20.6049 12.2404 20.5358 12.4713 20.4041C13.0192 20.0914 13.2493 19.2551 13.7095 17.5825C13.9119 16.8472 14.013 16.4795 14.2254 16.1835C14.3184 16.054 14.4262 15.9358 14.5468 15.8314C14.8221 15.593 15.1788 15.459 15.8922 15.191L17.7362 14.4981C20.4 13.4973 21.7319 12.9969 21.9667 11.9115C22.2014 10.826 21.1954 9.81905 19.1835 7.80516Z"
                                                                fill="#6b7280">
                                                            </path>
                                                        </g>
                                                    </svg>
                                                ) : null
                                            }
                                            {
                                                route.isMute ? (
                                                    <SpeakerXMarkIcon className="h-4 text-grey"/>
                                                ) : null
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </NavLink>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;