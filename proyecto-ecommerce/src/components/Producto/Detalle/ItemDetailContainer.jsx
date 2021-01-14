import { useState, useEffect } from 'react';
import './DetalleStyles.css'
import ItemDetail from './ItemDetail'
import {ListProducts} from '../ListProducts'
import {useParams} from 'react-router-dom'

function ItemDetailContainer() {
    const [producto, setProducto] = useState([]);

    const {itemid} = useParams() 
    

    const promesaProducto = new Promise((resolve, reject) => {       
            setTimeout(() => {
            const prodSeleccionado = ListProducts.find(producto=> producto.Id==itemid)
            resolve(prodSeleccionado);
        }, )
    })
const llamadoProducto = ()=>{
    promesaProducto.then((respuesta)=> setProducto(respuesta))
}
    useEffect(() => {
        llamadoProducto();
    }, []);

    
    return (
        <section className="container" id="ItemDetailContainer">
            {
                producto ?
                
                        <div className="container-fluid" id="ItemDetail">
                            {
                                    <ItemDetail
                                        producto={producto}
                                    />
                            }
                        </div>
                    :
                    <p className="mensaje">No existe ese producto...</p>
            }
        </section>
    )

}

export default ItemDetailContainer;