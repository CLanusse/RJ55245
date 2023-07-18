import { useState } from "react"
import ItemCount from "../ItemCount/ItemCount"




const ItemDetail = ({item}) => {
    const [cantidad, setCantidad] = useState(1)
    const [color, setColor] = useState("blanco")

    const handleAgregar = () => {
        console.log("Item a agregar", {
            ...item,
            cantidad,
            color
        })
    }

    
    return (
        <div className="container my-5">
            <h2>{item.nombre}</h2>
            <img src={item.img} alt={item.nombre}/>
            <p>{item.descripcion}</p>
            <p>Precio: ${item.precio}</p>

            {/* <SelectColor 
                color={color}
                setColor={setColor}
            /> */}
            
            <ItemCount 
                max={item.stock}
                cantidad={cantidad}
                setCantidad={setCantidad}
                agregar={handleAgregar}
            />
        </div>
    )
}

export default ItemDetail