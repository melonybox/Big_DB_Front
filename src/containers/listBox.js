import React, { Component } from 'react';
import {connect} from 'react-redux';
import ListComponent from '../components/listComponent';
import PageComponent from '../components/pageComponent';

class ListBox extends Component {

  handleHi = () => {
    let newArray = Array(5).map((e) => {
      debugger
      return e = this.props.currPage+1
    })

    return <div style={{display: "flex",flexDirection: "row"}}>
      {[...newArray].map((e, i) => {
        return <p>{e} | {i}</p>
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
