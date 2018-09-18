import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route , Switch } from 'react-router-dom'; 

import LoginScreen from './containers/login';
import HomeScreen from './containers/home';
import ReservationsScreen from './containers/reservations';
import ContactUsScreen from './containers/contactus';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path='/' exact component={HomeScreen} ></Route>
        <Route path='/reservation' component={ReservationsScreen} ></Route>
        <Route path="/contact" component={ContactUsScreen} ></Route>
      </Switch>
    );
  }
}

export default App;
