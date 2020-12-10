import './NavStyles.css';
import CartWidget from './CartWidget'

function NavBar() {
    return (
        
            <nav className=" container">
                <ul className="row">
                <li className="col-2"><a className="nav-link">DAMA</a></li>
                <li className="col-2"><a className="nav-link">CABALLERO</a></li>
                <li className="col-2"><a className="nav-link">NIÑO</a></li>
                <li className="col-2"><a className="nav-link">ACCESORIOS</a></li>
                <li className="col-2"><a className="nav-link">CONTACTO</a></li>
                <li className="col-2">CARRITO <CartWidget/></li>
                                
                </ul>
            </nav>
        
    )
}

export default NavBar;