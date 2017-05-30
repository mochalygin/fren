// Dependencies
import React from 'react';

// Styles
import './Header.scss';

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>Kamafren</h1>
        {this.props.address ? this.props.address : null}
      </header>
    );
  }
}

export default Header;  