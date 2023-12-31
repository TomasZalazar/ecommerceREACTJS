import { Link } from "react-router-dom";

const ItemCard = ({ item }) => {
  return (
    <div className=" w-96 h-auto bg-sky-950 p-3 flex flex-col  items-center rounded-2xl">
      <img
        className="duration-500 contrast-100 h-auto rounded-xl hover:contrast-125"
        src={item.img}
        alt={item.nombre}
      />
      <div className="flex flex-col gap-4">
        <div className="flex flex-row justify-between ">
          <div className="flex flex-col items-center ">
            <span className="text-xl text-gray-50 font-bold  ">{item.nombre}</span>

            <p className="text-xs text-gray-400">{item.descripcion}</p>
          </div>
        </div>

        <button className="bg-sky-500 text-white px-4 py-2 w-28 mx-auto justify-center flex flex-col items-center rounded-full transition duration-200 ease-in-out hover:bg-sky-700 active:bg-sky-900 focus:outline-none">
          <Link to={`/item/${item.id}`}>Ver más</Link>
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
