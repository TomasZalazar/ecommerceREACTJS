import React, { useContext, useState } from "react";
import { SiNike } from "react-icons/si";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import NavBurger from "./NavBurg";
import { UserContext } from "../../context/UserContext";
import Boton from "../../reutilizables/Boton";





const Nav = () => {
  const links = [
    {
      label: "Inicio",
      href: "/",
      
    },
    {
      label: "Puma",
      href: "/productos/puma",
    },
    {
      label: "Adidas",
      href: "/productos/adidas",
    },
    {
      label: "Nike",
      href: "/productos/nike",
    },
  ];
  const {user, logout} = useContext(UserContext)
  const [click,setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  return (
    <nav className=" bg-sky-700  ">
      <div className=" flex relative  justify-between z-1000 text-white lg:py-5 px-20 py-4 flex-1">
        <div className="flex items-center flex-1 ">
          
          <span className="mx-4 font-bold text-xl text-center">
            TZ 
            <small className="flex flex-col text-xs ">
              <Link
              to="/">
                TodoZapas 
                 </Link>
            </small>
          </span>
        </div>
        <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-8 mr-16 text-18">
              
              {links.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-white hover:text-black text-lg uppercase font-semibold"
                >
                  {link.label}
                </Link>
              ))}
              <li className=" m-auto border-b border-sky-800 cursor-pointer hover:text-sky-900 hover:rounded ">
                <CartWidget/>
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
        <div className="flex mx-40 justify-end items-center  text-white">
          {
            user.logged
             &&
            <div className="flex  justify-between gap-4 mb-4">
              <div className="flex gap-1 items-center">
              <img  src="src/assets/user.svg" alt="user foto" />
              <h1 className="text-sm">User : {user.email}</h1>
                
              <button className="w-16 h-5 rounded-sm text-sm font-semibold hover:bg-slate-100 bg-slate-300 text-black " onClick={logout}>Logout</button>
              </div>
            </div> 
                }
        </div>
    </nav>
  );
};

export default Nav;
