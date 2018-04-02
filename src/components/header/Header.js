import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

import {MAIN_NAVIGATION_LIST} from '../../constants/navigationConstants.js'

const Header = () => (
    <header>
        <nav>
            <ul>
                {
                    MAIN_NAVIGATION_LIST.map(({path, linkName}) => (
                        <div className="navlink" key={path}>
                            <Link to={path}>{linkName}</Link>
                        </div>
                    ))
                }
            </ul>
        </nav>
    </header>
)

export default Header
