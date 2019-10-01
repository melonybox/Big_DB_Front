import React, { Component } from 'react';
import ListComponent from '../components/listComponent';

class ListBox extends Component {


  render() {
    return (
      <div style={{display: "flex",justifyContent: "center",flexDirection: "column",alignItems: "center"}}>
        <ListComponent />
          <div style={{display: "flex",flexDirection: "row"}}>
            {[...Array(5)].map((e, i) => {
              return <p key={i}>{i+1}</p>
            })}
          </div>
      </div>
    );
  }
}

export default ListBox;
