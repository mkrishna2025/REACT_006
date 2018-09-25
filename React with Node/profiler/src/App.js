import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import LoginScreen from './containers/login';
import HomeScreen from './containers/home';
import LocationScreen from './containers/location';
import MarkersScreen from './containers/location/markers.js';
import AutoCompleteScreen from './containers/location/autocomplete.js';
import MaterialScreen from './containers/materialdemo';
import MaterialAppBarScreen from './containers/materialdemo/appbardemo.js';
import CarouselScreen from './containers/carousel';
import ModalScreen from './containers/modaldemo';
import TabScreen from './containers/tabs';


import { Route, Switch } from 'react-router-dom';


class ContactUS extends Component {
  render() { return (<div> Welcome to Contact Us</div> ) }
}

class UnImplemented extends Component {
  render() { return (<div> Needs to Implement</div> ) }
}

class App extends Component {componnet
  render() {
    return (
      <Switch>
        <Route path="/" exact component={LoginScreen} />
        <Route path="/home" component={HomeScreen} />
        <Route path="/contactus" component={ContactUS} />
        <Route path="/location" component={LocationScreen} />
        <Route path="/markers" component={MarkersScreen} />
        <Route path="/search" component={AutoCompleteScreen} />
        <Route path="/material" component={MaterialScreen} />
        <Route path="/materialbar" component={MaterialAppBarScreen} />
        <Route path="/carousel" component={CarouselScreen} />
        <Route path="/modal" component={ModalScreen} />
        <Route path="/tab" component={TabScreen} />
        <Route path="/*" component={UnImplemented} />
      </Switch>
    );
  }
}

export default App;
