import './FooterStyles.css'
import { ImInstagram } from "react-icons/im";
import {ImFacebook2} from "react-icons/im";
import {ImPhone} from "react-icons/im";
import {ImEnvelop} from "react-icons/im";

function Footer() {
    return (
        <footer className="d-flex align-items-center row mx-auto">
            <p className="pFooter d-none d-md-block col-md-4 ">Todos los derechos reservados</p>
            <a className="col-1" href="https://www.instagram.com/lapampa.uruguay/">
                <ImInstagram className="instagram" />
            </a>
            <a className="col-12 col-md-1 " href="https://www.facebook.com/lapampauruguay">
                <ImFacebook2 className="instagram" />
            </a>
            <span className=" spnTelefono col-12 col-md-2 ">
             <ImPhone className="telefono"/> +598 - 46334085
            </span>
            <a  href="mailto:lapampauruguay@gmail.com" className="col-12 col-md-4 mailA ">
                <ImEnvelop className="mail"/> lapampauruguay@gmail.com
            </a>
        </footer>
    )
}

export default Footer;