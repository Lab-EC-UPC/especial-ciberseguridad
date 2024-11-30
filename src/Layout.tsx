import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";

const Layout: React.FC = () => {
    const routes = [
        {
            link: "/",
            title: "CiberAlerta Perú",
            message: "Bienvenidos al especial",
            time: "Jueves",
            avatar: "https://cdn0.iconfinder.com/data/icons/color-statistics/433492/08-512.png",
            isPinned: false,
            isMute: false,
            isRead: true,
        },
        {
            link: "/definition",
            title: "¿Qué es la ciberdelincuencia?",
            message: "¿Cómo ha ido creciendo este delito?",
            time: "18:10",
            avatar: "https://png.pngtree.com/png-vector/20221019/ourlarge/pngtree-wondering-avatar-with-a-question-mark-head-seeking-iconic-help-vector-png-image_15051410.jpg",
            isPinned: true,
            isMute: true,
            isRead: false,
        },
        {
            link: "/link-verifier",
            title: "Link Verifier Tool",
            message: "Verify your links now",
            time: "Yesterday",
            avatar: "https://cdn-icons-png.flaticon.com/512/287/287221.png",
            isPinned: false,
            isMute: true,
            isRead: false,
        },
    ];

    const location = useLocation();
    const activeRoute = routes.find((route) => route.link === location.pathname) || routes[0];

    return (
        <div className="flex h-screen">
            <Sidebar routes={routes} />
            <div className="flex-1 overflow-auto bg-cover bg-center bg-[#efeae2]">
                <div className="flex items-center bg-white p-4 h-20">
                    <img
                        src={activeRoute.avatar}
                        alt={activeRoute.title}
                        className="h-12 w-12 rounded-full mr-4"
                    />
                    <h1 className="text-xl font-bold">{activeRoute.title}</h1>
                </div>
                <div className="p-6">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Layout;
