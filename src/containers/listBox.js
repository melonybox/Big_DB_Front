import React, { Component } from 'react';
import {connect} from 'react-redux';
import ListComponent from '../components/listComponent';
import PageComponent from '../components/pageComponent';

class ListBox extends Component {

  handleHi = () => {

    return <div style={{display: "flex",flexDirection: "row"}}>
      {[...Array(5)].map((e, i) => {
        if (this.props.currPage < 3) {
          return <p>{i+1}</p>
        } else if (this.props.currPage+3 > this.props.totalPages) {
          return <p>{((this.props.totalPages-5)+i)+1}</p>
        } else {
          return <p>{((this.props.currPage-2)+i)+1}</p>
        }
      })}
    </div>
  }


  render() {
    return (
      <div style={{display: "flex",justifyContent: "center",flexDirection: "column",alignItems: "center"}}>
        <ListComponent />
          {this.handleHi()}
          <div style={{display: "flex",flexDirection: "row"}}>
            {[...Array(this.props.totalPages)].map((e, i) => {
              return <PageComponent key={i} pageNum={i+1} viewCount={this.props.viewCount} />
            })}
          </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  viewCount: state.viewCount,
  totalPages: state.totalPages,
  currPage: state.currPage
})

export default connect(mapStateToProps)(ListBox);
