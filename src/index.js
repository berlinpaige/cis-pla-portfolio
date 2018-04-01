import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BasePage from './components/pages/base-page/BasePage';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BasePage />, document.getElementById('root'));
registerServiceWorker();
