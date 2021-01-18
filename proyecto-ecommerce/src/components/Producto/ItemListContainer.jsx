import { useState, useEffect } from 'react';
import { getFirestore } from '../../db';
import ItemList from './ItemList';
import './ItemListStyles.css';
import { useParams } from 'react-router-dom';

function ItemListContainer() {
    const [producto, setProductos] = useState([]);
    const { categ } = useParams();
    const db = getFirestore();


    const llamadoProductos = () => {
        db.collection('Productos').get()
            .then(docs => {
                let arrayProds = []
                docs.forEach(doc => {
                    arrayProds.push({ id: doc.id, data: doc.data() })
                })
                setProductos(arrayProds)
            })
            .catch(e => console.log(e));
    }

    useEffect(
        () => llamadoProductos(), [categ]
    )
    return (
        <section className="container" id="ItemDetailContainer">

            {
                producto.length ?
                    <>
                        <div className="row" id="ItemDetail">
                            {
                                producto.map(producto => (
                                    
                                        <ItemList
                                            nombre={producto.data.Nombre}
                                            foto={producto.data.Foto}
                                            precio={producto.data.Precio}
                                            id={producto.id}
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