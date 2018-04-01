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


const WebDesignMain = () => (
    <div>
        <Switch>
            <Route path='/webdesign/task1' component={TaskOneSubpage}/>
            <Route path='/webdesign/task2' component={TaskTwoSubpage}/>
            <Route path='/webdesign/task3' component={TaskThreeSubpage}/>
            <Route path='/webdesign/task4' component={TaskFourSubpage}/>
            <Route path='/webdesign/task5' component={TaskFiveSubpage}/>
            <Route path='/webdesign/task6' component={TaskSixSubpage}/>
            <Route path='/webdesign/task7' component={TaskSevenSubpage}/>
            <Route path='/webdesign/task8' component={TaskEightSubpage}/>
        </Switch>
    </div>
)

export default WebDesignMain
