import { clases } from "../../helpers/utils"


const ItemCount = ({max, cantidad, setCantidad, agregar}) => {
    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < max && setCantidad(cantidad + 1)
    }

    return (
        <div>
            <button 
                onClick={handleRestar} 
                // className={`btn mx-2 ${cantidad === 5 ? "boton-5" : ''} ${cantidad === 1 ? "btn-outline-danger" : "btn-outline-primary"}`}
                className={clases(
                    "btn",
                    "mx-2",
                    "btn-outline-primary",
                    cantidad === 5 && "boton-5",
                    cantidad === 1 ? "btn-outline-danger" : "btn-outline-primary"
                )}
                disabled={cantidad === 1}
            >
                -
            </button>

            <span>{cantidad}</span>

            <button 
                onClick={handleSumar} 
                className={cantidad === max ? "btn mx-2 btn-danger" : "btn mx-2 btn-primary"}
                disabled={cantidad === max}
            >
                +
            </button>

            <br/>
            <button onClick={agregar} className="btn btn-success my-2">Agregar</button>

        </div>
    )
}

export default ItemCount