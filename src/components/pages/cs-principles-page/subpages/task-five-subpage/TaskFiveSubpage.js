import React, { Component } from 'react';
import './TaskFiveSubpage.css';
import CarouselWrapper from '../../CarouselWrapper/CarouselWrapper';
import TitleWrapper from '../../TitleWrapper/TitleWrapper';
import ModellingImagePath from '../../../../../assets/images/modelling.jpg';

class TaskFiveSubpage extends Component {
    render() {
        return (
            <div>
                <TitleWrapper 
                    imagePath={ModellingImagePath}
                    titleText="Objective Five"
                    titleDescription="Identify and explain how abstractions are used in computation and modeling"
                />
                <CarouselWrapper>
                    <p>Abstraction reduces information and detail to facilitate focus 
                        on relevant concepts. Multiple levels of abstraction are used 
                        in computation. Binary data is processed by physical layers of 
                        computing hardware, including gates, chips, and components, 
                        programming languages, from low to high level, are used in 
                        developing software, and applications and systems are designed, 
                        developed, and analyzed using levels of hardware, software, 
                        and conceptual abstractions.</p>
                    <p>Models and simulations use abstraction to raise and answer 
                        questions. People use models and simulations to generate 
                        new understanding and knowledge, Models use different 
                        levels of abstraction to represent phenomena. Hypotheses 
                        can be formulated, refined, and tested using models and 
                        simulations. Simulations can facilitate extensive and rapid 
                        testing of models.</p>
                    <p>Procedural abstractions provide a way to abstract well-defined 
                        operations. The implementation of the procedure requires a 
                        number of steps to be performed. A simple example is an 
                        “add to cart” operation which performs various steps to 
                        add particular items to a virtual cart. Procedural abstractions 
                        are normally characterized by a programming language as a function. 
                        A program is often a series of functions that accomplish various 
                        goals. By abstracting out these functions, the code remains 
                        human-readable and lends itself to assorted organizational 
                        constructs.</p>
                </CarouselWrapper>
            </div>
        );
    }
}

export default TaskFiveSubpage;
