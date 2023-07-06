import { useEffect, useState } from 'react'
import './ItemListContainer.scss'
import { pedirDatos } from '../../helpers/pedirDatos'
import ItemList from '../ItemList/ItemList'


const ItemListContainer = () => {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        pedirDatos()
            .then((res) => {
                setProductos(res)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <div>
            <ItemList productos={productos}/>
        </div>
    )
}

export default ItemListContainer


// const pedirDatos = (bool) => {
//     return new Promise((resolve, reject) => {
//         // cuerpo de la promesa
//         setTimeout(() => {
//             if (bool) {
//                 resolve("Promesa resuelta")
//             } else {
//                 reject("Promesa rechazada")
//             }
//         }, 2000)
//     })
// }

//   protocolo |     dominio     | endpoints
//URL: https://api.coderhouse.com/alumnos  

// GET /alumnos | id = Number | limit = Number
// url: https://api.coderhouse.com/alumnos?id=66558
// url: https://api.coderhouse.com/alumnos?comision=55245&limit=10

// url: https://api.coderhouse.com/alumnos/{id}
// url: https://api.coderhouse.com/alumnos/12345
// url: https://api.coderhouse.com/alumnos/88754

// useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then((resp) => resp.json() )
    //     .then((data) => {
    //         console.log(data)
    //     })
// }, [])