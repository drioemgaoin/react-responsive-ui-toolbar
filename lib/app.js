import './toolbar';

import React from 'react';
import ReactDOM from 'react-dom';

import { Toolbar, ToolbarItem, ToolbarGroup } from './index'

ReactDOM.render(
  <Toolbar>
    <ToolbarGroup float='right'>
      <ToolbarItem>Sign In</ToolbarItem>
      <ToolbarItem>Sign Up</ToolbarItem>
    </ToolbarGroup>
    <ToolbarGroup float='right'>
      <ToolbarItem>Profile</ToolbarItem>
      <ToolbarItem>Sign Out</ToolbarItem>
    </ToolbarGroup>
  </Toolbar>,
document.getElementById('main'));
