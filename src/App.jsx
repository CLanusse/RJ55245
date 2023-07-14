import { Header } from "./components/Header/Header"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
// import 'bootstrap/dist/css/bootstrap.min.css';
import PokeApi from "./ejemplos/PokeApi";
import Contacto from "./components/Contacto/Contacto";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import './App.css'

function App() {

  return (
    <BrowserRouter>
        <Header />        

        <Routes>
          <Route path="/" element={ <ItemListContainer /> }/>
          <Route path="/productos/:categoryId" element={ <ItemListContainer /> }/>
          <Route path="/detail/:itemId" element={ <ItemDetailContainer /> }/>
          <Route path="/contacto" element={ <Contacto /> }/>
          <Route path="/pokeapi" element={ <PokeApi /> }/>
          {/* <Route path="*" element={ <Error404 /> }/> */}
          <Route path="*" element={ <Navigate to="/"/> }/>
        </Routes>

        {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default App
