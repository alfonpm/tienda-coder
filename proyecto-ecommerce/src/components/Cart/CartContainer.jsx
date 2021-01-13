import './CartStyles.css'
import { useContext } from 'react'
import { Store } from '../../store'

function CartContainer() {

    const [data, setData] = useContext(Store);


    function removeItem(prod) {
        const arrayNuevo = data.items.filter(item => item.Id != prod.Id)
        setData({
            ...data,
            cantidad: data.cantidad - prod.qty,
            items: arrayNuevo
        })
    }


    function sumarTotal() {
        let total = 0;
        data.items.forEach(element => {
            total += element.Precio * element.qty;
            console.log(total)
        })
        console.log(total)
        return total;
    }

    return (
        <div className="cartContenedor container">
            <p className="cartP">Carrito</p>
            {
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