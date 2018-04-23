import React, { Component } from 'react';
import './WebDesignHome.css';
import ComponentWrapper from '../ComponentWrapper/ComponentWrapper';

class WebDesignHome extends Component {
    render() {
        return (
            <div>
                <ComponentWrapper wrapperClass="blueWrapper" isHeader={true}>
                    <h1>Add some text here</h1>
                </ComponentWrapper>
            </div>
        );
    }
}

export default WebDesignHome;
