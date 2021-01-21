
import { useState, useContext } from 'react';
import { Store } from '../../../store';
import { getFirestore } from '../../../db';
import firebase from 'firebase/app';
import './checkout.css';



function Checkout() {
    const db = getFirestore()
    const [data, setData] = useContext(Store);
    const [numCompra, setnumCompra] = useState('');
    const [statusVenta, setstatusVenta] = useState(false);
    const [formInfo, setformInfo] = useState({
        nombre: '',
        apellido: '',
        email: '',
        tel: ''
    });

    function sumaTot() {
        let total = 0;
        for (let i = 0; i < data.items.length; i++) {
            total += parseInt(data.items[i].data.qty) * parseInt(data.items[i].data.Precio)
        }
        return total
    }

    const compra = {
        usuario: formInfo,
        items: data.items,
        totalPago: sumaTot(),
        date: firebase.firestore.Timestamp.fromDate(new Date()),
    }

    const handleChange = (e) => {
        setformInfo({ ...formInfo, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        db.collection('ventas').add(compra)
            .then(({ id }) => {
                console.log(id)
                setstatusVenta(true);
                setnumCompra(id);
            })
            .catch(e => console.log(e));
    }


    return (
        <div className="contFormPago container">
            <div className="contForm mx-auto">
                <h3 className="tituloCompra">FINALIZAR COMPRA</h3>
                {
                    !statusVenta ?
                        <form onSubmit={handleSubmit}>
                            
                                < input type="text" onChange={handleChange} value={formInfo.nombre} name="nombre" placeholder="Nombre" required />
                                <input type="text" onChange={handleChange} value={formInfo.apellido} name="apellido" placeholder="Apellido" required />
                                <input type="email" onChange={handleChange} value={formInfo.email} name="email" placeholder="E-mail" required />
                                <input type="number" onChange={handleChange} value={formInfo.tel} name="tel" placeholder="Teléfono" required />
                                <input type="submit" className="btnPagar" value="pagar" />
                            

                        </form >
                        : <p>La compra se realizo correctamente, tu numero de orden es: {numCompra}</p>
                }
            </div>
        </div>

    )
}

export default Checkout;