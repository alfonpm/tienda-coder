import './ItemCountStyles.css'
import { useState } from 'react';
import { Redirect } from 'react-router-dom'

function ItemCount() {

    const [cantidad, setcantidad] = useState(1);
    const stock = 5;
    let [redirectOnClick, setredirectOnClick] = useState(false);
    
    function OnAdd(){
        setredirectOnClick(redirectOnClick= true)
    }
    const Resta = () => {
        if (cantidad > 1) {
            setcantidad(cantidad - 1);
        }
    }

    function Suma() {
        if (cantidad < stock) {
            setcantidad(cantidad + 1)
        } else {
            alert('No hay mas stock disponible')
        }
    }
    if(redirectOnClick){
        return <Redirect to="/cart"/>
    }

    return (
        <div className="canti mx-auto">
            <input type="button" className="menos" value="-"
                disabled={!cantidad ? 'disabled' : null}
                disabled={cantidad === 1 ? 'disabled' : null}
                onClick={Resta} />
            <span className="cantProd text-center">{cantidad}</span>
            <input type="button" className="mas" value="+" onClick={Suma} />
            <input type="button" className="agregar" onClick={OnAdd} value="Agregar" />
        </div>
    )
}

export default ItemCount;


