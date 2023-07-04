


const ItemCard = ({item}) => {

    return (
        <div className='col-3 m-2'>
            <h4>{item.nombre}</h4>
            <img src={item.img} alt={item.nombre}/>
            <p>{item.descripcion}</p>
            <p>Precio: ${item.precio}</p>
            <button className='btn btn-primary'>Ver más</button>
        </div>
    )
}

export default ItemCard