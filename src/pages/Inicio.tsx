import {Link} from "react-router";

// interface OutletContext {
//     toggleSidebar: () => void;
// }

export default function Inicio() {
    // const { toggleSidebar } = useOutletContext<OutletContext>();

    return (
        <div className="grid gap-56 p-4">
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
                        <Link to="/ciberdelincuencia">
                            <button
                                className="button-green grid gap-2 w-full max-w-xs animate-scale-loop">
                                Comenzar 🚀
                            </button>
                        </Link>
                        <Link to="/verificador-de-links">
                            <button
                                className="button-green grid gap-2 w-full max-w-xs">
                                Verificador de links 🔗
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    );
};
