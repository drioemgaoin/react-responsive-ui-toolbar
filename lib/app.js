import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  withRouter
} from 'react-router-dom';

import Toolbar from './index';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const SignIn = () => (
  <div>
    <h2>Sign In</h2>
  </div>
);

const SignUp = () => (
  <div>
    <h2>Sign Up</h2>
  </div>
);

const Profile = () => (
  <div>
    <h2>Profile</h2>
  </div>
);

const SignOut = () => (
  <div>
    <h2>Sign Out</h2>
  </div>
);

const items = [
  { title: 'Brand', href: '/' },
  {
    name: 'unauth',
    visible: true,
    float: 'right',
    items: [
      { title: 'Sign In', href: '/signin' },
      { title: 'Sign Up', href: '/signup' }
    ]
  },
  {
    name: 'auth',
    visible: false,
    float: 'right',
    items: [
      { title: 'Profile', href: '/signout' },
      { title: 'Sign Out', href: '/profile' }
    ]
  }
];

const ToolbarWithRouter = withRouter(Toolbar);

ReactDOM.render(
  <Router>
    <div>
      <ToolbarWithRouter items={items} />

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
