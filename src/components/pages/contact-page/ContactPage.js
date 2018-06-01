import React, { Component } from 'react';
import './ContactPage.css';
import ContactHeader from './contact-header/ContactHeader';
import ContactMain from './contact-main/ContactMain.js';



class ContactPage extends Component {
    render() {
        return (
            <div className="ContactPage">
                <ContactHeader />
                <ContactMain />
            </div>
        );
    }
}

export default ContactPage;
