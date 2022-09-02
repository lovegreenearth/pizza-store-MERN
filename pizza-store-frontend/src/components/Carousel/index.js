import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import CarouselElement from './element';

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel showArrows={false} showThumbs={false} showStatus={false}>
                <CarouselElement />
                <CarouselElement />
                <CarouselElement />
                <CarouselElement />
                <CarouselElement />
            </Carousel>
        );
    }
}

export default DemoCarousel;