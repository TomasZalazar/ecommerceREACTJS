import { useEffect, useState } from "react"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase/config"


const useProductos = ( categoriaId ) => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        // 1-- armar una referencia (sync)

        const productosRef = collection(db, "productos")

        //2-- llamar a esa referencia (async)
        
        getDocs(productosRef)
        .then((resp) => {
            console.log(resp)
        })

    }, [categoriaId])
    
    return {
        productos,
        loading,
        categoriaId
    }
}

export default useProductos




