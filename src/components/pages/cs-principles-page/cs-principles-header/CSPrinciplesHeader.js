import React from 'react';
import { Link } from 'react-router-dom';
import './CSPrinciplesHeader.css';
import {CS_PRINCIPLES_NAVIGATION_LIST} from '../../../../constants/navigationConstants.js';

const CSPrinciplesHeader = () => (
    <header>
        <nav>
            <ul>
                {
                    CS_PRINCIPLES_NAVIGATION_LIST.map(({path, linkName}) => (
                        <div className="navlink" key={path}>
                            <Link to={path}>{linkName}</Link>
                        </div>
                    ))
                }
            </ul>
        </nav>
    </header>
)

export default CSPrinciplesHeader;
