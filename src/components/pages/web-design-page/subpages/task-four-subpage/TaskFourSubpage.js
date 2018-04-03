import React, { Component } from 'react';
import './TaskFourSubpage.css';


class TaskFourSubpage extends Component {
    render() {
        return (
            <div>
                <h1>Organize content based on user mental models</h1>
                <h2>*view this as a rough draft: photos, styles, and revisions are still coming</h2>
                <p>When we create products of technology, it is often important to translate constructs that users are used to in real life 
                    into it's mimiced form on screen. A common use of this in technology is tabbed navigation. Tabbed navigation 
                    mimics the tabbed folders in offices and provides context to the user that there are layers of organized information on the page.</p>
                <p>You can see websites leveraging mental models in many places, buttons, icons, and animations can be some examples. Also, as technology has 
                    become more prevalent in our lives, we begin to notice users are building mental models off of other abstracted mental models. The hamburger 
                    menu is a good example of this. While often regarded as a confusing mobile navigation option by user experience experts, it is a construct that 
                    has become engrained in the minds of the average mobile-browsing user. A mental model of an intially incorrect mental model.</p>
                <h2>Mental models in practice</h2>
                <p>There is a project I'd like to share as it relates to this topic. While this mental model is 
                    not as straightforward as something like tabs, the following project uses an interesting construct 
                    to grab attention while also serving as background noise: a screensaver.</p>
                <p>The project's goal was to mimic a screensaver while providing interesting content to employees and office 
                    guests. It was to be displayed in the lobby of each office on a large screen and played continuously 
                    throughout the work day. The content was submitted by employees with optional captions. Each piece of content 
                    displayed the submitter's home office. The piece of technology served as a way to bring people across multiple 
                    international offices together.</p>
                <p>To mimic the mental model of a screensaver, I created animation that played in a cyclical fashion. The sliding 
                    and image-growing animation give the movement that we know and love from screen savers. Additionally, the direction 
                    from which the images slide on are chosen at random. Just like the screensavers of our youth did.</p>
                <p>This was a fun mental model to play with since it has a feeling of nostalgia associated with it and isn't a boring 
                    organizational construct like most mental models we aim to recreate are.</p>
                <h3>Since this product is built to only plays on office servers, enjoy this screen video of the final product</h3>
                <h1>put the video hereeee :)</h1>
            </div>
        );
    }
}

export default TaskFourSubpage;
