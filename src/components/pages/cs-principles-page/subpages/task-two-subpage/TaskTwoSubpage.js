import React, { Component } from 'react';
import './TaskTwoSubpage.css';
import CarouselWrapper from '../../CarouselWrapper/CarouselWrapper';
import TitleWrapper from '../../TitleWrapper/TitleWrapper';
import BusinessTwoImagePath from '../../../../../assets/images/businessTwo.jpg';

class TaskTwoSubpage extends Component {
    render() {
        return (
            <div>
                <TitleWrapper 
                    imagePath={BusinessTwoImagePath}
                    titleText="Objective Two"
                    titleDescription="Create a computational artifact with a practical, personal, or societal intent for creative 
                    expression, to satisfy personal curiosity, or to create new knowledge"
                />
                <CarouselWrapper>
                    <p>A computational artifact is anything created by a human using a computer. 
                        Some examples of an artifact may be a program, image, audio, video, presentation, 
                        or webpage.</p>
                    <p>My artifact of proof for this objective is my PLA portfolio website. I created it 
                        solely for this course, however, it serves as a perfect example of 
                        "creating something using a computer". I used a computer for nearly every 
                        aspect of creation of this site from the code, to the words, to the images.</p>
                </CarouselWrapper>
            </div>
        );
    }
}

export default TaskTwoSubpage;
