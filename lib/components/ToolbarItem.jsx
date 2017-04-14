import React from 'react'
import bem from 'bem-classname';

export default class ToolbarItem extends React.Component {
  constructor(props) {
    super(props);

    this.className = bem.bind(null, this.constructor.name);
  }

  render() {
    return (
      <a href={this.props.to} target='_self' className={this.className()}>
        {this.props.children}
      </a>
    );
  }
}
