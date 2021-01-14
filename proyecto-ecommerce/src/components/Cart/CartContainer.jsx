import './CartStyles.css'
import { useContext } from 'react'
import { Store } from '../../store'
import { Link } from 'react-router-dom'



function CartContainer() {

    const [data, setData] = useContext(Store);


    function removeItem(prod) {
        const arrayNuevo = data.items.filter(item => item.Id != prod.Id)
        setData({
            ...data,
            cantidad: data.cantidad - prod.qty,
            items: arrayNuevo,
            total: data.total - (prod.Precio * prod.qty)
        })
    }



    return (
        <div className="cartContenedor container">
            <p className="cartP">Carrito</p>

            {
                data.cantidad = 0 ?
                    <div>
                        <p>No hay items en el carrito</p>
                        <Link to="/">HOME</Link>
                    </div>
                    :
                    data.items.map(
                        item =>
                            <div className="contCartPadre">
                                <div className="contCartProds">
                                    <p className="cadaProd">{item.Nombre} </p>
                                    <span className="cantProdCart">{item.qty}</span>
                                    <input type="button" className="borrarCart" onClick={() => removeItem(item)} value="X" />
                                </div>

                            </div>
                    )
            }

        </div>
    )
}
export default CartContainer;