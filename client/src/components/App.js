import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Home from '../components/Home.js';
import About from '../components/About.js';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>

          <Switch>
              <Route exact path='/home' component={Home} />
              <Route exact path='/about' component={About} />
          </Switch>

            <ul className="nav-links">
              <li> <Link to="/home">Serenity Spa</Link> </li>
              <li> <Link to="/about">About Serenity Spa</Link> </li>
            </ul>

          </div>

      </Router>
    );
  }
}

export default App;
