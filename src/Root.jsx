import { Outlet } from 'react-router-dom';
import Nav from './components/Nav.jsx'
import ShopProvider from './helper/contextProvider.jsx';

function Root() {
    return (
        <ShopProvider>
            <Nav/>
            <Outlet/>
        </ShopProvider>
    )
}

export default Root