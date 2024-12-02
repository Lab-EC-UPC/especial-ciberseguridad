import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { ChevronLeftIcon, MagnifyingGlassIcon, PhoneIcon, VideoCameraIcon } from "@heroicons/react/24/outline";
import {Chats} from "./content/Chats.ts";

const Layout: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const routes = Chats;

    const location = useLocation();
    const activeRoute = routes.find((route) => route.link === location.pathname) || routes[0];

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="relative h-screen">
            <div className="absolute top-0 left-0 w-full h-1/5 bg-green"></div>
            <div className="absolute bottom-0 left-0 w-full h-4/5 bg-grey-light"></div>

            <div className="relative flex h-full md:py-6 md:px-20">
                <div
                    className={`fixed inset-0 z-30 transform bg-white border-r border-gray-200 md:static md:translate-x-0 md:w-1/3 w-full ${
                        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    } transition-transform duration-300 ease-in-out`}
                >
                    <Sidebar routes={routes} toggleSidebar={toggleSidebar} />
                </div>

                <div className="flex-1 flex flex-col bg-cover bg-center">
                    <div className="bg-white sticky top-0 flex justify-between w-full items-center p-4 h-20 z-10">
                        <div className="flex items-center gap-4">
                            <button
                                className="flex md:hidden text-grey py-2"
                                onClick={toggleSidebar}
                            >
                                <ChevronLeftIcon className="h-6" />
                                <span className="font-bold">2</span>
                            </button>
                            <div className="flex items-center gap-2 md:gap-4">
                                <img
                                    src={activeRoute.avatar}
                                    alt={activeRoute.title}
                                    className="h-8 w-8 md:h-12 md:w-12 rounded-full"
                                />
                                <h1 className="text-lg md:text-xl font-bold">{activeRoute.title}</h1>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="flex gap-2 text-grey-light items-center ">
                                <div className="flex">
                                    <div className="border border-grey-light py-2 px-3">
                                        <VideoCameraIcon className="h-6" />
                                    </div>
                                    <div className="border border-grey-light py-2 px-3">
                                        <PhoneIcon className="h-6" />
                                    </div>
                                </div>
                                <MagnifyingGlassIcon className="h-6" />
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 overflow-auto p-6 bg-wallpaper">
                        <Outlet context={{ toggleSidebar }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Layout;
