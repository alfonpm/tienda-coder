import './NavStyles.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { Store } from '../../../store'
import BtnCerrar from './BtnCerrar'
import {BsTrash} from "react-icons/bs"

const WidgetCart = ({ show, action }) => {
    const [data, setData] = useContext(Store);

    function removeItem(prod) {
        const arrayNuevo = data.items.filter(item => item.id !== prod.id)
        setData({
            ...data,
            cantidad: data.cantidad - prod.data.qty,
            items: arrayNuevo,
        })
    }

    function clear() {
        setData({
            items: [],
            cantidad: 0,
        })
    }

    return (

        <div className={`widgetCart ${show ? 'open' : 'close'}`}>
            
            {
                data.cantidad === 0 ?
                    <div className="">
                        <p className="mensajeCart">No hay items en el carrito</p>

                    </div>
                    :
                    data.items.map(item =>
                        <div className="contenedorWid row">
                            <figure className="figWid col-4">
                                <img className="fotoWidget" src={`/assets/${item.data.Foto}`} alt=""></img>
                            </figure>
                            <p className="produ col-4">{item.data.Nombre}</p>
                            <span className="cantIndividual col-2">{item.data.qty}</span>
                            <button className="borrar col-2" onClick={() => removeItem(item)}><BtnCerrar /></button>
                        </div>
                    )
            }
            {
                data.cantidad >= 1 ?
                    <div>
                        <Link to="/cart" className="verCarrito" >ver</Link>
                        <button type="button" className="btnCerrar" onClick={clear}><BsTrash/></button>
                    </div>
                    :
                    <Link className="verCarrito" to="/cart">ver</Link>
            }
        </div>
    )
}

export default WidgetCart;

