import { useState, useEffect } from "react"
import { pedirDatos } from "../../helpers/pedirDatos"


const ProductsData = ({children}) => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then(r => setProductos(r))
            .catch(e => console.log(e))
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return (
        <>
            { children(productos, loading) }
        </>
    )
}

export default ProductsData