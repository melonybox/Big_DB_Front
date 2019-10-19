import React, { Component } from 'react';
import {connect} from 'react-redux';
import ListComponent from '../components/listComponent';
import PageComponent from '../components/pageComponent';

class ListBox extends Component {
  state = {
    currPage: this.props.currPage
  }


  render() {
    return (
      <div style={{display: "flex",justifyContent: "center",flexDirection: "column",alignItems: "center"}}>
        <ListComponent />
        <PageComponent totalPages={this.props.totalPages} viewCount={this.props.viewCount} currPage={this.props.currPage}/>
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
