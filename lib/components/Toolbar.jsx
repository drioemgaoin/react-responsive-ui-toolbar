import React from 'react';
import PropTypes from 'prop-types';
import MediaQuery from 'react-responsive';
import bem from 'bem-classname';

import ToolbarGroup from './ToolbarGroup';
import ToolbarItem from './ToolbarItem';

import '../toolbar';

export default class Toolbar extends React.Component {
    constructor(props) {
      super(props);

      this.className = bem.bind(null, this.constructor.name);
      this.state = { pathname: window.location.pathname };
    }

    handle(event) {
      event.preventDefault();

      this.refs.menu.className = this.refs.menu.className.endsWith('--collapsed')
      ? this.refs.menu.className.replace('--collapsed', '')
      : this.refs.menu.className + '--collapsed';
    }

    close(event) {
      if (this.props.history) {
        event.preventDefault();
        this.props.history.push({ pathname: event.target.pathname });
      }

      this.refs.menu.className = this.refs.menu.className.endsWith('--collapsed')
      ? this.refs.menu.className
      : this.refs.menu.className + '--collapsed';

      this.setState({ pathname: event.target.pathname });
    }

    renderChildren(items) {
      return items.map(item => {
        return item.name
        ? <ToolbarGroup key={item.name}
            visible={item.visible}
            float={item.float}
            pathname={this.state.pathname}
            items={item.items}
            onClick={(e) => this.close(e)} />
        : <ToolbarItem key={item.title}
            to={item.href}
            title={item.title}
            isActive={item.href === this.state.pathname}
            onClick={(e) => this.close(e)} />
    });
    }

    render() {
      return (
        <div className="Toolbar">
          <a href="#" className="Toolbar__Icon" onClick={(event) => this.handle(event)}></a>
          <MediaQuery minWidth={1024}>
            <div ref='menu' className='Toolbar__Menu'>
              {this.renderChildren(this.props.items)}
            </div>
          </MediaQuery>
          <MediaQuery maxWidth={1024}>
            <div ref='menu' className='Toolbar__Menu Toolbar__Menu--collapsed' onMouseLeave={(event) => this.close(event)}>
              {this.renderChildren(this.props.items)}
            </div>
          </MediaQuery>
        </div>
      );
    }
}
