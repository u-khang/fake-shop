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
            className="fixed w-full h-20 bg-red-50 sm:h-28"
        >   
            <div className='flex h-full p-3'>
                <div className='w-1/4 m-auto md:pl-24'>
                    <span class="material-symbols-outlined ml-6">
                        search
                    </span>
                </div>

                <div className='w-2/4'>
                    <Link to="/" >
                        <div className='flex h-full w-40 sm:w-72 m-auto'>
                            <img src={logo} alt="sugar-logo" className=''/>
                            <h1 className='m-auto font-Pacifico text-xl text-rose-950 sm:text-4xl'
                                // className='m-auto font-Pacifico text-2xl text-yellow-950 '
                            >Sugar Rush
                            </h1>
                        </div>
                    </Link>
                </div>

                <button
                    // className="absolute right-6 top-8 scale-125 sm:hidden"
                    className='w-1/4 md:hidden'
                    onClick={toggleMenu}
                >
                    <span className="material-symbols-outlined">
                        {openMenu ? "close" : "menu"}
                    </span>
                </button>
                <div className='hidden md:block w-1/4 flex m-auto'>
                    <button className='w-1/2'>
                        <span className="material-symbols-outlined">person</span>
                    </button>
                    <button className='w-1/2'>
                        <NavLink to='/cart'>
                            <span className="material-symbols-outlined">shopping_cart</span>
                        </NavLink>
                    </button>
                </div>
            </div>
            <div>
                <nav 
                    // className={`absolute left-0 top-full h-48 w-full bg-inherit p-6 sm:static sm:block sm:h-auto sm:w-auto sm:p-0 sm:pr-20 ${openMenu ? "border-b-2 border-pink-700" : "hidden"}`}
                    className={`${openMenu ? "bg-red-50" : "hidden"}`}
                >
                    <ul 
                        // className='flex flex-col sm:flex-row sm:gap-10'
                        className='font-bold font-bold tracking-wider text-md'
                    >
                        <li 
                            className='hover:underline'
                        >
                            <NavLink 
                                to="/cakes"
                                onClick={closeMenu}
                            >
                                <p className='p-4 border-y'>Cakes</p>
                            </NavLink>
                        </li>
                        <li
                            className='hover:underline'
                        >
                            <NavLink
                                to="/buns"
                                onClick={closeMenu}
                            >
                                <p className='p-4 border-b'>Buns</p>
                            </NavLink>
                        </li>
                        <li
                            className='hover:underline'
                        >
                            <NavLink
                                to="/drinks"
                                onClick={closeMenu}
                            >
                                <p className='p-4 border-b'>Drinks</p>
                            </NavLink>
                        </li>
                        <li 
                            className='hover:underline'
                        >
                            <NavLink
                                to="/cart" 
                                onClick={closeMenu}
                            >
                                <p className='p-4 border-b'>Cart</p>
                            </NavLink>
                        </li>
                        <li
                            className='hover:underline'
                        >
                            <NavLink
                                onClick={closeMenu}
                            >
                                <p className='p-4 border-b'>User</p>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <nav className='hidden md:block bg-red-50 h-14'>
                    <div className='w-80 flex m-auto pt-3 text-slate-600 font-bold tracking-wider text-center'>
                        <div className='w-1/3 hover:underline'>
                            <NavLink to='/cakes'>
                                <p className=''>Cakes</p>
                            </NavLink>
                        </div>
                        <div className='w-1/3 hover:underline'>
                            <NavLink
                                to="/buns"
                            >
                                <p className=''>Buns</p>
                            </NavLink>
                        </div>
                        <div className='w-1/3 hover:underline'>
                            <NavLink
                                to="/drinks"
                            >
                                <p className=''>Drinks</p>
                            </NavLink>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Nav