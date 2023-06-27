import { useState } from "react"


export const Clicker = () => {
    const [counter, setCounter] = useState(0)
    const [saludo, setSaludo] = useState(true)

    const clickear = () => {
        setCounter(counter + 1)
    }

    const cambiarSaludo = () => {
        setSaludo(!saludo)
    }

    return (
        <div>
            <h2>Clicker</h2>
            <hr/>
            <button onClick={clickear}>Click me</button>
            <p>Clicks: {counter}</p>
            <hr/>
            <button onClick={cambiarSaludo}>Saludar</button>
            <p>{saludo ? "Hola mundo" : "Chau mundo"}</p>
        </div>
    )
}