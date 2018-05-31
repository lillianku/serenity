//Create component for single Guest
//List the information for each Guest
//Should have a for where we can update the guest information
import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

class Guest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: '', first_name: '', last_name: '', email: '', phone: '', allergies: '', comments: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render () {
    const { username, first_name, last_name, email, phone, allergies, comments } = this.state;
    const { id } = this.props.match.params;

    return (
      <div className="Guest">
        Guest Name: <input value={username} name="username" onChange={this.handleChange}/>
        <br />
        Guest First Name: <input value={first_name} name="first_name" onChange={this.handleChange}/>
        <br />
        Guest Last Name: <input value={last_name} name="last_name" onChange={this.handleChange}/>
        <br />
        Guest Email Address: <input value={email} name="email" onChange={this.handleChange}/>
        <br />
        Guest Phone: <input value={phone} name="phone" onChange={this.handleChange}/>
        <br />
        Guest Allergies: <input value={allergies} name="allergies" onChange={this.handleChange}/>
        <br />
        Guest Comments: <input value={comments} name="comments" onChange={this.handleChange}/>
        <br />
        <button onClick={this.handleSubmit}>Submit</button>

        <Link to={`/guests/${id}/package`}>View Your Spa Package</Link>

      </div>
    );
  }

  handleChange(e) {
    const {value, name} = e.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit () {
    const { id } = this.props.match.params;
    const { username, first_name, last_name, email, phone, allergies, comments } = this.state;
    axios.put(`/guests/${id}`, { username, first_name, last_name, email, phone, allergies, comments }).then(res => {
      alert('Your serene profile has been updated');
      this.props.history.push(`/guests/${id}`);
    }).catch(e => {
      alert('Oops! Something went wrong!');
    });
  }

  handleEdit () {
    const { history } = this.props;
    const { id } = this.props.match.params;
    axios.put(`/guests/${id}`).then(res => {
      history.push('/guests');
    });
  }

  handleDelete () {
    const { match, history } = this.props;
    const { id } = match.params;
    axios.delete(`/guests/${id}`).then(res => {
      history.push('/guests');
    });
  }


  componentDidMount () {
    const { id } = this.props.match.params;
    axios.get(`/guests/${id}`).then(res => {
      const { username, first_name, last_name, email, phone, allergies, comments } = res.data;
      this.setState({ username, first_name, last_name, email, phone, allergies, comments });
    });
  }
}

export default Guest;
