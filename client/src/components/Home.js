//Should just be a welcome page?
//Maybe a carousel of photos?
import React, { Component } from 'react';



class Home extends Component {
  // constructor(props) {
  // super(props)
  // this.state = {experiences: [], loading: true };
  // }
  //
  render () {
  //   const { loading, experiences } = this.state;
  //   const className = "Home Page";
  //
  //   if(loading) {
  //     return <div className={className}>loading...</div>;
  //   }
    return (
      <div >
        <h2>A Full Service Spa</h2>
        {/* <ul>
          {experiences.map(experience => this.renderLink(experience))}
        </ul> */}
      </div>
    );
  }

};
//need to add renderLink to show experiences by ID
//need to add componentDidMount (should I wait until backend is built?)
  export default Home;
