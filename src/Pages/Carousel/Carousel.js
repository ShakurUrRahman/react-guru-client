import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import online from '../../assets/carousel/online.jpg'
import webinar from '../../assets/carousel/webinar.jpg'
import working from '../../assets/carousel/working.jpg'

const MyCarousel = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={online}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={webinar}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={working}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default MyCarousel;