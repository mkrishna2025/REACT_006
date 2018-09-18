import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Route, Switch } from 'react-router-dom';

class Login extends Component {
  render() { return (<div> Welcome to Login</div> ) }
}

class Home extends Component {
  render() { return (<div> Welcome to Home</div> ) }
}

class ContactUS extends Component {
  render() { return (<div> Welcome to Contact Us</div> ) }
}

class UnImplemented extends Component {
  render() { return (<div> Needs to Implement</div> ) }
}

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/contactus" component={ContactUS} />
        <Route path="/*" component={UnImplemented} />
      </Switch>
    );
  }
}

export default App;
