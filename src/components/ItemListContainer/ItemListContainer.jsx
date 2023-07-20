import { useEffect, useState } from 'react'
import './ItemListContainer.scss'
import { pedirDatos } from '../../helpers/pedirDatos'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()


    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then(r => {
                if (categoryId) {
                    setProductos( r.filter(prod => prod.category === categoryId) )
                } else {
                    setProductos(r)
                }
            })
            .catch(e => console.log(e))
            .finally(() => {
                setLoading(false)
            })
        }, [categoryId])

    return (
        <div>
            {
                loading
                    ? <h2>Cargando...</h2>
                    : <ItemList productos={productos}/>
            }
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