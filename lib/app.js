import './toolbar';

import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  IndexRoute,
  Switch
} from 'react-router-dom';

import { Toolbar, ToolbarItem, ToolbarGroup } from './index'

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const SignIn = () => (
  <div>
    <h2>Sign In</h2>
  </div>
)

const SignUp = () => (
  <div>
    <h2>Sign Up</h2>
  </div>
)

const Profile = () => (
  <div>
    <h2>Profile</h2>
  </div>
)

const SignOut = () => (
  <div>
    <h2>Sign Out</h2>
  </div>
)

ReactDOM.render(
  <Router>
    <div>
      <Toolbar>
        <ToolbarGroup float='right'>
          <ToolbarItem to='/signin'>Sign In</ToolbarItem>
          <ToolbarItem to='/signup'>Sign Up</ToolbarItem>
        </ToolbarGroup>
        <ToolbarGroup float='right'>
          <ToolbarItem to='/profile'>Profile</ToolbarItem>
          <ToolbarItem to='/signout'>Sign Out</ToolbarItem>
        </ToolbarGroup>
      </Toolbar>

      <div style={{position: 'absolute', top: '56px', padding: '15px', textAlign: 'center', width: '100%'}}>
        <Route exact path='/' component={ Home } />
        <Route name='signin' path="/signin" component={SignIn}/>
        <Route name='signup' path="/signup" component={SignUp}/>
        <Route name='profile' path="/profile" component={Profile}/>
        <Route name='signout' path="/signout" component={SignOut}/>
      </div>

    </div>

  </Router>,
document.getElementById('main'));
