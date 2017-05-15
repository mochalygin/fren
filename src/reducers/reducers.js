import { NEW_KEY } from '../actions/actions.js'

const initialState = {
  privateKey: null,
  publicKey: null,
  fingerprint: null
}

function frenApp(state = initialState, action) {
  switch (action.type) {
    case NEW_KEY:
      return Object.assign({}, state, {
        privateKey: action.privateKey,
        publicKey: action.publicKey,
        fingerprint: action.fingerprint
      })
    default:
      return state
  }
}

export default frenApp