import React from 'react';
import { Link } from 'react-router-dom';
import './JavaHeader.css';

const JavaHeader = () => (
    <header>
        <nav>
            <ul>
                <div className="navlink">
                    <Link to='/java'>Java Home</Link>
                </div>
                <div className="navlink">
                    <Link to='/java/task1'>Subtask One</Link>
                </div>
                <div className="navlink">
                    <Link to='/java/task2'>Subtask Two</Link>
                </div>
                <div className="navlink">
                    <Link to='/java/task3'>Subtask Three</Link>
                </div>
                <div className="navlink">
                    <Link to='/java/task4'>Subtask Four</Link>
                </div>
                <div className="navlink">
                    <Link to='/java/task5'>Subtask Five</Link>
                </div>
                <div className="navlink">
                    <Link to='/java/task6'>Subtask Six</Link>
                </div>
                <div className="navlink">
                    <Link to='/java/task7'>Subtask Seven</Link>
                </div>
                <div className="navlink">
                    <Link to='/java/task8'>Subtask Eight</Link>
                </div>
                <div className="navlink">
                    <Link to='/java/task9'>Subtask Nine</Link>
                </div>
                <div className="navlink">
                    <Link to='/java/task10'>Subtask Ten</Link>
                </div>
            </ul>
        </nav>
    </header>
)

export default JavaHeader;
