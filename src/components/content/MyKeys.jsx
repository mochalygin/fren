// Dependencies
import React from 'react';

// Styles
import './Content.scss';

class MyKeys extends React.Component {

  render() {
    return (
      <div className="myKeys">

        1. My address
        <input
          type="text"
          value={this.props.address}
          readOnly
        />
      </div>
    );
  }
}

export default MyKeys;
