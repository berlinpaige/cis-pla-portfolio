import React from 'react'
import { Switch, Route } from 'react-router-dom'
import JavaPage from '../pages/java-page/JavaPage';
import WebDesignPage from '../pages/web-design-page/WebDesignPage';
import CSPrinciplesPage from '../pages/cs-principles-page/CSPrinciplesPage';

import {
    JAVA_PATH,
    CS_PRINCIPLES_PATH,
    WEB_DESIGN_PATH,
} from '../../constants/navigationConstants.js'

const Main = () => (
    <div>
        <Switch>
            <Route path={JAVA_PATH.path} component={JavaPage}/>
            <Route path={WEB_DESIGN_PATH.path} component={WebDesignPage}/>
            <Route path={CS_PRINCIPLES_PATH.path} component={CSPrinciplesPage}/>
        </Switch>
    </div>
)

export default Main
