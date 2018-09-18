import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Route, Switch } from 'react-router-dom';

class D1 extends Component {
  render() { return (<div> Welcome to Component D1</div> ) }
}
class D2 extends Component {
  render() { return (<div> Welcome to Component D2</div> ) }
}
class D3 extends Component {
  render() { return (<div> Welcome to Component D3</div> ) }
}
class D4 extends Component {
  render() { return (<div> Welcome to Component D4</div> ) }
}
class D5 extends Component {
  render() { return (<div> Welcome to Component D5</div> ) }
}
class D6 extends Component {
  render() { return (<div> Welcome to Component D6</div> ) }
}
class D7 extends Component {
  render() { return (<div> Welcome to Component D7</div> ) }
}
class D8 extends Component {
  render() { return (<div> Welcome to Component D8</div> ) }
}
class D9 extends Component {
  render() { return (<div> Welcome to Component D9</div> ) }
}
class D10 extends Component {
  render() { return (<div> Welcome to Component D10</div> ) }
}

// Scenario 1 - Basic Routing
class App extends Component {
  render() {
    return (
      <div>
        <Route path="/r1" component={D1} />
        <Route path="/r2" component={D2} />
        <Route path="/r2" component={D5} />
        <Route path="/r2" component={D6} />
        <Route path="/r3" component={D3} />
        <Route path="/r4" component={D4} />
      </div>
    );
  }
}

// Scenario 2 - Default Routing - Useful for creating default page like NeedToImplement
class App2 extends Component {
  render() {
    return (
      <div>
        <Route path="/r1" component={D1} />
        <Route path="/r2" component={D2} />
        <Route path="/r2" component={D5} />
        <Route path="/r2" component={D6} />
        <Route path="/r3" component={D3} />
        <Route path="/r4" component={D4} />
        <Route path="/*" component={D9} />
      </div>
    );
  }
}

// Scenario 3 - Sub Routing
class App3 extends Component {
  render() {
    return (
      <div>
        <Route path="/r1" exact component={D1} />
        <Route path="/r1/r5" component={D7} />
        <Route path="/r1/r6" component={D8} />
        <Route path="/r2" component={D2} />
        <Route path="/r2" component={D5} />
        <Route path="/r2" component={D6} />
        <Route path="/r3" component={D3} />
        <Route path="/r4" component={D4} />
      </div>
    );
  }
}

// Scenario 4 - Adding Switch which loads only component
class App4 extends Component {
  render() {
    return (
      <Switch>
        <Route path="/r1" exact component={D1} />
        <Route path="/r1/r5" component={D7} />
        <Route path="/r1/r6" component={D8} />
        <Route path="/r2" component={D2} />
        <Route path="/r2" component={D5} />
        <Route path="/r2" component={D6} />
        <Route path="/r3" component={D3} />
        <Route path="/r4" component={D4} />
        <Route path="/*" component={D9} />
      </Switch>
    );
  }
}

export default App4;
