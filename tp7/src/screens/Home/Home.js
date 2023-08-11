//import { Link } from 'react-router-dom';
//import { Text } from 'react';
import Products from '../../components/Products/Products.js';
import Carousel from '../../components/Carousel/Carousel.js';
import "../Home/Home.css";

const Home = ({products}) => {
    
    console.log("en Home");
    
    return (
        //mostar products + carousel
        <div className="container">
            
            <Carousel></Carousel>
            
            <Products className = 'titulo' products={products}></Products>
        </div>
    );
}

export default Home;