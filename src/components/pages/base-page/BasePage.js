import React from 'react';
import logo from '../../../assets/logo.svg';
import './BasePage.css';
import JavaPage from '../java-page/JavaPage';
import WebDesignPage from '../web-design-page/WebDesignPage';
import CSPrinciplesPage from '../cs-principles-page/CSPrinciplesPage';

export default function BasePage() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React</h1>
            </header>
            <p className="App-intro">
                To get started, edit BasePage and save to reload.
            </p>
            <JavaPage />
            <WebDesignPage />
            <CSPrinciplesPage />
        </div>
    );
}

