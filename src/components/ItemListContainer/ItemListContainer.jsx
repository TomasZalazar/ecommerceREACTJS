
import ItemListEfect from "./ItemListEfect"
export const ItemListContainer = ({greeting}) => {
    return (
        <div className="flex flex-wrap justify-center m-4 p-6 gap-5 relative z-1">
            <div className="container flex justify-evenly">
                <p>{greeting}</p>
            </div>
            <ItemListEfect imageSrc={"../src/assets/zapatillas/nikezapatilla1.webp"} title={"Nike Air Force 1"} subtitle={"Envio Gratis"} />
            <ItemListEfect imageSrc={"../src/assets/zapatillas/nikezapatilla2.webp"} title={"Nike Air Force 1"} subtitle={"Envío gratis"} />
        </div>
    )
}

export default ItemListContainer