import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/Sweets_Club_Icon.webp'
import { useState } from 'react';

function Nav() {
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
      setOpenMenu(!openMenu);
    };
  
    const closeMenu = () => {
      setOpenMenu(false);
    };

    return (
        <div 
            id="nav"
            className='fixed left-0 top-0 flex justify-between w-full p-1 border-b-2 border-pink-500 bg-pink-300 text-2xl'
        >
            <Link to="/" >
                <div className='flex'>
                    <img src={logo} alt="sugar-logo" className='w-20'/>
                    <h1 className='m-auto font-Pacifico text-2xl text-yellow-950'>Sweets Club</h1>
                </div>
            </Link>

            <button
                className="absolute right-6 top-6 scale-125 sm:hidden"
                onClick={toggleMenu}
            >
                <span className="material-symbols-outlined">
                    {openMenu ? "close" : "menu"}
                </span>
            </button>

            <nav className={`absolute left-0 top-full z-10 h-48 w-full bg-inherit p-6 ${openMenu ? "border-b-2 border-pink-500" : "hidden"}`}>
                <ul className='flex flex-col sm:flex-row sm:gap-10'>
                    <li className='p-6 text-center text-2xl hover:underline focus-visible:underline'>
                        <NavLink 
                            to="/shop"
                        >
                            <p>Shop</p>
                        </NavLink>
                    </li>
                    <li className='p-6 text-center text-2xl hover:underline focus-visible:underline'>
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