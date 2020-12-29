import './NavStyles.css'
import {Link} from 'react-router-dom'
const WidgetCart = ({show, action}) => {
    return (
        <div className={`widgetCart ${show ? 'open' : 'close'}`}>
            <p className="carrito">Carrito</p>
            <Link to="/cart" className="verCarrito">ver</Link>
            <input type= "button" className="btnCerrar" onClick={action} value="Cerrar" />
             
        </div>
    )
}

export default WidgetCart;

