
import { FaShoppingCart } from "react-icons/fa";


const CartWidget = () => {
    return(
    <div className="relative ">  
            <FaShoppingCart />
            <span className="absolute">01</span>
    </div>
    )
}

export default CartWidget