const initialState = {
  loadedList: []
}

export default function reducer(state = initialState, action) {
    console.log(action)
    switch (action.type) {
      case 'FILL_LIST':
        return {...state, loadedList: action.payload}
      default:
        return state;
    }
  }
