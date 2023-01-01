import React from 'react';
import Slider from 'react-slick';

const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <Slider {...settings}>
            <img src='./images/slider1.png' alt="Image1" />
            <img src='./images/slider2.png' alt="Image2" />
            <img src='./images/slider3.png' alt="Image3" />
            <img src='./images/slider4.png' alt="Image4" />
        </Slider>
    );
};

export default Banner;
