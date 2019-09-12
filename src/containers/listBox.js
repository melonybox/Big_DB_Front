import React, { Component } from 'react';
import ListComponent from '../components/listComponent';

class ListBox extends Component {

  render() {
    return (
      <div style={{display: "flex",justifyContent: "center",flexDirection: "column",alignItems: "center"}}>
        <ListComponent />
      </div>
    );
  }
}

export default ListBox;
