import React, { Component } from 'react';
import './TaskOneSubpage.css';
import ComponentWrapper from '../../ComponentWrapper/ComponentWrapper';

class TaskOneSubpage extends Component {
    render() {
        return (
                <div>
                    <ComponentWrapper wrapperClass="blueWrapper">
                        <h1>Write standards-compliant HTML and CSS web pages using web page and image editing software</h1>
                    </ComponentWrapper>
                    <ComponentWrapper wrapperClass="pinkWrapper">
                        <p>In writing code for any and all of my projects, I strive for standards compliant 
                            HTML and CSS. Through a few years of practice, it is fairly easy for me to write 
                            valid HTML and CSS. I can usually spot syntax errors rather quickly. However, 
                            there are tools that I use to make this process even easier. My code editor has 
                            syntax highlighting to make syntax errors stand out. It also has linting installed 
                            to point out those errors even further. Writing valid code is certainly tricky at 
                            first, but after making many mistakes, it becomes easier and easier to identify 
                            the source of the problem.</p>
                    </ComponentWrapper>
                    <ComponentWrapper wrapperClass="blueWrapper">
                        <p>I also like to focus on good coding practices. All of my websites are made to be 
                            responsive across various screen sizes, devices, and browsers. I strive for 
                            performance by using size-appropriate and optimized images and videos along 
                            with other practices to minify code and load times. It has been important to 
                            every client I have worked for to remain near the top of search results, as well 
                            as making sure the site is easy for the client to update and add content to.</p>
                    </ComponentWrapper>
                    <ComponentWrapper wrapperClass="pinkWrapper">
                        <h3>A project example: </h3>
                        <h2> <a href="https://ryder.com/">Ryder.com Website Link </a></h2>
                    </ComponentWrapper>
                    <ComponentWrapper wrapperClass="blueWrapper">
                        <p>This website has so many moving parts. The client needed many levels of navigation, 
                            several reusable components, and mobile usability for truck drivers on the go. While 
                            creating it, special attention was paid to various browser and device compatibility, 
                            SEO, and accessibility. Many of the visual elements across the site are created with 
                            reusable components that allow the client's content team to add components and 
                            information wherever they need by simply updating content in their CMS. 
                            This project took a considerable amount of time and is still being consistently 
                            improved and iterated upon.</p>
                    </ComponentWrapper>
                </div>
        );
    }
}

export default TaskOneSubpage;
