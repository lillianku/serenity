//Create component for each Service
//Details for this specific Service should be rendered
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Service extends Component {
  constructor(props) {
    super(props)
    this.state = {service: null};
  }

  render() {
    const { service } = this.state;
    if(!service) { return <div>Loading Service Description</div>; }

    return (
      <div className="Service">
        <li key={service.service_id}>
          <Link to={`/experiences/${service.service_id}`}>{service.service_name}</Link>
        </li>
      </div>
    );
  }

  componentDidMount() {
    const {id} = this.props.match.params;
    axios.get(`/experiences/${id}`).then(res => {
      this.setState({service: res.data})
    });
  }
}

export default Service;
