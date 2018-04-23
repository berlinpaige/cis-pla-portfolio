import React from 'react';
import { NavLink } from 'react-router-dom';
import './CSPrinciplesHeader.css';
import {CS_PRINCIPLES_NAVIGATION_LIST} from '../../../../constants/navigationConstants.js';

class CSPrinciplesHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {menuIsOpen: false};
    }

    toggleMenu = () => {
        const {menuIsOpen} = this.state;
        this.setState({menuIsOpen: !menuIsOpen});
    }

    render() {
        const {menuIsOpen} = this.state;
        return (
            <header className="csPrinHeader">
                <h1 className="CSPrinciplesHeaderText" onClick={this.toggleMenu}>MENU</h1>
                <nav className={menuIsOpen ? 'visibleCSPrinciplesMenu' : 'hiddenCSPrinciplesMenu'}>
                    <ul>
                        {
                            CS_PRINCIPLES_NAVIGATION_LIST.map(({path, linkName}) => (
                                <div className="navlinkCSPrinciples" key={path}>
                                    <NavLink activeStyle={{borderBottomColor: 'transparent', fontSize: '1.5rem'}} to={path}>{linkName}</NavLink>
                                </div>
                            ))
                        }
                    </ul>
                </nav>
            </header>
        );
    }
}

export default CSPrinciplesHeader;
