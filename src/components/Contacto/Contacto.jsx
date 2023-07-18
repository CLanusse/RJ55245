import { useEffect, useState } from "react"
import { useProductos } from "../../hooks/useProductos"



const Contacto = () => {
    // const { productos } = useProductos()

    const clickear = (event) => {
        console.log(event)
    }

    useEffect(() => {
        window.addEventListener('click', clickear)

        return () => {
            window.removeEventListener("click", clickear)
        }
    }, []) 

    return (
        <div onClick={clickear} className="container my-5">
            <h2>Contacto</h2>
            <hr/>
            
        </div>
    )
}

export default Contacto