import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Hero extends Component {
  render () {
    return (
      <section id="hero" className="hero-full homepage">
  			<div id="page-title" className="wrapper-small">
  				<h1>We develop digital products, web services, and marketing solutions.</h1>
          <div className="spacer-medium"></div>
          <p>We are a dedicated team of developers ready to take on and deliver your project. <br /> Your product, your vision, built the right way.</p>
    		</div>

  			<a href="#" id="scrolldown">
          <svg width="40" height="90" viewBox="0 0 30 110">
            <rect id="scroll" x="0" y="5" width="30" height="70" fill="transparent" stroke="#000" strokeWidth="3" rx="15" ry="15"></rect>
            <circle id="circle" cx="15" cy="22" r="4" fill="#000"></circle>
            <circle id="circle" cx="15" cy="36" r="2" fill="#000"></circle>
          </svg>
  			</a>
        {/* <div className="homepage-tint"></div> */}

    	</section>
    );
  }
}

export default Hero;
