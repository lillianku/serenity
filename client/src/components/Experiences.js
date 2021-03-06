import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import myImage from '.././classes.jpg';
import myImage2 from '.././facial.jpg';
import myImage3 from '.././massages.jpg';
import myImage4 from '.././amenities.jpg';

class Experiences extends Component {
  constructor(props) {
  super(props)
  this.state = {experiences: null};
  }

  render () {
    const { experiences } = this.state;
    const className = "Experiences Page";

    if(!experiences) {
      return <div className={className}>loading...</div>;
    }
    return (
      <div className="ExperiencesDiv">
        <br />
        <h2>SPA EXPERIENCES</h2>
        <br />
        <ul>
          {experiences.map(experience => this.renderExperiencesLink(experience))}
        </ul>

        <img className="xperiences" src={myImage} alt="classes"></img>
        <img className="xperiences" src={myImage2} alt="facials"></img>
        <img className="xperiences" src={myImage3} alt="massages"></img>
        <img className="xperiences" src={myImage4} alt="amenities"></img>
      </div>
    );
  }

  renderExperiencesLink(experience) {
    return (
      <li  className="experienceLinks" key={experience.experience_id}>
        <Link to={`/experiences/${experience.experience_id}`}>{experience.experience_name}</Link>
      </li>
    );
  }

  componentDidMount () {
    axios.get('/experiences').then(res => {
      this.setState({experiences: res.data});
    });
  }
};

  export default Experiences;
