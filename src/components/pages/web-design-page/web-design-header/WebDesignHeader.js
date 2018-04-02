import React from 'react';
import { Link } from 'react-router-dom';
import './WebDesignHeader.css';
import {WEB_DESIGN_NAVIGATION_LIST} from '../../../../constants/navigationConstants.js';

const WebDesignHeader = () => (
    <header>
        <nav>
            <ul>
                {
                    WEB_DESIGN_NAVIGATION_LIST.map(({path, linkName}) => (
                        <div className="navlink" key={path}>
                            <Link to={path}>{linkName}</Link>
                        </div>
                    ))
                }
            </ul>
        </nav>
    </header>
)

export default WebDesignHeader;
