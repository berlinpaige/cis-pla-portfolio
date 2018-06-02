import React from 'react'
import { Switch, Route } from 'react-router-dom'
// import JavaPage from '../pages/java-page/JavaPage';
// import WebDesignPage from '../pages/web-design-page/WebDesignPage';
// import CSPrinciplesPage from '../pages/cs-principles-page/CSPrinciplesPage';
import HomePage from '../pages/HomePage/HomePage';
import WorkPage from '../pages/work-page/WorkPage.js';
import AboutPage from '../pages/about-page/AboutPage.js';
import ContactPage from '../pages/contact-page/ContactPage.js';
import ResumePage from '../pages/resume-page/ResumePage.js';

import {
    HOME_PATH,
    WORK_PATH,
    ABOUT_PATH,
    CONTACT_PATH,
    RESUME_PATH,
    // JAVA_PATH,
    // CS_PRINCIPLES_PATH,
    // WEB_DESIGN_PATH,
} from '../../constants/navigationConstants.js'

const Main = () => (
    <div>
        <Switch>
            <Route exact path={HOME_PATH.path} component={WorkPage}/>
            <Route exact path={WORK_PATH.path} component={WorkPage}/>
            <Route exact path={ABOUT_PATH.path} component={AboutPage}/>
            <Route exact path={CONTACT_PATH.path} component={ContactPage}/>
            <Route exact path={RESUME_PATH.path} component={ResumePage}/>
            {/*<Route path={JAVA_PATH.path} component={JavaPage}/>
            <Route path={WEB_DESIGN_PATH.path} component={WebDesignPage}/>
            <Route path={CS_PRINCIPLES_PATH.path} component={CSPrinciplesPage}/>*/}
        </Switch>
    </div>
)

export default Main
