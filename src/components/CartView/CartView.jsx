import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { FaTrashAlt } from 'react-icons/fa'
import { Link } from "react-router-dom"



const CartView = () => {
    const { cart, totalCompra, vaciarCarrito, removerDelCarrito } = useContext(CartContext)

    if (cart.length === 0) {
        return (
            <div className="container my-5">
                <h2 className="text-4xl">Tu carrito está vacío :(</h2>
                <hr/>
                <Link to="/" className="btn btn-success">Ir a comprar</Link>
            </div>
        )
    }

    return (
        <div className="container my-5">
            <h2 className="text-4xl">Tu compra</h2>
            <hr/>

            {
                cart.map((item) => (
                    <div key={item.id}>
                        <h3>{item.nombre}</h3>
                        <img src={item.img} alt={item.nombre}/>
                        <p>Precio: ${item.precio * item.cantidad}</p>
                        <p>Cantidad: {item.cantidad}</p>
                        <button onClick={() => removerDelCarrito(item.id)} className="btn btn-danger"><FaTrashAlt/></button>
                        <hr/>
                    </div>
                ))
            }

            <div>
                <h4 className="text-3xl my-2">Total: ${totalCompra()}</h4>
                <button onClick={vaciarCarrito} className="btn btn-danger">Vaciar carrito</button>
                <Link className="btn btn-success mx-2" to="/checkout">Terminar mi compra</Link>
            </div>            
        </div>
    )
}

export default CartView