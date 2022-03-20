import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import Login from './pages/Login';
import Game from './pages/Game';
import Configurations from './pages/Configurations';
import Feedback from './pages/Feedback';
import Ranking from './pages/Ranking';

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/Game" component={ Game } />
        <Route path="/Configurations" component={ Configurations } />
        <Route path="/feedback" component={ Feedback } />
        <Route path="/ranking" component={ Ranking } />
      </Switch>
    </div>
  );
}
