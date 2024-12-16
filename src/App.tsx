import { useState, useEffect } from "react";
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.tsx";
import Inicio from "./pages/Inicio.tsx";
import VerificadorDeLinks from "./pages/VerificadorDeLinks.tsx";
import Creditos from "./pages/Creditos.tsx";
import SplashScreen from "./pages/SplashScreen.tsx";
import TeaserSplashScreen from "./pages/TeaserSplashScreen.tsx";
import CiberAlertaPeru from "./pages/CiberAlertaPeru.tsx";
import UnPocoDeData from "./pages/UnPocoDeData.tsx";
import ElPhishing from "./pages/ElPhishing.tsx";
import Testimonios from "./pages/Testimonios.tsx";
import OpinionesSobreLaCiberdelincuencia from "./pages/OpinionesSobreLaCiberdelincuencia.tsx";
import PrevencionYDenuncia from "./pages/PrevencionYDenuncia.tsx";

function App() {
    const [screen, setScreen] = useState(1);
    const [transitionClass, setTransitionClass] = useState("");

    const [elementsCiberdelincuencia, setElementsCiberdelincuenciaCiberdelincuencia] = useState(0);
    const [elementsUnPocoDeData, setElementsUnPocoDeData] = useState(0);
    const [elementsElPhishing, setElementsElPhishing] = useState(0);
    const [elementsTestimonios, setElementsTestimonios] = useState(0);
    const [elementsOpiniones, setElementsOpiniones] = useState(0);
    const [elementsPrevencion, setElementsPrevencion] = useState(0);
    const [elementsVerificador, setElementsVerificador] = useState(0);
    const [responses, setResponses] = useState<{ message: string; details?: string; time: string; url?: string }[]>([]);

    const skipTeaserSplashScreen = () => {
        setTransitionClass("fade-out");
        setTimeout(() => setScreen(3), 500);
    };

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                { path: "/", element: <Inicio /> },
                {
                    path: "/ciberdelincuencia",
                    element:
                        <CiberAlertaPeru
                            visibleElements={elementsCiberdelincuencia}
                            setVisibleElements={setElementsCiberdelincuenciaCiberdelincuencia}
                        />
                },
                {
                    path: "/un-poco-de-data",
                    element:
                        <UnPocoDeData
                            visibleElements={elementsUnPocoDeData}
                            setVisibleElements={setElementsUnPocoDeData}
                        />
                },
                {
                    path: "/el-phishing",
                    element:
                        <ElPhishing
                            visibleElements={elementsElPhishing}
                            setVisibleElements={setElementsElPhishing}
                        />
                },
                {
                    path: "/testimonios",
                    element:
                        <Testimonios
                            visibleElements={elementsTestimonios}
                            setVisibleElements={setElementsTestimonios}
                        />
                },
                {
                    path: "/opiniones-sobre-la-ciberdelincuencia",
                    element:
                        <OpinionesSobreLaCiberdelincuencia
                            visibleElements={elementsOpiniones}
                            setVisibleElements={setElementsOpiniones}
                        />
                },
                {
                    path: "/prevencion-y-denuncia",
                    element: <PrevencionYDenuncia
                        visibleElements={elementsPrevencion}
                        setVisibleElements={setElementsPrevencion}
                    />
                },
                {
                    path: "/verificador-de-links",
                    element:
                        <VerificadorDeLinks
                            visibleElements={elementsVerificador}
                            setVisibleElements={setElementsVerificador}
                            responses={responses}
                            setResponses={setResponses}
                        />
                },
                { path: "/creditos", element: <Creditos /> },
                { path: "*", element: <Inicio /> },
            ],
        },
    ]);

    useEffect(() => {
        if (screen === 1) {
            setTransitionClass("fade-in");
            const timer = setTimeout(() => {
                setTransitionClass("fade-out");
                setTimeout(() => {
                    setScreen(2);
                    setTransitionClass("fade-in");
                }, 500);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [screen]);

    if (screen === 1) {
        return (
            <div className={`transition-container ${transitionClass} relative h-screen bg-wallpaper`}>
                <SplashScreen />
            </div>
        );
    }

    if (screen === 2) {
        return (
            <div className={`transition-container ${transitionClass} relative h-screen bg-wallpaper`}>
                <TeaserSplashScreen onSkip={skipTeaserSplashScreen} />
            </div>
        );
    }

    return <RouterProvider router={router} />;
}

export default App;
