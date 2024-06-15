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
            // className='z-10 fixed left-0 top-0 flex justify-between w-full p-1 border-b-2 border-pink-700 bg-pink-300 text-2xl h-44'
        >   
            <div>
                <Link to="/" >
                    <div className='flex'>
                        <img src={logo} alt="sugar-logo" className='w-20'/>
                        <h1 
                            // className='m-auto font-Pacifico text-2xl text-yellow-950 '
                        >Sweets Club
                        </h1>
                    </div>
                </Link>

                <button
                    // className="absolute right-6 top-8 scale-125 sm:hidden"
                    onClick={toggleMenu}
                >
                    <span className="material-symbols-outlined">
                        {openMenu ? "close" : "menu"}
                    </span>
                </button>

                <nav 
                    // className={`absolute left-0 top-full h-48 w-full bg-inherit p-6 sm:static sm:block sm:h-auto sm:w-auto sm:p-0 sm:pr-20 ${openMenu ? "border-b-2 border-pink-700" : "hidden"}`}
                >
                    <ul 
                        // className='flex flex-col sm:flex-row sm:gap-10'
                    >
                        <li 
                            // className='p-6 text-center text-2xl hover:underline'
                        >
                            <NavLink 
                                to="/shop"
                            >
                                <p>Shop</p>
                            </NavLink>
                        </li>
                        <li 
                            // className='p-6 text-center text-2xl hover:underline'
                        >
                            <NavLink
                                to="/cart" 
                            >
                                <p>Cart</p>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <div></div>
        </div>
    )
}

export default Nav