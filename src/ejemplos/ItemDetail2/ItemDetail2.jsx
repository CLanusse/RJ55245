import { useContext, useEffect, useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import SelectTamanio from "./SelectTamanio"



const ItemDetail = ({item}) => {
    const { agregarAlCarrito, isInCart } = useContext(CartContext)

    const [cantidad, setCantidad] = useState(1)
    const [tamanio, setTamanio] = useState(null)
    const [multiplier, setMultiplier] = useState(1)
    const [precio, setPrecio] = useState(item.precio)
    console.log(tamanio, multiplier, precio)
    const handleAgregar = () => {
        const newItem = {
            ...item,
            cantidad,
            precioFinal: precio,
            tamanioSeleccionado: tamanio
        }

        agregarAlCarrito(newItem)
    }
    
    useEffect(() => {
        setPrecio(item.precio * multiplier)
    }, [multiplier])

    return (
        <div className="container my-5">
            <h2>{item.nombre}</h2>
            <img src={item.img} alt={item.nombre}/>
            <p>{item.descripcion}</p>
            <p>Precio: ${precio}</p>

            <SelectTamanio options={item.tamanios} setTamanio={setTamanio} setMultiplier={setMultiplier}/>

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