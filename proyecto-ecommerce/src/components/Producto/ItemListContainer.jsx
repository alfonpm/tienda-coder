import { useState, useEffect } from 'react';
import { ListProducts } from './ListProducts'
import ItemList from './ItemList'
import './ItemListStyles.css'
import { useParams } from 'react-router-dom'

function ItemListContainer() {
    const [producto, setProductos] = useState([]);

    const { categ } = useParams();
    console.log(categ)

    const promesaProd = new Promise((resolve, reject) => {
        setTimeout(() => resolve(ListProducts), 2000)
    })

    const llamadoProductos = () => {
        promesaProd.then((respuesta) => {
            if(categ){
                const prodCat = respuesta.filter(
                  (producto)=>  producto.Categoria === categ)
                setProductos(prodCat)
            } else{
                setProductos(respuesta)
            }
                
            })
    }

    useEffect(
        () => llamadoProductos(), [categ]
    )
    return (
        <section className="container" id="ItemDetailContainer">

            {
                producto ?
                    <>
                        <div className="row" id="ItemDetail">
                            {
                                producto.map(producto => (
                                    <ItemList
                                        producto={producto}
                                    />
                                ))
                            }
                        </div>
                    </> :
                    <p className="mensaje">Cargando productos...</p>
            }
        </section>
    )
}

export default ItemListContainer;