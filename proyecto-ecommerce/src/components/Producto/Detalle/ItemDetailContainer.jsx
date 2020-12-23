import { useState, useEffect } from 'react';
import campera from '../../../assets/campera.jpg'
import './DetalleStyles.css'
import ItemDetail from './ItemDetail'

function ItemDetailContainer() {
    let [item, setItem] = useState([]);
    const product = [
        {
            Id: 1,
            Nombre: "Campera",
            Talle: "L",
            Color: "Marron",
            Precio: "$600",
            Foto: campera,
            Descripcion: "La tela exterior es gabardina de algodón 100%. Tiene dos bolsillos trampa y dos bolsillos dobles. Puños elásticos internos en las mangas. Cordón de entalle en cintura y en el ruedo."
        }
    ]

    const getProduct = new Promise((resolve, reject) => {       
            setTimeout(() => {
            resolve(product);
        }, 2000)
    })
const getProd = async () => {
        try {
            const resultado = await getProduct;
            setItem(resultado);
        } catch (error) {
            alert('El producto no está disponible');
        }
    }
    useEffect(() => {
        //getProduct.then(resp => setItem(resp));
        getProd();
    }, []);

    
    return (
        <section className="container" id="ItemDetailContainer">
            {
                item.length ?
                    <>
                        <div className="container-fluid" id="ItemDetail">

                            {
                                item.map(item => (

                                    <ItemDetail
                                        img={item.Foto}
                                        nombre={item.Nombre}
                                        precio={item.Precio}
                                        descripcion={item.Descripcion}
                                    />

                                ))
                            }
                        </div>
                    </> :
                    <p className="mensaje">Cargando detalles del producto...</p>
            }

        </section>
    )

}

export default ItemDetailContainer;