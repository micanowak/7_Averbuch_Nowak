import './App.css';
import Home from './screens/Home';
import Contacto from './screens/Contacto';
import DetalleProducto from './screens/DetalleProducto';
import Productos from './screens/Productos';
import axios from 'axios';
import { Text, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './screens/Layout';

function App() {

  const [listaProductos, setListaProductos] = useState([]);

  axios.get('https://dummyjson.com/products')
    .then(response => {
      console.log(response);
      response.data.products.forEach(element => {
        setListaProductos(...listaProductos, element)
      });
      console.log(listaProductos);
    })
    .catch(error => {
      // handle error
      console.log(error);
    })
    .finally(() => {
      // always executed
    })

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path='/Productos' element={<Productos />}></Route> {/*:listaProductos*/}
            <Route path='/DetalleProducto' element={<DetalleProducto />}></Route> {/*:id*/}
            <Route path='/Contacto' element={<Contacto />}></Route>
            <Route path="*" element={<h1>404</h1>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
