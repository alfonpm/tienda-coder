import logo from '../../../logo/logo3.jpg'
import NavBar from '../NavBar/NavBar'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className="container-fluid cabezal mb-5">
            <nav className="row">
                <figure className="text-center col-12 col-md-4">
                    <Link to="/"> <img src={logo} alt="logo" className="img-fluid "></img>
                    </Link> 
                </figure>
                <div className="col-12 col-md-8">
                    <NavBar />
                </div>
            </nav>
        </header>
    )
}
export default Header;

