import React from 'react';
import ItemCard from "../itemCard/ItemCard";

const ItemList = ({ productos }) => {
  return (
    <div className="flex flex-wrap gap-10 justify-around m-5 p-4 items-center">
      {productos.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ItemList;