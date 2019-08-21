import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';

class App extends Component {

  render() {
    return (
      <div style={{display: "flex",justifyContent: "center",flexDirection: "column",alignItems: "center"}}>
        <p>BIG DB TEST</p>
        <Switch>
        </Switch>
      </div>
    );
  }
}

export default connect()(App);
