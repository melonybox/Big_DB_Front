const initialState = {
  loadedList: [],
  viewCount: 10,
  currPage: 0,
  pageList: [],
  listSortType: "name_first",
  listSortOrder: "ASC"
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
      case 'FILL_LIST':
        return {...state, loadedList: action.payload.loadedList,
                          viewCount: action.payload.viewCount,
                          currPage: action.payload.currPage,
                          pageList: action.payload.pageList,
                          listSortType: action.payload.listSortType,
                          listSortOrder: action.payload.listSortOrder}
      case 'PAGE_NUM_CHANGE':
        return {...state, currPage: action.payload}
      default:
        return state;
  }
}
