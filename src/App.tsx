import './App.css'
import {BrowserRouter, Route, Routes} from "react-router";
import Layout from "./Layout.tsx";
import Inicio from "./pages/Inicio.tsx";
import QueEsLaCiberdelincuencia from "./pages/QueEsLaCiberdelincuencia.tsx";
import VerificadorDeLinks from "./pages/VerificadorDeLinks.tsx";
import {CiberdelincuenciaEnNuestroPais} from "./pages/CiberdelincuenciaEnNuestroPais.tsx";
import {FormatosEjemplo} from "./pages/FormatosEjemplo.tsx";
import {FormasComunesDeAtaquesCiberdigitales} from "./pages/FormasComunesDeAtaquesCiberdigitales.tsx";
import {EstadoDeDenunciasPorCiberdelitos} from "./pages/EstadoDeDenunciasPorCiberdelitos.tsx";
import {Victimas} from "./pages/Victimas.tsx";
import {Especialistas} from "./pages/Especialistas.tsx";
import {Creditos} from "./pages/Creditos.tsx";
import {Otros} from "./pages/Otros.tsx";

function App() {
    return (
        <>
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
        </>
    )
}

export default App
