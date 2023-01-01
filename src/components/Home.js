import React from 'react';
// import Banner from './Banner';
import HomeTop from './HomeTop';
import './slider.css';
import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData';
import ImageSlide from './ImageSlide';

const Home = () => {
    return (

        <ImageSlider slides={SliderData} />
    );
}

export default Home;