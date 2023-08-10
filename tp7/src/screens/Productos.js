import {Link} from 'react-router-dom';

const Productos = ({listaProductos}) => {    
    console.log("en Productos");
    
    return (
        //map lista productos como en el tp3 + buscador de productos
        <Link to='/DetalleProducto:id'>Detalle Producto</Link>
    );
}

export default Productos;