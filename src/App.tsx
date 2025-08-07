import { useState, useEffect, useCallback } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
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
import { LinkVerifierChat } from "./utils/UrlRiskScoreService.ts";

function App() {
    const [phase, setPhase] = useState<"splash" | "teaser" | "app">("splash");
    const [elementsCiberdelincuencia, setElementsCiberdelincuenciaCiberdelincuencia] = useState(0);
    const [elementsUnPocoDeData, setElementsUnPocoDeData] = useState(0);
    const [elementsElPhishing, setElementsElPhishing] = useState(0);
    const [elementsTestimonios, setElementsTestimonios] = useState(0);
    const [elementsOpiniones, setElementsOpiniones] = useState(0);
    const [elementsPrevencion, setElementsPrevencion] = useState(0);
    const [elementsVerificador, setElementsVerificador] = useState(0);
    const [chats, setChats] = useState<LinkVerifierChat[]>([]);

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                { path: "/", element: <Inicio /> },
                { path: "/ciberdelincuencia", element: <CiberAlertaPeru visibleElements={elementsCiberdelincuencia} setVisibleElements={setElementsCiberdelincuenciaCiberdelincuencia} /> },
                { path: "/un-poco-de-data", element: <UnPocoDeData visibleElements={elementsUnPocoDeData} setVisibleElements={setElementsUnPocoDeData} /> },
                { path: "/el-phishing", element: <ElPhishing visibleElements={elementsElPhishing} setVisibleElements={setElementsElPhishing} /> },
                { path: "/testimonios", element: <Testimonios visibleElements={elementsTestimonios} setVisibleElements={setElementsTestimonios} /> },
                { path: "/opiniones-sobre-la-ciberdelincuencia", element: <OpinionesSobreLaCiberdelincuencia visibleElements={elementsOpiniones} setVisibleElements={setElementsOpiniones} /> },
                { path: "/prevencion-y-denuncia", element: <PrevencionYDenuncia visibleElements={elementsPrevencion} setVisibleElements={setElementsPrevencion} /> },
                { path: "/verificador-de-links", element: <VerificadorDeLinks visibleElements={elementsVerificador} setVisibleElements={setElementsVerificador} chats={chats} setChats={setChats} /> },
                { path: "/creditos", element: <Creditos /> },
                { path: "*", element: <Inicio /> },
            ],
        },
    ]);

    useEffect(() => {
        if (phase === "splash") {
            const timer = setTimeout(() => setPhase("teaser"), 1500);
            return () => clearTimeout(timer);
        }
    }, [phase]);

    const skipTeaserSplashScreen = useCallback(() => setPhase("app"), []);

    useEffect(() => {
        if (phase !== "teaser") return;

        const handleWheel = (e: WheelEvent) => {
            if (e.deltaY > 0) setPhase("app");
        };

        let startY = 0;
        const handleTouchStart = (e: TouchEvent) => {
            startY = e.touches[0].clientY;
        };
        const handleTouchMove = (e: TouchEvent) => {
            const deltaY = startY - e.touches[0].clientY;
            if (deltaY > 30) setPhase("app");
        };

        window.addEventListener("wheel", handleWheel, { passive: true });
        window.addEventListener("touchstart", handleTouchStart, { passive: true });
        window.addEventListener("touchmove", handleTouchMove, { passive: true });

        return () => {
            window.removeEventListener("wheel", handleWheel);
            window.removeEventListener("touchstart", handleTouchStart);
            window.removeEventListener("touchmove", handleTouchMove);
        };
    }, [phase]);

    return (
      <div className="relative w-full h-screen overflow-hidden bg-wallpaper">
          <div
            className={`absolute inset-0 transition-transform duration-500 ${
              phase === "splash" ? "translate-y-0" : "-translate-y-full"
            }`}
          >
              <SplashScreen />
          </div>

          <div
            className={`absolute inset-0 transition-transform duration-500 ${
              phase === "teaser"
                ? "translate-y-0"
                : phase === "splash"
                  ? "translate-y-full"
                  : "-translate-y-full"
            }`}
          >
              <TeaserSplashScreen onSkip={skipTeaserSplashScreen} />
          </div>

          <div
            className={`absolute inset-0 transition-transform duration-500 ${
              phase === "app" ? "translate-y-0" : "translate-y-full"
            }`}
          >
              <RouterProvider router={router} />
          </div>
      </div>
    );
}

export default App;
