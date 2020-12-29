import {BsFillBagFill} from "react-icons/bs";
import './NavStyles.css';

const NavCart = ({action, cant}) => {
    return (
        <div className="navCart" onClick={action}>
            <BsFillBagFill />
            <span className="cant">{cant}</span>
        </div>
    )
}

export default NavCart;