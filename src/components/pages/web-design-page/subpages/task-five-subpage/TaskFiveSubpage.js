import React, { Component } from 'react';
import './TaskFiveSubpage.css';
import ComponentWrapper from '../../ComponentWrapper/ComponentWrapper';
import ReactPlayer from 'react-player';
import IBVideoPath from '../../../../../assets/images/iceBreakersNavigation.mov';
import CandiesImagePath from '../../../../../assets/images/candies.jpg';
import IBMenuImagePath from '../../../../../assets/images/iceBreakersMenu.jpg';
import Fade from 'react-reveal/Fade';

class TaskFiveSubpage extends Component {
    render() {
        return (
            <div>
                <ComponentWrapper wrapperClass="blueWrapper" isHeader={true}>
                    <h1>Create page layouts for effective navigation and wayfinding</h1>
                </ComponentWrapper>
                <ComponentWrapper isVerticallyCentered={true} wrapperClass="blueWrapper">
                    <p className="largeText">While creating my PLA portfolio site, I focused on effective navigation. I 
                        knew the user (reviewer) would be most interested in quickly determining 
                        if learning objectives were met. Therefore, I made sure every learning 
                        objective had a direct link and was obviously labeled.</p>
                </ComponentWrapper>
                <ComponentWrapper isVerticallyCentered={true} wrapperClass="pinkWrapper">
                    <div>
                        <p>However, not all website navigation can be a straightforward as this one. 
                        Often, in websites I've created for clients, there is a series of requirements 
                        paired with challenging constraints. I have worked on several websites that 
                        required unique navigation, but I think the following project is a good example 
                        to describe the process of designing the right navigation.</p>
                        <p>Ice Breaker's Website for Hershey: 
                            <a className="externalLink" target="_blank" rel="noopener noreferrer" href="https://www.hersheys.com/icebreakers"> www.hersheys.com/icebreakers</a>
                        </p>
                    </div>
                </ComponentWrapper>
                <Fade>
                    <img className="candyImage" src={CandiesImagePath} alt="visual enhancer" />
                </Fade>
                <ComponentWrapper isVerticallyCentered={true} wrapperClass="blueWrapper">
                    <div>
                        <p>The Challenge:</p>
                        <p>Create a website that contains a lot of information about the various Ice 
                            Breaker’s candies including nutrition information. Make sure the website 
                            conforms to brand standards, legal standards, and allows current advertising 
                            campaign highlighting without being too campaign focused. Do all this while 
                            using Hershey's newly provided and custom CMS and it's accompanying components 
                            (that were still in development at the time). And one more challenge, you can 
                            not alter the HTML or Javascript, all customizations must be done with CSS.</p>
                    </div>
                </ComponentWrapper>
                <ComponentWrapper isVerticallyCentered={true} wrapperClass="pinkWrapper">
                    <div>
                        <p className="largeText">The Solution:</p>
                        <p className="largeText">I had access to a navigation component that I was able to use for the main navigation. 
                            This included the "home", "products", and "about" pages. That section was fairly 
                            straightforward.</p>
                    </div>
                </ComponentWrapper>
                <Fade>
                    <img className="candyImage" src={IBMenuImagePath} alt="visual enhancer" />
                </Fade>
                <ComponentWrapper isVerticallyCentered={true} wrapperClass="blueWrapper">
                    <p className="largeText">Handling navigation to individual products was slightly trickier. I ended up using 
                        an image component that had a clickable wrapper. I utilized a grid component to 
                        house those clickable images and layered that navigation.</p>
                </ComponentWrapper>
                <ComponentWrapper isVerticallyCentered={true} wrapperClass="pinkWrapper">
                    <div>
                        <p>To find the nutrition information of Ice Breakers Ice Cubes Bubble Breeze Gum, 
                            one would navigate as such:</p>
                        <ol>
                            <li>Click on Products from the main navigation menu</li>
                            <li>Click on Ice Breakers Ice Cubes from the Product Page</li>
                            <li>Select Fruity from the tabbed navigation on the Ice Cubes page</li>
                            <li>Select the bubble gum flavor which navigates you to the Ice Breakers Ice Cubes Bubble Breeze Gum page</li>
                        </ol>
                        <p>You can additionally navigate from a direct link: 
                            <a className="externalLink" target="_blank" rel="noopener noreferrer" href="https://www.hersheys.com/icebreakers/en_us/products/ice-cubes-bubble-breeze.html"> Click here</a>
                        </p>
                    </div>
                </ComponentWrapper>
                <ComponentWrapper isVerticallyCentered={true} wrapperClass="blueWrapper">
                    <ReactPlayer url={IBVideoPath} playing loop={true}/>
                </ComponentWrapper>
                <ComponentWrapper isVerticallyCentered={true} wrapperClass="pinkWrapper">
                    <div>
                        <p className="largeText">And finally, I needed to build a way to navigate off-site for additional promotions. 
                            I also built this using components with a clickable wrapper. Currently, this page is 
                            being navigated to via a clickable image poorly disguised as a link on the homepage.</p>
                        <a className="externalLink" target="_blank" rel="noopener noreferrer" href="http://icebreakersunicorn.tumblr.com/awesomeness"> Check it out</a>
                    </div>
                </ComponentWrapper>
                <ComponentWrapper isVerticallyCentered={true} wrapperClass="blueWrapper">
                    <div>
                        <p>But these weren't really great practices:</p>
                        <p>Despite attempting cleaner navigation solutions, I received a lot of pushback from 
                            the client. Brand requirements compromised the user experience. In reality, 
                            navigational elements should be extremely clear. They shouldn't require an 
                            excessive amount of clicking or cause pogo-sticking. Sometimes, even with our 
                            best intentions, we can't make a perfectly navigable website. As long as we can 
                            learn from the process, it was a valuable experience.</p>
                    </div>
                </ComponentWrapper>
            </div>
        );
    }
}

export default TaskFiveSubpage;
