import { useEffect, useState } from "react"
import { pedirDatos } from "../../helpers/pedirDatos"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import Loader from "../Loader/Loader"



const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()
    
    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then(r => {
                setItem( r.find(prod => prod.id === Number(itemId)) )
            })
            .finally(() => setLoading(false))
    }, [])

    return (
        <div className="container my-5">
            {
                loading
                    ? <Loader />
                    : <ItemDetail item={item}/>
            }
        </div>
    )
}

export default ItemDetailContainer