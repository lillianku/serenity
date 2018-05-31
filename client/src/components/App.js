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
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import GuestNew from '../components/GuestNew.js';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Serenity</h1>
            {/* <h4 className="App-tagline">A Full Service Spa</h4> */}

            <ul className="nav-links">
              <li className="link-style"> <Link to="/home">Home</Link></li>
              <li className="link-style"> <Link to="/about">About Us</Link></li>
              <li className="link-style"> <Link to="/experiences">Spa Experiences</Link></li>
              <li className="link-style"> <Link to="/guests">Guests</Link></li>
              <li className="link-style"> <Link to="/newguest">Create new guest profile</Link></li>
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
              <Route exact path='/guests/:id/package' component={Package} />
              <Route exact path='/experiences' component={Experiences} />
              <Route exact path='/experiences/:id' component={ServicesAll} />
              <Route exact path='/experiences/:experienceid/services/:serviceid' component={Service} />
          </Switch>



          </div>

      </Router>
    );
  }
}

export default App;
