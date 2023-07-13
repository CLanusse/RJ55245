



const ItemDetail = ({item}) => {

    return (
        <div className="container my-5">
            <h2>{item.nombre}</h2>
            <img src={item.img} alt={item.nombre}/>
            <p>{item.descripcion}</p>
            <p>Precio: ${item.precio}</p>

            <button className="btn btn-success">Agregar</button>
        </div>
    )
}

export default ItemDetail