import fotom from '../../assets/mujer.jpg'
import fotoh from '../../assets/hombre.jpeg'
import foton from '../../assets/nino.jpeg'
import Grilla from './Grilla'

function Galeria() {
    return (
        <section className="container" id="galteria">
            <div className="row" id="contGalria">
                <Grilla img={fotom} titulo="Producto 1" precio="500" />
                <Grilla img={fotoh} titulo="Producto 2" precio="600" />
                <Grilla img={foton} titulo="Producto 3" precio="300" />
            </div>
        </section>
    )

}

export default Galeria;