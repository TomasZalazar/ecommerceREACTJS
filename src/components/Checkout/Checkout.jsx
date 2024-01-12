import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../firebase/config";
import { collection, addDoc, writeBatch, query, documentId, getDocs, where } from "firebase/firestore";

const Checkout = () => {
  const { cart, totalCart, clearCart  } = useContext(CartContext);

  const [values, setValues] = useState({
    nombre: "",
    direccion: "",
    email: "",
  });
  const [ordenId, setOrdenId]  = useState(null);

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const orden = {
      cliente: values,
      items: cart,
      total: totalCart(),
      fecha: new Date(),
    };

    const outOfStock =[]

    const batch = writeBatch(db)
    const ordenRef = collection(db, "ordenDeCompra");
    const productosRef = collection(db,"productos")
    // hay otra forma de resolverlo mirar ultima clase min 40
    const itemsQuery = query(productosRef,where( documentId(),'in', cart.map(prod => prod.id)))
    const querySnapshot = await getDocs(itemsQuery)

    querySnapshot.docs.forEach(doc => {
      const item = cart.find((prod) =>  prod.id === doc.id )
      const stock = doc.data().stock
      
      if (stock >= item.cantidad){
        batch.update(doc.ref,{
          stock: stock - item.cantidad
        }) 
      }else {
        outOfStock.push(item)
      }
    })

    if(outOfStock.length === 0){
      batch.commit()
      .then( () => {
        addDoc(ordenRef, orden).then((doc) =>{
          setOrdenId(doc.id)
          clearCart()
        });
      })
    } else {
      clearCart()
      alert("no hay stock")
    }
    
  };

  if (ordenId) {
    return (
      <div className="container m-auto mt-18">
        <h2 className=" text-4xl font-semibold">Gracias por tu compra </h2>
        <hr />
        <p>tu codigo de orden es: {ordenId}</p>
      </div>
    );
  }

  return (
    <div className="container m-auto mt-16 ">
      <h2 className=" text-4xl font-semibold">Checkout</h2>
      <hr />

      <h4 className="mt-4 text-md">ingresa tus datos</h4>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col mt-4 gap-4 max-w-sm"
      >
        <input
          className="border p-2"
          type="text"
          placeholder="Nombre"
          onChange={handleInputChange}
          value={values.nombre}
          name="nombre"
        />
        <input
          className="border p-2"
          type="text"
          placeholder="Direccion"
          onChange={handleInputChange}
          value={values.direccion}
          name="direccion"
        />
        <input
          className="border p-2"
          type="email"
          placeholder="Email"
          value={values.email}
          onChange={handleInputChange}
          name="email"
        />
        <button
          className="b bg-sky-500 text-white max-w-sm cursor-pointer"
          type="submit"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Checkout;
