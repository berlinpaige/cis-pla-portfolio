import React from 'react';
import ReactDOM from 'react-dom';
import BasePage from './BasePage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BasePage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
