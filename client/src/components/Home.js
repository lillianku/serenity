//Should just be a welcome page?
//Maybe a carousel of photos?
import React, { Component } from 'react';
import spa from '../spa.jpg';

  function Home (props){
    return <img className="spa-image" src={spa}></img>
  };



//need to add renderLink to show experiences by ID
//need to add componentDidMount (should I wait until backend is built?)
  export default Home;
