import React from 'react';
import ItemCard from "../itemCard/ItemCard";
import { useParams } from 'react-router-dom';


const ItemList = ({ productos }) => {
  const { categoriaId } = useParams();
  return (

    <section className='container m-auto mt-8'>
      <div>
        <h2 className='text-3xl font-semibold'>
          { !categoriaId ? "Todos los productos" : categoriaId.toUpperCase()}
        </h2>
        <hr className='h h-0.5 bg-black' />
      </div>

    <div className="flex flex-wrap gap-10 justify-around m-5 p-4 items-center">
      {productos.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
    </section>
  );
};

export default ItemList;