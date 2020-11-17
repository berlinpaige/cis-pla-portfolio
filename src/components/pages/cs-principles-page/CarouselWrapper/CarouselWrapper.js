import React from 'react';
import './CarouselWrapper.css';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css';

const Carousel = ({children, height}) => {
    return (
        <CarouselProvider
            naturalSlideWidth={50}
            naturalSlideHeight={height}
            totalSlides={children.length}
            className="carouselProvider"
        >        
            <Slider className="carouselSlider">
                {
                    children.map((item, idx) => {
                        return (
                            <Slide key={idx} index={idx}>
                                <div className="carouselTextWrapper">
                                    {item}
                                </div>
                            </Slide>
                        );
                    })
                }
            </Slider>
            <ButtonBack className="carouselBackButton">{`<`}</ButtonBack>
            <ButtonNext className="carouselNextButton">{`>`}</ButtonNext>
            <DotGroup className="carouselDots" />
        </CarouselProvider>
    )
} 

const CarouselWrapper = (props) => {
    return (
        <div>
            <div className="carouselWrapper isSmall test">
                <Carousel {...props} height={70}/>
            </div>
            <div className="carouselWrapper isMedium">
                <Carousel {...props} height={45}/>
            </div>
            <div className="carouselWrapper isLarge">
                <Carousel {...props} height={20}/>
            </div>
        </div>
    )
}

export default CarouselWrapper;
