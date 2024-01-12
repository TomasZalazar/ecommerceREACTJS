const Boton = ({ children, className = "", onClick, disabled = false }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={` bg-sky-700 text-white flex items-center justify-center
        h-10
        w-36
        border
        rounded-xl
        ring-offset-neutral-900
        hover:border-sky-500
        hover:text-white
        hover:bg-sky-500
        text-l
        font-semibold
        
        
        ${className}`}
    >
      {children}
    </button>
  );
};
{
  /* <button className="h 
  hover:border-sky-400 
  hover:text-black 
  hover:bg-cyan-300 
  rounded-xl 
  border 
  h-10 
  w-36 
  m-auto ">Agregar al carrito</button> */
}

export default Boton;
