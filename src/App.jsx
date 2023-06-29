import { useState } from 'react'
import { Clicker } from './components/Clicker'
import Contenedor from './components/Contenedor'
import MiBoton from './components/MiBoton'
import Nosotros from './components/Nosotros'
import { Tutores } from './components/Tutores'

function App() {
  const [show, setShow] = useState(true)

  const mostrar = () => {
    setShow(!show)
  }

  return (
    <div>

      <MiBoton color='#488234' click={mostrar}>
        Click me<img src='/vite.svg'/>
      </MiBoton> 

      {
        show ? <Clicker /> : <p>Clicker oculto</p>
      }

        

    {/* <Nosotros /> */}

{/* 
      <MiBoton color='#488234' click={saludar}>
        Click me<img src='/vite.svg'/>
      </MiBoton> 
      <MiBoton color='blue' click={chau}>
        Click me<img src='/vite.svg'/>
      </MiBoton> 

      <Contenedor>
        <Tutores />
        <Clicker />
      </Contenedor>

      <Contenedor>
        <h2>Hola mundo</h2>
        <p>Algún texto</p>
      </Contenedor> */}
    </div>
  )
}

export default App
