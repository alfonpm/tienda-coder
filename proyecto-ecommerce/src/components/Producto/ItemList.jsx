import './ItemListStyles.css'
import {Link} from 'react-router-dom'

function ItemList({ producto }) {
    return (

        <article className="mx-auto  col-12 col-md-4 art">
            <figure>
                <img className="img-fluid" src={producto.Foto} alt=""></img>
            </figure>
            <div className="text-center infoBox">
                <h1>{producto.Nombre}</h1>
                <p>{producto.Precio}</p>
                <Link to={`/item/${producto.Id}`} className="ver">ver</Link> 
            </div>

        </article>

    )
}

export default ItemList;