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


const CSPrinciplesMain = () => (
    <div>
        <Switch>
            <Route path='/csprinciples/task1' component={TaskOneSubpage}/>
            <Route path='/csprinciples/task2' component={TaskTwoSubpage}/>
            <Route path='/csprinciples/task3' component={TaskThreeSubpage}/>
            <Route path='/csprinciples/task4' component={TaskFourSubpage}/>
            <Route path='/csprinciples/task5' component={TaskFiveSubpage}/>
            <Route path='/csprinciples/task6' component={TaskSixSubpage}/>
            <Route path='/csprinciples/task7' component={TaskSevenSubpage}/>
            <Route path='/csprinciples/task8' component={TaskEightSubpage}/>
            <Route path='/csprinciples/task9' component={TaskNineSubpage}/>
            <Route path='/csprinciples/task10' component={TaskTenSubpage}/>
        </Switch>
    </div>
)

export default CSPrinciplesMain
