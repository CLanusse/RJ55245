import ItemCard from "../ItemCard/ItemCard"



const ItemList = ({productos}) => {

    return (
        <div className="container">
            <h2 className="text-blue-800 text-4xl">Productos</h2>
            <hr/>
           
           <div className='flex flex-row flex-wrap justify-center gap-2'>
            {
                productos.map((prod) => <ItemCard key={prod.id} item={prod}/>)
            }
           </div>
        </div>
    )
}

export default ItemList