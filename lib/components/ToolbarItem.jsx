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
      <a href={this.props.to}
        onClick={this.props.onClick}
        className={this.className({ active: this.props.isActive })}>
        {this.props.title}
      </a>
    );
  }
}
