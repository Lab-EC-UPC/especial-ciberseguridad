import Inicio from "./Inicio.tsx";
import CiberAlertaPeru from "./CiberAlertaPeru.tsx";
import UnPocoDeData from "./UnPocoDeData.tsx";
import ElPhishing from "./ElPhishing.tsx";
import Testimonios from "./Testimonios.tsx";
import OpinionesSobreLaCiberdelincuencia from "./OpinionesSobreLaCiberdelincuencia.tsx";
import PrevencionYDenuncia from "./PrevencionYDenuncia.tsx";
import VerificadorDeLinks from "./VerificadorDeLinks.tsx";


export default function PaginaPrincipal () {

    return (
        <div>
            <div id="inicio"><Inicio /></div>
            <div id="ciberalerta-peru"><CiberAlertaPeru/></div>
            <div id="un-poco-de-data"><UnPocoDeData/></div>
            <div id="el-phishing"><ElPhishing/></div>
            <div id="testimonios"><Testimonios/></div>
            <div id="opiniones-sobre-la-ciberdelincuencia"><OpinionesSobreLaCiberdelincuencia/></div>
            <div id="prevencion-y-denuncia"><PrevencionYDenuncia/></div>
            <div id="verificador-de-links"><VerificadorDeLinks/></div>
        </div>
    );
}