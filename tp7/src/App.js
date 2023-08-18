import './App.css';
import Home from './screens/Home/Home';
import Contacto from './screens/Contacto';
import DetalleProducto from './screens/DetalleProducto';
import Productos from './screens/Productos/Productos';
import axios from 'axios';
import { /*Text,*/ useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './screens/Layout/Layout';

function App() {

  const [listaProductos, setListaProductos] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(response => {

        //console.log(response.data.products);
        //response.data.products.forEach(element => {
          //setListaProductos(...listaProductos, element)
          //listaProductos.concat(element);
        //});
        setListaProductos(response.data.products);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/Home' index element={<Home products={listaProductos} />}></Route>
            <Route path='/Productos' element={<Productos products={listaProductos} />}></Route> {/*:listaProductos*/}
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
