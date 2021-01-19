import './ItemCountStyles.css'
import { useState, useContext } from 'react';
import { Store } from '../../../store'

function ItemCount({ item }) {
    console.log(item);
    const [data, setData] = useContext(Store);
    const [cant, setcantidad] = useState(1);
    const stock = 5;


    function OnAdd(item) {
        console.log(item)
        let itemComprado = { ...item };

        if (data.items.filter(prod => prod.id === item.id).length === 0) {

            let prodEncontrado = data.items.find(prod => prod.id === item.id);
            console.log(prodEncontrado.data.qty + cant)
            prodEncontrado.data.qty = prodEncontrado.data.qty + cant;

            setData({
                ...data,
                cantidad: data.cantidad + cant,
                items: [...data.items]

            })

        } else {

            itemComprado.qty = cant;
            setData({
                ...data,
                cantidad: data.cantidad + cant,
                items: [...data.items, itemComprado]
            })

        }

        console.log(item.data.qty)
    }


    const Resta = () => {
        if (cant > 1) {
            setcantidad(cant - 1);
        }
    }

    function Suma() {
        if (cant < stock) {
            setcantidad(cant + 1)
        } else {
            alert('No hay mas stock disponible')
        }
    }


    return (
        <div className="canti mx-auto">
            <input type="button" className="menos" value="-"
                disabled={!cant ? 'disabled' : null}
                disabled={cant === 1 ? 'disabled' : null}
                onClick={Resta} />
            <span className="cantProd text-center">{cant}</span>
            <input type="button" className="mas" value="+" onClick={Suma} />
            <input type="button" className="agregar" onClick={() => OnAdd(item)} value="Agregar" />
        </div>
    )
}

export default ItemCount;


