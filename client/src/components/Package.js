//Create component for Package
//Details for a guest's package should be rendered
import React, { Component } from 'react';
import axios from 'axios';

class Package extends Component {
  constructor(props) {
    super(props)
    this.state = {guest: null, spaPackage: null};
  }

  render() {
    const {guest} = this.state;
    if(!guest) {return <div>Loading Your Spa Package</div>;}

    return (
      <div className="Package">
        <h1>{guest.first_name} {guest.last_name}</h1>
        <h2>{this.renderPackages()}</h2>
      </div>
    );
  }

  renderPackages (){
    const {spaPackage} = this.state;
    if(!spaPackage) {
      return <div>Loading Package</div>;
    };
    return (
      <ul>
        {spaPackage.map(pkg => this.renderPackage(pkg))}
      </ul>
    );
  };

  renderPackage(pkg){
    return(
      <h2 key={pkg.package_id}>{pkg.service_id}</h2>
    );
  };

  componentDidMount() {
    const {id} = this.props.match.params;
    axios.get(`/guests/${id}`).then(res => {
      this.setState({guest: res.data});
    });
    axios.get(`/guests/${id}/package`).then(res => {
      this.setState({spaPackage: res.data});
    });

  }

}

export default Package;
