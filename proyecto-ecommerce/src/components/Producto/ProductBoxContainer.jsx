import { useState, useEffect } from 'react';
import mochila from '../../assets/mochila.jpeg'
import campera from '../../assets/campera.jpg'
import buzo from '../../assets/buzo.jpeg'
import ProductBox from './ProductBox'

function ProductBoxContainer() {
    let [items, setItems] = useState([]);
    let prod = [
        {
            Id: 1,
            Nombre: "Mochila",
            Talle: "",
            Color: "Mostaza",
            Precio: 500,
            Foto: mochila
        },
        {
            Id: 2,
            Nombre: "Campera",
            Talle: "L",
            Color: "Marron",
            Precio: 600,
            Foto: campera
        },
        {
            Id: 2,
            Nombre: "Buzo",
            Talle: "M",
            Color: "Azul",
            Precio: 500,
            Foto: buzo
        }]

    const getProductos = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(prod);
        }, 2000)
    })


    const getProds = async () => {
        try {
            const result = await getProductos;
            setItems(result);
        } catch (error) {
            alert('Los productos no están disponibles');
        }
    }
    useEffect(() => {
        getProductos.then(resp => setItems(resp));
        getProds();
    }, []);

    return (
        <section className="container" id="galteria">
            {
                items.length ?
                    <>
                        <ul className="row" id="contGalria">
                            {
                                items.map(item => (
                                    <ProductBox
                                        img={item.Foto}
                                        titulo={item.Nombre}
                                        precio={item.Precio}
                                    />
                                ))
                            }
                        </ul>
                    </> :
                    <p className="mensaje">Cargando productos...</p>
            }
        </section>
    )

}

export default ProductBoxContainer;