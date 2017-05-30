import { NEW_KEY } from '../actions/actions.js'

const initialState = {
  key: null,
}

function frenApp(state = initialState, action) {
  switch (action.type) {
    case NEW_KEY:
      return Object.assign({}, state, {
        key: action.key,
      })
    default:
      return state
  }
}

export default frenApp