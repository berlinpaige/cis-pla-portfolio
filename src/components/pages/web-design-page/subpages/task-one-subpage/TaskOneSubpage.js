import React, { Component } from 'react';
import './TaskOneSubpage.css';


class TaskOneSubpage extends Component {
    render() {
        return (
            <div>
                <h1>Write standards-compliant HTML and CSS web pages using web page and image editing software</h1>
                <h2>*view this as a rough draft: photos, styles, and revisions are still coming</h2>
                <p>In writing code for any and all of my projects, I strive for standards compliant HTML and CSS. 
                    All my websites are made to be responsive across various screen sizes, devices, and browsers. 
                    I strive for performance by using size-appropriate and optimized images and videos along with other 
                    practices to minify code and load times. It has been important to every client I have worked for to 
                    remain near the top of search results, as well as making sure the site is easy for the client to update
                    and add content to.</p>
                <h3>A project example: </h3>
                <h2> <a href="https://ryder.com/">Ryder.com Website Link </a></h2>
                <p> This website has so many moving parts. The client needed many levels of navigation, several reusable 
                    components, and mobile usability for truck drivers on the go. While creating it, special attention was paid
                    to various browser and device compatibility, SEO, and accessibility. Many of the visual elements across the 
                    site are created with reusable components that allow the client's content team to add components and information 
                    wherever they need by simply updating content in their CMS. This project took a considerable amount of time 
                    and is still being consistently improved and interated upon.</p>

            </div>
        );
    }
}

export default TaskOneSubpage;
