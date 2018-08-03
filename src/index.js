import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import './elements.css';
import App from './app';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
