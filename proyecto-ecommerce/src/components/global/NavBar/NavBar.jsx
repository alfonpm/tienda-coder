import './NavStyles.css';
import NavCart from './NavCart'
import {Link} from 'react-router-dom'
import WidgetCart from './WidgetCart'
import {useState} from 'react'
function NavBar() {
    const [showWidgetCart, setShowWidgetCart] = useState(false);

    const openWidgetCart = () => {
        setShowWidgetCart(!showWidgetCart);
    }
    return (
            <ul className="row main_nav">
                <li ><Link className="nav-item" to={"/categoria/mujer"}  >DAMA</Link></li>
                <li  ><Link className="nav-item" to={"/categoria/hombre"} >CABALLERO</Link></li>
                <li ><Link className="nav-item" to={"/categoria/nino"} >NIÑO</Link></li>
                <li className="menu_item"><NavCart action={openWidgetCart} cant="0"/></li>
                <WidgetCart show={showWidgetCart} action={openWidgetCart}/>
                
                
                
            </ul>
        

    )
}

export default NavBar;