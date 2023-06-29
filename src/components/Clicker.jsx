import { useState, useEffect } from "react"


export const Clicker = () => {
    const [counter, setCounter] = useState(1)
    const [saludo, setSaludo] = useState(true)

    const clickear = () => {
        setCounter(counter + 1)
    }
    const cambiarSaludo = () => {
        setSaludo(!saludo)
    }

    useEffect(() => {
        console.log("Efecto de montaje")

        return () => {
            // efecto de desmontaje
            console.log("Efecto de DESMONTAJE")
        }
    }, [])

    // useEffect(() => {
    //     // bloque del efecto
    //     console.log("Counter actualizado")
    //     // función|efecto de limpieza
    //     return () => {
    //         console.log(counter)
    //         console.log("Efecto de limpieza")
    //     }
    // }, [counter, saludo])

    // useEffect(() => {
    //     // bloque del efecto
    //     const interval = setTimeout(() => {
    //         console.log("Hola mundo!")
    //     }, 2000)
    //     // función|efecto de limpieza
    //     return () => {
    //         clearTimeout(interval)
    //     }
    // }, [saludo])

    // useEffect(() => {
    //     fetch(`https://jsonplaceholder.typicode.com/posts/${counter}`)
    //                 .then((response) => response.json())
    //                 .then((json) => console.log(json))
    // }, [counter])

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