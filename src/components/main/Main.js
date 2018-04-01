import React from 'react'
import { Switch, Route } from 'react-router-dom'
import JavaPage from '../pages/java-page/JavaPage';
import WebDesignPage from '../pages/web-design-page/WebDesignPage';
import CSPrinciplesPage from '../pages/cs-principles-page/CSPrinciplesPage';

const Main = () => (
    <div>
        <Switch>
            <Route path='/java' component={JavaPage}/>
            <Route path='/webdesign' component={WebDesignPage}/>
            <Route path='/csprinciples' component={CSPrinciplesPage}/>
        </Switch>
    </div>
)

export default Main
