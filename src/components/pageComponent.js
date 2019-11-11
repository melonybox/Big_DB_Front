import React from 'react';
import {connect} from 'react-redux';
import {getUsersAmountFetch} from '../actions/action';

class PageComponent extends React.PureComponent {

  handleClick = (amount,pageNum,type,order, event) => {
    this.props.getUsersAmountFetch(amount,pageNum,type,order)
  }

  render() {
    return (
      (this.props.currPage + 1) === this.props.pageNum
      ?
      <p style={{margin: "0.5rem"}}>{this.props.pageNum}</p>
      :
      <p onClick={this.handleClick.bind(this, this.props.viewCount,(this.props.pageNum-1),this.props.listSortType,this.props.listSortOrder)} style={{cursor: "pointer", margin: "0.5rem", fontWeight: "bold"}}>{this.props.pageNum}</p>
    )
  }
}

const mapStateToProps = state => ({
  currPage: state.currPage,
  listSortType: state.listSortType,
  listSortOrder: state.listSortOrder
})

const mapDispatchToProps = dispatch => ({
  getUsersAmountFetch: (amount,pageNum,type,order) => dispatch(getUsersAmountFetch(amount,pageNum,type,order))
})

export default connect(mapStateToProps,mapDispatchToProps)(PageComponent);
