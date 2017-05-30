// Dependencies
import React from 'react';

// Styles
import './Content.scss';

class RegisterKey extends React.Component {

  render() {
    return (
      <div className="registerKey">

        1. Load existed privateKey{' '}
        <input
          type="text"
          readOnly
        />
        <input
          type="button"
          value="Load"
          onClick={this.props.onClick}
        />
        <br/><br/>
        2. Or generate new privateKey{' '}
        <input
          type="button"
          value="Generate!"
          onClick={this.props.generateNewKey}
        />

      </div>
    );
  }
}

export default RegisterKey;
