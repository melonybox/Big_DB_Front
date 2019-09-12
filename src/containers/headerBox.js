import React, { Component } from 'react';
import HeaderComponent from '../components/headerComponent';

class HeaderBox extends Component {

  render() {
    return (
      <div style={{display: "flex",justifyContent: "center",flexDirection: "column",alignItems: "center"}}>
        <HeaderComponent />
      </div>
    );
  }
}

export default HeaderBox;
