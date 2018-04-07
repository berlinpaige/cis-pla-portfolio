import React, { Component } from 'react';
import './TaskThreeSubpage.css';


class TaskThreeSubpage extends Component {
    render() {
        return (
            <div>
                <h1>Use appropriate algorithmic and information management principles</h1>
                <p>Algorithms are patterns for completing a task in an efficient way</p>
                <p>I am using a very simple version of an algorithm within the navigation 
                    for this site. The CS Principles Page (that you are currently on) is made up 
                    of ten pieces of sub-navigation. One way I could have written this navigation 
                    would have looked like this: </p>
                <pre>                    
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
<div className="navlink">
    <Link to='/csprinciples/learning-objective-4'>Subtask Four</Link>
</div>
<div className="navlink">
    <Link to='/csprinciples/learning-objective-5'>Subtask Five</Link>
</div>
<div className="navlink">
    <Link to='/csprinciples/learning-objective-6'>Subtask Six</Link>
</div>
<div className="navlink">
    <Link to='/csprinciples/learning-objective-7'>Subtask Seven</Link>
</div>
<div className="navlink">
    <Link to='/csprinciples/learning-objective-8'>Subtask Eight</Link>
</div>
<div className="navlink">
    <Link to='/csprinciples/learning-objective-9'>Subtask Nine</Link>
</div>
<div className="navlink">
    <Link to='/csprinciples/learning-objective-10'>Subtask Ten</Link>
</div>
`}
                </pre>
                <p>pretty repetitive, right?</p>
                <p>So a solution following algorithmic principles looks more like this:</p>
                <pre>
{`
CS_PRINCIPLES_NAVIGATION_LIST.map(({path, linkName}) => (
    <div className="navlink" key={path}>
        <Link to={path}>{linkName}</Link>
    </div>
))
`}
                </pre>
                <p>In the new example, we are looping through an array of objects that contain 
                    the path and the linkName and outputting a JSX representation of the desired 
                    HTML links. This pattern helped me complete the task without typing out each 
                    link and it's wrapper individually.</p>
                <h2>Information management principles</h2>
                <p>Information management principles include avoiding collecting duplicate information, 
                    share and re-use of information, ensuring information is complete and accurate, supporting 
                    access to information, and safeguarding information.</p>
                <p>This website is used to display information as completely and accurately as possible. 
                    It is a simple example though, so let me dive briefly into projects that require collecting 
                    and using information from others.</p>
                <p>At my current company, we collect information from our users. That information includes names, 
                    passwords, email addresses, credit card information, etc. We have systems in place to reduce 
                    the number of times we need to ask for that information, to keep that information safe, and to allow 
                    users to access and remove the information they have provided. Additionally, we strive to make sure 
                    the information we provide our users is current and accurate.</p>
            </div>
        );
    }
}

export default TaskThreeSubpage;
