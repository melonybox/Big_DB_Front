import React, { Component } from 'react';
import ListComponent from '../components/listComponent';
import PageComponent from '../components/pageComponent';

class ListBox extends Component {


  render() {
    return (
      <div style={{display: "flex",justifyContent: "center",flexDirection: "column",alignItems: "center"}}>
        <ListComponent />
          <div style={{display: "flex",flexDirection: "row"}}>
            {[...Array(5)].map((e, i) => {
              return <PageComponent key={i} pageNum={i+1} />
            })}
          </div>
      </div>
    );
  }
}

export default ListBox;
