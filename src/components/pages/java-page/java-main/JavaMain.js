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
    JAVA_TASK_ONE_PATH,
    JAVA_TASK_TWO_PATH,
    JAVA_TASK_THREE_PATH,
    JAVA_TASK_FOUR_PATH,
    JAVA_TASK_FIVE_PATH,
    JAVA_TASK_SIX_PATH,
    JAVA_TASK_SEVEN_PATH,
    JAVA_TASK_EIGHT_PATH,
    JAVA_TASK_NINE_PATH,
    JAVA_TASK_TEN_PATH,
} from '../../../../constants/navigationConstants.js'


const JavaMain = () => (
    <div>
        <Switch>
            <Route path={JAVA_TASK_ONE_PATH.path} component={TaskOneSubpage}/>
            <Route path={JAVA_TASK_TWO_PATH.path} component={TaskTwoSubpage}/>
            <Route path={JAVA_TASK_THREE_PATH.path} component={TaskThreeSubpage}/>
            <Route path={JAVA_TASK_FOUR_PATH.path} component={TaskFourSubpage}/>
            <Route path={JAVA_TASK_FIVE_PATH.path} component={TaskFiveSubpage}/>
            <Route path={JAVA_TASK_SIX_PATH.path} component={TaskSixSubpage}/>
            <Route path={JAVA_TASK_SEVEN_PATH.path} component={TaskSevenSubpage}/>
            <Route path={JAVA_TASK_EIGHT_PATH.path} component={TaskEightSubpage}/>
            <Route path={JAVA_TASK_NINE_PATH.path} component={TaskNineSubpage}/>
            <Route path={JAVA_TASK_TEN_PATH.path} component={TaskTenSubpage}/>
        </Switch>
    </div>
)

export default JavaMain
