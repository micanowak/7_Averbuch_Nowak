import React from 'react';

const Products = ({products}) => {
    return (
        products.map(p => <p>Hola esto es un producto llamado {p.title}</p>)
    )
};

export default Products;