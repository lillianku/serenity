import React, { Component } from 'react';
import axios from 'axios';

class ServiceName extends Component {

  constructor(props) {
    super(props);
    this.state = { name: null };
  };

  render(){
    const{name} = this.state;
    if(!name) {
      return <div>Loading Package</div>;
    };

    return (
        <p>{name.service_name}</p>
    );
  };

  componentDidMount() {
    axios.get(`/guests/services/${this.props.service_id}`).then(res=>{
      this.setState({name: res.data});
    });
  };

}



export default ServiceName;
