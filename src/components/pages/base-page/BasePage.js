import React from 'react';
import './BasePage.css';
import Header from '../../header/Header';
import Main from '../../main/Main';
import { BrowserRouter } from 'react-router-dom';

export default function BasePage() {
    return (
        <div className="App">
            <BrowserRouter>
                <div>
                    <Header />
                    <Main />
                </div>
            </BrowserRouter>
        </div>
    );
}

