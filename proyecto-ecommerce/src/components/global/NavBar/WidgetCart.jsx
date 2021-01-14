import './NavStyles.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { Store } from '../../../store'


const WidgetCart = ({ show, action }) => {
    const [data, setData] = useContext(Store);


    function removeItem(prod) {
        const arrayNuevo = data.items.filter(item => item.Id != prod.Id)
        setData({
            ...data,
            cantidad: data.cantidad - prod.qty,
            items: arrayNuevo,
            total: data.total - (prod.Precio * prod.qty)
        })
        console.log(data.total)
    }

    function clear() {
        setData({
            items: [],
            cantidad: 0,
            total: 0
        })
    }

    

    return (

        <div className={`widgetCart ${show ? 'open' : 'close'}`}>
            <p className="carrito">Carrito</p>
            {
                data.cantidad == 0 ?
                    <div className="">
                        <p>No hay items en el carrito</p>

                    </div>
                    :
                    data.items.map(item =>
                        <div className="contenedorWid">
                            <p className="produ">{item.Nombre}</p>
                            <span className="cantIndividual">{item.qty} </span>
                            <input type="button" className="borrar" onClick={() => removeItem(item)} value="x" />
                        </div>
                    )
            }
            {
                data.cantidad >= 1 ? 
                <div>
                    <Link to="/cart" className="verCarrito" >ver</Link>
                     <input type="button" className="btnCerrar" onClick={clear} value="Borrar todo"/>
                </div>
                    : 
                    <Link className="verCarrito" to="/cart">ver</Link>
            }


        </div>
    )
}

export default WidgetCart;

