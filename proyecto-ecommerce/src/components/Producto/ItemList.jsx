import './ItemListStyles.css'
import { Link } from 'react-router-dom'

function ItemList({ nombre, foto, precio, id }) {
    return (

        <article className="mx-auto  col-12 col-md-4 art">
            <figure>
                <img className="img-fluid" src={`/assets/${foto}`} alt=""></img>
            </figure>
            <div className="text-center infoBox">
                <h1>{nombre}</h1>
                <p>{precio}</p>
                <Link to={`/item/${id}`} className="ver">ver</Link>
            </div>

        </article>

    )
}

export default ItemList;