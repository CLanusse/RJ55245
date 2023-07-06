import { useEffect, useState } from "react"
import PokeCard from "./PokeCard"


const PokeList = () => {
    const [list, setList] = useState([])
    const [pagination, setPagination] = useState({
        next: null,
        previous: null
    })
    const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon`)

    useEffect(() => {
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                setList(data.results)
                setPagination({
                    next: data.next,
                    previous: data.previous
                })
            })
    }, [url])

    const handleSiguiente = () => {
        pagination.next && setUrl(pagination.next)
    }
    const handleAnterior = () => {
        pagination.previous && setUrl(pagination.previous)
    }

    return (
        <div className="container my-5">
            <h2>PokeList</h2>
            <hr/>
            <button onClick={handleAnterior} className="btn btn-primary mx-1">Anterior</button>
            <button onClick={handleSiguiente} className="btn btn-primary mx-1">Siguiente</button>

            <div className="row">
                {
                    list.map((el) => <PokeCard key={el.name} url={el.url}/>)
                }
            </div>
        </div>
    )
}

export default PokeList
