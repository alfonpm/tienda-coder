import './NavStyles.css';
import NavCart from './NavCart'
import {Link} from 'react-router-dom'


function NavBar() {
    
    return (
            <ul className="row main_nav">
                <li className="nav-item"><Link to={"/categoria/mujer"}  >DAMA</Link></li>
                <li className="nav-item" ><Link to={"/categoria/hombre"} >CABALLERO</Link></li>
                <li className="nav-item"><Link to={"/categoria/nino"} >NIÑO</Link></li>
                <li><Link to="/cart" className=" menu_item"><NavCart/><span className="menu_item-span">0</span></Link></li>
                
                
                
                
            </ul>
        

    )
}

export default NavBar;