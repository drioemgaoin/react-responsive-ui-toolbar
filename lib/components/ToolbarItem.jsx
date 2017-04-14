import React from 'react'
import bem from 'bem-classname';
import { NavLink } from 'react-router-dom';

export default class ToolbarItem extends React.Component {
  constructor(props) {
    super(props);

    this.className = bem.bind(null, this.constructor.name);
  }

  render() {
    return (
      <NavLink to={this.props.to} className={this.className()} activeClassName={this.className(['active'])}>
        {this.props.children}
      </NavLink>
    );
  }
}
