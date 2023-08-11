//import { Link } from 'react-router-dom';
//import { Text } from 'react';
import Products from "../components/Products.js";
import Carousel from "../components/Carousel.js";
const Home = (/*{products}*/) => {
    
    console.log("en Home");
    
    return (
        //mostar products + carousel
        <div className="container">
            <p>Home</p>
            <Carousel></Carousel>
            <Products></Products>
        </div>
    );
}

export default Home;