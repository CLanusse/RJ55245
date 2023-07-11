import ItemCard from "../../components/ItemCard/ItemCard"
import { withProductsData } from "./withProductsData"


const ItemList2 = ({productos, loading, saludo}) => {

    return (
        <div className="container">
            <h2>Productos</h2>
            <h2>{saludo}</h2>
            <hr/>
           
           <div className='row'>
            {
                loading 
                    ? <h2>Cargando...</h2>
                    : productos.map((prod) => <ItemCard key={prod.id} item={prod}/>)
            }
           </div>
        </div>
    )
}

export default withProductsData(ItemList2)





export const Contacto2 = withProductsData(({productos, loading, nombre}) => {
    console.log(productos, loading)

    return (
        <div>
            Contacto 2
            <p>Bienvenido: {nombre}</p>
        </div>
    )
})