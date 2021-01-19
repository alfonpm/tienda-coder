import { useState, useEffect } from 'react';
import './DetalleStyles.css'
import ItemDetail from './ItemDetail'
import {getFirestore} from '../../../db'
import {useParams} from 'react-router-dom'

function ItemDetailContainer() {
    const [producto, setProducto] = useState([]);
    const {id} = useParams();
    const db=getFirestore();

    useEffect(() => {
        
        db.collection('Productos').doc(id).get()
        .then(doc=>{
            if(doc.exists){
                setProducto({id: doc.id, data: doc.data()})
                
            }
        })
        .catch(e=>console.log(e))
    }, []);

    
    return (
        <section className="container" id="ItemDetailContainer">
            {
                producto.data !=undefined    ?
                
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