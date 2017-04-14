import React from 'react';
import PropTypes from 'prop-types';
import MediaQuery from 'react-responsive';

export default class Toolbar extends React.Component {
    constructor(props) {
      super(props);
    }

    handle(event) {
      event.preventDefault();

      this.refs.menu.className = this.refs.menu.className.endsWith('--collapsed')
      ? this.refs.menu.className.replace('--collapsed', '')
      : this.refs.menu.className + '--collapsed';
    }

    close(event) {
      this.refs.menu.className += '--collapsed';
    }

    render() {
      return (
        <div className="Toolbar">
          <a href="#" className="Toolbar__Icon" onClick={(event) => this.handle(event)}></a>
          <a href="#" className="Toolbar__Brand">Brand</a>
          <MediaQuery minWidth={1024}>
            <div ref='menu' className='Toolbar__Menu'>
              {this.props.children}
            </div>
          </MediaQuery>
          <MediaQuery maxWidth={1024}>
            <div ref='menu' className='Toolbar__Menu Toolbar__Menu--collapsed' onMouseLeave={(event) => this.close(event)}>
              {this.props.children}
            </div>
          </MediaQuery>
        </div>
      );
    }
}
