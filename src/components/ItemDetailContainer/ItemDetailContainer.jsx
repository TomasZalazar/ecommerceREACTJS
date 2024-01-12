import { useEffect, useState } from "react";
import { db } from "../../firebase/config";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(null);

  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);

    // 1. armar referencia
    // para buscar el id hace referencia a useparms
    const docRef = doc(db, "productos", itemId);

    // 2. llamar referencia
    getDoc(docRef)
      .then((docSnapShot) => {
        const doc = {
          ...docSnapShot.data(),
          id: docSnapShot.id,
        };
        setItem(doc);
      })
      .finally(() => setLoading(false));
  }, [itemId]);

  return (
    <>
      <div className="flex justify-center">
        {loading ? (
          <h2 className="text-center text-4xl mt-8">Cargando...</h2>
        ) : (
          <ItemDetail item={item} />
        )}
      </div>
    </>
  );
};

export default ItemDetailContainer;
