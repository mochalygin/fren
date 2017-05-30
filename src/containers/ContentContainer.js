import { connect } from 'react-redux'

import Content from '../components/content/Content.jsx'
import { newKey } from '../actions/actions.js'
import wallet from 'ethereumjs-wallet'

const mapStateToProps = (state, ownProps) => {
  return {
    address: state.key ? state.key.getAddressString() : null,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    generateNewKey: () => {
      dispatch(newKey(wallet.generate()));
    }
  }
}

const ContentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Content)


export default ContentContainer