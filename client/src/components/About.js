//Create component for About page
import React, { Component } from 'react';
import axios from 'axios';

class About extends Component {
  render() {
    return (
      <div className="About">
        <h1>WHY SERENITY SPA?</h1>
        {/* Placeholder for image */}
        {/* <div className="#">
        <img className="App-logo" onClick={() => this.handleClick()} src={#}></img>
        </div> */}
        <p>Serenity Spa, wants to be your first choice for all your healthy, healing spa needs. We have researched and obtained only the finest and freshest products available to provide a unique and relaxing experience for everyone. Our goal is to tailor spa treatments to your individual needs, so you can leave feeling relaxed, refreshed, and nourished. We provide full body care from massages to facials to total body fitness. Whatever your needs, Serenity Spa has professional, experienced staff to help you look and feel your best!</p>
      </div>
    );
  }
};


export default About;
