import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Logo extends Component {
  render () {
    return (
      <div id="logo" className="logo-left text-light">
          <a href="index.html">
          	<img id="dark-logo" src="images/logo-noha-blue.png" srcSet="images/logo-noha-blue.png 1x, images/logo-noha-blue@2x.png 2x" alt="Logo Dark" />
            <img id="light-logo" src="images/logo-noha-light.png" srcSet="images/logo-noha-light.png 1x, images/logo-noha-light@2x.png 2x" alt="Logo Light" />
          </a>
      </div>
    );
  }
}

export default Logo;
