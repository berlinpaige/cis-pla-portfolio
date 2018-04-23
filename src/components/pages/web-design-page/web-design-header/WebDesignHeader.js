import React from 'react';
import { NavLink } from 'react-router-dom';
import './WebDesignHeader.css';
import {WEB_DESIGN_NAVIGATION_LIST} from '../../../../constants/navigationConstants.js';
import HeaderImagePath from '../../../../assets/images/cupcakes.jpg';

const WebDesignHeader = () => (
    <header className="headerWrapper">
        <nav className="navigationWrapper">
            <ul>
                {
                    WEB_DESIGN_NAVIGATION_LIST.map(({path, linkName}) => {
                        return (
                            <li className="navlinkWebDesign" key={path}>
                                <NavLink activeStyle={{ borderBottomColor: 'rgba(102,51,102, 1)', fontWeight: 'bold' }} to={path}>{linkName}</NavLink>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
        <img className="headerImageWD" src={HeaderImagePath} alt="header" />
    </header>
)

export default WebDesignHeader;
