import './Header.scss'
import { Link } from 'react-router-dom'

export const Header = () => {

    return (
        <header className="header">
            <div className="header__container">
                <h1 className="header__logo">LOGO</h1>

                <nav className="navbar">
                    <Link className="navbar__link" to="/">Inicio</Link>
                    <Link className="navbar__link" to="/productos/verduleria">Verduleria</Link>
                    <Link className="navbar__link" to="/productos/perfumeria">Perfumeria</Link>
                    <Link className="navbar__link" to="/productos/carniceria">Carniceria</Link>
                    <Link className="navbar__link" to="/productos/panaderia">Panaderia</Link>
                    <Link className="navbar__link" to="/contacto">Contacto</Link>
                </nav>
            </div>
        </header>
    )
}