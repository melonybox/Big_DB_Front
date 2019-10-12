import React from 'react';
import {connect} from 'react-redux';
import {pageNumChange} from '../actions/action';

class PageComponent extends React.PureComponent {

  handleClick = (pageNum, event) => {
    this.props.pageNumChange(pageNum)
  }

  render() {
    return (
      <p onClick={this.handleClick.bind(this, this.props.pageNum)} style={{cursor: "pointer", margin: "0.5rem"}}>{this.props.pageNum}</p>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  pageNumChange: (pageNum) => dispatch(pageNumChange(pageNum))
})

export default connect(null,mapDispatchToProps)(PageComponent);
