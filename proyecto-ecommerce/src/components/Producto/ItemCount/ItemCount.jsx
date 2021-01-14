import './ItemCountStyles.css'
import { useState, useContext } from 'react';
import { Store } from '../../../store'

function ItemCount({ item }) {

    const [data, setData] = useContext(Store);
    const [cant, setcantidad] = useState(1);
    const stock = 5;

    
    function OnAdd(item) {
        let itemComprado = { ...item };
        if (data.items.filter(prod => prod.Id === item.Id).length) {
            let prodEncontrado = data.items.find(prod => prod.Id === item.Id);
            prodEncontrado.qty = prodEncontrado.qty + cant;
            
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


