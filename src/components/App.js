import React, { Component } from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';

class App extends Component {
  render() {
    return (
      <div className="app">
        <NavBar />
        <div>{/* <Home />
          <Footer /> */}</div>
      </div>
    );
  }
}

export default App;
