import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Services from '../Services/Services';
import FindUs from '../FindUs/FindUs';
import Products from '../Products/Products';
import Footer from '../../shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <FindUs></FindUs>
            <Products></Products>
            <Footer></Footer>
        </div>
    );
};

export default Home;