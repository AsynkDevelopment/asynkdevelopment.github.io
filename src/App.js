import React, { Component } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhatWeDo from './components/WhatWeDo';
import WhyAsynk from './components/WhyAsynk';
import Footer from './components/Footer';

import './css/style.css';
import './css/App.css';
// import './css/custom-agencycreative.css';

class App extends Component {
  render() {
    return (
      <div className="App" id="page-content">
        <Header toggleMenu={this.toggleMenu} />
        <div id="hero-and-body">
          <Hero />
          <WhatWeDo />
          <WhyAsynk />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
