import { Outlet } from 'react-router-dom';
import Nav from './components/Nav.jsx'

function Root() {
    return (
        <div>
            <Nav/>
            <Outlet/>
        </div>
    )
}

export default Root