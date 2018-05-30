import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Home from '../components/Home.js';
import About from '../components/About.js';
import GuestsAll from '../components/GuestsAll.js';
import Guest from '../components/Guest.js';
import Experiences from '../components/Experiences.js';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import GuestNew from '../components/GuestNew.js';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to the Serenity Spa</h1>
          </header>

          <Switch>
              <Redirect exact from='/' to='/home' />
              <Route exact path='/home' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/guests' component={GuestsAll} />
              <Route exact path='/newguest' component={GuestNew} />
              <Route exact path='/guests/:id' component={Guest} />
              <Route exact path='/experiences' component={Experiences} />

          </Switch>

            <ul className="nav-links">
              <li> <Link to="/home">Serenity Spa</Link> </li>
              <li> <Link to="/about">About Serenity Spa</Link> </li>
              <li> <Link to="/guests">Guests</Link> </li>
              <li> <Link to="/newguest">Create new guest profile</Link> </li>
              <li> <Link to="/experiences">Serenity Spa Experiences</Link> </li>

            </ul>

          </div>

      </Router>
    );
  }
}

export default App;
