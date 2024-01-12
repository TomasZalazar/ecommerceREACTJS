import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Boton from "../../reutilizables/Boton";
import QuantitySelector from "./QuantitySelector";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ item }) => {
  const navigate = useNavigate();
  const [cantidad, setCantidad] = useState(1);
  const { addToCart, isInCart } = useContext(CartContext);

  const handleAgregar = () => {
    const itemToCart = {
      ...item,
      cantidad,
    };

    addToCart(itemToCart);
  };
  const handleVolver = () => {
    navigate(-1);
  };
  return (
    <>
      <div className="flex flex-col justify-between lg:flex-row mt-10">
        {/* imagenPRDO */}
        <div className="flex flex-col gap-6 w-96 h-96 mr-8">
          <div >
            <Boton onClick={handleVolver}>Pagina anterior</Boton>
          </div>
          <img
            src={item.img}
            alt="imagen producto"
            className="relative z-500 w-full h-full aspect-square object-cover rounded-xl"
          />
        </div>
        {/* sobreElProd */}
        <div className="flex flex-col">
          <div>
            <span className="text-2xl">{item.categoria}</span>
            <h1 className="text-4xl font-bold ">{item.nombre} </h1>
          </div>
          <p className="text-xl w-80 ">{item.descripcion}</p>
          <p className="text-2xl font-bold ">${item.precio}</p>
          {isInCart(item.id) 
          ? 
            <Boton className=" text-l w-40">
              <Link to="/cart">Terminar mi compra</Link>
            </Boton>
           : 
            <>
              <QuantitySelector
                cantidad={cantidad}
                stock={item.stock}
                setCantidad={setCantidad}
              />
              <Boton onClick={handleAgregar}>Agregar al carrito</Boton>
            </>
          }
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
