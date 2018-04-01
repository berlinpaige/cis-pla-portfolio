import React from 'react';
import { Link } from 'react-router-dom';
import './WebDesignHeader.css';

const WebDesignHeader = () => (
    <header>
        <nav>
            <ul>
                <div className="navlink">
                    <Link to='/webdesign'>Web design Home</Link>
                </div>
                <div className="navlink">
                    <Link to='/webdesign/task1'>Subtask One</Link>
                </div>
                <div className="navlink">
                    <Link to='/webdesign/task2'>Subtask Two</Link>
                </div>
                <div className="navlink">
                    <Link to='/webdesign/task3'>Subtask Three</Link>
                </div>
                <div className="navlink">
                    <Link to='/webdesign/task4'>Subtask Four</Link>
                </div>
                <div className="navlink">
                    <Link to='/webdesign/task5'>Subtask Five</Link>
                </div>
                <div className="navlink">
                    <Link to='/webdesign/task6'>Subtask Six</Link>
                </div>
                <div className="navlink">
                    <Link to='/webdesign/task7'>Subtask Seven</Link>
                </div>
                <div className="navlink">
                    <Link to='/webdesign/task8'>Subtask Eight</Link>
                </div>
            </ul>
        </nav>
    </header>
)

export default WebDesignHeader;
