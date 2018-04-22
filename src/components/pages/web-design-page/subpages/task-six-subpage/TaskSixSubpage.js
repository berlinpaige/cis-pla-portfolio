import React, { Component } from 'react';
import './TaskSixSubpage.css';
import ComponentWrapper from '../../ComponentWrapper/ComponentWrapper';

class TaskSixSubpage extends Component {
    render() {
        return (
            <div>
                <ComponentWrapper wrapperClass="blueWrapper">
                    <h1>Explain accessibility issues in site development</h1>
                </ComponentWrapper>
                <ComponentWrapper wrapperClass="pinkWrapper">
                    <p>Accessibility is an important consideration in web development and design. 
                        Unfortunately, many sites lack accessibility.</p>
                    <p>Accessibility is a set of practices outlined by the Section 508 accessibility 
                        standards. Some websites are required by law to follow these standards and 
                        others are heavily encouraged (though one must be careful when choosing to 
                            not comply because legal battles can still ensue). These standards are 
                        in place to make sure someone with a hearing or visual impairment can still 
                        easily gain access to the information on your website.</p>
                </ComponentWrapper>
                <ComponentWrapper wrapperClass="blueWrapper">
                    <p>Ways to improve accessibility on your website:</p>
                    <p>One of the ways one can improve the accessibility of his or her website is to 
                        write the site in semantic HTML. Essentially, each HTML tag describes an order 
                        of importance that can be read by a screen-reader. It is also important to use 
                        proper color contrast and large enough text for those with visual impairments 
                        that don't require the use of an audio device for reading.</p>
                </ComponentWrapper>
                <ComponentWrapper wrapperClass="pinkWrapper">
                    <p>One area that gets tricky is images. Some culprits of this are logos, text not 
                        available in a web font, or text positioned in unique ways on images. Images 
                        aren’t read by screen readers, so when information is provided by image instead 
                        of text, that information can get lost to someone with a vision impairment. 
                        Some solutions for this are using alt tags that describe the image’s importance 
                        or just using styled text in place of an image. It is important for the engineer 
                        to understand this concept and push back on designers or clients that want to 
                        use images where text can be added.</p>
                </ComponentWrapper>
                <ComponentWrapper wrapperClass="blueWrapper">
                    <p>Real life project example:</p>
                    <p>I recently spearheaded a project with my current company to add closed captions on 
                        videos that were missing them. Our original product (let's call it Craftsy flagship) 
                        has been playing video since around 2010 and does have closed captions. Over the 
                        last year or so, we have created a new video-playing site called Craftsy Unlimited. 
                        Craftsy Unlimited's video player is built completely different from Crafty Flagship's 
                        video player, and somehow, when the new video player was released, closed captions 
                        were never built. The website remained in production without closed captions for 
                        over 6 months.</p>
                </ComponentWrapper>
                <ComponentWrapper wrapperClass="pinkWrapper">
                    <p>After highlighting this discrepancy to my product team, I found out that the product 
                        team was aware of the missing closed captions but didn't have them anywhere near the 
                        top of the list for upcoming projects. With a little passionate persuasion, I was able 
                        to convince them that this was a priority. The resources were allocated, and we were 
                        able to add closed captions to our videos a few weeks later. The addition proved to be 
                        advantageous with customers writing positive notes about it to our customer service 
                        team.</p>
                </ComponentWrapper>
            </div>
        );
    }
}

export default TaskSixSubpage;
