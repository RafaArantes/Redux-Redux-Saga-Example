const types = {
  TODO_ADD: 'ADD_TODO',
  TODO_DELETE: 'DELETE_TODO',
  TODO_EDIT: 'EDIT_TODO'
}

const INITIAL_STATE = []

const actions = dispatch => ({
    deleteTodo: id => dispatch({type: 'DELETE_TODO_REQUESTED', payload: {id}}),
    addTodo: todo => dispatch({type: 'ADD_TODO_REQUESTED', payload: todo }),
    editTodo: todo => dispatch({type: 'EDIT_TODO_REQUESTED', payload: todo })
  })

const todo = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.TODO_ADD:
      return [...state, action.payload]
    case types.TODO_DELETE:
        return state.filter(st => st.id !== action.payload.id)
    case types.TODO_EDIT:
      return state.map(todo => todo.id === action.payload.id ? action.payload : todo) 
    default:
      return state
  }
}

export {todo, actions};