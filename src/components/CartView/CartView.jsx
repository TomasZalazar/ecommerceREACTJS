import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import Boton from "../../reutilizables/Boton"
import trashIcon from '../../assets/trash.svg'
import EmtpyCart from "./EmptyCart"
import { Link } from "react-router-dom"



const CartView = () => {
    const {cart, totalCart, clearCart, removeItem} = useContext(CartContext)

    if (cart.length === 0) return <EmtpyCart />

    return(
        <section className="container m-auto mt-8">
        <p>Bienvenido: </p>
        <h2 className="text-4xl font-semibold">Tu Compra</h2>
        <hr />
  
        <ul>
          {cart.map((item) => (
            <li key={item.id} className="flex gap-3 border-b my-4">
              <img src={item.img} alt="Cart img" className="w-32" />
              <div>
                <h3 className="text-2xl">{item.nombre}</h3>
                <p className="text-2xl font-bold">
                  $ {item.precio * item.cantidad}
                </p>
                <p>Cantidad: {item.cantidad}</p>
  
                <Boton onClick={() => removeItem(item.id)}>
                  <img src={trashIcon} className="w-4" alt="trash icon" />
                </Boton>
              </div>
            </li>
          ))}
        </ul>
  
        <h4 className="text-4xl font-semibold">TOTAL: ${totalCart()}</h4>
        <Boton onClick={clearCart}>Vaciar carrito</Boton>
        <Boton className="text-sm"><Link to={"/checkout"}>Terminar mi compra</Link></Boton>
      </section>
    )
}

export default CartView