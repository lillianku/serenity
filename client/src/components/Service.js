//Create component for each Service
//Details for this specific Service should be rendered
import React, { Component } from 'react';
import axios from 'axios';

class Service extends Component {
  constructor(props) {
    super(props)
    this.state = {service: null, guest_id: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    const { service, guest_id } = this.state;
    if(!service) { return <div>Loading Service</div>; }
    return (
      <div className="Service">
        <h2>{service.service_name}</h2>
        <h3><b>Description:</b> {service.description}</h3>
        <h3><b>Potential Allergens:</b> {this.renderAllergens()}</h3>
        <h3><b>Service Duration:</b> {service.duration} minutes</h3>
        <h3><b>Price:</b> ${service.price}</h3>

        <form onSubmit={this.handleSubmit}>
         <input type="text" value={guest_id} name="guest_id" placeholder="guest id" onChange={this.handleChange}/>
         <input type="submit" value="Add to your Package" />
       </form>

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

  handleChange (event) {
    const {value, name} = event.target;
    this.setState({
      [name]: value
    });
   }

   handleSubmit(event) {
     const {service}= this.state;
     let guest_id = parseInt(this.state.guest_id, 10);
     console.log(guest_id);
     const service_id = service.service_id;
     console.log(service_id);
     event.preventDefault();
     axios.post(`/guests/${guest_id}/package`, {guest_id, service_id}).then(res => {
       this.props.history.push(`/guests/${guest_id}/package`); // change this to services page & add an alert
     }).catch(event => {
       alert('Service could not be added to package');
     });
   }

  componentDidMount() {
    const {experienceid, serviceid} = this.props.match.params;
    axios.get(`/experiences/${experienceid}/services/${serviceid}`).then(res => {
      this.setState({service: res.data})
    });
  }
}

export default Service;
