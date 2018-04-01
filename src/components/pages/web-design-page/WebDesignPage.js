import React, { Component } from 'react';
import './WebDesignPage.css';
import WebDesignHeader from './web-design-header/WebDesignHeader';
import WebDesignMain from './web-design-main/WebDesignMain';

class WebDesignPage extends Component {
    render() {
        return (
            <div>
                <WebDesignHeader />
                <WebDesignMain />
            </div>
        );
    }
}

export default WebDesignPage;
