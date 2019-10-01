const initialState = {
  loadedList: [],
  totalPages: 0,
  viewCount: 10,
  currentPage: 0
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
      case 'FILL_LIST':
        return {...state, loadedList: action.payload[0], totalPages: action.payload[1]}
      default:
        return state;
  }
}
