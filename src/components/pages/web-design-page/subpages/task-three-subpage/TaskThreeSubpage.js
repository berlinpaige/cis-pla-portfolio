import React, { Component } from 'react';
import './TaskThreeSubpage.css';
import ComponentWrapper from '../../ComponentWrapper/ComponentWrapper';

class TaskThreeSubpage extends Component {
    render() {
        return (
            <div>
                <ComponentWrapper isVerticallyCentered={true} wrapperClass="blueWrapper" isHeader={true}>
                    <h1>Analyze and evaluate the needs and contexts of businesses and users</h1>
                </ComponentWrapper>
                <ComponentWrapper isVerticallyCentered={true} wrapperClass="pinkWrapper">
                    <p className="largeText">Sometimes it can be difficult to balance the needs of the business with the 
                        needs of users. And sometimes the needs of the business start to transform 
                        the user base, leading to new discoveries about users and their needs.</p>
                </ComponentWrapper>
                <ComponentWrapper isVerticallyCentered={true} wrapperClass="blueWrapper">
                    <div>
                        <p className="largeText">Some first hand experience:</p>
                        <p>My current company, Craftsy, began last year with a huge goal. The previously a 
                            la carte business of serving up class content would be transformed into a 
                            subscription service, providing unlimited class content for a monthly fee. 
                            This endeavour proved to be a huge learning experience about the business and 
                            user needs. </p>
                    </div>
                </ComponentWrapper>
                <ComponentWrapper isVerticallyCentered={true} wrapperClass="pinkWrapper">
                    <p>Through the process, we implemented several strategies for understanding our users. 
                        Firstly, we created an alpha version of our subscription site. We allowed about 
                        300 test users access. We also created a forum for them to communicate with one 
                        another and give feedback. These users were a mix of people who had never heard 
                        of Craftsy and of Craftsy power-users. After allowing them to interact with the 
                        site for a month, our product team reached out to our testers personally by phone 
                        (yes, every one of them), and asked several questions about the experience. In 
                        addition to this qualitative data, we implemented analytics and a few additional 
                        services to collect quantitative data. One of those services recorded user 
                        activity through the DOM and displayed it for our product team like a video.</p>
                </ComponentWrapper>
                <ComponentWrapper isVerticallyCentered={true} wrapperClass="blueWrapper">
                    <p>Via all this research, we discovered that the user for the a la carte business is 
                        generally a completely different user than the users attracted to our subscription 
                        service. The first user is most interested in honing a very specific type of skill, 
                        whereas the second user is a learner interested in discovering inspiring content that 
                        sparks a new passion. Because of this discrepancy, we learned that our business needs 
                        of gaining capitol (I'm not a business person, I think this is a fancy word for money) 
                        would be best served by not replacing old Craftsy with new Craftsy, but by maintaining 
                        both Craftsy sites as a way to accomplish goals.</p>
                </ComponentWrapper>
                <ComponentWrapper isVerticallyCentered={true} wrapperClass="pinkWrapper">
                <p>We are still in the discovery phase of this endeavour, but we are learning a lot 
                    about our users along the way. We are discovering that on the subscription platform, 
                    community is a key area that has significantly less meaning in an a la carte 
                    environment. Therefore, we are investing time and resources to build robust methods 
                    of engagement in the unlimited site. We can then use these community pieces to drive 
                    traffic to additional money-earning areas of the site, and keep users engaged to 
                    promote continued subscriptions and word-of-mouth acquisitions.</p>
                </ComponentWrapper>
            </div>
        );
    }
}

export default TaskThreeSubpage;

