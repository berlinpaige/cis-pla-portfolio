import React, { Component } from 'react';
import './TaskOneSubpage.css';
import CarouselWrapper from '../../CarouselWrapper/CarouselWrapper';
import TitleWrapper from '../../TitleWrapper/TitleWrapper';
import BusinessImagePath from '../../../../../assets/images/business.jpg';

class TaskOneSubpage extends Component {
    render() {
        return (
            <div>
                <TitleWrapper 
                    imagePath={BusinessImagePath}
                    titleText="Objective One"
                    titleDescription="Identify impacts of computing on society and innovation"
                />
                <CarouselWrapper>
                    <p>Computing impacts communication, interaction, and cognition. 
                        Access to all types of information facilitates the identification 
                        of problems, development of solutions, and circulation of results. 
                        Data is accessible for new discoveries to be made, online trends 
                        predict consumer and societal behaviors, sensor networks create 
                        new connections between physical items and "smart" systems. With 
                        computing, the possibilities for humans seems endless with a 
                        future more connected and the seemingly impossible, possible.</p>
                    <p>My ability to take this course is a product of computing innovation. 
                        I live 1,000 miles away from the facilitating institution of this course, 
                        however, I can access information, gain knowledge, and communicate my 
                        understanding all within the realm of the virtual version of this course.</p>
                    <p>The company I work for, Craftsy, makes money by providing online 
                        courses in skillful areas of crafting. The courses are provided 
                        online, yet allow instructor interaction, a platform for note-taking, 
                        and the ability to pause, rewind, slow-down, and various other controls 
                        to facilitate the way in which the content is consumed. This allows many 
                        advantages over traditional classroom learning.</p>
                    <p>While the positive impacts are easy for me to identify as a technology 
                        enthusiast, computing also has negative impacts on society. Children 
                        and their cognitive development in a high tech world remains a hot topic 
                        for researchers. It has been reasoned that the multiple stimuli that 
                            technology provides is leading to distraction and decreased memory 
                        in children. It is also argued that children interacting with technology 
                        too frequently have less ability to be imaginative or think deeply about 
                        new material. And in general, more technology use often leads to less 
                        physical activity and deteriorating health.</p>
                    <p>Technology is changing the world. It is amazing to be part of the innovation, 
                        actively contributing to the advances rather than sitting on the sidelines 
                        watching the computing world pass me by.</p>
                </CarouselWrapper>
            </div>
        );
    }
}

export default TaskOneSubpage;
