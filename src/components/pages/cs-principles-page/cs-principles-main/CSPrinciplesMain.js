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
import TaskNineSubpage from '../subpages/task-nine-subpage/TaskNineSubpage';
import TaskTenSubpage from '../subpages/task-ten-subpage/TaskTenSubpage';

import {
    CS_PRINCIPLES_TASK_ONE_PATH,
    CS_PRINCIPLES_TASK_TWO_PATH,
    CS_PRINCIPLES_TASK_THREE_PATH,
    CS_PRINCIPLES_TASK_FOUR_PATH,
    CS_PRINCIPLES_TASK_FIVE_PATH,
    CS_PRINCIPLES_TASK_SIX_PATH,
    CS_PRINCIPLES_TASK_SEVEN_PATH,
    CS_PRINCIPLES_TASK_EIGHT_PATH,
    CS_PRINCIPLES_TASK_NINE_PATH,
    CS_PRINCIPLES_TASK_TEN_PATH,
} from '../../../../constants/navigationConstants.js'


const CSPrinciplesMain = () => (
    <div>
        <Switch>
            <Route path={CS_PRINCIPLES_TASK_ONE_PATH.path} component={TaskOneSubpage}/>
            <Route path={CS_PRINCIPLES_TASK_TWO_PATH.path} component={TaskTwoSubpage}/>
            <Route path={CS_PRINCIPLES_TASK_THREE_PATH.path} component={TaskThreeSubpage}/>
            <Route path={CS_PRINCIPLES_TASK_FOUR_PATH.path} component={TaskFourSubpage}/>
            <Route path={CS_PRINCIPLES_TASK_FIVE_PATH.path} component={TaskFiveSubpage}/>
            <Route path={CS_PRINCIPLES_TASK_SIX_PATH.path} component={TaskSixSubpage}/>
            <Route path={CS_PRINCIPLES_TASK_SEVEN_PATH.path} component={TaskSevenSubpage}/>
            <Route path={CS_PRINCIPLES_TASK_EIGHT_PATH.path} component={TaskEightSubpage}/>
            <Route path={CS_PRINCIPLES_TASK_NINE_PATH.path} component={TaskNineSubpage}/>
            <Route path={CS_PRINCIPLES_TASK_TEN_PATH.path} component={TaskTenSubpage}/>
        </Switch>
    </div>
)

export default CSPrinciplesMain
