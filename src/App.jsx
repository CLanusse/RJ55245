import { Header } from "./components/Header/Header"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import reactIcon from './assets/react.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function App() {

  return (
    <div>
      <Header />
      <ItemListContainer saludo={"Bienvenidos a react"}/>


      {/* <img src="/public/vite.svg" alt="una imagen"/> */}
      <img src={reactIcon} alt="una imagen"/>

      <Button variant="dark" size="lg">Click me</Button>
      <Button variant="dark" size="sm">Click me</Button>
    </div>
  )
}

export default App
