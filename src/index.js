import React from 'react';
import ReactDDOM from 'react-dom';
import './global.css';
import App from './components/App';
import { unregister } from './serviceWorker';

ReactDDOM.render(<App />, document.getElementById('root'));
unregister();