import { useContext, useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"




const ItemDetail = ({item}) => {
    const { agregarAlCarrito, isInCart } = useContext(CartContext)

    const [cantidad, setCantidad] = useState(1)

    const handleAgregar = () => {
        const newItem = {
            ...item,
            cantidad
        }

        agregarAlCarrito(newItem)
    }

    
    return (
        <div className="container my-5">
            <h2>{item.nombre}</h2>
            <img src={item.img} alt={item.nombre}/>
            <p>{item.descripcion}</p>
            <p>Precio: ${item.precio}</p>

            {
                isInCart(item.id)
                    ? <Link className="btn btn-success" to="/cart">Terminar mi compra</Link>
                    : <ItemCount 
                        max={item.stock}
                        cantidad={cantidad}
                        setCantidad={setCantidad}
                        agregar={handleAgregar}
                    />
            }
                        
        </div>
    )
}

export default ItemDetail