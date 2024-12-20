import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { ChevronLeftIcon, MagnifyingGlassIcon, PhoneIcon, VideoCameraIcon } from "@heroicons/react/24/outline";
import {Chats} from "./content/Chats.ts";
import {Link} from "react-router";
import { Suspense } from "react";
import i18n from "i18next";
import {useTranslation} from "react-i18next";

const Layout: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const { t } = useTranslation(["sidebar"]);
    const routes = Chats;
    const location = useLocation();
    const activeRoute = routes.find((route) => route.link === location.pathname) || routes[0];

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const switchLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
        localStorage.setItem("language", lang);
    }

    const Loader: React.FC = () => {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-dark"></div>
            </div>
        );
    };

    return (
        <Suspense fallback={<Loader/>}>
            <div className="relative h-screen">
                <div className="absolute top-0 left-0 w-full h-1/5 bg-green"></div>
                <div className="absolute bottom-0 left-0 w-full h-4/5 bg-grey-light"></div>

                <div className="relative flex h-full md:py-6 md:px-20">
                    <div
                        className={`fixed inset-0 z-30 transform bg-white border-r border-gray-200 md:static md:translate-x-0 md:w-1/3 w-full ${
                            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                        } transition-transform duration-300 ease-in-out`}
                    >
                        <Sidebar routes={routes} toggleSidebar={toggleSidebar} switchLanguage={switchLanguage} />
                    </div>

                    <div className="flex-1 flex flex-col bg-cover bg-center">
                        <div
                            className="bg-white sticky top-0 flex justify-between w-full items-center p-4 h-20 z-10 border-b-2">
                            <div className="flex items-center gap-4">
                                <button
                                    className="flex md:hidden text-grey py-2"
                                    onClick={toggleSidebar}
                                >
                                    <ChevronLeftIcon className="h-6 animate-left-to-right"/>
                                    <span className="font-bold">2</span>
                                </button>
                                <Link to="/creditos">
                                    <div
                                        className="flex items-center gap-1 md:gap-2 hover:text-green-dark hover:scale-95 duration-200">
                                        <img
                                            src={activeRoute.avatar}
                                            alt={activeRoute.title}
                                            className="h-8 w-8 md:h-12 md:w-12 object-cover rounded-full"
                                        />
                                        <h1 className="text-lg md:text-xl font-medium font-tomorrow">
                                            {t(`${activeRoute.id}.subtitle`)}
                                        </h1>
                                    </div>
                                </Link>
                            </div>
                            <div className="hidden md:block">
                                <div className="flex gap-2 text-grey-light items-center ">
                                    <div className="flex">
                                        <div className="border border-grey-light py-2 px-3">
                                            <VideoCameraIcon className="h-6"/>
                                        </div>
                                        <div className="border border-grey-light py-2 px-3">
                                            <PhoneIcon className="h-6"/>
                                        </div>
                                    </div>
                                    <MagnifyingGlassIcon className="h-6"/>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 overflow-auto bg-wallpaper bg-chat">
                            <Outlet context={{toggleSidebar}}/>
                        </div>
                    </div>
                </div>
            </div>
        </Suspense>
    );
};

export default Layout;
