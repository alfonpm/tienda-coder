import '../Galeria/GrillaStyles.css'
import { useState } from 'react'


function Grilla({ img, titulo, precio }) {

    const [cantidad, setcantidad] = useState(1);
    const stock = 5;
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
    function OnAdd() {
        if (cantidad == 1)
            alert('El producto se agrego correctamente')
        else
            alert(`Se agregaron ${cantidad} productos al carrito`)
    }

    return (

        <article className="mx-auto text-center col-12 col-md-4 art">
            <figure>
                <img className="img-fluid" src={img} alt=""></img>
            </figure>
            <div className="text-center">
                <h1>{titulo}</h1>
                <p>{precio}</p>
            </div>
            <div className="cantidad text-center">
                <input type="button" className="mas"
                    disabled={!cantidad ? 'disabled' : null}
                    disabled={cantidad === 1 ? 'disabled' : null}
                    onClick={Resta} value="-" />
                <span className="cantProd">{cantidad}</span>
                <input type="button" className="menos" onClick={Suma} value="+" />
                <input type="button" className="agregar" onClick={OnAdd} value="Agregar al carrito" />
                <span className='mensaje'></span>
            </div>

        </article>

    )
}

export default Grilla;
