import React, { Component } from 'react';
import './TaskFiveSubpage.css';


class TaskFiveSubpage extends Component {
    render() {
        return (
            <div>
                <h1>Create page layouts for effective navigation and wayfinding</h1>
                <h2>*view this as a rough draft: photos, styles, and revisions are still coming</h2>
                <p>While creating this portfolio site, I focused on effective navigation. I knew
                    the user (reviewer) would be most interested in quickly determining if 
                    learning objectives were met. Therefore, I made sure every learning objective
                    had a direct link and was obviously labeled.</p>
                <p>However, not all website navigation can be a straightforward as this one. Often,
                    in websites I've created for clients, there is a series of requirements paired 
                    with challenging constraints. I have worked on serveral websites that required 
                    unique navigation, but I think the following project is a good example to describe 
                    the process of designing the right navigation.</p> 
                <h2>Ice Breaker's Website for Hershey</h2>
                <a href="https://www.hersheys.com/icebreakers">Ice Breaker's website Link</a>
                <h3>The Challenge</h3>
                <p>Create a website that contains a lot of information about the various ice breaker
                    candies including nutrition information. Make sure the website conforms to brand
                    standards, legal standards, and allows current advertising campaign highlighting 
                    without being too campaign focused. Do all this while using Hershey's newly provided 
                    and custom CMS and it's accompanying components (that were still in development at the time). 
                    And one more challenge, you can not alter the HTML or Javascript. All customizations
                    must be done with CSS</p>
                <h3>The Solution</h3>
                <p>I had access to a navigation component the I was able to use for the main navigation.
                    This included the "home", "products", and "about" pages. That section was fairly straighforward.</p>
                <p>Handling navigation to individual products was slightly trickier. I ended up using an image component
                    that had a clickable wrapper. I utilized a grid component to house those clickable images and layered
                    that navigation.</p>
                <p>To find the nutrition information of Ice Breakers Ice Cubes Bubble Breeze Gum, one would navigate as such:</p>
                <ol>
                    <li>Click on Products from the main navigation menu</li>
                    <li>Click on Ice Breakers Ice Cubes from the Product Page</li>
                    <li>Select Fruity from the tabbed navigation on the Ice Cubes page</li>
                    <li>Select the bubble gum flavor which navigates you to the Ice Breakers Ice Cubes Bubble Breeze Gum page</li>
                </ol>
                <p>
                    You can additionally navigate from a direct link.
                    <a href="https://www.hersheys.com/icebreakers/en_us/products/ice-cubes-bubble-breeze.html"> see here</a>
                </p>

                <p>
                    And finally, I needed to build a way to navigate off site for additional promotions. I also built this using
                    components with a clickable wrapper. Currently, <a href="http://icebreakersunicorn.tumblr.com/awesomeness">this page </a>
                    is being navigated to via a clickable image poorly disguised as a link on the homepage.
                </p>
                <h3>But these weren't really great practices</h3>
                <p>Despite attempting cleaner navigation solutions, I recieved a lot of pushback from the client.
                    Brand requirements compromised the user experience. In reality, navigational elements should
                    be extrememly clear. They shouldn't require an excessive amount of clicking or cause pogo-sticking.
                    Sometimes, even with our best intentions, we can't make a perfectly navigable website. As long as we
                    can learn from the process, it was a valuable experience.</p>
            </div>
        );
    }
}

export default TaskFiveSubpage;
