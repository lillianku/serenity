//Create component for each Service
//Details for this specific Service should be rendered
import React, { Component } from 'react';
import axios from 'axios';

class Service extends Component {
  constructor(props) {
    super(props)
    this.state = {service: null, username: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    const { service, username} = this.state;
    if(!service) { return <div>Loading Service</div>; }
    return (
      <div className="Service">
        <br />
        <h2>{service.service_name}</h2>
        <h3 className="serviceFont">{service.description}</h3>
        <br />
        <h4 className="serviceFont"><b>Potential Allergens:</b> {this.renderAllergens()}</h4>
        <h4 className="serviceFont"><b>Service Duration:</b> {service.duration} minutes</h4>
        <h4 className="serviceFont"><b>Price:</b> ${service.price}</h4>
        <br />
        <form onSubmit={this.handleSubmit}>
         <input type="text" value={username} name="username" placeholder="Username" onChange={this.handleChange}/>
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
  };

   handleSubmit(event) {
     const {service, username}= this.state;
     const service_id = service.service_id;
     event.preventDefault();

     axios.get(`/guests/username/${username}`).then(res => {
       let guest_id = res.data.guest_id;
       axios.post(`/guests/${guest_id}/package`, {guest_id, service_id}).then(res => {
         this.props.history.push(`/guests/${guest_id}/package`); // change this to services page & add an alert
       }).catch(event => {
         alert('Service could not be added to package');
       });
     });
   }

  componentDidMount() {
    const {experienceid, serviceid} = this.props.match.params;
    const {username} = this.state;
    axios.get(`/experiences/${experienceid}/services/${serviceid}`).then(res => {
      this.setState({service: res.data})
    });
  }
}

export default Service;
