import React from 'react';
import bem from 'bem-classname';

export default class ToolbarGroup extends React.Component {
  constructor(props) {
    super(props);

    this.className = bem.bind(null, this.constructor.name);
  }

  renderChildren(props) {
    return React.Children.map(props.children, child => {
      if (!child.props.highlight) {
        return React.cloneElement(child)
      } else {
        return child
      }
    })
  }

  render() {
    return (
      <div className={this.className({ right: this.props.float === 'right' })}>
        {this.renderChildren(this.props)}
      </div>
    );
  }
}
