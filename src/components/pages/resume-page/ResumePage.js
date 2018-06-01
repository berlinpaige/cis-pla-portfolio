import React, { Component } from 'react';
import './ResumePage.css';
import ResumeHeader from './resume-header/ResumeHeader';
import ResumeMain from './resume-main/ResumeMain.js';



class ResumePage extends Component {
    render() {
        return (
            <div className="ResumePage">
                <ResumeHeader />
                <ResumeMain />
            </div>
        );
    }
}

export default ResumePage;
