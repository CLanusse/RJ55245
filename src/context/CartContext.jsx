import { createContext, useState } from "react";

export const CartContext = createContext()


export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const agregarAlCarrito = (item) => {
      setCart([...cart, item])
    }

    const removerDelCarrito = (id) => {
        setCart( cart.filter((item) => item.id !== id) )
    } 
  
    const isInCart = (id) => {
      return cart.some((item) => item.id === id)
    }

    const totalCompra = () => {
        return cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0)
    }

    const totalCantidad = () => {
        return cart.reduce((acc, item) => acc + item.cantidad, 0)
    }

    const vaciarCarrito = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{
            cart,
            agregarAlCarrito,
            isInCart,
            totalCompra,
            vaciarCarrito,
            totalCantidad,
            removerDelCarrito
        }}>
            {children}
        </CartContext.Provider>
    )
}