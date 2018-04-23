import React from 'react'
import { Switch, Route } from 'react-router-dom';
import TaskOneSubpage from '../subpages/task-one-subpage/TaskOneSubpage';
import TaskTwoSubpage from '../subpages/task-two-subpage/TaskTwoSubpage';
import TaskThreeSubpage from '../subpages/task-three-subpage/TaskThreeSubpage';
import TaskFourSubpage from '../subpages/task-four-subpage/TaskFourSubpage';
import TaskFiveSubpage from '../subpages/task-five-subpage/TaskFiveSubpage';
import TaskSixSubpage from '../subpages/task-six-subpage/TaskSixSubpage';
import TaskSevenSubpage from '../subpages/task-seven-subpage/TaskSevenSubpage';
import TaskEightSubpage from '../subpages/task-eight-subpage/TaskEightSubpage';
import WebDesignHome from '../WebDesignHome/WebDesignHome';
import {
    WEB_DESIGN_PATH,
    WEB_DESIGN_TASK_ONE_PATH,
    WEB_DESIGN_TASK_TWO_PATH,
    WEB_DESIGN_TASK_THREE_PATH,
    WEB_DESIGN_TASK_FOUR_PATH,
    WEB_DESIGN_TASK_FIVE_PATH,
    WEB_DESIGN_TASK_SIX_PATH,
    WEB_DESIGN_TASK_SEVEN_PATH,
    WEB_DESIGN_TASK_EIGHT_PATH,
} from '../../../../constants/navigationConstants.js'
import FooterImagePath from '../../../../assets/images/macaroons.jpg';
import './WebDesignMain.css';

const WebDesignMain = () => (
    <div>
        <Switch>
            <Route exact path={WEB_DESIGN_PATH.path} component={WebDesignHome}/>
            <Route path={WEB_DESIGN_TASK_ONE_PATH.path} component={TaskOneSubpage}/>
            <Route path={WEB_DESIGN_TASK_TWO_PATH.path} component={TaskTwoSubpage}/>
            <Route path={WEB_DESIGN_TASK_THREE_PATH.path} component={TaskThreeSubpage}/>
            <Route path={WEB_DESIGN_TASK_FOUR_PATH.path} component={TaskFourSubpage}/>
            <Route path={WEB_DESIGN_TASK_FIVE_PATH.path} component={TaskFiveSubpage}/>
            <Route path={WEB_DESIGN_TASK_SIX_PATH.path} component={TaskSixSubpage}/>
            <Route path={WEB_DESIGN_TASK_SEVEN_PATH.path} component={TaskSevenSubpage}/>
            <Route path={WEB_DESIGN_TASK_EIGHT_PATH.path} component={TaskEightSubpage}/>
        </Switch>
        <img className="footerImageWD" src={FooterImagePath} alt="footer" />

    </div>
)

export default WebDesignMain
