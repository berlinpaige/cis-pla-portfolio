import React from 'react'
import './ContactMain.css';

const ContactMain = () => (
    <div>
        <h1>ContactPage</h1>
        <form method="POST" action="https://formspree.io/berlinsohn@gmail.com">
            <input type="email" name="email" placeholder="Your email" />
            <textarea name="message" placeholder="Your message"></textarea>
            <button type="submit">Send</button>
        </form>
    </div>
)

export default ContactMain;
