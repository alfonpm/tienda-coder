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
        if (categ) {
            db.collection('Productos').where("Categoria", "==", `${categ}`).get()
                .then(docs => {
                    let arrayProds = []
                    docs.forEach(doc => {
                        arrayProds.push({ id: doc.id, data: doc.data() })
                    })
                    setProductos(arrayProds)
                })
                .catch(e => console.log(e));
        } else {
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
    }

    useEffect(
        () => llamadoProductos(), 
        // eslint-disable-next-line react-hooks/exhaustive-deps
    [categ])
    return (
        <section className="container" id="ItemDetailContainer">
            {
                producto.length ?
                    <>
                        <div className="row">
                            {
                                producto.map(producto => (
                                    <ItemList
                                        key={producto.id}
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