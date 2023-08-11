import {Link, Outlet} from 'react-router-dom';
import '../Layout/Layout.css';
const Layout = () => {
    return (
        <>
            <nav className='navBar'>
                {/* logo de la página */}
                <Link to='/Home' className='links'>Home</Link>
                <br></br>
                <Link to='/Productos' className='links'>All Products</Link>
                <br></br>
                <Link to='/Contacto' className='links'>Contacto</Link>
            </nav>
        <Outlet></Outlet>
        </>
    );
}

export default Layout;