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

    this.state = {
      publicKeyHash: 'Setup public key',
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
    var rsa = forge.pki.rsa;

    // generate an RSA key pair synchronously
    // *NOT RECOMMENDED* -- can be significantly slower than async and will not
    // use native APIs if available.
    var keypair = rsa.generateKeyPair({bits: 2048, e: 0x10001});

    console.log(keypair);
  }

  render() {
    return (
      <div className="content">

        Fren hash
        <input
          type="text"
          value={this.state.publicKeyHash}
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
