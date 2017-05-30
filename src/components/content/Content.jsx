// Dependencies
import React from 'react';
import RegisterKey from './RegisterKey.jsx'

// Styles
import './Content.scss';

class Content extends React.Component {
  render() {
    return (
      <div className="content">
        {this.props.address
          ? null : <RegisterKey generateNewKey={this.props.generateNewKey} />
        }
      </div>
    );
  }
}

export default Content;
