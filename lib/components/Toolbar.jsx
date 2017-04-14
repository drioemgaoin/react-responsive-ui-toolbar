import React from 'react';
import PropTypes from 'prop-types';
import MediaQuery from 'react-responsive';
import { Link } from 'react-router-dom';
import bem from 'bem-classname';

export default class Toolbar extends React.Component {
    constructor(props) {
      super(props);

      this.className = bem.bind(null, this.constructor.name);
    }

    handle(event) {
      event.preventDefault();

      this.refs.menu.className = this.refs.menu.className.endsWith('--collapsed')
      ? this.refs.menu.className.replace('--collapsed', '')
      : this.refs.menu.className + '--collapsed';
    }

    close(event) {
      event.preventDefault();

      this.refs.menu.className += '--collapsed';
    }

    renderChildren(props) {
      return React.Children.map(props.children, child => {
        return React.cloneElement(
          child,
          {
            ...child.props,
            close: function(event) {
              this.props.close(event);
            }.bind(this)
          }
        )
      })
    }

    render() {
      return (
        <div className="Toolbar">
          <a href="#" className="Toolbar__Icon" onClick={(event) => this.handle(event)}></a>
          <Link to="/" className="Toolbar__Brand">Brand</Link>
          <MediaQuery minWidth={1024}>
            <div ref='menu' className='Toolbar__Menu'>
              {this.props.children}
            </div>
          </MediaQuery>
          <MediaQuery maxWidth={1024}>
            <div ref='menu' className='Toolbar__Menu Toolbar__Menu--collapsed' onMouseLeave={(event) => this.close(event)}>
              {this.renderChildren(this.props)}
            </div>
          </MediaQuery>
        </div>
      );
    }
}
