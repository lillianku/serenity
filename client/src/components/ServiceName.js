import React, { Component } from 'react';
import axios from 'axios';

class ServiceName extends Component {

  constructor(props) {
    super(props);
    this.state = { name: null };
  }

  render(){
    return (
      <h2>{this.state.name}</h2>
    );
  };

  componentDidMount() {
    axios.get(`/guests/services/${this.props.service_id}`).then(res=>{
      this.setState({name: res.data.service_name});
    });
  }

}



export default ServiceName;
