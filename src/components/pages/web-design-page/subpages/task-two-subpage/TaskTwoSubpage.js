import React, { Component } from 'react';
import './TaskTwoSubpage.css';


class TaskTwoSubpage extends Component {
    render() {
        return (
            <div>
                <h1>Explain the web design and development process</h1>
                <h2>*view this as a rough draft: photos, styles, and revisions are still coming</h2>
                <p>While I'm sure there is an official web design and development process, I find
                    that in the real world (i.e. not classroom), this process is different per person,
                    department, team, and company. This is a process that is constantly being iterated 
                    upon. In fact, at my company, we discuss this process at length in project "retros"
                    to see what can be improved upon with the next project.</p>
                <h2>So what has worked for you?</h2>
                <p>I have noticed a few patterns that seem to have reflected well in the final product.</p>
                <ol>
                    <li>
                        <h3>Identify goals of the project</h3>
                        <p>Work with stakeholders to determine the business goals, user needs, and any other
                            expectations from the project.</p>
                    </li>

                    <li>
                        <h3>Define the scope</h3>
                        <p>Based on the goals of the project, determine deliverables (scope) of the project.</p>
                    </li>

                    <li>
                        <h3>Sitemap and/or wireframe creation</h3>
                        <p>Based on the well-defined scope, determine how the content and features will interrelate</p>
                    </li>

                    <li>
                        <h3>Test wireferames</h3>
                        <p>Every company has different expectations for testing. At my current company, we use tools 
                            that allow potential users to test the interactions and wireframes and give feedback.</p>
                    </li>

                    <li>
                        <h3>Finetune designs</h3>
                        <p>Based on the wireframes and user testing results, finetune the design. The designs for projects 
                            within te site I'm working on now, Craftsy Unlimited, fall within a similar visual style. This 
                            helps maintain the brand and by using already existing components, can speed up development time 
                            and keep the code cleaner.</p>
                    </li>

                    <li>
                        <h3>Have a development kick-off meeting</h3>
                        <p>Review the designs and create tickets for each task involved in the engineering of the site. 
                            Create estimations for the amount of time each task will require to be completed. Adjust scope 
                            if necessary (this could happen earlier on in the process as well) and determine a completion date.</p>
                        <p>Note: sometimes the deadline is determined by external circumstances. In this case, scope may need to 
                            be adjusted in order to get a less robust version of the product out in time. Another solve could 
                            be adding additional engineers and divvying up the tasks differently. Ultimately, at this point, development 
                            is set in motion</p>

                    </li>

                    <li>
                        <h3>Complete tasks, but plan before writing code</h3>
                        <p>Before any code is written, an engineer should first plan out his or her approach to solving the problem. 
                            This is often an algortithm, but can also just be a plan of approach.</p>

                    </li>

                    <li>
                        <h3>Write Tests</h3>
                        <p>At some point in the development process (I often do this last), tests should be written to test the code 
                            you just wrote. This helps when you or someone else modifies the code in the future or builds a feature that 
                            could affect (or even break) the code you just wrote. It helps catch bugs early, hopefully before they are ever 
                            pushed to production.</p>

                    </li>

                    <li>
                        <h3>QA</h3>
                        <p>Before launching the product, project, or feature, it is important to QA. This is sometimes done by a team 
                            separate from the team that writes the code. It can even be done by an external party.</p>

                    </li>

                    <li>
                        <h3>Button everything up and launch</h3>
                        <p>You have addressed any bugs found by QA or yourself and you're ready to launch. Hit the button, seriously! 
                            As engineers, it can be easy to get hung up on perfection, but you've done your due diligence. Now it's 
                            time to enjoy the benefits of all your hard work. Great job!</p>

                    </li>

                    <h2>The proof is in the pudding</h2>
                    <p>But Berlin, where is your proof that you kow how to do this?</p>
                    <p>Well, I wrote up the above list. But I also have implemented similar processes with every project I've done. 
                        Each project has been a little different, but every project requires some version of plan, execute, and test. 
                        Happy designing and devving!</p>
                </ol>
            </div>
        );
    }
}

export default TaskTwoSubpage;
