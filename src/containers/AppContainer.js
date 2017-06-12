import { connect } from 'react-redux'

import App from '../components/app/App.jsx'
import store from 'store'
import { gotPrivateKey } from '../actions/actions.js'
import wallet from 'ethereumjs-wallet'

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  init(dispatch) // is it redux-way to init app?
  return {}
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)


export default AppContainer


//functions

const init =  (dispatch) => {
  if (store.get('key')) {
    dispatch(gotPrivateKey(wallet.fromPrivateKey(Buffer.from(store.get('key'), 'hex'))));
  }
}
