// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { useState, useEffect } from "react";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./Layout.tsx";
import Inicio from "./pages/Inicio.tsx";
import QueEsLaCiberdelincuencia from "./pages/QueEsLaCiberdelincuencia.tsx";
import VerificadorDeLinks from "./pages/VerificadorDeLinks.tsx";
import { CiberdelincuenciaEnNuestroPais } from "./pages/CiberdelincuenciaEnNuestroPais.tsx";
import { FormatosEjemplo } from "./pages/FormatosEjemplo.tsx";
import { FormasComunesDeAtaquesCiberdigitales } from "./pages/FormasComunesDeAtaquesCiberdigitales.tsx";
import { EstadoDeDenunciasPorCiberdelitos } from "./pages/EstadoDeDenunciasPorCiberdelitos.tsx";
import { Victimas } from "./pages/Victimas.tsx";
import { Especialistas } from "./pages/Especialistas.tsx";
import { Creditos } from "./pages/Creditos.tsx";
import { Otros } from "./pages/Otros.tsx";
import SplashScreen from "./pages/SplashScreen.tsx";
import TeaserSplashScreen from "./pages/TeaserSplashScreen.tsx";

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
                    <Route path="/que-es-la-ciberdelincuencia" element={<QueEsLaCiberdelincuencia />} />
                    <Route path="/ciberdelincuencia-en-nuestro-pais" element={<CiberdelincuenciaEnNuestroPais />} />
                    <Route path="/formas-comunes-de-ataques-ciberdigitales" element={<FormasComunesDeAtaquesCiberdigitales />} />
                    <Route path="/estado-de-denuncias-por-ciberdelitos" element={<EstadoDeDenunciasPorCiberdelitos />} />
                    <Route path="/victimas" element={<Victimas />} />
                    <Route path="/especialistas" element={<Especialistas />} />
                    <Route path="/verificador-de-links" element={<VerificadorDeLinks />} />
                    <Route path="/creditos" element={<Creditos />} />
                    <Route path="/otros" element={<Otros />} />
                    <Route path="*" element={<Inicio />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
