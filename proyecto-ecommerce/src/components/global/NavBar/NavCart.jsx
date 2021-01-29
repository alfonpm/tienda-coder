import {BsFillBagFill} from "react-icons/bs";
import './NavStyles.css';
import {Store} from '../../../store'
import {useContext} from 'react'

const NavCart = ({action}) => {
    const [data,setData] =useContext(Store);
    
    return (
        
        <div className="navCart" onClick={action}>
            <BsFillBagFill />
            <span className="cant">{data.cantidad}</span>
        </div>
    )
}

export default NavCart;