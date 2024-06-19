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
                <div className='w-1/4 m-auto'>
                    <span class="material-symbols-outlined ml-6">
                        search
                    </span>
                </div>

                <div className='w-2/4'>
                    <Link to="/" >
                        <div className='flex h-full w-40 sm:w-72 m-auto'>
                            <img src={logo} alt="sugar-logo" className=''/>
                            <h1 className='m-auto font-Pacifico text-xl text-rose-950 sm:text-3xl'
                                // className='m-auto font-Pacifico text-2xl text-yellow-950 '
                            >Sweets Club
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
                    className={`${openMenu ? "border-b-2 bg-red-50" : "hidden"}`}
                >
                    <ul 
                        // className='flex flex-col sm:flex-row sm:gap-10'
                        className='text-slate-600 font-bold tracking-wider text-xs'
                    >
                        <li 
                            // className='p-6 text-center text-2xl hover:underline'
                        >
                            <NavLink 
                                to="/shop"
                            >
                                <p className='p-4 border-y-2'>Cakes</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink>
                                <p className='p-4 border-b-2'>Pastries</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink>
                                <p className='p-4 border-b-2'>Drinks</p>
                            </NavLink>
                        </li>
                        <li 
                            // className='p-6 text-center text-2xl hover:underline'
                        >
                            <NavLink
                                to="/cart" 
                            >
                                <p className='p-4 border-b-2'>Cart</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink>
                                <p className='p-4'>User</p>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <nav className='hidden md:block bg-red-50 h-14'>
                    <div className='w-80 flex m-auto pt-3 text-slate-600 font-bold tracking-wider text-center'>
                        <div className='w-1/3'>
                            <NavLink to='/shop'>
                                <p className=''>Cakes</p>
                            </NavLink>
                        </div>
                        <div className='w-1/3'>
                            <NavLink>
                                <p className=''>Pastries</p>
                            </NavLink>
                        </div>
                        <div className='w-1/3'>
                            <NavLink>
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