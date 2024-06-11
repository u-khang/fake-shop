import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/Sweets_Club_Icon.webp'
function Nav() {
    return (
        <div 
            id="nav"
            className='fixed left-0 top-0 flex justify-between w-full border-b-2 border-pink-500 bg-pink-300 p-4 px-36'
        >
            <Link to="/" >
            <div className='flex'>
                <img src={logo} alt="sugar-logo" className='w-20'/>
                <h1>Sweets Club</h1>
            </div>
            </Link>
            <nav className='w-52'>
                <ul className='flex justify-between'>
                    <li>
                        <NavLink 
                            to="/shop"
                        >
                            Shop
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/cart" 
                        >
                            Cart
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav