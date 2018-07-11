import React, { Component } from 'react'
import PropTypes from 'prop-types'

class HeaderActionsOverlay extends Component {
  render () {
    return (
      <div id="header-actions-overlay">
				<a href="" className="action-close header-close"></a>
        <div className="action-overlay filter-overlay">
					<h6 className="widget-title">Filter</h6>
          <ul id="grid-filter" className="category-list grid-filter" data-related-grid="portfolio-grid">
						<li><a data-filter=".advertising" href="#">Advertising</a></li>
						<li><a data-filter=".branding" href="#">Branding</a></li>
						<li><a data-filter=".digital" href="#">Digital</a></li>
						<li><a data-filter="*" href="#">All</a></li>
					</ul>
				</div>
			</div>
    );
  }
}

export default HeaderActionsOverlay;
