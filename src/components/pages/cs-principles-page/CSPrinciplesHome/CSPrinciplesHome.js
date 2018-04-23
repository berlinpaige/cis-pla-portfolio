import React, { Component } from 'react';
import './CSPrinciplesHome.css';
import TitleWrapper from '../TitleWrapper/TitleWrapper';
import BinaryImagePath from '../../../../assets/images/binary.jpg';

class CSPrinciplesHome extends Component {
    render() {
        return (
            <div>
                <TitleWrapper 
                    imagePath={BinaryImagePath}
                    titleText="CIS 1001 - CS Principles"
                    titleDescription="Welcome to the CS Principles section of my PLA portfolio site!
                        This is a stylized version of the portfolio document. 
                        Enjoy some color, interactivity, and creativity while evaluating!"
                />
            </div>
        );
    }
}

export default CSPrinciplesHome;
