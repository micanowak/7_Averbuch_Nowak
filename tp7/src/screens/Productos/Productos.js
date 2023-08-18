import {Link} from 'react-router-dom';
import Products from '../../components/Products/Products.js';
import "../Productos/Productos.css";

const Productos = ({products}) => {    
    console.log("en Productos");
    
    return (
        //map lista productos como en el tp3 + buscador de productos
        <Products className = 'titulo' products={products}></Products>
        //<Link to='/DetalleProducto:id'>Detalle Producto</Link>
    );
}

export default Productos;