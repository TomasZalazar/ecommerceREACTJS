import { Link } from "react-router-dom";

const ItemCard = ({ item }) => {
  return (
    <div className=" w-[350px] h-[550px] bg-sky-800 p-3 flex flex-col  items-center rounded-2xl">
      <img
        className="duration-500 contrast-100 h-auto rounded-xl hover:contrast-75"
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

        <Link to={`/item/${item.id}`}>
          <button className="bg-sky-500 text-white px-4 py-2 w-28 mx-auto justify-center flex flex-col items-center rounded-full transition duration-200 ease-in-out hover:bg-sky-700 active:bg-sky-900 focus:outline-none">
          Ver más
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ItemCard;
