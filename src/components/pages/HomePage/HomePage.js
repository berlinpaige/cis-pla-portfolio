import React, { Component } from 'react';
import './HomePage.css';

class HomePage extends Component {
    render() {
        return (
            <div className="homePageContentWrapper">
                <h1>Welcome to the home page</h1>
                <p>This site was built to allow you to 
                    explore my PLA site in a unique way.
                    Enjoy some unconventional site design 
                    and forgive the small bugs ... I mean, features :)</p>
                <p>To see the code underlying this site, check it out on Github here:
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/berlinpaige/cis-pla-portfolio"> github.com/berlinpaige/cis-pla-portfolio</a>
                </p>
            </div>
        );
    }
}

export default HomePage;
