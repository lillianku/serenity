import React, { Component } from 'react';
import './App.css';
import Home from '../components/Home.js';
import About from '../components/About.js';
import GuestsAll from '../components/GuestsAll.js';
import Guest from '../components/Guest.js';
import Experiences from '../components/Experiences.js';
import Service from '../components/Service.js';
import ServicesAll from '../components/ServicesAll.js';
import Package from '../components/Package.js';
import GuestNew from '../components/GuestNew.js';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Serenity</h1>
            <ul className="nav-links">
              <li className="link-style"> <Link to="/home">Home</Link></li>
              <li className="link-style"> <Link to="/about">About Us</Link></li>
              <li className="link-style"> <Link to="/experiences">Spa Experiences</Link></li>
              <li className="link-style"> <Link to="/guests">Guests</Link></li>
              <li className="link-style"> <Link to="/newguest">Create New Guest Profile</Link></li>
            </ul>
            <br />
          </header>

          <Switch>
              <Redirect exact from='/' to='/home' />
              <Route exact path='/home' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/guests' component={GuestsAll} />
              <Route exact path='/newguest' component={GuestNew} />
              <Route exact path='/guests/:id' component={Guest} />
              <Route exact path='/experiences' component={Experiences} />
              <Route exact path='/experiences/:id' component={ServicesAll} />
              <Route exact path='/experiences/:experienceid/services/:serviceid' component={Service} />
              <Route exact path='/guests/:id/package' component={Package} />
          </Switch>
          </div>
      </Router>
    );
  }
}

export default App;
