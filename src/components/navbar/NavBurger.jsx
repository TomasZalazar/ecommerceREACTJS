
import React from "react";
import NavLink from "./NavLink";
import CartWidget from "../CartWidget/CartWidget";


const NavBurger = ({ isOpen}) => {
  return (
    <div className={isOpen ? "block" : "hidden"}>
      <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-700 transition">
        <ul className="text-center text-xl p-20">
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-900 hover:rounded ">
          <NavLink href={"#"} text={"Inicio"} />
          </li>
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-900 hover:rounded ">
          <NavLink href={"#"} text={"Productos"} />
          </li>
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-900 hover:rounded ">
          <NavLink href={"#"} text={<CartWidget/>} />
          </li>
        </ul>
        
      </div>
    </div>
  );
};

export default NavBurger;