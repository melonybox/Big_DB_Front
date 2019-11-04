import React, { Component } from 'react';
import {connect} from 'react-redux';
import ListComponent from '../components/listComponent';
import PageComponent from '../components/pageComponent';

class ListBox extends Component {

  render() {
    return (
      <div style={{display: "flex",justifyContent: "center",flexDirection: "column",alignItems: "center"}}>
        <ListComponent />
          <div style={{display: "flex",flexDirection: "row"}}>
            {this.props.pageList.map((i) => {
              return <PageComponent key={i} pageNum={i} viewCount={this.props.viewCount} />
            })}
          </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  viewCount: state.viewCount,
  pageList: state.pageList
})

export default connect(mapStateToProps)(ListBox);
