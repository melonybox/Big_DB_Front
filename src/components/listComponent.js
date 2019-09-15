import React from 'react';
import {connect} from 'react-redux';

class ListComponent extends React.PureComponent {

  render() {
    return (
      <ol>
      {this.props.loadedList.map((entry,idx) => {
        return (
          <li key={idx}>
            <p>{entry.name_first} {entry.name_last}</p>
          </li>
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
