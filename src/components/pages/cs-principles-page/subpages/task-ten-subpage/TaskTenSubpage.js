import React, { Component } from 'react';
import './TaskTenSubpage.css';
import CarouselWrapper from '../../CarouselWrapper/CarouselWrapper';
import TitleWrapper from '../../TitleWrapper/TitleWrapper';
import CollaborateImagePath from '../../../../../assets/images/collaborate.jpg';

class TaskTenSubpage extends Component {
    render() {
        return (
            <div>
                <TitleWrapper 
                    imagePath={CollaborateImagePath}
                    titleText="Objective Ten"
                    titleDescription="Collaborate with others in solving computational problems and producing artifacts"
                />
                <CarouselWrapper>
                    <div>
                        <p>During my daily work, I am always collaborating with others to solve 
                            computational problems and produce artifacts.</p>
                        <p className="noBottomPadding">An example of this in my current role is our company's website. 
                            To create this site, several people and teams have come together 
                            to create a functioning product used by tens of thousands of 
                            people daily.</p>
                    </div>
                    <p>Let's take a peek at our membership site experience (because this is 
                        the site I've completed the most work on): <a className="embeddedLink" href="https://unlimited.craftsy.com/">unlimited.craftsy.com</a></p>
                    <p className="noBottomPadding">The home page alone has been a collaboration across many 
                        teams and people. The page is built using a component 
                        structure that allows for the content team to mix and 
                        match the way content is displayed and interacted with 
                        based on their goals. Each of the sections on the 
                        homepage are called widgets and they are added and 
                        removed freely to tell the right story. The content within 
                        each of these widgets is created by the photo and creative 
                        teams. Then the content is chosen and uploaded via the content 
                        and marketing teams. </p>
                    <p className="noBottomPadding">The widgets themselves were a collaboration 
                            effort between the platform and front end teams. These widgets 
                            also exist on apps, which requires a collaboration with the front 
                            end engineers familiar with the app release process. Before any 
                            code goes into production, it is reviewed by the QA team, tests 
                            are written to reduce code volatility and people comb through 
                            the experience looking for strange user interactions.</p>
                    <p className="noBottomPadding">Each section of this homepage has been owned by different product teams. 
                            Growth owns the registration widget, Discovery owns the search 
                            section, menu, and subsequent navigation, and Engagement owns 
                            the widgets and feeds. Nearly every engineer, every product team, 
                            and every functional team across the company has had a hand in 
                            creating this home page experience.</p>
                    <p className="noBottomPadding">I serve as the front end representative on the engagement team. 
                        Our product team consists of a front end engineer (myself), a 
                        UX designer, a platform engineer, and a product manager. The 
                        product manager and UX designer first collaborate on a new 
                        feature. Then the platform engineer and I are brought in to 
                        help iron out the details. We hold a concepting meeting to 
                        take a look at what the product and UX teams have come up with, 
                        then we add input to determine technical feasibility. We also 
                        ask thought-provoking questions to make sure the product team 
                        and UX team have thought of every important scenario.</p>
                    <p className="noBottomPadding">From there, the feature concept is further developed, then we hold a 
                        pre-kick-off meeting with the team. In this meeting, final 
                        mocks are described and the platform engineer and I determine 
                        what additional engineering resources we’ll need to complete 
                        the project on time. Soon after, we hold a kick-off meeting. 
                        Here, the project is broken into tasks and assigned to an engineer 
                        accordingly. The engineers give estimations on task completion 
                        timelines. The project manager records the results of that meeting 
                        and manages the project from then until the delivery date.</p>
                    <p className="noBottomPadding">During the development period, we use various forms of communication. 
                        We have a chat channel designated for project-specific communications, 
                        we hold stand-up meetings every other day in which we describe our 
                        progress individually and address any blockers, and we communicate 
                        individually with one another as necessary. I find that I communicate 
                        with the platform engineer and UX engineer directly daily. Once the 
                        feature is “dev-complete”, we communicate with the QA team. They use 
                        their resources to test the feature and promote it to production when 
                        everything gets the green light.</p>
                    <p className="noBottomPadding">Despite the many meetings involved in collaborating on a product 
                        or feature, the discussions in each meeting always prove to be 
                        useful. Having open communication allows for each of us to get 
                        answers quickly, saving time by reducing the need to backtrack 
                        or minimizing completion of unnecessary work.</p>
                    <p className="noBottomPadding">We end every feature launch with a retro. In this meeting, we 
                        discuss ways in which the project went well, what didn’t go well, 
                        and what we can do better next time. These discussions typically 
                        address the process more so than the product. It is an opportunity 
                        for everyone to reflect on his or her role and become a better 
                        teammate.</p>
                </CarouselWrapper>
            </div>
        );
    }
}

export default TaskTenSubpage;
