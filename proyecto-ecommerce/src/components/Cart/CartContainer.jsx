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
    
    const sumaTot = () =>{
        let total=0;
        for(let i=0; i<data.items.length; i++){
            total+=(data.items[i].qty * data.items[i].Precio)
        } 
        
        return total
    }

    return (
        <div className="cartContenedor container">
            <p className="cartP">Carrito</p>

            {
                data.cantidad == 0 ?
                    <div >
                        <p className="">No hay items en el carrito</p>
                        <Link className="carHome" to="/">HOME</Link>
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
            <p className="muestraTotal">{`Tu total es: ${sumaTot()}`}</p>
        </div>
    )
}
export default CartContainer;