import './CartStyles.css'
import { useContext } from 'react'
import { Store } from '../../store'

function CartContainer() {

    const [data, setData] = useContext(Store)
    
    return (
        <div className="cartContenedor">
            <p className="cartP">Carrito</p>
            {
                data.items.map(
                    item=> <p className="cadaProd">{item.Nombre} </p>)
                
            }
            
        </div>
    )
}
export default CartContainer;