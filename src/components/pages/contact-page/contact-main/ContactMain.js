import React from 'react'
import './ContactMain.css';
import Jumping from '../../../../assets/images/jumping.jpg';

const ContactMain = () => (
    <div className="contactMain">
        <div className="leftPanel">
            <h2>hi. </h2>
            <h4>Have a question? Want to grab coffee? Have a cool opportunity to share?</h4>
            <h4>Send a message. I'd love to hear from you!</h4>
            <div className="formWrapper">
                <form method="POST" action="https://formspree.io/berlinsohn@gmail.com">
                    <div className="inputWrapper">
                        <label className="formLabel" for="email">Your Email Address</label>
                        <input className="formInput" type="email" name="email" />
                    </div>
                    <div className="inputWrapper">
                        <label className="formLabel" for="_subject">Subject</label>
                        <input className="formInput" type="subject" name="_subject" />
                    </div>
                    <div className="inputWrapper">
                        <label className="formLabel" for="message">Message</label>
                        <textarea className="formInput" name="message"></textarea>
                    </div>
                    <div>
                        <button className="button" type="submit">Send</button>
                    </div>
                </form>
            </div>
        </div>
        <div className="rightPanel">
        <div className="socialIcons">
            <div id="linkedinIcon">
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/berlinsohn/"><i class="fa fa-linkedin-square fa-3x"></i></a>
            </div>
            <div id="twitterIcon">
                <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/BerlinSohn"><i class="fa fa-twitter-square fa-3x"></i></a>
            </div>
            <div id="githubIcon">
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/berlinpaige"><i class="fa fa-github-square fa-3x"></i></a>
            </div>
        </div>
        <img className="contactImage" src={Jumping} alt="visual enhancer" />
        <div>
            <h4 className="contactImageText">Off to check your message!</h4>
        </div>
        </div>
    </div>
)

export default ContactMain;
