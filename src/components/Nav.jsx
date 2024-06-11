import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/Sweets_Club_Icon.webp'
import font from '../assets/Pacifico/Pacifico-Regular.ttf'
function Nav() {
    return (
        <div 
            id="nav"
            className='fixed left-0 top-0 flex justify-between w-full border-b-2 border-pink-500 bg-pink-300 p-4 px-36 text-2xl'
        >
            <Link to="/" >
            <div className='flex'>
                <img src={logo} alt="sugar-logo" className='w-20'/>
                <h1 className='m-auto font-Pacifico text-4xl text-yellow-950'>Sweets Club</h1>
            </div>
            </Link>
            <nav className='w-52'>
                <ul className='flex h-full justify-between'>
                    <li className='m-auto hover:underline focus-visible:underline'>
                        <NavLink 
                            to="/shop"
                        >
                            <p>Shop</p>
                        </NavLink>
                    </li>
                    <li className='m-auto hover:underline focus-visible:underline'>
                        <NavLink
                            to="/cart" 
                        >
                            <p>Cart</p>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav