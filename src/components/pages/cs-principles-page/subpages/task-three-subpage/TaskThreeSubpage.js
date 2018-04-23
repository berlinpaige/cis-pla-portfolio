import React, { Component } from 'react';
import './TaskThreeSubpage.css';
import CarouselWrapper from '../../CarouselWrapper/CarouselWrapper';
import TitleWrapper from '../../TitleWrapper/TitleWrapper';
import AlgorithmImagePath from '../../../../../assets/images/algorithm.jpg';

class TaskThreeSubpage extends Component {
    render() {
        return (
            <div>
                <TitleWrapper 
                    imagePath={AlgorithmImagePath}
                    titleText="Objective Three"
                    titleDescription="Use appropriate algorithmic and information management principles"
                />
                <CarouselWrapper>
                    <p>Algorithms are patterns for completing a task in an efficient way.</p>
                    <p>I am using a very simple version of an algorithm within the navigation 
                        for my portfolio site. The CS Principles Page is made up of ten 
                        pieces of sub-navigation. One way I could have written this 
                        navigation would have looked like this: </p>
                    <div>
                        <pre className="smallerText isSmallScreen">                    
{`
<div className="navlink">
    <Link to='/csprinciples'>
        CS Principles Home
    </Link>
</div>
<div className="navlink">
    <Link to='/csprinciples/learning-objective-1'>
        Subtask One
    </Link>
</div>
<div className="navlink">
    <Link to='/csprinciples/learning-objective-2'>
        Subtask Two
    </Link>
</div>
<div className="navlink">
    <Link to='/csprinciples/learning-objective-3'>
        Subtask Three
    </Link>
</div>
... an on ...
`}
                        </pre>
                        <pre className="smallerText isLargeScreen">                    
{`
<div className="navlink">
    <Link to='/csprinciples'>CS Principles Home</Link>
</div>
<div className="navlink">
    <Link to='/csprinciples/learning-objective-1'>Subtask One</Link>
</div>
<div className="navlink">
    <Link to='/csprinciples/learning-objective-2'>Subtask Two</Link>
</div>
<div className="navlink">
    <Link to='/csprinciples/learning-objective-3'>Subtask Three</Link>
</div>
... an on ...
`}
                        </pre>
                    </div>
                    <div>
                        <p>pretty repetitive, right?</p>
                        <p>So, a solution following algorithmic principles (specifically iteration) looks more like this:</p>
                    </div>
                    <pre className="smallerText">
{`
CS_PRINCIPLES_NAVIGATION_LIST.map(
    ({path, linkName}) => (
    <div className="navlink" key={path}>
        <Link to={path}>{linkName}</Link>
    </div>
))
`}
                    </pre>
                    <p>In the new example, we are looping through an array of objects that 
                        contain the path and the linkName and outputting a Javascript XML 
                        (JSX) representation of the desired HTML links. This pattern 
                        helped me complete the task without typing out each link and 
                        it's wrapper individually</p>
                    <p>Information management principles include avoiding collecting 
                        duplicate information, share and re-use of information, ensuring 
                        information is complete and accurate, supporting access to 
                        information, and safeguarding information.</p>
                    <p>My PLA portfolio website is used to display information as 
                        completely and accurately as possible. It is a simple example 
                        though, so let me dive briefly into projects that require collecting 
                        and using information from others.</p>
                    <p>At my current company, we collect information from our users. That 
                        information includes names, passwords, email addresses, credit card 
                        information, etc. We have systems in place to reduce the number of 
                        times we need to ask for that information, to keep that information 
                        safe, and to allow users to access and remove the information they 
                        have provided. Additionally, we strive to make sure the information 
                        we provide our users is current and accurate.</p>
                </CarouselWrapper>
            </div>
        );
    }
}

export default TaskThreeSubpage;
