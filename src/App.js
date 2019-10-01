import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {getUsersFetch, getUsersAmountFetch} from './actions/action';
import HeaderBox from './containers/headerBox';
import ListBox from './containers/listBox';


class App extends Component {

  componentDidMount = () => {
    // this.props.getUsersFetch()
    console.log("App Component Run")
    this.props.getUsersAmountFetch(this.props.viewCount)
  }

  render() {
    return (
      <div>
        <HeaderBox />
        <ListBox />
        <Switch>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  viewCount: state.viewCount
})

const mapDispatchToProps = dispatch => ({
  getUsersFetch: () => dispatch(getUsersFetch()),
  getUsersAmountFetch: (amount) => dispatch(getUsersAmountFetch(amount))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
