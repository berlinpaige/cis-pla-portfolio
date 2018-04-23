import React, { Component } from 'react';
import './CSPrinciplesPage.css';
import CSPrinciplesHeader from './cs-principles-header/CSPrinciplesHeader';
import CSPrinciplesMain from './cs-principles-main/CSPrinciplesMain';

class CSPrinciplesPage extends Component {
    render() {
        return (
            <div className="csPrinciplesPage">
                <CSPrinciplesHeader />
                <CSPrinciplesMain />
            </div>
        );
    }
}

export default CSPrinciplesPage;
