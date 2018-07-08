import React from 'react';
import ReactDOM from 'react-dom';
import './styles/Styles.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/jquery/dist/jquery.min';
import '../node_modules/popper.js/dist/popper.min';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
