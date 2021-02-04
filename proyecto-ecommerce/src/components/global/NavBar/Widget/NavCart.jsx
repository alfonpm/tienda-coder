import {BsFillBagFill} from "react-icons/bs";
import './WidgetStyles.css';
import {Store} from '../../../../store'
import {useContext} from 'react'

const NavCart = ({action}) => {
    const [data] =useContext(Store);
    
    return (
        
        <div className="navCart" onClick={action}>
            <BsFillBagFill />
            <span className="cant">{data.cantidad}</span>
        </div>
    )
}

export default NavCart;