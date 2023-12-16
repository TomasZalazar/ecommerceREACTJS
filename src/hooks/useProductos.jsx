import { useEffect, useState } from "react"
import pedirDatos from "../utils/pedirDatos"



const useProductos = ( categoriaId ) => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)

        pedirDatos() 
            .then((data) => {
                const items = categoriaId
                                    ? data.filter( prod => prod.categoria === categoriaId)
                                    : data
                setProductos( items )
            })
            .finally(() => setLoading(false))
    }, [categoriaId])
    
    return {
        productos,
        loading,
        categoriaId
    }
}

export default useProductos




