const initialState = {
  loadedList: [],
  totalPages: 0,
  viewCount: 10,
  currPage: 0,
  pageList: [],
  listSortType: "name_first",
  listSortOrder: "ASC"
}

export default function reducer(state = initialState, action) {
  console.log("hi")
    switch (action.type) {
      case 'FILL_LIST':
        return {...state, loadedList: action.payload[0], totalPages: action.payload[1], currPage: action.payload[2], pageList: action.payload[3]}
      case 'PAGE_NUM_CHANGE':
        return {...state, currPage: action.payload}
      case 'LIST_SORT_TYPE_FUNC':
        return {...state, listSortType: action.payload}
      case 'LIST_SORT_ORDER_FUNC':
        return {...state, listSortOrder: action.payload}
      default:
        return state;
  }
}
