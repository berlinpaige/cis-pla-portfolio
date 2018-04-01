import React from 'react';
import { Link } from 'react-router-dom';
import './CSPrinciplesHeader.css';

const CSPrinciplesHeader = () => (
    <header>
        <nav>
            <ul>
                <div className="navlink">
                    <Link to='/csprinciples'>CS Principles Home</Link>
                </div>
                <div className="navlink">
                    <Link to='/csprinciples/task1'>Subtask One</Link>
                </div>
                <div className="navlink">
                    <Link to='/csprinciples/task2'>Subtask Two</Link>
                </div>
                <div className="navlink">
                    <Link to='/csprinciples/task3'>Subtask Three</Link>
                </div>
                <div className="navlink">
                    <Link to='/csprinciples/task4'>Subtask Four</Link>
                </div>
                <div className="navlink">
                    <Link to='/csprinciples/task5'>Subtask Five</Link>
                </div>
                <div className="navlink">
                    <Link to='/csprinciples/task6'>Subtask Six</Link>
                </div>
                <div className="navlink">
                    <Link to='/csprinciples/task7'>Subtask Seven</Link>
                </div>
                <div className="navlink">
                    <Link to='/csprinciples/task8'>Subtask Eight</Link>
                </div>
                <div className="navlink">
                    <Link to='/csprinciples/task9'>Subtask Nine</Link>
                </div>
                <div className="navlink">
                    <Link to='/csprinciples/task10'>Subtask Ten</Link>
                </div>
            </ul>
        </nav>
    </header>
)

export default CSPrinciplesHeader;
