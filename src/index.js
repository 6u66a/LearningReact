import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import './index.css';
import { IndexRoute, HashRouter, Route, Link } from 'react-router-dom';
import SubpageOne from './pages/SubpageOne.js';
import SubpageTwo from './pages/SubpageTwo.js';



ReactDOM.render(
  <HashRouter>
  <div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/subone">SubpageOne</Link></li>
      <li><Link to="/subtwo">SubpageTwo</Link></li>
    </ul>

    <hr/>

    <App>
      <Route path="/subone" component={SubpageOne}/>
      <Route path="/subtwo" component={SubpageTwo}/>
    </App>
  </div>
</HashRouter>
, document.getElementById('root'));