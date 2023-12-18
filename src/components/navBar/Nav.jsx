import React, { useState } from "react";
import { SiNike } from "react-icons/si";<q></q>
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import NavBurger from "./NavBurg";




const Nav = () => {
  const links = [
    {
      label: "Inicio",
      href: "/",
    },
    {
      label: "Vans",
      href: "/productos/vans",
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
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  return (
    <nav className=" bg-sky-700 ">
      <div className="h-10vh flex relative  justify-between z-50 text-white lg:py-5 px-20 py-4 flex-1">
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
    </nav>
  );
};

export default Nav;
