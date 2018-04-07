import React, { Component } from 'react';
import './TaskFourSubpage.css';


class TaskFourSubpage extends Component {
    render() {
        return (
            <div>
                <h1>Explain how data, information, and knowledge are represented for computational use</h1>
                <p>Digital data is represented in a mthematical number system called Binary.</p>
                <p>Binary has two digits, 0 and 1. These digits represent two states: off and on respectively.</p>
                <p>One binary digit (0 or 1) is a bit</p>
                <p>Bits can be grouped together into larger chunks to represent data. For example, 0110 is four bits. 
                    Computers tend to use 8-bit chunks of data called bytes as the basic unit of data. A byte is 
                    implemented with 8 computer switches. </p>
                <h2>Describe Binary numbers here</h2>
                <p>Anything that is done on a computer is understood by the computer in binary, even code!</p>
            </div>
        );
    }
}

export default TaskFourSubpage;
