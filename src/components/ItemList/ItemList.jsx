import {motion} from "framer-motion"
import ItemListEfect from "./ItemListEfect"
export const ItemList = () => {
    return (
        <div className="flex flex-wrap justify-center m-4 p-6 gap-5 relative z-1">
            <ItemListEfect imageSrc={"../src/assets/zapatillas/nikezapatilla1.webp"} title={"Nike Air Force 1"} subtitle={"Envio Gratis"} />
            <ItemListEfect imageSrc={"../src/assets/zapatillas/nikezapatilla2.webp"} title={"Nike Air Force 1"} subtitle={"Envío gratis"} />
        </div>
    )
}

export default ItemList