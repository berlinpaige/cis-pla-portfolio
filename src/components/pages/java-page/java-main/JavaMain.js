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


const JavaMain = () => (
    <div>
        <Switch>
            <Route path='/java/task1' component={TaskOneSubpage}/>
            <Route path='/java/task2' component={TaskTwoSubpage}/>
            <Route path='/java/task3' component={TaskThreeSubpage}/>
            <Route path='/java/task4' component={TaskFourSubpage}/>
            <Route path='/java/task5' component={TaskFiveSubpage}/>
            <Route path='/java/task6' component={TaskSixSubpage}/>
            <Route path='/java/task7' component={TaskSevenSubpage}/>
            <Route path='/java/task8' component={TaskEightSubpage}/>
            <Route path='/java/task9' component={TaskNineSubpage}/>
            <Route path='/java/task10' component={TaskTenSubpage}/>
        </Switch>
    </div>
)

export default JavaMain
