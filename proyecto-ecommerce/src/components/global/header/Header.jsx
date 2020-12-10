import logo  from '../../../assets/logo2.png'
import NavBar from '../nav/NavBar/NavBar'

function Header(){
    return (
<header className="container-fluid">
    <figure className="text-center">
      <img src={logo} alt="logo" className="img-fluid "></img>
    </figure>
    <NavBar/>
</header>
    )}
export default Header;

