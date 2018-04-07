import React, { Component } from 'react';
import './TaskTenSubpage.css';


class TaskTenSubpage extends Component {
    render() {
        return (
            <div>
                <h1>Collaborate with others in solving computational problems and producing artifacts</h1>
                <p>During my daily work, I am always collaborating with others to solve computational problems 
                    and produce artifacts.</p>
                <p>An example of this in my current role is our company's website. To create this site, several 
                    people and teams have come together to create a functioning product used by tens of thousands 
                    of people daily.</p>
                <p>Let's take a peek at our membership site experience (because this is the site I've completed the 
                    most work on). <a href="https://unlimited.craftsy.com/">https://unlimited.craftsy.com/</a></p>
                <p>note: if you want to interact with the site, but you don't want to register, open up the dev tools 
                    and remove the registration modal takeover from the DOM. *this is a secret passage, so don't share 
                    it with anyone :)</p>
                <p></p>
                <h2>The home page</h2>
                <p>The home page alone has been a collaboration across many teams and people. The page is built using a 
                    component structure that allows for the content team to mix and match the way content is displayed and 
                    interacted with based on their goals. Each of the sections on the homepage are called widgets and they 
                    are added and removed freely to tell the right story. The content within each of these widgets is created 
                    by the photo and creative teams. Then the content is chosen and uploaded via the content and marketing teams. 
                    The widgets themselves were a collaboration effort between the platform and front end teams. These widgets 
                    also exist on apps, which requires a collaboration with the front end engineers familiar with the app release 
                    process. Before any code goes into production, it is reviewed by the QA team, tests are written to reduce 
                    code volatility and people comb through the experience looking for strange user interactions. Each section of 
                    this homepage has been owned by different product teams. Growth owns the registration widget, Discovery owns 
                    the search section, menu, and subsequent navigation, and Engagement owns the widgets and feeds. Nearly every 
                    engineer, every product team, and every functional team across the company has had a hand in creating this home 
                    page experience.</p>
            </div>
        );
    }
}

export default TaskTenSubpage;
