import React, { Component } from 'react';
import './TaskEightSubpage.css';
import CarouselWrapper from '../../CarouselWrapper/CarouselWrapper';
import TitleWrapper from '../../TitleWrapper/TitleWrapper';
import ComputingImagePath from '../../../../../assets/images/computing.jpg';

class TaskEightSubpage extends Component {
    render() {
        return (
            <div>
                <TitleWrapper 
                    imagePath={ComputingImagePath}
                    titleText="Objective Eight"
                    titleDescription="Describe computation with accurate and precise language, notation, or visualizations"
                />
                <CarouselWrapper>
                    <div>
                        <p>Computation is any type of calculation that includes both arithmetic 
                            and non-arithmetic steps. It also follows a well-defined model 
                            understood and described as an algorithm.</p>
                        <p className="noBottomPadding">We can think of a computational problem as a set of possible questions, 
                            each of which has a desired correct answer. We’ll call the information 
                            in the specific question the input value(s), and the desired answer 
                            the output value. The notions of input and output are the most basic 
                            concepts of computation: computation is the process of deriving the 
                            desired output from a given input(s).</p>
                    </div>
                    <p className="noBottomPadding">An algorithm is a specific method for determining an output value from a set 
                        of input values. Assuming the procedure always produces the same output 
                        for a given set of inputs, it then has a strict correspondence between 
                        inputs and outputs.</p>
                    <div>
                        <p>Let's look at an example of a computational problem.</p>
                        <p>Let's assume you want to leave a 20% tip at this hip new restaurant 
                            you finally had time to visit. As a computational problem, this 
                            involves taking a number as input and computing 20% of it. One way 
                            to solve this problem is by doubling the total, then stepping back 
                            a decimal point. e.g. beginning with a $36 bill:</p>
                        <ol>
                            <li>Double $36 = $72</li>
                            <li>$72 becomes $7.2</li>
                        </ol>
                        <p className="noBottomPadding">So a 20% tip becomes $7.20</p>
                    </div>
                    <p className="noBottomPadding">We can think about the procedure as manipulating the “information” in the input. 
                        Consequently, computation is often referred to as information processing. 
                        However, the choice of input and output representation can affect our 
                        choice of algorithm. Hence, Computer Science is also very concerned 
                        with studying the properties of different kinds of representations or 
                        data structures. Part of the reason representation matters is that it 
                        leads to potential simpler procedural solutions that you may have taken 
                        for granted.</p>
                    <div>
                        <p>For example, let's have a child, who hasn't learned multiplication yet, compute the tip.</p>
                        <p className="noBottomPadding">The child might add the number to itself, then step back the decimal 
                            point. This is technically a different procedure, since it 
                            replaces multiplication with addition, but since it 
                            computes the same output, it’s behaviorally equivalent 
                            to the original one.</p>
                    </div>
                </CarouselWrapper>
            </div>
        );
    }
}

export default TaskEightSubpage;
