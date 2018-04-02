import React from 'react';
import { Link } from 'react-router-dom';
import './JavaHeader.css';
import {JAVA_NAVIGATION_LIST} from '../../../../constants/navigationConstants.js';

const JavaHeader = () => (
    <header>
        <nav>
            <ul>
                {
                    JAVA_NAVIGATION_LIST.map(({path, linkName}) => (
                        <div className="navlink" key={path}>
                            <Link to={path}>{linkName}</Link>
                        </div>
                    ))
                }
            </ul>
        </nav>
    </header>
)

export default JavaHeader;
