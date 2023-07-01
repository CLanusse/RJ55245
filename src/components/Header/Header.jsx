import './Header.scss'

export const Header = () => {

    return (
        <header className="header">
            <div className="header__container">
                <h1 className="header__logo">LOGO</h1>

                <nav className="navbar">
                    <a className="navbar__link" href="#">Enlace 1</a>
                    <a className="navbar__link" href="#">Enlace 2</a>
                    <a className="navbar__link" href="#">Enlace 3</a>
                </nav>
            </div>
        </header>
    )
}