import { useEffect } from "react"



const SelectTamanio = ({options, setTamanio, setMultiplier}) => {

    const handleSelect = (e) => {
        const option = options.find(op => op.value === e.target.value)
        console.log(option)
        setTamanio(option.value)
        setMultiplier(option.multiplier)
    }

    useEffect(() => {
        const option = options[0]
        setTamanio(option.value)
        setMultiplier(option.multiplier)
    }, [])

    return (
        <select onChange={handleSelect}>
            {
                options.map(opt => <option value={opt.value} key={opt.value}>{opt.value}</option>)
            }
        </select>
    )
}

export default SelectTamanio