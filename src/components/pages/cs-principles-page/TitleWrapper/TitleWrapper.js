import React from 'react';
import './TitleWrapper.css';

const TitleWrapper = ({imagePath, titleText, titleDescription}) => {
    return (
        <div className="titleWrapper">
            <img className="titleWrapperImage" src={imagePath} alt="header" />
            <div className="titleWrapperTextWrapper">
                <h1>{titleText}</h1>
                <p>{titleDescription}</p>
            </div>
        </div>
    )
}

export default TitleWrapper;
