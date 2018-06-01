import React, { Component } from 'react';
import './AboutPage.css';
import AboutHeader from './about-header/AboutHeader';
import AboutMain from './about-main/AboutMain.js';



class AboutPage extends Component {
    render() {
        return (
            <div className="aboutPage">
                <AboutHeader />
                <AboutMain />
            </div>
        );
    }
}

export default AboutPage;
