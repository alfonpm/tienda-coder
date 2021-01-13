import './NavStyles.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Store } from '../../../store'


const WidgetCart = ({ show, action }) => {
    const [data, setData] = useContext(Store)


    /*function removeItem(prod) {
       const arrayNuevo =  data.items.filter( item => item.Id != prod.Id)
       setData({
        ...data,   
        items:arrayNuevo
    }) 
    }*/

   /* function clear(){
        setData({
            items:[],
            cantidad:0
        })
    }*/
    return (

        <div className={`widgetCart ${show ? 'open' : 'close'}`}>
            <p className="carrito">Carrito</p>
            {
                data.items.map(item =>
                    <div>
                        <p className="produ">{item.Nombre}</p>
                        
                        <input type="button" className="borrar"    value="borrar"/>
                    </div>)
            }
            <Link to="/cart" className="verCarrito">ver</Link>
            <input type="button" className="btnCerrar" value="Borrar todo" />

        </div>
    )
}

export default WidgetCart;

