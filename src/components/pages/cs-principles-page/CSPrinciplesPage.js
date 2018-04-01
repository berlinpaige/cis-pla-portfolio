import React, { Component } from 'react';
import './CSPrinciplesPage.css';
import { Switch, Route, Link } from 'react-router-dom';
import CSPrinciplesHeader from './cs-principles-header/CSPrinciplesHeader';
import CSPrinciplesMain from './cs-principles-main/CSPrinciplesMain';

class CSPrinciplesPage extends Component {
    render() {
        return (
            <div>
                <CSPrinciplesHeader />
                <CSPrinciplesMain />
            </div>
        );
    }
}

export default CSPrinciplesPage;
