import { memo } from "react"


const EjemploMemo = memo(() => {
    
    // proceso pesado
    for (let i = 0; i < 1000 ; i++) {
        console.log(i)
    }

    return (
        <div>
            soy un componente Memo
        </div>
    )
})

export default EjemploMemo