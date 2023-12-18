import { useState } from "react";

const ItemDetail = ({ item }) => {

  const [ activeImg, setactiveImg] = useState(item.img)


  return (
    <div className="flex flex-col justify-between lg:flex-row  mt-10">
      {/* imagenPRDO */}
      <div className="flex flex-col gap-6 w-96 h-96 mr-8">
        <img src={activeImg} alt="" className="w-full h-full aspect-square object-cover rounded-xl" />
        <div className=" flex flex-row justify-between h-24">
          <img src={item.img} alt="" className="w-24 h-24 rounded-md cursor-pointer" onClick={() => setactiveImg(item.img)}/>
          <img src={item.imgdetail.detail2} alt="" className="w-24 h-24 rounded-md cursor-pointer" onClick={() => setactiveImg(item.imgdetail.detail2)}/>
          <img src={item.imgdetail.detail3} alt="" className="w-24 h-24 rounded-md cursor-pointer" onClick={() => setactiveImg(item.imgdetail.detail3)}/>
          <img src={item.imgdetail.detail3} alt="" className="w-24 h-24 rounded-md cursor-pointer" onClick={() => setactiveImg(item.imgdetail.detail4)}/>
        </div>
      </div>
      {/* sobreElProd */}
      <div className="flex flex-col">
        <div >
          <span className="text-2xl">{item.categoria}</span>
          <h1 className="text-4xl font-bold ">{item.nombre} </h1>
        </div>
        <p className="text-xl w-80 ">
          {item.descripcion}
        </p>
        <p className="text-2xl font-bold ">${item.precio}</p>
        <button className="h hover:border-sky-400 hover:text-black hover:bg-cyan-300 rounded-xl border h-10 w-36 m-auto ">Agregar al carrito</button>
      </div>
    </div>
  );
};

export default ItemDetail;
