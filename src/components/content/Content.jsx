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
        {this.props.privateKey
          ? <MyKeys privateKey={this.props.privateKey} />
          : <RegisterKey onClick={this.props.onClick} />
        }
      </div>
    );
  }
}

export default Content;
