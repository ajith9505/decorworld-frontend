import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from 'react-redux';

const ImageSlide = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        // autoplay: true,
        // autoplaySpeed: 2000,
        cssEase: "linear",
        centerPadding: '0px'
    };

    const images = useSelector(state => state.product.data[0].image)

    return (
        <>
            <div className="product-gallery">
                <div className="image-slider">
                    <Slider {...settings}>
                        {images.map((image, index) => (
                            <div key={index}>
                                <img src={image} alt={`Slide ${index}`} />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default ImageSlide