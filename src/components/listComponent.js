import React from 'react';
import {connect} from 'react-redux';

class ListComponent extends React.PureComponent {

  render() {
    return (
      <ol>
      {this.props.loadedList.map((entry,idx) => {
        return (
          <li key={idx}>{entry.name_first} {entry.name_last}</li>
        )
      })}
      </ol>
    )
  }
}

const mapStateToProps = state => ({
  loadedList: state.loadedList
})

export default connect(mapStateToProps)(ListComponent);
