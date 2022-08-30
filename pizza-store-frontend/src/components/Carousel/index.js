import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Carousel_Element from './element';

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel showArrows={false} showThumbs={false} showStatus={false}>
                <Carousel_Element />
                <Carousel_Element />
                <Carousel_Element />
                <Carousel_Element />
                <Carousel_Element />
            </Carousel>
        );
    }
}

export default DemoCarousel;