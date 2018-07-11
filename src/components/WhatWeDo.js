import React, { Component } from 'react'
import PropTypes from 'prop-types'

class WhatWeDo extends React.Component {
  render () {
    return (
      <div className="" style={{ background:'#000', height: '100vh'}}>
        <div className="spacer-big"></div>
        <div className="spacer-big hidden-768"></div>
        <div className="wrapper">
  				<h2 className="align-center do-anim animated">What We Do</h2>
          <p className="align-center">Asynk specializes in building highly maintainable and scalable single page apps as well as hybrid mobile applications, using exclusively a Javascript Stack. <br />We build great apps with React and React Native, Angular and Ionic, usually backed by a Node JS API. <br />We can work on your project remotely, under your guidance, or become part of your team and work alongside your developers.</p>
  			</div>
  			<div className="spacer-big"></div>
        <div className="spacer-big hidden-768"></div>
      </div>
    );
  }
}

export default WhatWeDo;
