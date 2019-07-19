const types = {
  USER_RENAME: 'RENAME_USER',
  USER_EDIT: 'EDIT_AGE'
}

const INITIAL_STATE = {
  name: '',
  age: 12
}

const actions = dispatch => ({
    editAge:    age  => dispatch({type: types.USER_EDIT, payload: {age}}),
    renameUser: name => dispatch({type: types.USER_RENAME, payload: {name}})
  })

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.RENAME:
      return {...state, name: action.payload.name}
    case types.EDIT:
      return {...state, age: action.payload.age}
    default:
      return state  
  }
}

export {user, actions};