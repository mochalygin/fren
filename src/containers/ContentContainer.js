import { connect } from 'react-redux'

import Content from '../components/content/Content.jsx'
import { gotPrivateKey } from '../actions/actions.js'
import wallet from 'ethereumjs-wallet'
import store from 'store'

const mapStateToProps = (state, ownProps) => {
  return {
    address: state.key ? state.key.getAddressString() : null,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    generateNewKey: generateNewKey(dispatch)
  }
}

const ContentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Content)


export default ContentContainer


//functions

const generateNewKey = (dispatch) => {
  return () => {
    const key = wallet.generate()
    store.set('key', key.getPrivateKey().toString('hex'))
    dispatch(gotPrivateKey(wallet.fromPrivateKey(Buffer.from(store.get('key'), 'hex'))));
  }
}
