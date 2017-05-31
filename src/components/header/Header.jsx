// Dependencies
import React from 'react';

// Styles
import './Header.scss';

class Header extends React.Component {
  render() {
    return (
      <header>
          <h1>Kamafren {this.props.address ? <small>({this.props.address})</small> : null}</h1>
      </header>
    );
  }
}

export default Header;  