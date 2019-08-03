/*import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Header from './components/header/header';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Header />, document.getElementById('root'));
registerServiceWorker();*/

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//renders the App.js file to the root element (index.html in public folder)
ReactDOM.render(<App />, document.getElementById("root"));
