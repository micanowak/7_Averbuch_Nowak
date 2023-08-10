import {Link} from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <nav>
                {/* logo de la página */}
                <Link to='/Home'>Home</Link>
                <br></br>
                <Link to='/Productos'>All Products</Link>
                <br></br>
                <Link to='/Contacto'>Contacto</Link>
            </nav>
        </>
    );
}

export default Layout;