import React, { Component } from 'react';
import './TaskFourSubpage.css';
import ComponentWrapper from '../../ComponentWrapper/ComponentWrapper';
import ReactPlayer from 'react-player';
import YoNowVideoPath from '../../../../../assets/images/YoNowShortened.mov';

class TaskFourSubpage extends Component {
    render() {
        return (
            <div>
                <ComponentWrapper isVerticallyCentered={true} wrapperClass="blueWrapper" isHeader={true}>
                    <h1>Organize content based on user mental models</h1>
                </ComponentWrapper>
                <ComponentWrapper isVerticallyCentered={true} wrapperClass="pinkWrapper">
                    <p className="largeText">When we create products of technology, it is often important to translate constructs 
                        that users are used to in real life into its mimicked form on screen. A common use 
                        of this in technology is tabbed navigation. Tabbed navigation mimics the tabbed 
                        folders in offices and provides context to the user that there are layers of 
                        organized information on the page.</p>
                </ComponentWrapper>
                <ComponentWrapper isVerticallyCentered={true} wrapperClass="blueWrapper">
                    <p>It is important to establish a website organizational structure that uses common 
                        architecture to match your users’ expectations. Some common themes are sequences, 
                        hierarchies, and webs. Sequences mimic the structure of books, magazines, and other 
                        print media. This ordering could be chronological, general to specific, alphabetical, 
                        etc. In a hierarchical structure, the site is a set of pages with a series of subpages; 
                        this is probably the most common website navigation structure. Web navigation harnesses 
                        the concept of associative thought and free-flow ideas, allowing users to jump around 
                        based on their interests.</p>
                </ComponentWrapper>
                <ComponentWrapper isVerticallyCentered={true} wrapperClass="pinkWrapper">
                    <p>You can see websites leveraging mental models in many places: buttons, icons, and 
                        animations can be some examples. Also, as technology has become more prevalent in 
                        our lives, we begin to notice users are building mental models off of other 
                        abstracted mental models. The hamburger menu is a good example of this. While often 
                        regarded as a confusing mobile navigation option by user experience experts, it is a 
                        construct that has become ingrained in the minds of the average mobile-browsing user, 
                        a mental model of an initially incorrect mental model.</p>
                </ComponentWrapper>
                <ComponentWrapper isVerticallyCentered={true} wrapperClass="blueWrapper">
                    <div>
                        <p className="largeText">Mental models in practice:</p>
                        <p>There is a project I'd like to share as it relates to this topic. While this 
                            mental model is not as straightforward as something like tabs, the following 
                            project uses an interesting construct to grab attention while also serving as 
                            background noise: a screensaver.</p>
                    </div>
                </ComponentWrapper>
                <ComponentWrapper isVerticallyCentered={true} wrapperClass="pinkWrapper">
                    <p>The project's goal was to mimic a screensaver while providing interesting content 
                        to employees and office guests. It was to be displayed in the lobby of each office 
                        on a large screen and played continuously throughout the work day. The content was 
                        submitted by employees with optional captions. Each piece of content displayed the 
                        submitter's home office. The piece of technology served as a way to bring people 
                        across multiple international offices together.</p>
                </ComponentWrapper>
                <ComponentWrapper isVerticallyCentered={true} wrapperClass="blueWrapper">
                    <ReactPlayer url={YoNowVideoPath} playing loop={true}/>
                </ComponentWrapper>
                <ComponentWrapper isVerticallyCentered={true} wrapperClass="pinkWrapper">
                    <p>To mimic the mental model of a screensaver, I created animation that played in a 
                        cyclical fashion. The sliding and image-growing animation give the movement that we 
                        know and love from screen savers. Additionally, the direction from which the images 
                        slide onto the viewing area are chosen at random, just like the screensavers of our 
                        youth.</p>
                </ComponentWrapper>
                <ComponentWrapper isVerticallyCentered={true} wrapperClass="blueWrapper">
                    <p className="largeText">This was a fun mental model to play with since it has a feeling of nostalgia associated 
                        with it and isn't a boring organizational construct like most mental models we aim to 
                        recreate are.</p>
                </ComponentWrapper>
            </div>

        );
    }
}

export default TaskFourSubpage;
