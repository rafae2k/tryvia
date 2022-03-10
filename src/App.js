import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Game from './pages/Game';
import Configurations from './pages/Configurations';

import './App.css';
// import logo from './trivia.png';

export default function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={ logo } className="App-logo" alt="logo" />
      </header> */}
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/Game" component={ Game } />
        <Route path="/Configurations" component={ Configurations } />
      </Switch>
    </div>
  );
}
