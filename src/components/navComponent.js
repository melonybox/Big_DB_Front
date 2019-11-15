import React from 'react';
import {connect} from 'react-redux';
import {getUsersAmountFetch} from '../actions/action';

class NavComponent extends React.PureComponent {
  handleChangeType = (event) => {
    this.props.getUsersAmountFetch(this.props.viewCount,0,event.target.value,this.props.listSortOrder)
  }

  handleChangeOrder = (event) => {
    this.props.getUsersAmountFetch(this.props.viewCount,0,this.props.listSortType,event.target.value)
  }

  handleChangeCount = (event) => {
    this.props.getUsersAmountFetch(event.target.value,0,this.props.listSortType,this.props.listSortOrder)
  }

  render() {
    return (
      <div style={{display: "flex",justifyContent: "center",flexDirection: "row",alignItems: "center"}}>
        <div style={{display: "flex",justifyContent: "center",flexDirection: "row",alignItems: "center"}}>
          <p>Sort By:</p>
          <select onChange={this.handleChangeType}>
            <option value="name_first">First Name</option>
            <option value="name_last">Last Name</option>
          </select>
        </div>
        <div style={{display: "flex",justifyContent: "center",flexDirection: "row",alignItems: "center"}}>
          <p>Sort Order:</p>
          <select onChange={this.handleChangeOrder}>
            <option value="ASC">A -> Z</option>
            <option value="DESC">Z -> A</option>
          </select>
        </div>
        <div style={{display: "flex",justifyContent: "center",flexDirection: "row",alignItems: "center"}}>
          <p>View Count:</p>
          <select onChange={this.handleChangeCount}>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  viewCount: state.viewCount,
  listSortType: state.listSortType,
  listSortOrder: state.listSortOrder
})

const mapDispatchToProps = dispatch => ({
  getUsersAmountFetch: (amount,pageNum,type,order) => dispatch(getUsersAmountFetch(amount,pageNum,type,order))
})

export default connect(mapStateToProps, mapDispatchToProps)(NavComponent);
