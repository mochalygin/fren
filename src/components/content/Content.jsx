// Dependencies
import React from 'react';
import RegisterKey from './RegisterKey.jsx'
import MyKeys from './MyKeys.jsx'

// Styles
import './Content.scss';

class Content extends React.Component {
  render() {
    return (
      <div className="content">
        {this.props.address
          ? <MyKeys address={this.props.address} />
          : <RegisterKey generateNewKey={this.props.generateNewKey} />
        }
      </div>
    );
  }
}

export default Content;
