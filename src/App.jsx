import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Tutores } from './ejemplos/Tutores'

function App() {

  const profe = "Conrado Lanusse"

  return (
    <div>
      <div>
        <a href="https://vitejs.dev"  target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{profe}</h1>

      <Tutores />
    </div>
  )
}

export default App
