import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Footer extends Component {
  render () {
    return (
      <footer id="footer" className="text-light">
       	<div className="footer-inner wrapper">
          <div className="column-section clearfix">
            	<div className="column one-third">
             		<div className="widget">
        						<h5><strong>Los Angelas Office</strong></h5>
                    <p>Elizabeth Street 123<br />75601 Los Angelas<br />+44 310 956 3500</p>
                 	</div>
              </div>

              <div className="column one-third">
             		<div className="widget">
        						<h5><strong>Sydney Office</strong></h5>
                  <p>Burger Street 524<br />55567 Sydney<br />+36 310 956 3500</p>
                </div>
              </div>

              <div className="column one-third last-col align-right">
             		<div className="widget">
        					<p><a href="#" className="sr-button style-3 button-medium">Contact us</a></p>
                  <p><a href="#" className="sr-button style-3 button-medium">Apply for a job</a></p>
                  <div className="spacer-medium"></div>
                <p><small>&copy; Copyright 2018 by <a href="https://www.asynk.eu">Asynk</a></small></p>
                 	</div>
              </div>
          </div>
        </div>
    </footer>
    );
  }
}

export default Footer;
