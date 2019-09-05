import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {getUsersFetch} from './actions/action';

class App extends Component {

  componentDidMount = () => {
    this.props.getUsersFetch()
    console.log("App Component Run")
  }

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

const mapDispatchToProps = dispatch => ({
  getUsersFetch: () => dispatch(getUsersFetch())
})

export default connect(null, mapDispatchToProps)(App);
