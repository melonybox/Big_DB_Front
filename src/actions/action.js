export const getUsersFetch = () => {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/users", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
      .then(resp => resp.json())
      .then(data => {
        if (data.errors) {
          alert(data.errors)
        } else {
          dispatch(fillList(data))
        }
    })
  }
}

export const getUsersAmountFetch = (amount,page,type,order) => {
  return dispatch => {
    return fetch(`http://localhost:3000/api/v1/userlist/${amount}/${page}/${type}/${order}`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
      .then(resp => resp.json())
      .then(data => {
        if (data.errors) {
          alert(data.errors)
        } else {
          dispatch(fillList(data))
        }
    })
  }
}

export const fillList = data => ({
    type: 'FILL_LIST',
    payload: data
})

export const pageNumChange = data => ({
    type: 'PAGE_NUM_CHANGE',
    payload: data
})

export const listSortTypeFunc = data => ({
    type: 'LIST_SORT_TYPE_FUNC',
    payload: data
})

export const listSortOrderFunc = data => ({
    type: 'LIST_SORT_ORDER_FUNC',
    payload: data
})
