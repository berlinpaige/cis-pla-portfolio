import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
    <header>
        <nav>
            <ul>
                <Link to='/csprinciples'>CS Principles</Link>
                <Link to='/java'>Java</Link>
                <Link to='/webdesign'>Web Design</Link>
            </ul>
        </nav>
    </header>
)

export default Header
