import { connect } from 'react-redux'
import forge from 'node-forge';

import Content from '../components/content/Content.jsx'
import { newKey } from '../actions/actions.js'

const mapStateToProps = (state, ownProps) => {
  return {
    privateKey: state.privateKey,
    publicKey: state.publicKey,
    fingerprint: state.fingerprint,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      const pki = forge.pki;
      const keypair = pki.rsa.generateKeyPair({bits: 2048, e: 0x10001});

      dispatch(newKey(
        pki.privateKeyToPem(keypair.privateKey),
        pki.publicKeyToPem(keypair.publicKey),
        pki.getPublicKeyFingerprint(keypair.publicKey, {encoding: 'hex', delimiter: ':'})        
      ));
    }
  }
}

const ContentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Content)


export default ContentContainer