import ItemList from "../itemList/ItemList";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoriaId } = useParams();
  useEffect(() => {
    setLoading(true);

    // 1-- armar una referencia (sync)

    const productosRef = collection(db, "productos");

    //filtrado de productos

    // funcion query() recibe 2 parametros /productosRef y / las condiciones como segundo parametro

    //where( 3 parametros) 1/ que quiero buscar , 2/operador de comparacion, 3/ categoriaId
    const queryBusqueda =
    categoriaId 
        ?
        query(productosRef, where("categoria", "==", categoriaId)) 
        :
        productosRef;


    //2-- llamar a esa referencia (async)

    // paso 1  get docs a la referencia de mi coleccion

    getDocs(queryBusqueda)
      // el paso 1 me devuelve un quearysnapshot de la coleccion

      .then((querySnapshot) => {
        //accedo al .docs para que me devuelva un array de los documentos
        // lo mapeo y lo tranformo en algo mas util
        // el metodo doc.data() me trae el array de los productos, accedo a sus campos y propiedades
        //doc.data()

        const docs = querySnapshot.docs.map((doc) => {
          // hacemos un ...de los datos y agregar una propiedad id con doc.id

          return {
            ...doc.data(),
            id: doc.id,
          };
        });
        
        // actualizo setproducto con un array mapeado
        setProductos(docs);
      })
      .finally(() => setLoading(false));
  }, [categoriaId]);

  return (
    <div className="max-w-7xl mx-auto p-8">
      {loading ? (
        <h2 className="text-center text-4xl mt-8">Cargando...</h2>
      ) : (
        <ItemList productos={productos} />
      )}
    </div>
  );
};

export default ItemListContainer;
