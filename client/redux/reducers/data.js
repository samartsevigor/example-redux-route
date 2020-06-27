import axios from 'axios'

const initialState = {
  user: {},
  users: []
}
export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return { ...state, user: action.user }
    case 'ADD_USERS':
      return { ...state, users: action.users }
    default:
      return state
  }
}

export function addUser(id) {
 return (dispatch) => {
    axios.get(`http://jsonplaceholder.typicode.com/users/${id}`)
     .then(({data}) => {
       return dispatch({type: 'ADD_USER', user: data})
     })
 }
}

export function setUsers() {
  return (dispatch) => {
    axios.get(`http://jsonplaceholder.typicode.com/users`)
      .then(({data}) => {
        return dispatch({type: 'ADD_USERS', users: data})
      })
  }
}
