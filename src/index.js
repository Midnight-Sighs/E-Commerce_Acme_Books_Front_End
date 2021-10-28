import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <meta name="viewport" content="width=device-width,initial-scale=1"></meta>
        <App/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

