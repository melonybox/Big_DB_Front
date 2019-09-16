const initialState = {
  loadedList: [],
  viewCount: 10,
  currentPage: 0
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
      case 'FILL_LIST':
        return {...state, loadedList: action.payload}
      default:
        return state;
  }
}
