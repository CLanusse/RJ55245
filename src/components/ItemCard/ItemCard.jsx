import { Link } from "react-router-dom"



const ItemCard = ({item}) => {

    return (
        <div className='col-3 m-2'>
            <h4>{item.nombre}</h4>
            <img src={item.img} alt={item.nombre}/>
            <p>{item.descripcion}</p>
            <p>Precio: ${item.precio}</p>
            <Link to={`/detail/${item.id}`} className='btn btn-primary'>Ver más</Link>
        </div>
    )
}

export default ItemCard