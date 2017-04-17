import React from 'react';
import bem from 'bem-classname';

import ToolbarItem from './ToolbarItem';

export default class ToolbarGroup extends React.Component {
  constructor(props) {
    super(props);

    this.className = bem.bind(null, 'ToolbarGroup');
  }

  renderChildren(items) {
    return items.map(item => {
      return <ToolbarItem key={item.title}
          to={item.href}
          title={item.title}
          onClick={this.props.onClick} />
    });
  }

  render() {
    return (
      <div className={this.className({
          right: this.props.float === 'right',
          hidden: !this.props.visible
        })}>
        {this.renderChildren(this.props.items)}
      </div>
    );
  }
}
