import React from 'react';
import logo from './images/logo.png';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from './containers/Navbar/NavBar';
import Explore from './components/Explore/Explore';
import Compare from './components/Compare';
import Discover from './components/Discover/Discover';
import Rank from './components/Rank/Rank';

import * as ROUTES from './routes';

function App() {
  return (
    <Router>
      <div className="main">
        <NavBar />

        <Switch>
          <Route exact path={ROUTES.HOME} component={Explore} />
          <Route exact path={ROUTES.EXPLORE} component={Explore} />
          <Route exact path={ROUTES.RANK} component={Rank} />
          <Route exact path={ROUTES.COMPARE} component={Compare} />
          <Route exact path={ROUTES.DISCOVER} component={Discover} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
