import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './UseSlider.css';
const sliderImages = [
    { img: "https://i.ibb.co/JrpN3tJ/carousel-1.png" },
    { img: "https://i.ibb.co/4TqD6kM/carousel-2.png" },
    { img: "https://i.ibb.co/Y7Lhxsr/carousel-3.png" }

]

const UseSlider = () => {

    var imageSlide = () =>
        sliderImages.map(num => (
            <div className="imgpad">
                <img className="imgdetails" src={num.img} />
            </div>
        ));


    return (
        <div className="container">
            <div style={{ textAlign: 'center', marginTop: '20px', paddingTop: '35px' }}>
                <h3 style={{ color: 'white' }} >Here are some of <span className="span"> our works</span></h3>
            </div>
            <div style={{ marginTop: '70px' }}>

                <Slider

                    dots={true}
                    slidesToShow={1}
                    slidesToScroll={1}
                    autoplay={true}
                    arrows={true}
                    autoplaySpeed={4000}>{imageSlide()}

                </Slider>
            </div>
        </div>
    );
};

export default UseSlider;