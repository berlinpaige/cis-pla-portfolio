import React from 'react';
import './ComponentWrapper.css';
import Fade from 'react-reveal/Fade';

const ComponentWrapper = ({children, wrapperClass}) => (
    <Fade>
        <div className={wrapperClass}>
            <div className="contentWrapper">
                <div className="card">
                    {children}
                </div>
            </div>
        </div>
    </Fade>
)

export default ComponentWrapper;
