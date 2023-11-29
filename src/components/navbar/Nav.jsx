import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { SiNike } from "react-icons/si";
import NavLink from "./NavLink";
import NavBurger from "./NavBurger";

const Nav = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);
  

  return (
    <nav className=" bg-sky-700 ">
      <div className="h-10vh flex relative  justify-between z-50 text-white lg:py-5 px-20 py-4 flex-1">
        <div className="flex items-center flex-1 ">
          <span className="mx-4 font-bold text-xl">Nike</span>
        </div>
        <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-8 mr-16 text-18">
              <li className="my-4 py-4 border-b border-slate-800 hover:text-slate-900 hover:rounded ">
                <NavLink href={"#"} text={"Inicio"} />
              </li>
              <li className="my-4 py-4 border-b border-slate-800 hover:text-slate-900 hover:rounded ">
                <NavLink href={"#"} text={"Productos"} />
              </li>
              <li className=" py-4 m-auto border-b border-slate-800 hover:text-slate-900 hover:rounded ">
                <NavLink href={"#"} text={<FaShoppingCart/>} />
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:hidden md:hidden sm:block pt-2 ">
          <button className="block transition" onClick={handleClick}>
            {click ? (
              <SiNike className="text-3xl" />
            ) : (
              <SiNike className="text-3xl" />
            )}
          </button>
          <NavBurger isOpen={click} onClose={closeMenu} />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
