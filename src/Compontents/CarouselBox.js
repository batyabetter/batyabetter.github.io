import React, { Component } from 'react';
import  Carousel  from 'react-bootstrap/Carousel';
import first from '../Assets/first.jpg'
import second from '../Assets/second.jpg'
import third from '../Assets/third.jpg'

export default class CarouselBox extends Component {
    render() {
        return(
            <Carousel>
                <Carousel.Item>
                    <img
                        className='d-block w-100'
                        src={ first }
                        alt = "cartoon1"
                    />
                    <Carousel.Caption>
                        <h3>Cartoon one</h3>
                        <p>just annoying words for no reason </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className='d-block w-100'
                        src={ second }
                        alt = "cartoon1"
                    />
                    <Carousel.Caption>
                        <h3>Cartoon two</h3>
                        <p>just annoying words for no reason </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className='d-block w-100'
                        src={ third }
                        alt = "cartoon1"
                    />
                    <Carousel.Caption>
                        <h3>Cartoon three</h3>
                        <p>just annoying words for no reason </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }

}    