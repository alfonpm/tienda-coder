import './ItemCountStyles.css'
import {useState} from 'react';
function ItemCount() {

    const [cantidad, setcantidad] = useState(1);
    const stock = 5;

    function OnAdd() {
        if (cantidad == 1)
            alert(`El producto se agregó correctamente`)
        else
            alert(`Se agregaron ${cantidad} productos al carrito`)
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


