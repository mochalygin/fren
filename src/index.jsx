import React from 'react';  
import ReactDOM from 'react-dom';  
import { AppContainer } from 'react-hot-loader'; // required

import { createStore } from 'redux'
import frenApp from './reducers/reducers.js'
import { Provider } from 'react-redux'
let store = createStore(frenApp)

import FrenAppContainer from './containers/AppContainer.js';

import './index.scss';

function renderApp() {  
  // We now render `<AppContainer>` instead of our App component. 
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <FrenAppContainer />
      </Provider>
    </AppContainer>,
    document.getElementById('main')
  );
}

renderApp(); // Renders App on init

if (module.hot) {  
  // Renders App every time a change in code happens.
  module.hot.accept('./components/app/App.jsx', renderApp);
}