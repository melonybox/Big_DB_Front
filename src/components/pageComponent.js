import React from 'react';
import {connect} from 'react-redux';
import {getUsersAmountFetch} from '../actions/action';

class PageComponent extends React.PureComponent {

  handleClick = (amount,pageNum, event) => {
    this.props.getUsersAmountFetch(amount,pageNum)
  }

  render() {
    return (
      (this.props.currPage + 1) === this.props.pageNum
      ?
      <p style={{margin: "0.5rem"}}>{this.props.pageNum}</p>
      :
      <p onClick={this.handleClick.bind(this, this.props.viewCount,(this.props.pageNum-1))} style={{cursor: "pointer", margin: "0.5rem", fontWeight: "bold"}}>{this.props.pageNum}</p>
    )
  }
}

const mapStateToProps = state => ({
  currPage: state.currPage
})

const mapDispatchToProps = dispatch => ({
  getUsersAmountFetch: (amount,pageNum) => dispatch(getUsersAmountFetch(amount,pageNum))
})

export default connect(mapStateToProps,mapDispatchToProps)(PageComponent);
