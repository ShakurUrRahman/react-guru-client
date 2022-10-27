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
                    <h3 className='text-success fw-bold '>Future is calling!</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={webinar}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3 className='text-success fw-bold  '>Don't give up!</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={working}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3 className='text-success fw-bold '>Be curious!</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default MyCarousel;