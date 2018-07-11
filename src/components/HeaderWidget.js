import React, { Component } from 'react'
import PropTypes from 'prop-types'

class HeaderWidget extends Component {
  render () {
    return (
      <div id="header-widget" className="social">
				<ul className="socialmedia-widget">
					<li className="facebook"><a href="#"></a></li>
          <li className="twitter"><a href="#"></a></li>
          <li className="instagram"><a href="#"></a></li>
				</ul>
      </div>
    )
  }
}

export default HeaderWidget;
