import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {getUsersFetch, getUsersAmountFetch} from './actions/action';
import HeaderBox from './containers/headerBox';
import ListBox from './containers/listBox';
import NavBox from './containers/navBox';


class App extends Component {

  componentDidMount = () => {
    // this.props.getUsersFetch()
    console.log("App Component Run")
    this.props.getUsersAmountFetch(this.props.viewCount,this.props.currPage,this.props.listSortType,this.props.listSortOrder)
  }

  render() {
    return (
      <div>
        <HeaderBox />
        <NavBox />
        <ListBox />
        <Switch>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  viewCount: state.viewCount,
  currPage: state.currPage,
  listSortType: state.listSortType,
  listSortOrder: state.listSortOrder
})

const mapDispatchToProps = dispatch => ({
  getUsersFetch: () => dispatch(getUsersFetch()),
  getUsersAmountFetch: (amount,page,type,order) => dispatch(getUsersAmountFetch(amount,page,type,order))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
