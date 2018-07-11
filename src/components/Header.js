import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Logo from './Logo'
import Menu from './Menu'
import HeaderActions from './HeaderActions'
import HeaderActionsOverlay from './HeaderActionsOverlay'
import HeaderWidget from './HeaderWidget'

class Header extends Component {
  state = {
      menuOpen: false
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props);
  }

  toggleMenu = () => {
      this.setState({ menuOpen: !this.state.menuOpen });
  }

  render () {
    return (
      <header id="header" className={`header-left text-light ${this.state.menuOpen ? 'menu-is-open' : ''}`} >
		      <div className="header-inner clearfix">
              <Logo />
              <Menu toggleMenu={this.toggleMenu} />
              <HeaderActions />
              <HeaderActionsOverlay />
              <HeaderWidget />
          </div>
          <span className="pseudo-close header-close"></span>
      </header>
    );
  }
}

export default Header;
