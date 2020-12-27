import './ProductBoxStyles.css'

function ProductBox({ img, titulo, precio }) {
    return (

        <article className="mx-auto  col-12 col-md-4 art">
            <figure>
                <img className="img-fluid" src={img} alt=""></img>
            </figure>
            <div className="text-center infoBox">
                <h1>{titulo}</h1>
                <p>{precio}</p>
                <input type="button" className="ver" value="ver"/>
            </div>

        </article>

    )
}

export default ProductBox;
