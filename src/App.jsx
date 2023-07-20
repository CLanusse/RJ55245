import { Header } from "./components/Header/Header"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import 'bootstrap/dist/css/bootstrap.min.css';
import PokeApi from "./ejemplos/PokeApi";
import Contacto from "./components/Contacto/Contacto";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import './App.css'
import { CartProvider } from "./context/CartContext";
import { DarkModeProvider } from "./context/DarkModeContext";
import CartView from "./components/CartView/CartView";

function App() {

  return (
    <DarkModeProvider>
      <CartProvider>

        <BrowserRouter>
            <Header />        

            <Routes>
              <Route path="/" element={ <ItemListContainer /> }/>
              <Route path="/productos/:categoryId" element={ <ItemListContainer /> }/>
              <Route path="/detail/:itemId" element={ <ItemDetailContainer /> }/>
              <Route path="/contacto" element={ <Contacto /> }/>
              <Route path="/pokeapi" element={ <PokeApi /> }/>
              <Route path="/cart" element={ <CartView /> }/>
              {/* <Route path="*" element={ <Error404 /> }/> */}
              <Route path="*" element={ <Navigate to="/"/> }/>
            </Routes>

            {/* <Footer /> */}
        </BrowserRouter>

      </CartProvider>
    </DarkModeProvider>


  )
}

export default App
