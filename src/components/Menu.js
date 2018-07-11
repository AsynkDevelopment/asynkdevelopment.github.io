import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Menu extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (<div id="menu" className="clearfix">
              <div className="menu-actions">
              	<div className="menu-toggle" onClick={ () => this.props.toggleMenu() }><span className="hamburger"></span></div>
              </div>

              <div id="menu-inner">
                  <nav id="main-nav">
                      <ul>
                          <li><a href="index.html">Home</a>
                            <ul className="sub-menu">
            									<li><a href="index.html">Main</a></li>
            									<li><a href="index-agencycreative.html">Creative Agency</a></li>
            									<li><a href="index-freelancer.html">Freelancer</a></li>
            									<li><a href="index-video.html">Video</a></li>
            									<li><a href="portfolio-grid-col3.html">Portfolio</a></li>
            									<li><a href="index-app.html">App / Software</a></li>
            									<li><a href="blog-magazine-split.html">Magazine</a></li>
            									<li><a href="index-photography.html">Photography</a></li>
            								</ul>
                          </li>
                          <li><a href="portfolio-grid-col3.html">Portfolio</a>
                            <ul className="sub-menu">
            									<li><a href="portfolio-grid-col2.html">2 Columns <small>Equal</small></a></li>
            									<li><a href="portfolio-grid-col3.html">3 Columns <small>Equal</small></a></li>
            									<li><a href="portfolio-grid-col4.html">4 Columns <small>Equal</small></a></li>
            									<li><a href="portfolio-masonry.html">Masonry</a></li>
            									<li><a href="portfolio-loadmore.html">Load More</a></li>
            									<li><a href="portfolio-infinityload.html">Infinity Load</a></li>
            								</ul>
                          </li>
                          <li><a href="about-agency.html">About</a>
                            <ul className="sub-menu">
            									<li><a href="about-agency.html">Agency</a></li>
            									<li><a href="about-minimal.html">Minimal</a></li>
            								</ul>
                          </li>
                          <li><a href="blog-magazine-split.html">Blog</a>
                            <ul className="sub-menu">
            									<li><a href="blog-magazine-split.html">Split Screen</a></li>
            									<li><a href="blog-magazine-full.html">Fullwidth</a></li>
            								</ul>
                          </li>
                          <li><a href="contact.html">Contact</a></li>
                      </ul>
                  </nav>
              </div>
          </div>)
  }
}

export default Menu;
