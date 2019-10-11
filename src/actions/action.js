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

export const getUsersAmountFetch = (amount,page) => {
  return dispatch => {
    return fetch(`http://localhost:3000/api/v1/userlist/${amount}/${page}`, {
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
