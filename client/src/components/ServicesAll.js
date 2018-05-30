//Create component for each Experience
//Will list out all Services within this Experience
//Each Service should be rendered as clickable link
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class ServicesAll extends Component {
  constructor(props){
    super(props);
    this.state = {experience: null, services: null};
  }
  render () {
    const {experience} = this.state;
    if(!experience) {
      return (
        <div className="load">
        Loading services. Thank you for your patience.
        </div>
      );
    }

    return (
      <div className="services">
        <h1>{experience.experience_name}</h1>
        <h2>{this.renderServices()}</h2>
      </div>
    );
  };

  renderServices () {
    const {services} = this.state;
    if(!services) {
      return (
        <div className="load">
        Loading services. Thank you for your patience.
        </div>
      );
    };
    return (
      <ul>
        {services.map(service => this.renderService(service))}
      </ul>
    );
  };

  renderService(service){
    const{experience} = this.state;
    return(
      <li key={service.service_id}>
        <Link to={`/experiences/${experience.experience_id}/services/${service.service_id}`}>{service.service_name}</Link>
      </li>
    );
  };

  componentDidMount () {
    const {id} = this.props.match.params;
    axios.get(`/experiences/${id}`).then(res => {
      this.setState({experience: res.data});
    });
    axios.get(`/experiences/${id}/services`).then(res => {
      this.setState({services: res.data});
    });
  };

}
export default ServicesAll;
