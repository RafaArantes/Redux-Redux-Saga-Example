const types = {
  SET_LOAD: 'SET_LOAD'
}

const INITIAL_STATE = false

const actions = dispatch => ({
    setLoader: state => dispatch({type: 'SET_LOAD', payload: state})
  })

const loading = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_LOAD:
      return action.payload
    default:
      return state
  }
}

export {loading, actions};