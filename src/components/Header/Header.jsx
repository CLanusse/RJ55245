import Menu from '../Menu/Menu'
import './Header.scss'
export const Header = () => {

    return (
        <header className="header bg-blue-400">
            <div className="header__container">
                <h1 className="header__logo">LOGO</h1>


                <Menu />
            </div>
        </header>
    )
}