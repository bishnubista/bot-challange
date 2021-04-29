import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import reducers from './reducers';
import App from './App';
import { GlobalStyled } from './styles/globalStyle';

const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
// const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyled />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
