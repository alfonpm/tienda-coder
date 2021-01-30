import './CartStyles.css'
import { useContext } from 'react'
import { Store } from '../../store'
import { Link } from 'react-router-dom'
import { BsTrash } from "react-icons/bs"
import { TiHomeOutline } from "react-icons/ti";


function CartContainer() {

    const [data, setData] = useContext(Store);

    function removeItem(prod) {
        const arrayNuevo = data.items.filter(item => item.id !== prod.id)
        setData({
            ...data,
            cantidad: data.cantidad - prod.data.qty,
            items: arrayNuevo,
        })
    }

    const sumaTot = () => {
        let total = 0;
        for (let i = 0; i < data.items.length; i++) {
            total += parseInt(data.items[i].data.qty) * parseInt(data.items[i].data.Precio)
        }
        return total
    }

    return (
        <div className="cartContenedor container">
            <p className="cartTitulo">Carrito</p>
            {
                data.cantidad === 0 ?
                    <div >
                        <p className="">No hay items en el carrito</p>

                    </div>
                    :
                    data.items.map(
                        item =>
                            <div className="contCartPadre">
                                <div className="contCartProds row">
                                    <figure className="figureCart col-12 col-md-2">
                                        <img className="fotoCart" src={`/assets/${item.data.Foto}`} alt=""></img>
                                    </figure>
                                    <p className="NombreProd col-12 col-md-4">{item.data.Nombre} </p>
                                    <span className="cantProdCart col-12 col-md-2">{item.data.qty}</span>
                                    <span className="precio col-12 col-md-2">$ {item.data.Precio}</span>
                                    <button className="borrarCart col-12 col-md-2" onClick={() => removeItem(item)}><BsTrash className="btnBorrarCart" /></button>
                                </div>
                            </div>
                    )
            }
            {
                data.cantidad === 0 ?
                    <Link className="carHome" to="/">HOME</Link>
                    :
                    <aside className="detalleCompra">
                        <p className="muestraTotal">{`Tu total es: $${sumaTot()}`}</p>
                        <Link className="btn" to="/Checkout">
                            <span class="text">Text</span>
                            <span class="flip-front">FINALIZAR</span>
                            <span class="flip-back">COMPRA</span>
                        </Link>
                    </aside>
            }


        </div>
    )
}
export default CartContainer;