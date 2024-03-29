
import React from "react"
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";



export const NavBurg = ({ isOpen}) => {
  const links = [
    {
      label: "Todos los productos",
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

  return (
    <div className={isOpen ? "block" : "hidden"}>
      <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-700 transition">
        <ul className="flex flex-col items-start m-4 p-4 text-center text-xl sticky">
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
  );
};

export default NavBurg;
