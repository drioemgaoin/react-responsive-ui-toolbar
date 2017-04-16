import React from 'react'
import bem from 'bem-classname';
import { NavLink } from 'react-router-dom';

export default class ToolbarItem extends React.Component {
  constructor(props) {
    super(props);

    this.className = bem.bind(null, 'ToolbarItem');
  }

  render() {
    return (
      <NavLink to={this.props.to}
        onClick={this.props.close}
        className={this.className()}
        activeClassName={this.className(['active'])}>
        {this.props.children}
      </NavLink>
    );
  }
}
