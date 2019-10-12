import React from 'react';
import {connect} from 'react-redux';
import {getUsersAmountFetch} from '../actions/action';

class PageComponent extends React.PureComponent {

  handleClick = (amount,pageNum, event) => {
    this.props.getUsersAmountFetch(amount,pageNum)
  }

  render() {
    return (
      <p onClick={this.handleClick.bind(this, this.props.viewCount,(this.props.pageNum-1))} style={{cursor: "pointer", margin: "0.5rem"}}>{this.props.pageNum}</p>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getUsersAmountFetch: (amount,pageNum) => dispatch(getUsersAmountFetch(amount,pageNum))
})

export default connect(null,mapDispatchToProps)(PageComponent);
