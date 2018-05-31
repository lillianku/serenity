//Create component for Package
//Details for a guest's package should be rendered
import React, { Component } from 'react';
import axios from 'axios';
import ServiceName from './ServiceName.js';

class Package extends Component {
  constructor(props) {
    super(props)
    this.state = {guest: null, packageServices: null};
  }

  render() {
    const {guest} = this.state;
    if(!guest) {return <div>Loading Your Spa Package</div>;}

    return (
      <div className="Package">
        <h2>{guest.first_name} {guest.last_name}</h2>
        <span className="PackageList">{this.renderPackages()}</span>
      </div>
    );
  }

  renderPackages (){
    const {packageServices} = this.state;
    if(!packageServices) {
      return <div>Loading Package</div>;
    };
    return (
      <ul>
        {packageServices.map(pkg => this.renderPackage(pkg))}
      </ul>
    );
  };

  renderPackage(pkg){
    const {guest} = this.state;
    return(
        <li key={pkg.package_id}>
          <ServiceName service_id={pkg.service_id} guest_id={guest.guest_id} package_id={pkg.package_id} myhistory={this.props.history}/>
          <button onClick={() =>this.handleRemove(pkg.package_id)}>Remove</button>
        </li>
    );
  };

  handleRemove (id) {
    const {guest, packageServices} = this.state;
    axios.delete(`/guests/${guest.guest_id}/package/${id}`).then(res => {
      const newPackageServices = packageServices.filter(pkg => pkg.package_id !== id);
      this.setState({packageServices: newPackageServices})
    });
  }

  componentDidMount() {
    const {id} = this.props.match.params;
    axios.get(`/guests/${id}`).then(res => {
      this.setState({guest: res.data});
    });
    axios.get(`/guests/${id}/package`).then(res => {
      this.setState({packageServices: res.data});
    });
  }

}

export default Package;
