import React from "react";
import {useOutletContext} from "react-router";
import {FormatosEjemplo} from "./FormatosEjemplo.tsx";
import EjemploChat from "./EjemploChat.tsx";

interface OutletContext {
    toggleSidebar: () => void;
}

const Inicio: React.FC = () => {
    const { toggleSidebar } = useOutletContext<OutletContext>();

    return (
        <div className="grid gap-56">
            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center w-full gap-6">
                    <div className="w-full justify-center block">
                        <img
                            src="home-title.png"
                            alt="CiberAlerta Perú"
                            className="object-cover animate-fade-in block"
                        />
                    </div>
                    <div className="bg-green-light text-white px-8 md:px-24 py-4">
                        <h1 className="md:text-2xl text-center">
                            Mantente alerta ante los
                            <br/>
                            <span className="font-bold">peligros online</span>
                        </h1>
                    </div>
                    <div className="grid gap-2 w-full max-w-xs">
                        <button
                            onClick={toggleSidebar}
                            className="button-green">
                            Explorar especial
                        </button>
                        <button
                            className="button-green">
                            Verificador de Links
                        </button>
                    </div>
                </div>
            </div>
            <FormatosEjemplo />
            <EjemploChat />
        </div>

    );
};

export default Inicio;
