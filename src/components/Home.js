import React from 'react';
// import Banner from './Banner';
import HomeTop from './HomeTop';
import './slider.css';
import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData';
import CarouserSlider from './CarouserSlider';


const Home = () => {
    return (

        // <ImageSlider slides={SliderData} />
        <CarouserSlider />
    );
}

export default Home;