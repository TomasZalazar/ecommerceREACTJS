import React from 'react';
import useProductos from "../../hooks/useProductos";
import ItemList from "../itemList/ItemList";
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const {categoriaId} = useParams()
  const { productos, loading} = useProductos(categoriaId);
  return (
    <div className="">
      {loading ? (
        <h2 className="text-center text-4xl mt-8">Cargando...</h2>
      ) : (
        <ItemList productos={productos} />
      )}
    </div>
  );
};

export default ItemListContainer;