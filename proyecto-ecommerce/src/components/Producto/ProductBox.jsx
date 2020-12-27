import './ProductBoxStyles.css'
import ItemCount from './ItemCount/ItemCount'
function ProductBox({ img, titulo, precio }) {
    return (

        <article className="mx-auto text-center col-12 col-md-4 art">
            <figure>
                <img className="img-fluid" src={img} alt=""></img>
            </figure>
            <div className="text-center">
                <h1>{titulo}</h1>
                <p>{precio}</p>
                <ItemCount/>
            </div>

        </article>

    )
}

export default ProductBox;
