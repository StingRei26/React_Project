import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// This is he main component, reads the code inside the App.js folder 
// and inputs it inside the root div that lives in the public html file which is what renders to the page
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
