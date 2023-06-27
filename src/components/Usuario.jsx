

export const Usuario = ( {nombre, edad, rol} ) => {

    return (
        <li>
            <h3>{nombre}</h3>
            <p>Edad: {edad}</p>
            <p>Rol: {rol}</p>
        </li>
    )
}


// export const Usuario = (props) => {
//     const { nombre, edad, rol } = props

//     return (
//         <div>
//             <h3>{nombre}</h3>
//             <p>Edad: {edad}</p>
//             <p>Rol: {rol}</p>
//         </div>
//     )
// }

// export const Usuario = (props) => {
//     console.log(props)

//     return (
//         <div>
//             <h3>{props.nombre}</h3>
//             <p>Edad: {props.edad}</p>
//             <p>Rol: {props.rol}</p>
//         </div>
//     )
// }
