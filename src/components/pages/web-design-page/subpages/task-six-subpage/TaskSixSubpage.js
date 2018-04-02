import React, { Component } from 'react';
import './TaskSixSubpage.css';


class TaskSixSubpage extends Component {
    render() {
        return (
            <div>
                <h1>Explain accessibility issues in site development</h1>
                <h2>*view this as a rough draft: photos, styles, and revisions are still coming</h2>
                <p>Accissibility is an important consideration in web development and design. Unfortuneately,
                    many sites lack accessibility.</p>
                <p>Accessibility is a set of practices outlined by the Section 508 accessibility standards. 
                    Some websites are required by law to follow these standards and others are heavily encouraged 
                    (though one must be careful when choosing to not comply because legal battles can still ensue).
                    These standards are in place to make sure someone with a hearing or visual impairment can still
                    easily gain access to the information on your website.</p>
                <h3>Ways to improve accessiblity on your website</h3>
                <p>One of the ways one can improve the accissiblity of his or her website is to write the site in
                    semantic HTML. Essentially, each HTML tag describes an order of importance that can be read by a screen-reader.
                    It is also important to use proper color contrast and large enough text for those with visual impairments
                    that don't require the use of an audio device for reading.</p>
                <h3>Real life project example</h3>
                <p>I recently spearheaded a project with my current company to add closed captions on videos that were missing them.
                    Our original product (let's call it Craftsy flagship) has been playing video since around 2010 and does have
                    closed captions. Over the last year or so, we have created a new video-playing site called Craftsy Unlimited. 
                    Craftsy Unlimited's video player is built completely different from Crafty Flagship's video player, and somehow,
                    when the new video player was released, closed captions were never built. The website remained in production
                    without closed captions for over 6 months.</p>
                <p>After highlighting this discrepancy to my product team, I found out that the product team was aware of the missing
                    closed captions but didn't have them anywhere near the top of the list for upcoming projects. With a little
                    passionate persuasion, I was able to convince them that this was a priority. The resources were allocated, and 
                    we were able to add closed captions to our videos a few weeks later. The addition proved to be adventageous with 
                    customers writing positive notes about it to our customer service team</p>
            </div>
        );
    }
}

export default TaskSixSubpage;
