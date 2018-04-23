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
                    titleText="Add a real title here"
                    titleDescription="Add real text here"
                />
            </div>
        );
    }
}

export default CSPrinciplesHome;
