//Create component for All Guests
//Should list each guest as a clickable Link
//Link should link to individual Guest that was clicked on
//There should be a button that will Link to Add New Guest page

import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class GuestsAll extends Component {
  constructor(props) {
    super(props)
    this.state = {guests: null};
  }

  render() {
    const { guests } = this.state;
    if(!guests) { return <div>Guests are Loading</div>; }

    return (
      <div className="GuestsAll">
        {guests.map(guest => this.renderGuestLink(guest))}
      </div>
    );
  }

  renderGuestLink(guest) {
    return (
      <li className="guestLink" key={guest.guest_id}>
        <Link to={`/guests/${guest.guest_id}`}>{guest.first_name} {guest.last_name}</Link>
      </li>
    );
  }

  componentDidMount() {
    axios.get('/guests').then(res=> {
      this.setState({guests: res.data})
    });
  }
}

export default GuestsAll;
