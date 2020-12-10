import fotom from '../../assets/mujer.jpg'
import fotoh from '../../assets/hombre.jpeg'
import foton from '../../assets/nino.jpeg'
import Grilla from './Grilla'

function Galeria() {
    return (
        <section className="container">
            <section className="row" id="contGalria">
                <Grilla img={fotom} titulo="Mujer" descrip="Outfit" />
                <Grilla img={fotoh} titulo="Hombre" descrip="Outfit" />
                <Grilla img={foton} titulo="Niño" descrip="Outfit" />
            </section>
        </section>
    )

}

export default Galeria;