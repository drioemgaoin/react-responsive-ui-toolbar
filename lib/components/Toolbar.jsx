import React from 'react';
import PropTypes from 'prop-types';

export default class Toolbar extends React.Component {
    render() {
      return (
        <header className="Toolbar">
          <a href="#" className="Toolbar__Icon" id="toolbar__icon"></a>
          {this.props.children}
        </header>
      );
    }
}
