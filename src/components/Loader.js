import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Loader extends Component {
  render () {
    return (<div id="page-loader" className="text-light show-logo">
            	<span className="loader-icon bullets-jump"><span></span><span></span><span></span></span>
          </div>);

  }
}

export default Loader;
