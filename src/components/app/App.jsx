// Dependencies
import React from 'react';

// Components
import Header from '../header/Header.jsx';  
import ContentContainer from '../../containers/ContentContainer.js';
import Footer from '../footer/Footer.jsx';

// Styles
import './App.scss';

function App() {  
  return (
    <div className="site-wrapper">
      <Header />
      <ContentContainer />
      <Footer />
    </div>
  );
}

export default App;  