import React from 'react';
import {connect} from 'react-redux';

class NavComponent extends React.PureComponent {

  render() {
    return (
      <div style={{display: "flex",justifyContent: "center",flexDirection: "row",alignItems: "center"}}>
        <p>Hi</p>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  listSortType: state.listSortType,
  listSortOrder: state.listSortOrder
})

export default connect(mapStateToProps)(NavComponent);
