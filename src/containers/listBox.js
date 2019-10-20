import React, { Component } from 'react';
import {connect} from 'react-redux';
import ListComponent from '../components/listComponent';
import PageComponent from '../components/pageComponent';

class ListBox extends Component {

  handleHi = () => {
    return <div style={{display: "flex",flexDirection: "row"}}>
      {[...Array(this.props.totalPages)].map((e, i) => {
        return <PageComponent key={i} pageNum={i+1} viewCount={this.props.viewCount} />
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
  totalPages: state.totalPages
})

export default connect(mapStateToProps)(ListBox);
