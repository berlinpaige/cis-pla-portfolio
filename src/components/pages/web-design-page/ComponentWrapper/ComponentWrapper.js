import React from 'react';
import './ComponentWrapper.css';
import Fade from 'react-reveal/Fade';

const ComponentWrapper = ({children, wrapperClass, isHeader, isVerticallyCentered}) => {
    let cardClass = isHeader ? "card header isVerticallyCentered" : "card";
    cardClass = isVerticallyCentered && !isHeader ? "card isVerticallyCentered" : cardClass;
    return (
        <Fade>
            <div className={wrapperClass}>
                <div className="contentWrapper">
                    <div className={cardClass}>
                        {children}
                    </div>
                </div>
            </div>
        </Fade>
    )
}

export default ComponentWrapper;
