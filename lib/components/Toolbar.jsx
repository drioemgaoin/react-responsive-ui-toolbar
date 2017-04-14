import React from 'react';
import PropTypes from 'prop-types';

export default class Toolbar extends React.Component {
    render() {
      return (
        <header className="Toolbar">
          <a href="#" className="Toolbar__Icon" id="toolbar__icon"></a>
          <div className='Toolbar__Menu'>
            {this.props.children}
          </div>
        </header>
      );
    }
}
