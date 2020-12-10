import '../Galeria/GrillaStyles.css'


function Grilla({img ,titulo ,descrip}) {
    return (
        
                <article className="mx-auto text-center col-4">
                    <figure>
                        <img  className="img-fluid" src={img} alt=""></img>
                    </figure>
                    <div className="text-center">
                        <h1>{titulo}</h1>
                        <h2>{descrip}</h2>
                    </div> 
                </article>

    )}

export default Grilla;
