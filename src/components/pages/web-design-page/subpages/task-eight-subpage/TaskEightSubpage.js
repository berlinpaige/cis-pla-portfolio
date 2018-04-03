import React, { Component } from 'react';
import './TaskEightSubpage.css';


class TaskEightSubpage extends Component {
    render() {
        return (
            <div>
                <h1>Explain issues of web site management, maintenance and testing</h1>
                <h2>*view this as a rough draft: photos, styles, and revisions are still coming</h2>
                <p>Technology is always moving so quickly. A website or app requires maintenace in order to 
                stay relevant with this fast-paced industry, keeping the business the website or app is representing 
                relavant as well. Website maintanance can include topics of backups, software updates, site speed, 
                search engine optimization, analytics, security, and just general functionality. A small business might 
                use an external party to handle these concerns, a company with a large technology team will often do this 
                internally. The amount of attention required to these areas once the product is live in production ultimately 
                depends on how often new code or content is being introduced.</p>
                <h3>Site Maintenance in my experience</h3>
                <p>I created sites that typically fall into three categries:</p>
                <ul>
                    <li>A campaign site that has no changes once launched</li>
                    <li>A site that has few if any code changes once launched, 
                        but has continues content additions and updates</li>
                    <li>New Product features launched continuously</li>
                </ul>
                <p>In the case of the campaign site that has no changes once launched, this 
                    requires the least amount of maintenance. They often live for a few months for the 
                    length of the campaign, then are removed from the internet forever. Below are some examples of 
                    campaign sites I have built that no longer live on the internet:</p>
                <h3>A campaign site for Hotels.com</h3>
                <h3>A campaign site for Braintree/Tour de tech</h3>
                <p>In the case of the site that has few code changes but many content changes, a little more 
                    maintenance is required. This mostly falls into the categories software updates, speed, SEO, 
                    and security. In this case, there is often a person or team that the client has employed or hired 
                    that maintains these aspects. It can sometimes fall on the person or party who built the site for 
                    a period determined in the working contract. A few sites that I've built that fall into this 
                    category are:</p>
                <h3>Ryder</h3>
                <h3>Herhey Sites</h3>
                <p>The last category is the one that most tech companies fall into. At my current company, we continuously 
                    build and add features to the existing codebase and site. This requires constant maintainance. It also 
                    requires that we stay up to date on the latest technologies and updates. We also always have a queue of tickets 
                    that represent bugs to be fixed. These are prioritized and addressed accordingly. The current sites I work on in 
                    this fashion are: </p>
                <h3>Craftsy.com</h3>
                <h3>Craftsy Unlimited</h3>
                <h3>Website Management</h3>
                <p>I think of this as content management and product management since the technical aspects of managing a website or 
                    app fall into the category of site maintanence.</p>
                <p>Content Management is the adding, removing, and updating of content on the website. This can be done by a non-technical 
                    team. They often use tools built by a technical team to do this. And often the content is uploaded with restraints 
                    to make sure the code that builds the site doesn't break with the added content. Sometimes third party Content Management Tools 
                    are introduced like Wordpress, AEM, or Sitecore. Sometimes this system is built internally as an admin platform. 
                    This is a common practice for sites that are dynamic. Static websites have less need for a CMS as long as the person adding the 
                    content is well versed in web design and development and the implications the addition or change may have</p>
                <p>The Product management team manages the priorities of new features added to the existing site or app. They tend to interpret the 
                    needs of the business and sometimes the user to find feature solutions. Then they orchestrate the correct teams to get the work completed. 
                    They manage the website from a business perspective.</p>
                <h3>Website testing</h3>
                <p>Testing is an important and often heavily debated concept on the engineering team. How many tests do you write? Which tests are most important? 
                    How many tests do you write? WHen do you fire the tests? Why are the tests always broken?</p>
                <p>On my front end team at Craftsy, we write functional tests and enzyme tests. The enzyme tests test the function within the code itself whereas 
                    the functional tests test the user interface of the code. We write both to varying levels of detail and fire both before merging new code to 
                    the production branch and before deploying the code to production. These tests help us pinpoint errors before users ever experience them. 
                    However, sometimes tests fail us. It is not uncommon for a test to not catch an error because the test was not written to test the error-causing 
                    case. When that happens, and a detrimental bug ends up in production. A new test is swiftly written to handle that case. 
                    In general, some testing is better than no testing, and not all testing is foolproof.</p>
            </div>
        );
    }
}

export default TaskEightSubpage;
