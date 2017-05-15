// Dependencies
import React from 'react';

// Styles
import './Content.scss';

class Content extends React.Component {

  render() {
    return (
      <div className="content">

        Fren fingerprint
        <input
          type="text"
          value={this.props.fingerprint}
          readOnly
        />

        Fren publicKey
        <input
          type="text"
          value={this.props.publicKey}
          readOnly
        />

        Fren privateKey
        <input
          type="text"
          value={this.props.privateKey}
          readOnly
        />

        <input
          type="button"
          value="Generate!"
          onClick={this.props.onClick}
        />

      </div>
    );
  }
}

export default Content;
