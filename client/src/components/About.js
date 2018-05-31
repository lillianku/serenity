//Create component for About page
import React, { Component } from 'react';

// import aboutus from '../aboutus.jpg';

class About extends Component {
  render() {
    return (
      <div className="about">
        <br />
        <h2 className="about-font">WHY SERENITY SPA?</h2>
        <br />
        {/* Placeholder for image */}
        {/* <div className="#">
        <img className="App-logo" onClick={() => this.handleClick()} src={#}></img>
        </div> */}
        <p className="about-font">Serenity Spa wants to be your first choice for all your healthy, healing spa needs. We have researched and obtained only the finest and freshest products available to provide a unique and relaxing experience for everyone.</p>
        <br />
        <p className="about-font">Our goal is to tailor spa treatments to your individual needs, so you can leave feeling relaxed, refreshed, and nourished. We provide full body care from massages to facials to total body fitness. Whatever your needs, Serenity Spa has professional, experienced staff to help you look and feel your best!</p>
      {/* <img className="about-image" src={aboutus} alt="about us" style=""></img> */}
      </div>
    );
  }
};


export default About;
