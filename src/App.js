import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {getUsersFetch} from './actions/action';
import HeaderBox from './containers/headerBox';


class App extends Component {

  componentDidMount = () => {
    this.props.getUsersFetch()
    console.log("App Component Run")
  }

  render() {
    return (
      <div>
        <HeaderBox />
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
