//Create component for each Service
//Details for this specific Service should be rendered
import React, { Component } from 'react';
import axios from 'axios';

class Service extends Component {
  constructor(props) {
    super(props)
    this.state = {service: null};
  }

  render() {
    const { service } = this.state;
    if(!service) { return <div>Loading Service</div>; }
    console.log(service.description);
    return (
      <div className="Service">
        <h2>{service.service_name}</h2>
        <h3><b>Description:</b> {service.description}</h3>
        <h3><b>Potential Allergens:</b> {this.renderAllergens()}</h3>
        <h3><b>Service Duration:</b> {service.duration} minutes</h3>
        <h3><b>Price:</b> ${service.price}</h3>
      </div>
    );
  }

  // return "none" if there are no allergens instead of an empty string
  renderAllergens() {
    const { service } = this.state;
    if (!service.allergens) {
      return (`none`);
    }
    return (`${service.allergens}`);
  }

  componentDidMount() {
    const {experienceid, serviceid} = this.props.match.params;
    axios.get(`/experiences/${experienceid}/services/${serviceid}`).then(res => {
      this.setState({service: res.data})
    });
  }
}

export default Service;
