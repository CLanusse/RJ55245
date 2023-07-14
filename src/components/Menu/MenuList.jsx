import { Link } from 'react-router-dom'
import { AiOutlineCloseCircle } from 'react-icons/ai'

const MenuList = ( {close} ) => {


    return (
        <nav onClick={(e) => e.stopPropagation()}  className="menulist bg-blue-600">
            <AiOutlineCloseCircle onClick={close} className='ml-auto text-white text-4xl cursor-pointer'/>
            <Link onClick={close} className="menulist__link" to="/">Inicio</Link>
            <Link onClick={close} className="menulist__link" to="/productos/verduleria">Verduleria</Link>
            <Link onClick={close} className="menulist__link" to="/productos/perfumeria">Perfumeria</Link>
            <Link onClick={close} className="menulist__link" to="/productos/carniceria">Carniceria</Link>
            <Link onClick={close} className="menulist__link" to="/productos/panaderia">Panaderia</Link>
            <Link onClick={close} className="menulist__link" to="/contacto">Contacto</Link>
        </nav>
    )
}

export default MenuList