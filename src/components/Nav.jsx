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
            className="fixed z-10 w-full h-20 bg-white"
        >   
            <div className='flex h-full p-3'>
                <div className='w-1/6 m-auto'>
                <span class="material-symbols-outlined">
                    search
                </span>
                </div>

                <div className='w-3/6'>
                    <Link to="/" >
                        <div className='flex h-full'>
                            <img src={logo} alt="sugar-logo" className=''/>
                            <h1 className='m-auto font-Pacifico text-xl'
                                // className='m-auto font-Pacifico text-2xl text-yellow-950 '
                            >Sweets Club
                            </h1>
                        </div>
                    </Link>
                </div>

                <button
                    // className="absolute right-6 top-8 scale-125 sm:hidden"
                    className='w-2/6'
                    onClick={toggleMenu}
                >
                    <span className="material-symbols-outlined">
                        {openMenu ? "close" : "menu"}
                    </span>
                </button>
            </div>
            <div>
                <nav 
                    // className={`absolute left-0 top-full h-48 w-full bg-inherit p-6 sm:static sm:block sm:h-auto sm:w-auto sm:p-0 sm:pr-20 ${openMenu ? "border-b-2 border-pink-700" : "hidden"}`}
                    className={`${openMenu ? "border-b-2 bg-white" : "hidden"}`}
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
                                <p>All</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink>
                                <p>Pastries</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink>
                                <p>Drinks</p>
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
                        <li>
                            <NavLink>
                                <p>User</p>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Nav