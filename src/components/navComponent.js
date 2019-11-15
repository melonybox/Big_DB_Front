import React from 'react';
import {connect} from 'react-redux';
import {listSortTypeFunc, listSortOrderFunc, getUsersAmountFetch} from '../actions/action';

class NavComponent extends React.PureComponent {
  handleChangeType = (event) => {
    this.props.listSortTypeFunc(event.target.value)
    // this.props.getUsersAmountFetch(this.props.viewCount,0,this.props.listSortTypeFunc(event.target.value),this.props.listSortOrder)
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
          <select>
            <option value="ASC">A -> Z</option>
            <option value="DESC">Z -> A</option>
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
  listSortTypeFunc: (data) => dispatch(listSortTypeFunc(data)),
  listSortOrderFunc: (data) => dispatch(listSortOrderFunc(data)),
  getUsersAmountFetch: (amount,pageNum,type,order) => dispatch(getUsersAmountFetch(amount,pageNum,type,order))
})

export default connect(mapStateToProps, mapDispatchToProps)(NavComponent);
