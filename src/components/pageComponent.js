import React from 'react';
import {connect} from 'react-redux';
import {getUsersAmountFetch} from '../actions/action';

class PageComponent extends React.PureComponent {

  handleClick = (amount,pageNum, event) => {
    this.props.getUsersAmountFetch(amount,pageNum)
  }

  render() {
    return (
      <div style={{display: "flex",flexDirection: "row"}}>
        {[...Array(this.props.totalPages)].map((e, i) => {
          return <p onClick={this.handleClick.bind(this, this.props.viewCount,i)} style={{cursor: "pointer", margin: "0.5rem"}}>{i+1}</p>
        })}
      </div>
      // <div style={{display: "flex",flexDirection: "row"}}>
        // {[...Array(this.props.totalPages)].map((e, i) => {
        //   return
        //   <p onClick={this.handleClick.bind(this, this.props.viewCount,(this.props.pageNum-1))} style={{cursor: "pointer", margin: "0.5rem"}}>{this.props.pageNum}</p> currPage={this.props.currPage} />
        // })}
      // </div>
      // this.props.currPage === this.props.pageNum ?
      // <p style={{cursor: "pointer", margin: "0.5rem"}}>{this.props.pageNum}</p>
      // :
      // <p onClick={this.handleClick.bind(this, this.props.viewCount,(this.props.pageNum-1))} style={{cursor: "pointer", margin: "0.5rem"}}>{this.props.pageNum}</p>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getUsersAmountFetch: (amount,pageNum) => dispatch(getUsersAmountFetch(amount,pageNum))
})

export default connect(null,mapDispatchToProps)(PageComponent);
