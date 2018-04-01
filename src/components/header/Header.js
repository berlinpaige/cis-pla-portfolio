import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
    <header>
        <nav>
            <ul>
                <div className="navlink">
                    <Link to='/'>Home</Link>
                </div>
                <div className="navlink">
                    <Link to='/csprinciples'>CS Principles</Link>
                </div>
                <div className="navlink">
                    <Link to='/java'>Java</Link>
                </div>
                <div className="navlink">
                    <Link to='/webdesign'>Web Design</Link>
                </div>
            </ul>
        </nav>
    </header>
)

export default Header
