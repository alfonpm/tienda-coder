import './ItemCountStyles.css'
import { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom'
import { Store } from '../../../store'

function ItemCount({ item }) {

    const [data, setData] = useContext(Store)
    const [cant, setcantidad] = useState(1);
    const stock = 5;


    function OnAdd() {
        /* 
        if(data.items.filter( prod => prod.Id === item.Id)){
            item.qty=cant;
         
        }else{
            setData({
             ...data,
             cantidad: data.cantidad + cant,
             items: [...data.items, item],
         })
        }
        
        */


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
            <input type="button" className="agregar" onClick={OnAdd()} value="Agregar" />
        </div>
    )
}

export default ItemCount;


