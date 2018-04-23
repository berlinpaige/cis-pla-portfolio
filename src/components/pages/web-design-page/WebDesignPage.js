import React, { Component } from 'react';
import './WebDesignPage.css';
import WebDesignHeader from './web-design-header/WebDesignHeader';
import WebDesignMain from './web-design-main/WebDesignMain';
import {websiteData} from '../../../assets/data/websiteData.js'

console.log('websiteData', websiteData);

class WebDesignPage extends Component {
    render() {
        return (
            <div className="webDesignPage">
                <WebDesignHeader />
                <WebDesignMain />
            </div>
        );
    }
}

export default WebDesignPage;
