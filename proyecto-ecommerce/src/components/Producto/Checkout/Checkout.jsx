
import { useState, useContext } from 'react';
import { Store } from '../../../store';
import { getFirestore } from '../../../db';
import firebase from 'firebase/app';
import './checkout.css';
import { FcApproval } from "react-icons/fc";

function Checkout() {
    const db = getFirestore()
    const [data, setData] = useContext(Store);
    const [numCompra, setnumCompra] = useState('');
    const [statusVenta, setstatusVenta] = useState(false);
    const [error, setError] = useState(false);
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

        let mail = document.getElementById("email").value;
        let mail2 = document.getElementById("email2").value;

        if (verifyPsw(mail, mail2)) {
            db.collection('ventas').add(compra)
                .then(({ id }) => {
                    setstatusVenta(true);
                    setnumCompra(id);

                })
                .catch(e => console.log(e));
            setData({
                items: [],
                cantidad: 0,
            })
        } else {
            setError(true);
        }
    }



    function verifyPsw(mail, mail2) {
        if (mail === mail2) {
            return true
        }
        return false
    }

    return (
        <div className="contFormPago container">
            <div className="contForm mx-auto row">
                <h3 className="tituloCompra">FINALIZAR COMPRA</h3>
                {
                    !statusVenta ?
                        <form onSubmit={handleSubmit} className=" col-12">

                            <input type="text" onChange={handleChange} value={formInfo.nombre} name="nombre" placeholder="Nombre" required className="inputForm" />
                            <input type="text" onChange={handleChange} value={formInfo.apellido} name="apellido" placeholder="Apellido" required className="inputForm" />
                            <input type="email" onChange={handleChange} id="email" value={formInfo.email} name="email" placeholder="E-mail" required className="inputForm" />

                            <input type="email" name="email2" id="email2" placeholder="E-mail" required className="inputForm" />
                            <input type="number" onChange={handleChange} value={formInfo.tel} name="tel" placeholder="Teléfono" required className="inputForm" />
                            <input type="submit" id="btnPagar" className="btnPagar" value="COMPRAR" />
                            <p id="mensaje"></p>
                            {
                                error === true ? <p className=" mError">Los correos deben conincidir</p> : null
                            }
                        </form >
                        :
                        <div className="compraCorrecta">
                            <FcApproval className="checkIcon" />
                            <p className="mensaje1">Gracias! Recibimos tu pedido</p>
                            <p className="mensaje2"> el codigo de tu orden es: {numCompra}</p>
                            <p className="mensaje3">En las próximas 48 horas nos comunicaremos contigo para el arreglo del pago y el envío</p>
                        </div>
                }

            </div>
        </div>

    )
}

export default Checkout;