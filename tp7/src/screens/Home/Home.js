//import { Link } from 'react-router-dom';
//import { Text } from 'react';
import Products from '../../components/Products/Products.js';
import Carousel from '../../components/Carousel/Carousel.js';
import { useEffect, useState } from 'react';
import "../Home/Home.css";

const Home = ({products}) => {
    const [nuevaLista, setNuevaLista] = useState({});
    console.log("en Home");
    // hacer un map de productos

    
    
    
    //setNuevaLista(products.map(item => myFunction(item))); REVISAR USE EFFECT FLECHAAAA!!!
    useEffect(() => {
        if (products) {
            products.forEach(element => {
                if(element.id <= 5){
                    setNuevaLista(...nuevaLista, element);
                } 
            });
        }
    }, [products])
    
    return (
        //mostar products + carousel
        <div className="container">
            
            <Carousel></Carousel>


            <Products className = 'titulo' products={nuevaLista}></Products>

        </div>
    );
}

export default Home;