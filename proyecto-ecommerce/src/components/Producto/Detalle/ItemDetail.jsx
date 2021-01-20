import './DetalleStyles.css'
import ItemCount from '../ItemCount/ItemCount'

function ItemDetail({producto}) {
    
    return (
        <section className="row ItemDetail_Container">
            <figure className=" col-12 col-md-6 text-right">
                <img src={`/assets/${producto.data.Foto}`} className="img-fluid ItemDetail_img" alt="campera" />
            </figure>
            <div className="col-12 col-md-6 ItemDetail_contDetalles d-flex align-items-center">
                <div className="ItemDetail_textos">
                    <h1 className="ItemDetail_Nombre">{producto.data.Nombre}</h1>
                    <span className="ItemDetail_Precio">{producto.data.Precio}</span>
                    <p className="ItemDetail_Descrip">{producto.data.Descripcion}</p>
                    <ItemCount item={producto} />
                    
                </div>

            </div>

        </section>
    )
}

export default ItemDetail;