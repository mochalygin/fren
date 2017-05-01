// Dependencies
import React from 'react';
import md5 from 'md5';
import forge from 'node-forge';

// Styles
import './Content.scss';

class Content extends React.Component {

  constructor(props) {
    super(props);
    this.handlePublicKeyChange = this.handlePublicKeyChange.bind(this);
    this.handlePublicKeyClick = this.handlePublicKeyClick.bind(this);
    this.handleGenerateButtonClick = this.handleGenerateButtonClick.bind(this);

    this.state = {
      publicKeyFingerprint: 'Setup public key',
      publicKey: 'Setup public key',
      privateKey: '',
    };
  }

  handlePublicKeyChange(e) {
    this.setState({
      publicKey: e.target.value,
      publicKeyHash: md5(e.target.value)
    });
  }

  handlePublicKeyClick() {
    this.setState({
      publicKey: '',
    });
  }

  handleGenerateButtonClick() {
    var pki = forge.pki;
    var keypair = pki.rsa.generateKeyPair({bits: 2048, e: 0x10001});

    this.setState({publicKeyFingerprint: pki.getPublicKeyFingerprint(keypair.publicKey, {encoding: 'hex', delimiter: ':'})});
    this.setState({publicKey: pki.publicKeyToPem(keypair.publicKey)});
    this.setState({privateKey: pki.privateKeyToPem(keypair.privateKey)});

  }

  render() {
    return (
      <div className="content">

        Fren fingerprint
        <input
          type="text"
          value={this.state.publicKeyFingerprint}
          readOnly
        />

        Fren PublicKey
        <input
          type="text"
          value={this.state.publicKey}
          onChange={this.handlePublicKeyChange}
          onFocus={this.handlePublicKeyClick}
        />

        Fren PrivateKey
        <input
          type="text"
          value={this.state.privateKey}
          onChange={this.handlePrivateKeyChange}
        />

        <input
          type="button"
          value="Generate!"
          onClick={this.handleGenerateButtonClick}
        />


      </div>
    );
  }
}

export default Content;
