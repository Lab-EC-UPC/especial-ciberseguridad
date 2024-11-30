import './App.css'
import {BrowserRouter, Route, Routes} from "react-router";
import Layout from "./Layout.tsx";
import Home from "./pages/Home.tsx";
import Definition from "./pages/Definition.tsx";
import LinkVerifier from "./pages/LinkVerifier.tsx";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/definition" element={<Definition />} />
                        <Route path="/link-verifier" element={<LinkVerifier />} />
                        <Route path="*" element={<Home />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
