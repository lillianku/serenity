import React, { Component } from 'react';
import axios from 'axios';

class ServiceName extends Component {

  constructor(props) {
    super(props);
    this.state = { name: null };
  }

  render(){
    return (
      <li>{this.state.name}</li>
    );
  };

  componentDidMount() {
    axios.get(`/guests/services/${this.props.service_id}`).then(res=>{
      this.setState({name: res.data.service_name});
    });
  }

}



export default ServiceName;
