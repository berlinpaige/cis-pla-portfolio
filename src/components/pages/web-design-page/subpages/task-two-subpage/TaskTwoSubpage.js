import React, { Component } from 'react';
import './TaskTwoSubpage.css';
import ComponentWrapper from '../../ComponentWrapper/ComponentWrapper';

class TaskTwoSubpage extends Component {
    render() {
        return (
            <div>
                <ComponentWrapper wrapperClass="blueWrapper">
                    <h1>Explain the web design and development process</h1>
                </ComponentWrapper>
                <ComponentWrapper wrapperClass="pinkWrapper">
                    <p>While I'm sure there is an official web design and development process, I 
                        find that in the real world (i.e. not the classroom), this process is different 
                        per person, department, team, and company. This is a process that is constantly 
                        being iterated upon. In fact, at my company, we discuss this process at length 
                        in project "retros" to see what can be improved upon with the next project.</p>
                </ComponentWrapper>
                <ComponentWrapper wrapperClass="blueWrapper">
                <p>At my company, I have noticed a few patterns that seem to have reflected well in 
                    the final product.</p>
                </ComponentWrapper>
                <ol>
                    <ComponentWrapper wrapperClass="pinkWrapper">
                        <li>
                            <p className="listItemTitle">
                                Identify goals of the project
                            </p>
                            <p>
                                Work with stakeholders to determine the business goals, user needs, 
                                and any other expectations from the project.
                            </p>
                        </li>
                    </ComponentWrapper>
                    <ComponentWrapper wrapperClass="blueWrapper">
                        <li>
                            <p className="listItemTitle">
                                Define the scope
                            </p>
                            <p>
                                Based on the goals of the project, determine deliverables (scope) of the project.
                            </p>
                        </li>
                    </ComponentWrapper>
                    <ComponentWrapper wrapperClass="pinkWrapper">
                        <li>
                            <p className="listItemTitle">
                                Sitemap and/or wireframe creation.
                            </p>
                            <p>
                                Based on the well-defined scope, determine how the content and features 
                                will interrelate.
                            </p>
                        </li>
                    </ComponentWrapper>
                    <ComponentWrapper wrapperClass="blueWrapper">
                        <li>
                            <p className="listItemTitle">
                                Test wireframes
                            </p>
                            <p>
                                Every company has different expectations for testing. At my current 
                                company, we use tools that allow potential users to test the interactions 
                                and wireframes and give feedback.
                            </p>
                        </li>
                    </ComponentWrapper>
                    <ComponentWrapper wrapperClass="pinkWrapper">
                        <li>
                            <p className="listItemTitle">
                                Finetune designs
                            </p>
                            <p>
                                Based on the wireframes and user testing results, finetune the design. 
                                The designs for projects within the site I'm working on now, Craftsy 
                                Unlimited, fall within a similar visual style. This helps maintain the 
                                brand and by using already existing components, can speed up development 
                                time and keep the code cleaner.
                            </p>
                        </li>
                    </ComponentWrapper>                    
                    <ComponentWrapper wrapperClass="blueWrapper">
                        <li>
                            <p className="listItemTitle">
                                Have a development kick-off meeting
                            </p>
                            <p>
                                Review the designs and create tickets for each task involved in the 
                                engineering of the site. Create estimations for the amount of time each 
                                task will require to be completed. Adjust scope if necessary (this could 
                                happen earlier on in the process as well) and determine a completion date.
                            </p>
                            <p>
                                Note: sometimes the deadline is determined by external circumstances. 
                                In this case, scope may need to be adjusted in order to get a less robust 
                                version of the product out in time. Another solve could be adding 
                                additional engineers and divvying up the tasks differently. Ultimately, 
                                at this point, development is set in motion.
                            </p>
                        </li>
                    </ComponentWrapper>
                    <ComponentWrapper wrapperClass="pinkWrapper">
                        <li>
                            <p className="listItemTitle">
                                Complete tasks, but plan before writing code
                            </p>
                            <p>
                                Before any code is written, an engineer should first plan out his or 
                                her approach to solving the problem. This is often an algorithm, 
                                but can also be just a plan of approach.
                            </p>
                        </li>
                    </ComponentWrapper>
                    <ComponentWrapper wrapperClass="blueWrapper">
                        <li>
                            <p className="listItemTitle">
                                Write Tests
                            </p>
                            <p>
                                At some point in the development process (I often do this last), tests 
                                should be written to test the code you just wrote. This helps when you 
                                or someone else modifies the code in the future or builds a feature that 
                                could affect (or even break) the code you just wrote. It helps catch bugs 
                                early, hopefully before they are ever pushed to production.
                            </p>
                        </li>
                    </ComponentWrapper>
                    <ComponentWrapper wrapperClass="pinkWrapper">
                        <li>
                            <p className="listItemTitle">
                                QA
                            </p>
                            <p>
                                Before launching the product, project, or feature, it is important to QA. 
                                This is sometimes done by a team separate from the team that writes the 
                                code. It can even be done by an external party.
                            </p>
                        </li>
                    </ComponentWrapper>
                    <ComponentWrapper wrapperClass="blueWrapper">
                        <li>
                            <p className="listItemTitle">
                                Button everything up and launch
                            </p>
                            <p>
                                You have addressed any bugs found by QA or yourself and you're ready to 
                                launch. Hit the button, seriously! As engineers, it can be easy to get hung 
                                up on perfection, but you've done your due diligence. Now it's time to enjoy 
                                the benefits of all your hard work. Great job!
                            </p>
                        </li>
                    </ComponentWrapper>
                </ol>
                <ComponentWrapper wrapperClass="pinkWrapper">
                    <p>
                        Throughout many of the steps in this process, there is constant iteration. 
                        Often, a design isn’t approved right away and the code is rarely bug-free on the 
                        first try. Each step requires creating something, getting feedback, then improving 
                        that creation based on the collected feedback. Sometimes, the process may even 
                        require backing up a few steps if something is discovered to be missing further 
                        down the pipeline.
                    </p>
                </ComponentWrapper>
            </div>
        );
    }
}

export default TaskTwoSubpage;
