import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail2 from "../ItemDetail2/ItemDetail2"
import Loader from "../../components/Loader/Loader"
import { pedirDatos } from "../../helpers/pedirDatos"

const ItemDetailContainer2 = () => {
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)
    console.log(item)
    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then((resp) => {
                setItem(resp.find(item => item.id === Number(itemId)))
            })
            .catch(e => console.log(e))
            .finally(() => setLoading(false))

    }, [])

    return (
        <div className="container my-5">
            {
                loading
                    ? <Loader />
                    : <ItemDetail2 item={item}/>
            }
        </div>
    )
}

export default ItemDetailContainer2