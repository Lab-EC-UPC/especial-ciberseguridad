import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { ChevronLeftIcon, MagnifyingGlassIcon, PhoneIcon, VideoCameraIcon } from "@heroicons/react/24/outline";
import {Chats} from "./content/Chats.ts";
import {Link} from "react-router";
import { Suspense } from "react";
import {useTranslation} from "react-i18next";
import {InformationCircleIcon} from "@heroicons/react/24/solid";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    useDisclosure,
} from "@nextui-org/modal";

const Layout: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const { t } = useTranslation(["sidebar"]);
    const routes = Chats;
    const location = useLocation();
    const activeRoute = routes.find((route) => route.link === location.pathname) || routes[0];
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

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
                        <Sidebar routes={routes} toggleSidebar={toggleSidebar} />
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
                            {
                                activeRoute.id === 'verificador-de-links' ? (
                                    <div className="flex">
                                        <button onClick={onOpen} className="hover:scale-95 duration-200">
                                            <InformationCircleIcon className="h-6 md:h-8 text-red-500" />
                                        </button>
                                        <Modal isOpen={isOpen} onOpenChange={onOpenChange} scrollBehavior="inside">
                                            <ModalContent>
                                                {/*@ts-ignore*/}
                                                {(onClose) => (
                                                    <>
                                                        <ModalHeader className="flex flex-col gap-1">
                                                            {t('disclaimer-title')}
                                                        </ModalHeader>
                                                        <ModalBody>
                                                            <div className="space-y-4 text-sm text-gray-700">
                                                                <h2 className="text-lg font-bold">{t("disclaimer.title")}</h2>
                                                                <p>{t("disclaimer.description")}</p>
                                                                <ol className="list-decimal pl-6">
                                                                    <li>
                                                                        <strong>{t("disclaimer.openPhishTitle")}</strong> {t("disclaimer.openPhishDescription")}
                                                                    </li>
                                                                    <li>
                                                                        <strong>{t("disclaimer.googleWebRiskTitle")}</strong> {t("disclaimer.googleWebRiskDescription")}
                                                                    </li>
                                                                    <li>
                                                                        <strong>{t("disclaimer.apivoidTitle")}</strong> {t("disclaimer.apivoidDescription")}
                                                                        <ul className="list-disc pl-6">
                                                                            <li>{t("disclaimer.apivoidLowRisk")}</li>
                                                                            <li>{t("disclaimer.apivoidModerateRisk")}</li>
                                                                            <li>{t("disclaimer.apivoidHighRisk")}</li>
                                                                            <li>{t("disclaimer.apivoidCriticalRisk")}</li>
                                                                        </ul>
                                                                    </li>
                                                                </ol>
                                                                <h3 className="text-md font-bold">{t("disclaimer.interpretationTitle")}</h3>
                                                                <ul className="list-disc pl-6">
                                                                    <li>{t("disclaimer.interpretationSafe")}</li>
                                                                    <li>{t("disclaimer.interpretationWarning")}</li>
                                                                    <li>{t("disclaimer.interpretationUnsafe")}</li>
                                                                </ul>
                                                                <p>{t("disclaimer.interpretationDescription")}</p>
                                                                <h3 className="text-md font-bold">{t("disclaimer.limitationsTitle")}</h3>
                                                                <p>{t("disclaimer.limitationsDescription")}</p>
                                                                <ul className="list-disc pl-6 space-y-1">
                                                                    <li>{t("disclaimer.limitationSocialMedia")}</li>
                                                                    <li>{t("disclaimer.limitationNewSites")}</li>
                                                                    <li>{t("disclaimer.limitationRedirects")}</li>
                                                                    <li>{t("disclaimer.limitationShortUrls")}</li>
                                                                    <li>{t("disclaimer.limitationDynamicContent")}</li>
                                                                    <li>{t("disclaimer.limitationRealTimeAttacks")}</li>
                                                                    <li>{t("disclaimer.limitationOfflineDocs")}</li>
                                                                    <li>{t("disclaimer.limitationTemporarySites")}</li>
                                                                    <li>{t("disclaimer.limitationLocalNetworks")}</li>
                                                                    <li>{t("disclaimer.limitationPhishingPatterns")}</li>
                                                                    <li>{t("disclaimer.limitationAutoTranslations")}</li>
                                                                    <li>{t("disclaimer.limitationDatabaseDependency")}</li>
                                                                    <li>{t("disclaimer.limitationSuspiciousSurveys")}</li>
                                                                </ul>
                                                            </div>
                                                        </ModalBody>


                                                    </>
                                                )}
                                            </ModalContent>
                                        </Modal>
                                    </div>
                                ) : (
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
                                )
                            }
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
