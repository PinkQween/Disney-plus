import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';

function imageSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };

    return (
        <Carousel {...settings}>
            <Wrap>
                <img src='/assets/images/slider-badging.jpg' />
            </Wrap>
            <Wrap>
                <img src='/assets/images/slider-badag.jpg' />
            </Wrap>
            <Wrap>
                <img src='/assets/images/slider-scale.jpg' />
            </Wrap>
            <Wrap>
                <img src='/assets/images/slider-scales.jpg' />
            </Wrap>
        </Carousel>
    )
}

export default imageSlider

const Carousel = styled(Slider)`
    margin-top: 20px;

    ul li button {
        &:before {
            font-size: 10px;
            color: rgb(150, 158, 171);
        }
    }

    li.slick-active button:before {
        color: white;
    }

    .slick-list {
        overflow: visible;
    }

    button {
        padding-left: 50px;
        padding-right: 70px;
        z-index: 1;
    }
`

const Wrap = styled.div`
    cursor: pointer;
    padding: 7px;

    img {
        width: 100%;
        height: 100%;
        border-radius: 7px;
        border: 4px solid transparent;
        box-shadow: rgb(0 0 0 / 69%) 0 26px 30px -10px, rgb(0 0 0 / 73%) 0 16px 10px -10px;
        transition-duration: 300ms;

        &:hover {
            border: 4px solid rgba(249, 249, 249, 0.8);
        }
    }
`