import './NavStyles.css';
import CartWidget from './CartWidget'
import {Link} from 'react-router-dom'


function NavBar() {
    return (
            <ul className="row main_nav">
                <Link to="WomanContainer" className="nav-item" >DAMA</Link>
                <Link to="ManContainer" className="nav-item" >CABALLERO</Link>
                <Link to="ChildContainer" className="nav-item"href="#">NIÑO</Link>
                <Link to="CartContainer" className=" menu_item"><CartWidget/><span className="menu_item-span">0</span></Link>
            </ul>
        

    )
}

export default NavBar;