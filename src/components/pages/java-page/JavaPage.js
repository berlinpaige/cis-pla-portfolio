import React, { Component } from 'react';
import './JavaPage.css';
import { Switch, Route, Link } from 'react-router-dom';
import JavaHeader from './java-header/JavaHeader';
import JavaMain from './java-main/JavaMain';

class JavaPage extends Component {
    render() {
        return (
            <div>
                <JavaHeader />
                <JavaMain />
            </div>
        );
    }
}

export default JavaPage;
