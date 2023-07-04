import ItemCard from "../ItemCard/ItemCard"



const ItemList = ({productos}) => {

    return (
        <div className="container">
            <h2>Productos</h2>
            <hr/>
           
           <div className='row'>
            {
                productos.map((prod) => <ItemCard key={prod.id} item={prod}/>)
            }
           </div>
        </div>
    )
}

export default ItemList