import React from 'react'
import './ContactMain.css';

const ContactMain = () => (
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
)

export default ContactMain;
