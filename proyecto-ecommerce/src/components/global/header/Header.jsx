import logo from '../../../assets/logo3.jpg'
import NavBar from '../NavBar/NavBar'

function Header() {
    return (
        <header className="container-fluid cabezal">
            <nav className="row">
                <figure className="text-center d-none d-md-block col-md-4">
                    <img src={logo} alt="logo" className="img-fluid "></img>
                </figure>
                <div className="col-12 col-md-8">
                    <NavBar />
                </div>

            </nav>

        </header>
    )
}
export default Header;

