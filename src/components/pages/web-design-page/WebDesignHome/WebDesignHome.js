import React, { Component } from 'react';
import './WebDesignHome.css';
import ComponentWrapper from '../ComponentWrapper/ComponentWrapper';

class WebDesignHome extends Component {
    render() {
        return (
            <div>
                <ComponentWrapper wrapperClass="blueWrapper" isHeader={true}>
                    <div>
                        <h1>CIS 4041 - Web Design</h1>
                        <p>Welcome to the Web Design section of my PLA portfolio site!
                            This is a stylized version of the portfolio document. 
                            Enjoy some color, interactivity, and creativity while evaluating!</p>
                    </div>
                </ComponentWrapper>
            </div>
        );
    }
}

export default WebDesignHome;
