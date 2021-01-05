import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
import Play from './pages/Play';
import Testpage from './pages/Testpage';

const App = () => {

  return (
    <>
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/play">
              <Play />
            </Route>
            <Route path="/testpage">
              <Testpage />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  )
}




ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

