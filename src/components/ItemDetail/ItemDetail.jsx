import { useState } from "react";

const ItemDetail = ({ item }) => {

  const [ activeImg, setactiveImg] = useState(item.img)


  return (
    <div className="flex flex-col justify-between lg:flex-row">
      <div className="flex flex-col gap-6">
        <img src={activeImg} alt="" className="w-full h-full aspect-square object-cover rounded-xl" />
        <div className=" flex flex-row justify-between h-24">
          <img src={item.img} alt="" className="w-24 h-24 rounded-md cursor-pointer" onClick={() => setactiveImg(item.img)}/>
          <img src={item.imgdetail.detail2} alt="" className="w-24 h-24 rounded-md cursor-pointer" onClick={() => setactiveImg(item.imgdetail.detail2)}/>
          <img src={item.imgdetail.detail3} alt="" className="w-24 h-24 rounded-md cursor-pointer" onClick={() => setactiveImg(item.imgdetail.detail3)}/>
          <img src={item.imgdetail.detail3} alt="" className="w-24 h-24 rounded-md cursor-pointer" onClick={() => setactiveImg(item.imgdetail.detail4)}/>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
