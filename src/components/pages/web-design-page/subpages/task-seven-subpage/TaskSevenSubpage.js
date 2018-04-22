import React, { Component } from 'react';
import './TaskSevenSubpage.css';
import ComponentWrapper from '../../ComponentWrapper/ComponentWrapper';

class TaskSevenSubpage extends Component {
    render() {
        return (
            <div>
                <ComponentWrapper wrapperClass="blueWrapper">
                    <h1>Create a web site for a client that meets their needs</h1>
                </ComponentWrapper>
                <ComponentWrapper wrapperClass="pinkWrapper">
                    <p>I have created many sites based on client needs throughout my career.</p>
                    <p>One of my favorite examples of this was a simple site that I created for 
                    American Airlines.</p>
                </ComponentWrapper>
                <ComponentWrapper wrapperClass="blueWrapper">
                    <p>The task: create a site for The Bonnie Award before the winner is announced:</p>
                    <p>I like this example because the task and the website are simple. The website 
                        required basic information and basic navigation, which allowed for the content 
                        to be presented in an aesthetically pleasing, yet elegant way.</p>
                </ComponentWrapper>
                <ComponentWrapper wrapperClass="pinkWrapper">
                    <p>This website needed a section to play video, a description of the award, 
                        and some information about the award inspiration and sponsors. The result was a 
                        clean HTML and CSS (no additional libraries needed) site with a few simple links 
                        and subtle animation.</p>
                </ComponentWrapper>
                <ComponentWrapper wrapperClass="blueWrapper">
                    <p>In this particular project, working with the customer was simple. The scope was 
                        thoroughly outlined and little back-and-forth communication was necessary. I 
                        have had alternative experiences, however. When working with Hershey on their 
                        candy sites, a high amount of collaboration was required. We had several phone 
                        conferences debating the design of each site before the development phase. 
                        In those experiences, it was important to present a strong case for the design 
                        choices but to also keep an open mind to their feedback and needs. When someone 
                        is paying you for your services, one must strike a balance between the client’s 
                        requests and your solutions. Ultimately, they hired you because you are the expert, 
                        not them.</p>
                </ComponentWrapper>
            </div>
        );
    }
}

export default TaskSevenSubpage;
