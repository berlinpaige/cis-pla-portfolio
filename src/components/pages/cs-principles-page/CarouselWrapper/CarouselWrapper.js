import React from 'react';
import './CarouselWrapper.css';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css';

const CarouselWrapper = ({children}) => {
    return (
        <div>
            <div className="carouselWrapper isSmall">
                <CarouselProvider
                    naturalSlideWidth={50}
                    naturalSlideHeight={70}
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
            </div>
            <div className="carouselWrapper isMedium">
                <CarouselProvider
                    naturalSlideWidth={50}
                    naturalSlideHeight={45}
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
            </div>
            <div className="carouselWrapper isLarge">
                <CarouselProvider
                    naturalSlideWidth={50}
                    naturalSlideHeight={20}
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
            </div>
        </div>
    )
}

export default CarouselWrapper;
