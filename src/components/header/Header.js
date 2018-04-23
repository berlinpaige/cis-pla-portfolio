import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

import {MAIN_NAVIGATION_LIST} from '../../constants/navigationConstants.js'

const Header = () => (
    <header className="mainHeader">
        <nav>
            <ul>
                {
                    MAIN_NAVIGATION_LIST.map(({path, linkName}) => (
                        <div className="navlinkMain" key={path}>
                            <NavLink activeStyle={path !== '/' ? { borderBottomColor: '#ac8e9c'} : {}} to={path}>{linkName}</NavLink>
                        </div>
                    ))
                }
            </ul>
        </nav>
    </header>
)

export default Header
