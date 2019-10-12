import React from 'react';

class PageComponent extends React.PureComponent {

  handleClick = event => {
    console.log("Hi")
  }

  render() {
    return (
      <p onClick={this.handleClick} style={{cursor: "pointer", margin: "0.5rem"}}>{this.props.pageNum}</p>
    )
  }
}

export default PageComponent;
