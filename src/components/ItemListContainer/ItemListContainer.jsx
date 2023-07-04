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