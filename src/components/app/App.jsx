// Dependencies
import React from 'react';

// Components
import HeaderContainer from '../../containers/HeaderContainer.js';
import ContentContainer from '../../containers/ContentContainer.js';
import Footer from '../footer/Footer.jsx';

// Styles
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="site-wrapper">
        <HeaderContainer />
        <ContentContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
