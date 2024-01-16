import { Link } from "react-router-dom";
import Boton from "../../reutilizables/Boton";

const EmtpyCart = () => {
  return (
    <section className="container m-auto mt-8">
      <h2 className="text-4xl font-semibold">Tu carrito está vacío</h2>
      <hr />
      <p>Agrega algún producto a tu carrito</p>
      <Link to={"/"}>
        <Boton>Volver</Boton>
      </Link>
    </section>
  );
};

export default EmtpyCart;
