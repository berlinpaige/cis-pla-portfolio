import React, { Component } from 'react';
import './TaskEightSubpage.css';
import ComponentWrapper from '../../ComponentWrapper/ComponentWrapper';

class TaskEightSubpage extends Component {
    render() {
        return (
            <div>
                <ComponentWrapper wrapperClass="blueWrapper" isHeader={true}>
                    <h1>Explain issues of web site management, maintenance and testing</h1>
                </ComponentWrapper>
                <ComponentWrapper isVerticallyCentered={true} wrapperClass="pinkWrapper">
                    <p>Technology is always moving so quickly. A website or app requires maintenance 
                        in order to stay relevant with this fast-paced industry, keeping the business 
                        that the website or app is representing relevant as well. Website maintenance 
                        can include topics of backups, software updates, site speed, search engine 
                        optimization, analytics, security, and just general functionality. A small 
                        business might use an external party to handle these concerns, a company 
                        with a large technology team will often do this internally. The amount of attention 
                        required to these areas once the product is live in production ultimately depends 
                        on how often new code or content is being introduced.</p>
                </ComponentWrapper>
                <ComponentWrapper isVerticallyCentered={true} wrapperClass="blueWrapper">
                    <div>
                        <p className="largeText">I created sites that typically fall into three categories:</p>
                        <ul>
                            <li>
                                <p>A campaign site that has no changes once launched</p>
                            </li>
                            <li>
                                <p>A site that has few if any code changes once launched, but has 
                                    continues content additions and updates</p>
                            </li>
                            <li>
                                <p>New Product features launched continuously</p>
                            </li>
                        </ul>
                    </div>
                </ComponentWrapper>
                <ComponentWrapper isVerticallyCentered={true} wrapperClass="pinkWrapper">
                    <p>In the case of the campaign site that has no changes once launched, 
                        this requires the least amount of maintenance. They often live for a 
                        few months for the length of the campaign, then are removed from the 
                        internet forever. Some examples of sites that I have built that no longer 
                        live on the internet are a campaign site for Hotels.com and a campaign site 
                        for Braintree/Tour de Tech.</p>
                </ComponentWrapper>
                <ComponentWrapper isVerticallyCentered={true} wrapperClass="blueWrapper">
                    <p>In the case of a site that has few code changes but many content changes, 
                        a little more maintenance is required. This mostly falls into the categories of 
                        software updates, speed, SEO, and security. In this case, there is often a person 
                        or team that the client has employed or hired that maintains these aspects. It 
                        can sometimes fall on the person or party who built the site for a period 
                        determined in the working contract. A few sites that I've built that fall into 
                        this category are Ryder and Hershey sites.</p>
                </ComponentWrapper>
                <ComponentWrapper isVerticallyCentered={true} wrapperClass="pinkWrapper">
                    <p>The last category is the one that most tech companies fall into. At my current 
                        company, we continuously build and add features to the existing codebase and site. 
                        This requires constant maintenance. It also requires that we stay up to date on the 
                        latest technologies and updates. We also always have a queue of tickets that represent 
                        bugs to be fixed. These are prioritized and addressed accordingly. The current sites 
                        I work on in this fashion are craftsy.com and unlimited.craftsy.com.</p>
                </ComponentWrapper>
                <ComponentWrapper isVerticallyCentered={true} wrapperClass="blueWrapper">
                    <div>
                        <p className="largeText">Website Management:</p>
                        <p className="largeText">I think of this as content management and product management since the technical 
                            aspects of managing a website or app fall into the category of site maintenance.</p>
                    </div>
                </ComponentWrapper>
                <ComponentWrapper isVerticallyCentered={true} wrapperClass="pinkWrapper">
                    <p>Content Management is the adding, removing, and updating of content on the website. 
                        This can be done by a non-technical team. They often use tools built by a technical 
                        team to do this. And often the content is uploaded with restraints to make sure the code 
                        that builds the site doesn't break with the added content. Sometimes third party Content 
                        Management Tools are introduced like Wordpress, AEM, or Sitecore. Sometimes this system 
                        is built internally as an admin platform. This is a common practice for sites that are 
                        dynamic. Static websites have less need for a CMS as long as the person adding the 
                        content is well versed in web design and development and the implications the addition 
                        or change may have.</p>
                </ComponentWrapper>
                <ComponentWrapper isVerticallyCentered={true} wrapperClass="blueWrapper">
                    <p>The Product management team manages the priorities of new features added to the existing 
                        site or app. They tend to interpret the needs of the business and sometimes the user to find 
                        feature solutions. Then they orchestrate the correct teams to get the work completed. They manage 
                        the website from a business perspective.</p>
                </ComponentWrapper>
                <ComponentWrapper isVerticallyCentered={true} wrapperClass="pinkWrapper">
                    <div>
                        <p className="largeText">Website testing:</p>
                        <p className="largeText">Testing is an important and often heavily debated concept on the engineering team. 
                            How many tests do you write? Which tests are most important? When do you fire the 
                            tests? Why are the tests always broken?</p>
                    </div>
                </ComponentWrapper>
                <ComponentWrapper isVerticallyCentered={true} wrapperClass="blueWrapper">
                    <p>On my front end team at Craftsy, we write functional tests and enzyme tests. 
                        The enzyme tests test the function within the code itself whereas the functional 
                        tests test the user interface of the code. We write both to varying levels of 
                        detail and fire both before merging new code to the production branch and before 
                        deploying the code to production. These tests help us pinpoint errors before users 
                        ever experience them. However, sometimes tests fail us. It is not uncommon for a 
                        test to not catch an error because the test was not written to test the error-causing 
                        case. When that happens, and a detrimental bug ends up in production, a new test is 
                        swiftly written to handle that case. In general, some testing is better than no testing, 
                        and not all testing is foolproof.</p>
                </ComponentWrapper>
            </div>
        );
    }
}

export default TaskEightSubpage;
