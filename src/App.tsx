// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { useState, useEffect } from "react";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./Layout.tsx";
import Inicio from "./pages/Inicio.tsx";
import VerificadorDeLinks from "./pages/VerificadorDeLinks.tsx";
import { FormatosEjemplo } from "./pages/FormatosEjemplo.tsx";
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

    const skipTeaserSplashScreen = () => {
        setTransitionClass("fade-out");
        setTimeout(() => setScreen(3), 500);
    };

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

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/formatos-ejemplo-para-borrar" element={<FormatosEjemplo />} />
                    <Route path="/" element={<Inicio />} />
                    <Route path="/ciberdelincuencia" element={<CiberAlertaPeru />} />
                    <Route path="/un-poco-de-data" element={<UnPocoDeData />} />
                    <Route path="/el-phishing" element={<ElPhishing />} />
                    <Route path="/testimonios" element={<Testimonios />} />
                    <Route path="/opiniones-sobre-la-ciberdelincuencia" element={<OpinionesSobreLaCiberdelincuencia />} />
                    <Route path="/prevencion-y-denuncia" element={<PrevencionYDenuncia />} />
                    <Route path="/verificador-de-links" element={<VerificadorDeLinks />} />
                    <Route path="/creditos" element={<Creditos />} />
                    <Route path="*" element={<Inicio />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
