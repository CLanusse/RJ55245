import './ItemListContainer.scss'

const ItemListContainer = ({saludo}) => {

    return (
        <div className="catalogo__contenedor">
            <h2>Item List Container</h2>
            <hr/>

            <p>Hola mundo!</p>
            <p>{saludo}</p>
        </div>
    )
}

export default ItemListContainer