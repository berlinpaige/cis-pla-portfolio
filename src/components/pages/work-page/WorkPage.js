import React, { Component } from 'react';
import './WorkPage.css';
import WorkHeader from './work-header/WorkHeader';
import WorkMain from './work-main/WorkMain.js';



class WorkPage extends Component {
    render() {
        return (
            <div className="workPage">
                <WorkHeader />
                <WorkMain />
            </div>
        );
    }
}

export default WorkPage;
