//Create component for New Guest
//There should be a form that takes values for required information
//When form is submitted, redirect to individual Guest page
import React, { Component } from 'react';
import axios from 'axios';

class GuestNew extends Component {
  constructor(props) {
    super(props);
    this.state = {username:'', first_name:'', last_name:'', email:'', phone:'', allergies:'', comments:''}
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  render() {
    const {username, first_name, last_name, email, phone, allergies, comments} = this.state;

    return (
      <form className="GuestNew" onSubmit={this.handleSubmit}>
        Username: <input value={username} name="username" onChange={this.handleChange}/>
        <br />
        First Name: <input value={first_name} name="first_name" onChange={this.handleChange} />
        <br />
        Last Name: <input value={last_name} name="last_name" onChange={this.handleChange} />
        <br />
        Email Address: <input value={email} name="email" onChange={this.handleChange} />
        <br />
        Phone: <input value={phone} name="phone" onChange={this.handleChange} />
        <br />
        Allergies: <input value={allergies} name="allergies" onChange={this.handleChange} />
        <br />
        Comments: <input value={comments} name="comments" onChange={this.handleChange} />
        <input type="submit" value="submit"/>
      </form>
    );
  }
  handleChange (e) {
    const {value, name} = e.target;
    this.setState({
      [name]: value
    });
  }
  handleSubmit (e) {
    const {username, first_name, last_name, email, phone, allergies, comments} = this.state;
    e.preventDefault();
    axios.post(`/guests`, {username, first_name, last_name, email, phone, allergies, comments}).then(res => {
      this.props.history.push(`/guests`);
    }).catch(e => {
      alert('A new guest profile could not be created')
      //test 
    });
  }
}
export default GuestNew;
