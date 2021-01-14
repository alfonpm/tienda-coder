import './NavStyles.css';
import NavCart from './NavCart'
import { Link } from 'react-router-dom'
import WidgetCart from './WidgetCart'
import { useState } from 'react'
import { useContext } from 'react'
import { Store } from '../../../store'



function NavBar() {
    const [data, setData] = useContext(Store);
    const [showWidgetCart, setShowWidgetCart] = useState(false);

    const openWidgetCart = () => {
        setShowWidgetCart(!showWidgetCart);
    }
    return (
        <ul className="row main_nav">
            <li ><Link className="nav-item" to={"/categoria/mujer"}  >DAMA</Link></li>
            <li  ><Link className="nav-item" to={"/categoria/hombre"} >CABALLERO</Link></li>
            <li ><Link className="nav-item" to={"/categoria/nino"} >NIÑO</Link></li>
            <li className="menu_item"><NavCart action={openWidgetCart} cant="0" /></li>
            {
                data.cantidad > 0 ? <WidgetCart show={showWidgetCart} action={openWidgetCart} />
                    : <WidgetCart/>
            }
        </ul>


    )
}

export default NavBar;