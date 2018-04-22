import React from 'react';
import { Link } from 'react-router-dom';
import './WebDesignHeader.css';
import {WEB_DESIGN_NAVIGATION_LIST} from '../../../../constants/navigationConstants.js';
import HeaderImagePath from '../../../../assets/images/macaroons.jpg';

const WebDesignHeader = () => (
    <header>
        <img className="headerImageWD" src={HeaderImagePath} alt="header" />
        <nav>
            <ul>
                {
                    WEB_DESIGN_NAVIGATION_LIST.map(({path, linkName}) => (
                        <div className="navlinkWebDesign" key={path}>
                            <Link to={path}>{linkName}</Link>
                        </div>
                    ))
                }
            </ul>
        </nav>
    </header>
)

export default WebDesignHeader;
