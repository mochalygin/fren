// Dependencies
import React from 'react';

// Styles
import './Content.scss';

class MyKeys extends React.Component {

  render() {
    return (
      <div className="myKeys">

        1. privateKey
        <input
          type="text"
          value={this.props.privateKey}
          readOnly
        />
      </div>
    );
  }
}

export default MyKeys;
