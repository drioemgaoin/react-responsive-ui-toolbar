import React from 'react';
import bem from 'bem-classname';

export default class ToolbarGroup extends React.Component {
  constructor(props) {
    super(props);

    this.className = bem.bind(null, 'ToolbarGroup');
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
      <div className={this.className({
          right: this.props.float === 'right',
          hidden: this.props.hidden
        })}>
        {this.renderChildren(this.props)}
      </div>
    );
  }
}
