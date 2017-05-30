import { connect } from 'react-redux'

import Header from '../components/header/Header.jsx'

const mapStateToProps = (state, ownProps) => {
  return {
    address: state.key ? state.key.getAddressString() : null,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)


export default HeaderContainer
