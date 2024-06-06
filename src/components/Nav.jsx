import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/Sweets_Club_Icon.webp'
function Nav() {
    return (
        <div id="nav">
            <Link to="/">
                <img src={logo} alt="sugar-logo" />
            </Link>
            <nav>
                <ul>
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