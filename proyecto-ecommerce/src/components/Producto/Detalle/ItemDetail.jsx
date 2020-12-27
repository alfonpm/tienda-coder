import './DetalleStyles.css'
import ItemCount from '../ItemCount/ItemCount'

function ItemDetail({ img, nombre, precio, descripcion }) {
    return (
        <section className="row ItemDetail_Container">
            <figure className=" col-12 col-md-6 text-right">
                <img src={img} className="img-fluid ItemDetail_img" alt="campera" />
            </figure>
            <div className="col-12 col-md-6 ItemDetail_contDetalles d-flex align-items-center">
                <div className="ItemDetail_textos">
                    <h1 className="ItemDetail_Nombre">{nombre}</h1>
                    <span className="ItemDetail_Precio">{precio}</span>
                    <p className="ItemDetail_Descrip">{descripcion}</p>
                    <ItemCount/>
                </div>

            </div>

        </section>
    )
}

export default ItemDetail;