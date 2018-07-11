import React from 'react'
import PropTypes from 'prop-types'

class WhyAsynk extends React.Component {
  render () {
    return (
      <div className="wrapper">
        <div className="spacer-big"></div>
        <div className="column-section spaced-big clearfix">
          <div className="column one-half">
            <p>Save your money and time on recruitment and employment costs. Focus on the things that matter and achieve your business goals. We do the rest</p>
          </div>

          <div className="column one-half last-col">
            <p>We provide efficient team of knowledgeable experts with different skills, and competence that work directly on your product or service.</p>
          </div>
          <div className="spacer-big"></div>

          <div className="column one-half">
            <p>We create contracts tailored to your business, providing the best resources matching your criteria.</p>
          </div>

          <div className="column one-half last-col">
            <p>Building a product might be a complicated process. That’s why we take the responsibility and we put ideas into action to make them reality specially for you!</p>
          </div>
        </div>
        <div className="spacer-big"></div>
      </div>
    );
  }
}

export default WhyAsynk;
