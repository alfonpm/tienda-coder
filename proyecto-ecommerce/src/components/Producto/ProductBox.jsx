import './ProductBoxStyles.css'
import {Link} from 'react-router-dom'
function ProductBox({ img, titulo, precio }) {
    return (

        <article className="mx-auto  col-12 col-md-4 art">
            <figure>
                <img className="img-fluid" src={img} alt=""></img>
            </figure>
            <div className="text-center infoBox">
                <h1>{titulo}</h1>
                <p>{precio}</p>
                <Link to="/Detail" className="ver">ver</Link> 
            </div>

        </article>

    )
}

export default ProductBox;
