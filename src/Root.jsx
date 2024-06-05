import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <>
            <p>this is root</p>
            <Outlet />
        </>
    )
}

export default Root