import './NavStyles.css';
import NavCart from './Widget/NavCart'
import { Link } from 'react-router-dom'
import WidgetCart from './Widget/WidgetCart'
import { useState } from 'react'
import { useContext } from 'react'
import { Store } from '../../../store'

function NavBar() {
    const [data] = useContext(Store);
    const [showWidgetCart, setShowWidgetCart] = useState(false);

    const openWidgetCart = () => {
        setShowWidgetCart(!showWidgetCart);
    }
    return (
        <ul className="row main_nav">
            <li ><Link className="nav-item" to={"/categoria/mujer"}  >DAMA</Link></li>
            <li  ><Link className="nav-item" to={"/categoria/hombre"} >CABALLERO</Link></li>
            <li ><Link className="nav-item" to={"/categoria/nino"} >NIÑO</Link></li>
            <li className="menu_item"><NavCart action={openWidgetCart} /></li>
            <WidgetCart show={showWidgetCart} action={openWidgetCart} />
        </ul>
    )
}

export default NavBar;