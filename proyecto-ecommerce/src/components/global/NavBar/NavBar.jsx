import './NavStyles.css';
import CartWidget from './CartWidget'

function NavBar() {
    return (

        
            <ul className="row main_nav">
                <li className=""><a className="nav-item" href="#">DAMA</a></li>
                <li className=""><a className="nav-item" href="#">CABALLERO</a></li>
                <li className=""><a className="nav-item"href="#">NIÑO</a></li>
                <li className=""><a className="nav-item"href="#">ACCESORIOS</a></li>
                <li className=" menu_item">CARRITO <CartWidget /> <span className="menu_item-span" >0</span></li>

            </ul>
        

    )
}

export default NavBar;