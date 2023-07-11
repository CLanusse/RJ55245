


// HOC --> HOF (high order functions)

import { useEffect } from "react"
import { useState } from "react"
import { pedirDatos } from "../../helpers/pedirDatos"

// function fn(fn) {
//     // recibe una fn por parámetro, o bien retorna una función
//     return fn2
// }

// HOC

// function hoc(Comp) {
//     // recibe un comp por parametro y retorna otro componente.
//     // el componente retornado envuelve al recibido con funcionalidad
//     return Comp2
// }


export const withProductsData = (Component) => {
    const WithProductsData = (props) => {
        const [productos, setProductos] = useState([])
        const [loading, setLoading] = useState(true)

        useEffect(() => {
            setLoading(true)
    
            pedirDatos()
                .then(r => setProductos(r))
                .catch(e => console.log(e))
                .finally(() => {
                    setLoading(false)
                })
        }, [])

        return <Component productos={productos} loading={loading} {...props}/>
    }

    return WithProductsData
}