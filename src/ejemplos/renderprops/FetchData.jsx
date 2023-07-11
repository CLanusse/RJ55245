import { useEffect, useState } from "react"

const FetchData = ( {url, arr = [], children} ) => {
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch(url)
            .then(resp => resp.json())
            .then(data => setData(data))
            .catch(err => console.log(err))
    }, arr)

    return (
        <>
            {children(data)}
        </>
    )
}

export default FetchData