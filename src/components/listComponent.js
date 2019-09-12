import React from 'react';
import {connect} from 'react-redux';

class ListComponent extends React.PureComponent {

  render() {
    return (
      <div>
      {this.props.loadedList.map((entry,idx) => {
        return (
          <div key={idx}>
            <p>{entry.name_first} {entry.name_last}</p>
          </div>
        )
      })}
      </div>
    )
  }

}

const mapStateToProps = state => ({
  loadedList: state.loadedList
})

export default connect(mapStateToProps)(ListComponent);
