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

    function sumarTotal() {

        data.items.forEach(element => {
            console.log(element.Precio)
            console.log(element.qty)
            setData({
                ...data,
                total: data.total + parseInt(element.Precio) * parseInt(element.qty)
            })
        })
    }

    return (

        <div className={`widgetCart ${show ? 'open' : 'close'}`}>
            <p className="carrito">Carrito</p>
            {
                data.items.map(item =>
                    <div className="contenedorWid">
                        <p className="produ">{item.Nombre}</p>
                        <span className="cantIndividual">{item.qty} </span>
                        <input type="button" className="borrar" onClick={() => removeItem(item)} value="x" />
                    </div>)
            }
            <Link to="/cart" className="verCarrito" onClick={sumarTotal} >ver</Link>
            <input type="button" className="btnCerrar" onClick={clear} value="Borrar todo" />

        </div>
    )
}

export default WidgetCart;

